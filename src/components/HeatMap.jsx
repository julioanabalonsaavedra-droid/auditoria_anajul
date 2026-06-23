const risks = {
  "5-5": [
    { id: "R-01", name: "SQL Injection" },
    { id: "R-03", name: "Command Injection" },
  ],
  "4-4": [{ id: "R-02", name: "XSS Reflected" }],
};

function getRiskLevel(value) {
  if (value <= 4) return "low";
  if (value <= 9) return "medium";
  if (value <= 16) return "high";
  return "critical";
}

function getRiskName(value) {
  if (value <= 4) return "Bajo";
  if (value <= 9) return "Medio";
  if (value <= 16) return "Alto";
  return "Crítico";
}

export default function HeatMap() {
  const impacts = [
    { value: 5, label: "Muy alto" },
    { value: 4, label: "Alto" },
    { value: 3, label: "Medio" },
    { value: 2, label: "Bajo" },
    { value: 1, label: "Muy bajo" },
  ];

  const probabilities = [
    { value: 1, label: "Muy baja" },
    { value: 2, label: "Baja" },
    { value: 3, label: "Media" },
    { value: 4, label: "Alta" },
    { value: 5, label: "Muy alta" },
  ];

  return (
    <section className="heatmap-card">
      <div className="heatmap-header">
        <div>
          <p className="section-tag">Mapa de calor</p>
          <h2>Matriz Probabilidad × Impacto</h2>
          <p>
            Visualización de los riesgos identificados para Clínica Vista
            Hermosa. La matriz permite ubicar cada vulnerabilidad según su
            probabilidad de explotación y el impacto que podría generar sobre
            los activos críticos de la organización.
          </p>
        </div>

        <div className="heatmap-score">
          <span>Riesgo máximo</span>
          <strong>25</strong>
          <small>Crítico</small>
        </div>
      </div>

      <div className="risk-summary">
        <article className="summary-item critical">
          <span>R-03</span>
          <strong>Command Injection</strong>
          <small>25 / Crítico</small>
        </article>

        <article className="summary-item critical">
          <span>R-01</span>
          <strong>SQL Injection</strong>
          <small>25 / Crítico</small>
        </article>

        <article className="summary-item high">
          <span>R-02</span>
          <strong>XSS Reflected</strong>
          <small>16 / Alto</small>
        </article>
      </div>

      <div className="modern-heatmap" role="table" aria-label="Matriz de riesgo">
        <div className="corner-cell" role="columnheader">
          Impacto / Probabilidad
        </div>

        {probabilities.map((probability) => (
          <div
            className="axis-cell top"
            key={`probability-${probability.value}`}
            role="columnheader"
          >
            <strong>{probability.value}</strong>
            <span>{probability.label}</span>
          </div>
        ))}

        {impacts.map((impact) => (
          <div className="heatmap-row" key={`impact-row-${impact.value}`} role="row">
            <div className="axis-cell left" role="rowheader">
              <strong>{impact.value}</strong>
              <span>{impact.label}</span>
            </div>

            {probabilities.map((probability) => {
              const score = impact.value * probability.value;
              const level = getRiskLevel(score);
              const cellKey = `${impact.value}-${probability.value}`;
              const currentRisks = risks[cellKey];

              return (
                <div
                  className={`risk-cell ${level}`}
                  key={cellKey}
                  role="cell"
                  title={`Impacto ${impact.value}, Probabilidad ${probability.value}, Riesgo ${score}`}
                >
                  <div className="risk-score">{score}</div>
                  <div className="risk-level">{getRiskName(score)}</div>

                  {currentRisks && (
                    <div className="risk-tags">
                      {currentRisks.map((risk) => (
                        <span key={risk.id}>
                          <strong>{risk.id}</strong>
                          {risk.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="heatmap-legend">
        <span className="legend-pill low">Bajo: 1 - 4</span>
        <span className="legend-pill medium">Medio: 5 - 9</span>
        <span className="legend-pill high">Alto: 10 - 16</span>
        <span className="legend-pill critical">Crítico: 17 - 25</span>
      </div>
    </section>
  );
}
