# Matriz de Riesgo
# Clínica Vista Hermosa

---

# 1. Introducción

La gestión del riesgo constituye una de las actividades más importantes dentro de un programa de seguridad de la información. Su objetivo es identificar, analizar y priorizar las amenazas que pueden afectar a los activos críticos de una organización, permitiendo tomar decisiones informadas respecto a la implementación de controles de seguridad.

En el caso de Clínica Vista Hermosa, la gestión del riesgo adquiere especial relevancia debido a la sensibilidad de la información administrada por la institución. La organización almacena y procesa fichas clínicas electrónicas, diagnósticos médicos, resultados de exámenes, información personal de pacientes y credenciales de acceso a sistemas críticos.

La exposición, modificación o pérdida de esta información podría afectar directamente la atención médica, la continuidad operacional y la confianza depositada por los pacientes en la institución.

Por esta razón, se realizó una evaluación de riesgos basada en las vulnerabilidades identificadas durante la auditoría de seguridad web.

---

# 2. Metodología de Evaluación

La metodología utilizada considera dos variables principales:

- Probabilidad de ocurrencia.
- Impacto sobre la organización.

El nivel de riesgo se obtiene mediante la siguiente fórmula:

```text
RIESGO = PROBABILIDAD × IMPACTO
```

---

## Escala de Probabilidad

| Nivel | Valor | Descripción |
|---------|---------|--------------|
| Muy Baja | 1 | Ocurre excepcionalmente |
| Baja | 2 | Poco probable |
| Media | 3 | Puede ocurrir ocasionalmente |
| Alta | 4 | Probable |
| Muy Alta | 5 | Altamente probable |

---

## Escala de Impacto

| Nivel | Valor | Descripción |
|---------|---------|--------------|
| Muy Bajo | 1 | Daño mínimo |
| Bajo | 2 | Afectación limitada |
| Medio | 3 | Impacto moderado |
| Alto | 4 | Impacto significativo |
| Muy Alto | 5 | Consecuencias críticas para la organización |

---

## Escala de Clasificación del Riesgo

| Resultado | Clasificación |
|------------|--------------|
| 1 - 4 | Bajo |
| 5 - 9 | Medio |
| 10 - 16 | Alto |
| 17 - 25 | Crítico |

---

# 3. Resumen Ejecutivo de Riesgos

| ID | Riesgo | Activo Principal | Probabilidad | Impacto | Resultado | Nivel |
|----|---------|---------|---------|---------|---------|---------|
| R-01 | SQL Injection | Base de Datos Clínica | 5 | 5 | 25 | Crítico |
| R-02 | XSS Reflected | Credenciales y Sesiones | 4 | 4 | 16 | Alto |
| R-03 | Command Injection | Servidores Institucionales | 5 | 5 | 25 | Crítico |

---

# 4. Evaluación Individual de Riesgos

## Riesgo R-01: SQL Injection

### Descripción

La vulnerabilidad SQL Injection permite manipular consultas a bases de datos mediante entradas maliciosas introducidas por un atacante.

### Activos afectados

- Fichas clínicas electrónicas.
- Base de datos médica.
- Resultados de exámenes.
- Datos personales de pacientes.
- Información administrativa.

### Evaluación

| Factor | Valor |
|----------|---------|
| Probabilidad | 5 |
| Impacto | 5 |

### Resultado

```text
5 × 5 = 25
```

### Nivel de Riesgo

**CRÍTICO**

### Justificación de la Probabilidad

La probabilidad se considera muy alta debido a que la vulnerabilidad fue explotada exitosamente durante la auditoría utilizando una entrada simple y sin requerir privilegios especiales.

### Justificación del Impacto

El impacto se considera muy alto porque permite acceder directamente a información médica confidencial, comprometiendo activos críticos para la operación de la clínica.

---

## Riesgo R-02: XSS Reflected

### Descripción

Permite ejecutar scripts maliciosos dentro del navegador de usuarios legítimos.

### Activos afectados

- Credenciales de acceso.
- Sesiones activas.
- Información personal.
- Portal de pacientes.

### Evaluación

| Factor | Valor |
|----------|---------|
| Probabilidad | 4 |
| Impacto | 4 |

### Resultado

```text
4 × 4 = 16
```

### Nivel de Riesgo

**ALTO**

### Justificación de la Probabilidad

