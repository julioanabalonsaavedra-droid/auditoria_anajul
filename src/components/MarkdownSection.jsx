import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function fixImagePath(src) {
  if (!src) return "";

  if (src.startsWith("http") || src.startsWith("data:")) {
    return src;
  }

  const cleanSrc = src.replace("./", "");

  if (cleanSrc.startsWith("img_anajul/")) {
    return `/${cleanSrc}`;
  }

  return cleanSrc;
}

export default function MarkdownSection({ content }) {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <img
              src={fixImagePath(src)}
              alt={alt || "Evidencia de auditoría"}
              className="evidence-img"
              loading="lazy"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
