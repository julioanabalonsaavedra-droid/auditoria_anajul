import md from "../../docs_anajul/03_xss_anajul.md?raw";
import MarkdownSection from "./MarkdownSection";

export default function XSS() {
  return <MarkdownSection content={md} />;
}