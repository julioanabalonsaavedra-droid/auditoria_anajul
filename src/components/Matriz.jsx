import md from "../../docs_anajul/06_matriz_anajul.md?raw";
import MarkdownSection from "./MarkdownSection";
import HeatMap from "./HeatMap";

export default function Matriz() {
  return (
    <>
      <HeatMap />
      <MarkdownSection content={md} />
    </>
  );
}