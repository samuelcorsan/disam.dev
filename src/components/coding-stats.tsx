import { getAllCodingData } from "@/lib/wakatime";
import CodingCard from "./coding-card";

export default async function CodingStats() {
  const data = await getAllCodingData();

  const hasAnyActivity =
    data.today.seconds >= 600 ||
    data.week.seconds >= 600 ||
    data.month.seconds >= 600;

  if (!hasAnyActivity) {
    return null;
  }
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 tracking-tight">CODING ACTIVITY</h2>
      <CodingCard data={data} />
    </section>
  );
}

