const risks = {
  "5-5": ["R-01 SQL Injection", "R-03 Command Injection"],
  "4-4": ["R-02 XSS Reflected"],
};

function getRiskClass(value) {
  if (value <= 4) return "risk-low";
  if (value <= 9) return "risk-medium";
  if (value <= 16) return "risk-high";
  return "risk-critical";
}

function getRiskName(value) {
  if (value <= 4) return "Bajo";
  if (value <= 9) return "Medio";
  if (value <= 16) return "Alto";
  return "Crítico";
}

export default function HeatMap() {
  const impacts = [5, 4, 3, 2, 1];
  const probabilities = [1, 2, 3, 4, 5];

  return (
    <section className="heatmap-card">
      <p className="section-tag">3.1.3 — Mapa de calor</p>
      <h2>Matriz Probabilidad × Impacto</h2>

      <p>
        La rúbrica solicita una matriz con colores, ubicación de las tres vulnerabilidades
        y justificación coherente con la industria. Esta visualización marca los riesgos
        críticos y altos del portal de Clínica Vista Hermosa.
      </p>

      <div className="heatmap-wrapper">
        <table className="heatmap">
          <thead>
            <tr>
              <th>Impacto / Probabilidad</th>
              {probabilities.map((probability) => (
                <th key={probability}>
                  <span>{probability}</span>
                  <small>Prob.</small>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {impacts.map((impact) => (
              <tr key={impact}>
                <th>
                  <span>{impact}</span>
                  <small>Impacto</small>
                </th>

                {probabilities.map((probability) => {
                  const value = impact * probability;
                  const key = `${impact}-${probability}`;

                  return (
                    <td key={key} className={getRiskClass(value)}>
                      <strong>{value}</strong>
                      <small>{getRiskName(value)}</small>

                      {risks[key] && (
                        <span className="risk-label">
                          {risks[key].map((risk) => (
                            <em key={risk}>{risk}</em>
                          ))}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        <span className="legend-low">Bajo: 1–4</span>
        <span className="legend-medium">Medio: 5–9</span>
        <span className="legend-high">Alto: 10–16</span>
        <span className="legend-critical">Crítico: 17–25</span>
      </div>
    </section>
  );
}
