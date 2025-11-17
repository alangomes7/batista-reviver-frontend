import clsx from "clsx";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
  className?: string;
};

export function SafeMarkdown({ markdown, className }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        // These prose classes automatically style the rendered HTML
        "prose w-full max-w-none overflow-hidden",
        "prose-headings:text-foreground",
        "prose-p:text-foreground",
        "prose-li:text-foreground",
        "prose-a:text-primary prose-a:hover:underline",
        "prose-strong:text-foreground",
        "prose-em:text-foreground/80",
        "prose-blockquote:border-l-4 prose-blockquote:border-muted prose-blockquote:bg-muted/5 prose-blockquote:text-foreground/80",
        "prose-code:bg-muted/10 prose-code:px-1 prose-code:py-[0.1rem] prose-code:rounded",
        "prose-pre:bg-muted/5 prose-pre:p-4 prose-pre:rounded prose-pre:overflow-x-auto",
        "prose-table:border prose-table:border-border prose-table:text-foreground",
        "prose-th:border-b prose-th:border-border prose-th:text-foreground prose-th:font-semibold",
        "prose-td:border-b prose-td:border-border prose-td:text-foreground",
        "lg:prose-lg",
        className
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return null;
            return (
              <div className="overflow-x-auto">
                <table {...props} />
              </div>
            );
          },
          img: ({ src, alt }) => {
            if (!src) {
              return null;
            }

            if (typeof src === "string") {
              return (
                <div className="relative w-full aspect-video mx-auto my-4 rounded overflow-hidden">
                  <Image
                    src={src}
                    alt={alt || ""}
                    fill
                    className="object-contain"
                  />
                </div>
              );
            }
            return null;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
