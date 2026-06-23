import md from "../../docs_anajul/09_prompts_anajul.md?raw";
import MarkdownSection from "./MarkdownSection";

export default function Prompts() {
  if (!md.trim()) {
    return (
      <article className="markdown-body empty-state">
        <h1>Bitácora de uso de IA</h1>
        <p>
          Esta sección se completará al finalizar el trabajo, cuando estén listas
          las evidencias, la aplicación React, el despliegue en Vercel y la revisión final.
        </p>
        <p>
          El objetivo es registrar prompts reales, correcciones realizadas y reflexión final,
          tal como solicita la rúbrica.
        </p>
      </article>
    );
  }

  return <MarkdownSection content={md} />;
}
