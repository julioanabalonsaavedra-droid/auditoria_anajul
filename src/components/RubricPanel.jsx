const deliveryA = [
  "3 ataques con captura, payload y resultado visible",
  "Explicación técnica + CVSS justificado",
  "Prevención específica por vulnerabilidad",
  "Mitigación concreta con marco OWASP / CIS / NIST",
];

const deliveryB = [
  "Activos vinculados al rubro salud privada",
  "Matriz probabilidad × impacto con colores",
  "Priorización coherente con matriz y CVSS",
  "Recuperación ante desastres y mejora tecnológica",
];

export default function RubricPanel({ current }) {
  return (
    <section className="rubric-panel">
      <div className="rubric-title">
        <span>Objetivo de evaluación</span>
        <h3>Nivel Destacado (7)</h3>
        <p>
          Esta vista organiza el informe según los criterios exigidos por la rúbrica:
          evidencia, análisis técnico, matriz, controles, recuperación, GitHub y Vercel.
        </p>
      </div>

      <div className="rubric-grid">
        <article>
          <strong>Informe A — Vulnerabilidades</strong>
          <ul>
            {deliveryA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <strong>Informe B — Matriz y tratamiento</strong>
          <ul>
            {deliveryB.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rubric-active">
          <strong>Sección actual</strong>
          <p>{current.title}</p>
          <small>{current.criterion}</small>
        </article>
      </div>
    </section>
  );
}
