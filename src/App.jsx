import { useState } from "react";
import "./App.css";

import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";

const sections = [
  {
    id: "resumen",
    title: "Resumen Ejecutivo",
    subtitle: "Empresa, portal y alcance",
    component: Resumen,
    rubric: "Contextualiza la empresa, el rubro y el portal auditado.",
  },
  {
    id: "sqli",
    title: "SQL Injection",
    subtitle: "Evidencia, CVSS y defensa",
    component: InyeccionSQL,
    rubric: "Demuestra ataque, explica causa raíz, CVSS, prevención y mitigación.",
  },
  {
    id: "xss",
    title: "XSS Reflected",
    subtitle: "Ejecución de scripts",
    component: XSS,
    rubric: "Incluye payload, evidencia, CVSS, impacto y controles específicos.",
  },
  {
    id: "comandos",
    title: "Command Injection",
    subtitle: "Compromiso del servidor",
    component: Comandos,
    rubric: "Relaciona ejecución de comandos con impacto sobre servidores.",
  },
  {
    id: "activos",
    title: "Activos",
    subtitle: "Información crítica",
    component: Activos,
    rubric: "Identifica activos clínicos y los vincula con las vulnerabilidades.",
  },
  {
    id: "matriz",
    title: "Matriz de Riesgo",
    subtitle: "Probabilidad × impacto",
    component: Matriz,
    rubric: "Presenta mapa de calor, justificación, CVSS y priorización.",
  },
  {
    id: "controles",
    title: "Controles",
    subtitle: "Prevención y mitigación",
    component: Controles,
    rubric: "Propone políticas y controles concretos basados en OWASP, CIS y NIST.",
  },
  {
    id: "recuperacion",
    title: "Recuperación",
    subtitle: "Continuidad operacional",
    component: Recuperacion,
    rubric: "Incluye respaldo, restauración, notificación, RTO, RPO y mejoras.",
  },
  {
    id: "prompts",
    title: "Bitácora IA",
    subtitle: "Uso crítico de IA",
    component: Prompts,
    rubric: "Documenta prompts, uso, correcciones y reflexión final.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("resumen");
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSection = sections.find((section) => section.id === activeSection);
  const CurrentComponent = currentSection.component;

  function handleChangeSection(sectionId) {
    setActiveSection(sectionId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="app-shell">
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <button
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú lateral"
        />
      )}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="brand">
          <span className="brand-icon">AVH</span>

          <div>
            <h1>Auditoría Web</h1>
            <p>Clínica Vista Hermosa</p>
          </div>
        </div>

        <div className="project-meta">
          <span>Proyecto</span>
          <strong>auditoria_anajul</strong>
          <small>React + Markdown + Vercel</small>
        </div>

        <nav className="nav-menu" aria-label="Navegación principal">
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => handleChangeSection(section.id)}
            >
              <strong>{section.title}</strong>
              <span>{section.subtitle}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>TI3034</p>
          <p>Fundamentos de Seguridad de la Información</p>
          <p>Evaluación Sumativa N°3</p>
        </div>
      </aside>

      <section className="main-content">
        <header className="hero">
          <div>
            <p className="eyebrow">Evaluación Sumativa N°3</p>
            <h2>{currentSection.title}</h2>
            <p>
              Informe de auditoría de seguridad web para el portal de clientes
              de Clínica Vista Hermosa, empresa ficticia del rubro salud privada.
            </p>

            <div className="hero-tags">
              <span>Markdown</span>
              <span>React</span>
              <span>DVWA</span>
              <span>CVSS</span>
              <span>Matriz de Riesgo</span>
            </div>
          </div>

          <div className="hero-card">
            <span>Empresa asignada</span>
            <strong>Clínica Vista Hermosa</strong>
            <small>Rubro: salud privada</small>
          </div>
        </header>

        <section className="rubric-panel">
          <div className="rubric-title">
            <span>Objetivo destacado</span>
            <h3>Criterio trabajado en esta sección</h3>
            <p>{currentSection.rubric}</p>
          </div>

          <div className="rubric-grid">
            <article>
              <strong>Entrega A</strong>
              <ul>
                <li>Evidencias de ataques.</li>
                <li>Explicación técnica.</li>
                <li>CVSS justificado.</li>
                <li>Prevención y mitigación.</li>
              </ul>
            </article>

            <article>
              <strong>Entrega B</strong>
              <ul>
                <li>Activos según industria.</li>
                <li>Matriz con mapa de calor.</li>
                <li>Priorización coherente.</li>
                <li>Recuperación ante incidentes.</li>
              </ul>
            </article>

            <article className="rubric-active">
              <strong>Meta</strong>
              <p>Destacado 7</p>
              <small>
                Informe completo, profesional, navegable, con evidencias,
                análisis y commits progresivos.
              </small>
            </article>
          </div>
        </section>

        <CurrentComponent />
      </section>
    </main>
  );
}
