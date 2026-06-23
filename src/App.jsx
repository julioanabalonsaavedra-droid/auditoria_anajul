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
import RubricPanel from "./components/RubricPanel";

const sections = [
  {
    id: "resumen",
    title: "Resumen Ejecutivo",
    subtitle: "Empresa, portal y alcance",
    criterion: "Transversal: contexto de empresa y portal auditado",
    component: Resumen,
  },
  {
    id: "sqli",
    title: "SQL Injection",
    subtitle: "Evidencia, CVSS y defensa",
    criterion: "3.1.1 / 3.1.4 / 3.1.5",
    component: InyeccionSQL,
  },
  {
    id: "xss",
    title: "XSS Reflected",
    subtitle: "Ejecución de scripts",
    criterion: "3.1.1 / 3.1.4 / 3.1.5",
    component: XSS,
  },
  {
    id: "comandos",
    title: "Command Injection",
    subtitle: "Compromiso del servidor",
    criterion: "3.1.1 / 3.1.4 / 3.1.5",
    component: Comandos,
  },
  {
    id: "activos",
    title: "Activos",
    subtitle: "Información crítica",
    criterion: "3.1.2: activos y riesgos según industria",
    component: Activos,
  },
  {
    id: "matriz",
    title: "Matriz de Riesgo",
    subtitle: "Probabilidad × impacto",
    criterion: "3.1.3: matriz, mapa de calor y priorización",
    component: Matriz,
  },
  {
    id: "controles",
    title: "Controles",
    subtitle: "Prevención y mitigación",
    criterion: "3.1.4 / 3.1.5: prevención y mitigación",
    component: Controles,
  },
  {
    id: "recuperacion",
    title: "Recuperación",
    subtitle: "Continuidad operacional",
    criterion: "3.1.6: mejora tecnológica y recuperación ante desastres",
    component: Recuperacion,
  },
  {
    id: "prompts",
    title: "Bitácora IA",
    subtitle: "Prompts y reflexión final",
    criterion: "Transversal: uso crítico y dirigido de IA",
    component: Prompts,
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("resumen");

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  const CurrentComponent = currentSection.component;

  return (
    <main className="app-shell">
      <aside className="sidebar">
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

        <nav className="nav-menu" aria-label="Secciones del informe">
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => setActiveSection(section.id)}
            >
              <strong>{section.title}</strong>
              <span>{section.subtitle}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>TI3034 — Fundamentos de Seguridad</p>
          <p>Evaluación Sumativa N°3</p>
          <p>Objetivo: nivel Destacado (7)</p>
        </div>
      </aside>

      <section className="main-content">
        <header className="hero">
          <div>
            <p className="eyebrow">Auditoría de seguridad web</p>
            <h2>{currentSection.title}</h2>
            <p>
              Informe técnico para el portal de clientes de Clínica Vista Hermosa,
              enfocado en vulnerabilidades web, matriz de riesgo, controles y recuperación.
            </p>

            <div className="hero-tags">
              <span>Salud privada</span>
              <span>DVWA</span>
              <span>CVSS</span>
              <span>OWASP / CIS / NIST</span>
            </div>
          </div>

          <div className="hero-card">
            <span>Criterio asociado</span>
            <strong>{currentSection.criterion}</strong>
            <small>Empresa asignada: Clínica Vista Hermosa</small>
          </div>
        </header>

        <RubricPanel current={currentSection} />

        <CurrentComponent />
      </section>
    </main>
  );
}
