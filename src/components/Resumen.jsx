import md from "../../docs_anajul/01_resumen_anajul.md?raw";
import MarkdownSection from "./MarkdownSection";

export default function Resumen() {
  return <MarkdownSection content={md} />;
}