La explotación requiere interacción del usuario, sin embargo puede realizarse mediante enlaces especialmente diseñados y distribuidos a través de correo electrónico o mensajería.

### Justificación del Impacto

La vulnerabilidad puede permitir el robo de sesiones y credenciales, facilitando accesos no autorizados a información clínica.

---

## Riesgo R-03: Command Injection

### Descripción

Permite la ejecución arbitraria de comandos sobre el sistema operativo del servidor.

### Activos afectados

- Servidores institucionales.
- Sistemas clínicos.
- Bases de datos.
- Infraestructura tecnológica.

### Evaluación

| Factor | Valor |
|----------|---------|
| Probabilidad | 5 |
| Impacto | 5 |

### Resultado

```text
5 × 5 = 25
```

### Nivel de Riesgo

**CRÍTICO**

### Justificación de la Probabilidad

La vulnerabilidad fue explotada exitosamente durante las pruebas sin necesidad de autenticación avanzada ni conocimientos especializados.

### Justificación del Impacto

La explotación permite comprometer completamente el servidor y potencialmente todos los sistemas asociados a la plataforma.

---

# 5. Matriz de Riesgo

| Impacto / Probabilidad | 1 | 2 | 3 | 4 | 5 |
|-------------------------|---|---|---|---|---|
| 5 Muy Alto | 5 | 10 | 15 | 20 | **25 (R-01, R-03)** |
| 4 Alto | 4 | 8 | 12 | **16 (R-02)** | 20 |
| 3 Medio | 3 | 6 | 9 | 12 | 15 |
| 2 Bajo | 2 | 4 | 6 | 8 | 10 |
| 1 Muy Bajo | 1 | 2 | 3 | 4 | 5 |

---

# 6. Mapa de Calor Conceptual

| Nivel | Rango | Acción Requerida |
|---------|---------|----------------|
| Bajo | 1 - 4 | Monitoreo |
| Medio | 5 - 9 | Seguimiento |
| Alto | 10 - 16 | Tratamiento prioritario |
| Crítico | 17 - 25 | Mitigación inmediata |

---

# 7. Impacto sobre los Principios de Seguridad

## Confidencialidad

Los tres riesgos identificados podrían permitir el acceso no autorizado a información médica confidencial, incluyendo diagnósticos, resultados de exámenes y antecedentes clínicos.

## Integridad

La información almacenada podría ser modificada, alterando registros clínicos y afectando la calidad de la atención médica.

## Disponibilidad

La explotación de vulnerabilidades críticas podría provocar interrupciones de servicio y afectar la continuidad operacional de la clínica.

---

# 8. Priorización de Riesgos

| Prioridad | Riesgo | Nivel |
|------------|---------|---------|
| 1 | Command Injection | Crítico |
| 2 | SQL Injection | Crítico |
| 3 | XSS Reflected | Alto |

La priorización considera tanto el impacto técnico como las consecuencias para el negocio y la atención de pacientes.

---

# 9. Estrategias de Tratamiento

## Riesgo R-01: SQL Injection

**Estrategia:** Mitigar

**Acciones:**

- Consultas parametrizadas.
- Validación de entradas.
- Monitoreo de actividad.

---

## Riesgo R-02: XSS Reflected

**Estrategia:** Reducir

**Acciones:**

- Escape de caracteres.
- Content Security Policy.
- Gestión segura de sesiones.

---

## Riesgo R-03: Command Injection

**Estrategia:** Mitigar inmediatamente

**Acciones:**

- Eliminación de llamadas inseguras al sistema.
- Restricción de privilegios.
- Monitoreo continuo.

---

# 10. Conclusión

La evaluación realizada demuestra que SQL Injection y Command Injection representan riesgos críticos para Clínica Vista Hermosa debido a su alta probabilidad de explotación y su capacidad para comprometer información médica altamente sensible.

Por otra parte, XSS Reflected representa un riesgo alto que podría facilitar el robo de credenciales y el acceso no autorizado a sistemas institucionales.

Desde una perspectiva de negocio, los riesgos identificados son incompatibles con el nivel de protección esperado para una institución de salud privada. Por ello, la organización debe priorizar la implementación inmediata de controles orientados a proteger la confidencialidad, integridad y disponibilidad de la información clínica, garantizando la continuidad operacional y la confianza de los pacientes.