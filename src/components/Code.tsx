import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  showLineNumbers?: boolean;
};

export default async function Code({
  code,
  lang = "typescript",
  theme = "github-dark",
  showLineNumbers = true,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: showLineNumbers
      ? [
          {
            line: (hast) => {
              hast.properties!.class = `${hast.properties!.class} line`;
              return hast;
            },
          },
        ]
      : undefined,
  });

  return (
    <div className="rounded-lg overflow-hidden">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="text-sm font-mono p-4 [&_.line]:pl-4 [&_.line]:relative [&_.line]:before:content-[attr(data-line)] [&_.line]:before:absolute [&_.line]:before:left-0 [&_.line]:before:text-gray-500 [&_.line]:before:text-xs"
      />
    </div>
  );
}
