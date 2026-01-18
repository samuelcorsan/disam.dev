export type CodingData = {
  seconds: number;
  languages: { name: string; percent: number; time: string }[];
};

export type TimeRange = "today" | "week" | "month";

export type AllCodingData = Record<TimeRange, CodingData>;

async function fetchWakaTime(url: string, apiKey: string) {
  const auth = Buffer.from(`${apiKey}:`).toString("base64");
  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WakaTime API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getAllCodingData(): Promise<AllCodingData> {
  const API_KEY = process.env.WAKATIME_API_KEY;
  if (!API_KEY) {
    console.error("WAKATIME_API_KEY is not set");
    return {
      today: { seconds: 0, languages: [] },
      week: { seconds: 0, languages: [] },
      month: { seconds: 0, languages: [] },
    };
  }

  const date = new Date().toISOString().split("T")[0];
  
  // URLs
  const todayUrl = `https://wakatime.com/api/v1/users/current/summaries?start=${date}&end=${date}&timezone=Europe/Madrid`;
  const weekUrl = `https://wakatime.com/api/v1/users/current/stats/last_7_days`;
  const monthUrl = `https://wakatime.com/api/v1/users/current/stats/last_30_days`;

  try {
    const [todayRes, weekRes, monthRes] = await Promise.all([
      fetchWakaTime(todayUrl, API_KEY),
      fetchWakaTime(weekUrl, API_KEY),
      fetchWakaTime(monthUrl, API_KEY),
    ]);

    // Process Today (Summaries)
    const todayData = todayRes.data?.[0];
    const today: CodingData = {
      seconds: todayData?.grand_total?.total_seconds ?? 0,
      languages: (todayData?.languages || []).slice(0, 3).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent,
        time: lang.text,
      })),
    };

    // Process Week (Stats)
    const weekData = weekRes.data;
    const week: CodingData = {
      seconds: weekData?.total_seconds ?? 0,
      languages: (weekData?.languages || []).slice(0, 3).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent,
        time: lang.text,
      })),
    };

    // Process Month (Stats)
    const monthData = monthRes.data;
    const month: CodingData = {
      seconds: monthData?.total_seconds ?? 0,
      languages: (monthData?.languages || []).slice(0, 3).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent,
        time: lang.text,
      })),
    };

    return { today, week, month };

  } catch (error) {
    console.error("Error fetching WakaTime data:", error);
    return {
      today: { seconds: 0, languages: [] },
      week: { seconds: 0, languages: [] },
      month: { seconds: 0, languages: [] },
    };
  }
}
