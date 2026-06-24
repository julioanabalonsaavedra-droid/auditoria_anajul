# Matriz de Riesgo

# Clínica Vista Hermosa

---

# 1. Introducción

La matriz de riesgo es una herramienta utilizada para analizar, comparar y priorizar amenazas de seguridad según la probabilidad de ocurrencia y el impacto que podrían generar sobre una organización.

En el caso de **Clínica Vista Hermosa**, la evaluación de riesgos adquiere especial importancia debido al tipo de información administrada por el portal de clientes. La clínica custodia datos médicos y personales altamente sensibles, como fichas clínicas, resultados de exámenes, diagnósticos, credenciales de acceso y registros administrativos asociados a la atención de pacientes.

Las vulnerabilidades identificadas durante la auditoría no deben analizarse únicamente como fallas técnicas. Cada una de ellas debe interpretarse como un riesgo para el negocio, ya que puede afectar la confidencialidad, integridad y disponibilidad de activos críticos para la operación de la clínica.

Las vulnerabilidades evaluadas en esta matriz son:

* **R-01: SQL Injection**
* **R-02: XSS Reflected**
* **R-03: Command Injection**

El propósito de esta matriz es determinar cuáles riesgos requieren atención inmediata y cuáles pueden ser tratados mediante acciones planificadas, considerando tanto la severidad técnica como el impacto para una institución de salud privada.

---

# 2. Objetivo de la Matriz de Riesgo

El objetivo principal de esta matriz es priorizar las vulnerabilidades identificadas durante la auditoría, considerando su probabilidad de explotación y el impacto que podrían generar sobre los activos críticos de Clínica Vista Hermosa.

Los objetivos específicos son:

* Evaluar el nivel de riesgo de cada vulnerabilidad.
* Relacionar cada riesgo con los activos afectados.
* Justificar la probabilidad e impacto asignados.
* Priorizar el orden de tratamiento.
* Relacionar la matriz con los puntajes CVSS.
* Definir estrategias de tratamiento.
* Apoyar la toma de decisiones en materia de seguridad.

---

# 3. Metodología de Evaluación

La evaluación se basa en dos variables principales:

## 3.1 Probabilidad

La probabilidad representa qué tan posible es que una vulnerabilidad sea explotada por una amenaza.

Para asignar este valor se consideran los siguientes factores:

* Facilidad de explotación.
* Necesidad de credenciales o privilegios.
* Interacción requerida del usuario.
* Exposición del componente vulnerable.
* Complejidad técnica del ataque.
* Evidencia obtenida durante la prueba en DVWA.

## 3.2 Impacto

El impacto representa las consecuencias que tendría la explotación exitosa de una vulnerabilidad sobre la organización.

Para asignar este valor se consideran:

* Tipo de información comprometida.
* Activos afectados.
* Daño potencial a la confidencialidad.
* Daño potencial a la integridad.
* Daño potencial a la disponibilidad.
* Consecuencias operacionales.
* Consecuencias legales, reputacionales y económicas.

## 3.3 Fórmula utilizada

El nivel de riesgo se calcula mediante la siguiente fórmula:

```text
RIESGO = PROBABILIDAD × IMPACTO
```

---

# 4. Escala de Probabilidad

| Nivel    | Valor | Descripción             | Criterio aplicado                                            |
| -------- | ----: | ----------------------- | ------------------------------------------------------------ |
| Muy baja |     1 | Ocurre excepcionalmente | Requiere condiciones poco probables                          |
| Baja     |     2 | Poco probable           | Requiere conocimientos específicos o acceso restringido      |
| Media    |     3 | Posible                 | Puede ocurrir bajo ciertas condiciones                       |
| Alta     |     4 | Probable                | El ataque es viable y relativamente simple                   |
| Muy alta |     5 | Altamente probable      | El ataque es fácil de ejecutar y fue demostrado exitosamente |

---

# 5. Escala de Impacto

| Nivel    | Valor | Descripción            | Criterio aplicado                                          |
| -------- | ----: | ---------------------- | ---------------------------------------------------------- |
| Muy bajo |     1 | Daño mínimo            | No afecta activos críticos                                 |
| Bajo     |     2 | Afectación limitada    | Impacto menor y controlable                                |
| Medio    |     3 | Impacto moderado       | Afecta servicios o datos no críticos                       |
| Alto     |     4 | Impacto significativo  | Compromete información sensible o usuarios                 |
| Muy alto |     5 | Consecuencias críticas | Afecta operación, datos clínicos o infraestructura crítica |

---

# 6. Escala de Clasificación del Riesgo

| Resultado | Nivel   | Color       | Acción requerida              |
| --------: | ------- | ----------- | ----------------------------- |
|     1 - 4 | Bajo    | 🟩 Verde    | Monitorear                    |
|     5 - 9 | Medio   | 🟨 Amarillo | Aplicar controles preventivos |
|   10 - 16 | Alto    | 🟧 Naranjo  | Tratamiento prioritario       |
|   17 - 25 | Crítico | 🟥 Rojo     | Mitigación inmediata          |

---

# 7. Resumen Ejecutivo de Riesgos

| ID   | Vulnerabilidad    | Activo principal afectado  | Probabilidad | Impacto | Resultado | Nivel      | CVSS |
| ---- | ----------------- | -------------------------- | -----------: | ------: | --------: | ---------- | ---: |
| R-01 | SQL Injection     | Base de datos clínica      |            5 |       5 |        25 | 🟥 Crítico |  9.8 |
| R-02 | XSS Reflected     | Credenciales y sesiones    |            4 |       4 |        16 | 🟧 Alto    |  6.1 |
| R-03 | Command Injection | Servidores institucionales |            5 |       5 |        25 | 🟥 Crítico | 10.0 |

---

# 8. Mapa de Calor de Riesgo

La siguiente matriz representa la relación entre impacto y probabilidad. Las vulnerabilidades evaluadas se ubican en la celda correspondiente según el resultado obtenido.

| Impacto / Probabilidad | 1 Muy baja | 2 Baja | 3 Media | 4 Alta         | 5 Muy alta            |
| ---------------------- | ---------- | ------ | ------- | -------------- | --------------------- |
| 5 Muy alto             | 🟨 5       | 🟧 10  | 🟧 15   | 🟥 20          | 🟥 25 **R-01 / R-03** |
| 4 Alto                 | 🟩 4       | 🟨 8   | 🟧 12   | 🟧 16 **R-02** | 🟥 20                 |
| 3 Medio                | 🟩 3       | 🟨 6   | 🟨 9    | 🟧 12          | 🟧 15                 |
| 2 Bajo                 | 🟩 2       | 🟩 4   | 🟨 6    | 🟨 8           | 🟧 10                 |
| 1 Muy bajo             | 🟩 1       | 🟩 2   | 🟩 3    | 🟩 4           | 🟨 5                  |

---

# 9. Evaluación Individual de Riesgos

---

## 9.1 Riesgo R-01: SQL Injection

### Descripción

SQL Injection permite manipular consultas a bases de datos mediante entradas maliciosas. Esta vulnerabilidad puede provocar acceso no autorizado, exposición, modificación o eliminación de información almacenada.

### Activos afectados

* A-01 Fichas clínicas electrónicas.
* A-02 Resultados de exámenes médicos.
* A-03 Diagnósticos médicos.
* A-04 Datos personales de pacientes.
* A-05 Credenciales de acceso.
* A-06 Base de datos clínica.

### Probabilidad asignada

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 5          |
| Nivel  | Muy alta   |

### Justificación de probabilidad

La probabilidad se considera **muy alta** porque la vulnerabilidad fue explotada exitosamente durante la prueba en DVWA utilizando un payload simple:

```sql
' OR '1'='1
```

El ataque no requiere una alta complejidad técnica y demuestra que una entrada maliciosa puede alterar la consulta original. Además, este tipo de vulnerabilidad suele ser crítico cuando los formularios interactúan directamente con bases de datos sin consultas parametrizadas.

### Impacto asignado

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 5          |
| Nivel  | Muy alto   |

### Justificación de impacto

El impacto se considera **muy alto** debido a que la base de datos clínica contiene información médica sensible. La explotación exitosa podría exponer fichas clínicas, diagnósticos, resultados de exámenes, datos personales y credenciales.

En una clínica privada, la exposición o alteración de esta información puede generar consecuencias graves para pacientes y para la organización.

### Cálculo del riesgo

```text
Probabilidad × Impacto = 5 × 5 = 25
```

### Nivel de riesgo

```text
CRÍTICO
```

### Relación con CVSS

El puntaje CVSS asignado para SQL Injection es **9.8**, correspondiente a severidad crítica. Esto es coherente con la matriz, ya que el riesgo también se clasifica como crítico.

---

## 9.2 Riesgo R-02: XSS Reflected

### Descripción

XSS Reflected permite ejecutar código JavaScript en el navegador de un usuario cuando la aplicación refleja entradas sin validación ni codificación adecuada.

### Activos afectados

* A-04 Datos personales de pacientes.
* A-05 Credenciales de acceso.
* A-07 Portal de pacientes.
* Sesiones activas de usuarios.

### Probabilidad asignada

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 4          |
| Nivel  | Alta       |

### Justificación de probabilidad

La probabilidad se considera **alta** porque el ataque puede ejecutarse mediante un payload relativamente simple:

```html
<script>alert('XSS')</script>
```

Sin embargo, a diferencia de SQL Injection o Command Injection, XSS Reflected normalmente requiere que la víctima interactúe con un enlace o formulario vulnerable. Por esta razón, se asigna probabilidad 4 y no 5.

### Impacto asignado

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 4          |
| Nivel  | Alto       |

### Justificación de impacto

El impacto se considera **alto** porque la vulnerabilidad puede comprometer sesiones de usuarios, credenciales y confianza en el portal. En el contexto de Clínica Vista Hermosa, si un médico, paciente o funcionario administrativo accede a un enlace malicioso, el atacante podría manipular la experiencia del usuario o facilitar robo de información visible en la sesión.

Aunque no compromete directamente el servidor ni la base de datos, puede ser usado como puerta de entrada para ataques posteriores.

### Cálculo del riesgo

```text
Probabilidad × Impacto = 4 × 4 = 16
```

### Nivel de riesgo

```text
ALTO
```

### Relación con CVSS

El puntaje CVSS asignado para XSS Reflected es **6.1**, correspondiente a severidad media. Sin embargo, el riesgo de negocio se clasifica como alto debido a la sensibilidad de la información médica y al posible compromiso de sesiones de usuarios.

---

## 9.3 Riesgo R-03: Command Injection

### Descripción

Command Injection permite ejecutar comandos del sistema operativo desde una aplicación web vulnerable. Esta vulnerabilidad puede comprometer directamente el servidor donde se ejecuta la aplicación.

### Activos afectados

* A-06 Base de datos clínica.
* A-07 Portal de pacientes.
* A-08 Servidores institucionales.
* A-09 Logs y registros de auditoría.
* Infraestructura tecnológica asociada.

### Probabilidad asignada

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 5          |
| Nivel  | Muy alta   |

### Justificación de probabilidad

La probabilidad se considera **muy alta** porque el ataque fue demostrado mediante una entrada simple en el módulo vulnerable. El uso de separadores de comandos permite que el servidor ejecute instrucciones adicionales no autorizadas.

Payload evaluado:

```bash
127.0.0.1; cat /etc/passwd
```

La explotación no requiere una alta complejidad técnica cuando la aplicación no valida correctamente la entrada.

### Impacto asignado

| Factor | Evaluación |
| ------ | ---------- |
| Valor  | 5          |
| Nivel  | Muy alto   |

### Justificación de impacto

El impacto se considera **muy alto** porque esta vulnerabilidad puede comprometer servidores institucionales, archivos del sistema, configuraciones, servicios y eventualmente información clínica asociada.

En una clínica, la interrupción o compromiso del servidor puede afectar la continuidad del portal de pacientes, el acceso a información médica y la operación de sistemas internos.

### Cálculo del riesgo

```text
Probabilidad × Impacto = 5 × 5 = 25
```

### Nivel de riesgo

```text
CRÍTICO
```

### Relación con CVSS

El puntaje CVSS asignado para Command Injection es **10.0**, correspondiente a severidad crítica. Esto respalda su clasificación como el riesgo de mayor prioridad dentro de la matriz.

---

# 10. Comparación entre Matriz de Riesgo y CVSS

| ID | Vulnerabilidad | Vector CVSS 3.1 | Puntaje | Severidad | Probabilidad | Impacto | Riesgo |
|---|---|---|---:|---|---:|---:|---:|
| R-01 | SQL Injection | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` | 9.8 | Crítica | 5 | 5 | 25 |
| R-02 | XSS Reflected | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N` | 6.1 | Media | 4 | 4 | 16 |
| R-03 | Command Injection | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H` | 10.0 | Crítica | 5 | 5 | 25 |

La clasificación CVSS permite medir la severidad técnica de cada vulnerabilidad en una escala de 0 a 10. Sin embargo, la matriz de riesgo incorpora además el contexto de negocio de Clínica Vista Hermosa, considerando el impacto sobre fichas clínicas, diagnósticos, resultados de exámenes, credenciales, servidores y continuidad operacional.

Por esta razón, XSS Reflected obtiene severidad técnica media en CVSS, pero se mantiene como riesgo alto en la matriz debido a la sensibilidad de la información clínica y al posible compromiso de sesiones de usuarios.
---

# 11. Impacto sobre Confidencialidad, Integridad y Disponibilidad

| Vulnerabilidad    | Confidencialidad | Integridad | Disponibilidad | Justificación                                          |
| ----------------- | ---------------- | ---------- | -------------- | ------------------------------------------------------ |
| SQL Injection     | Muy alta         | Muy alta   | Alta           | Puede exponer, modificar o eliminar registros clínicos |
| XSS Reflected     | Media            | Media      | Baja           | Puede comprometer sesiones y manipular contenido       |
| Command Injection | Muy alta         | Muy alta   | Muy alta       | Puede comprometer el servidor y servicios críticos     |

---

# 12. Priorización de Vulnerabilidades

La priorización se realiza considerando:

* Resultado de la matriz de riesgo.
* Puntaje CVSS.
* Activos afectados.
* Impacto operacional.
* Impacto sobre información médica.
* Facilidad de explotación.
* Consecuencias para la continuidad del servicio.

| Prioridad | Riesgo                 | Nivel matriz | CVSS | Motivo de priorización                                  |
| --------: | ---------------------- | ------------ | ---: | ------------------------------------------------------- |
|         1 | R-03 Command Injection | Crítico      | 10.0 | Puede comprometer servidor, servicios e infraestructura |
|         2 | R-01 SQL Injection     | Crítico      |  9.8 | Puede exponer o alterar base de datos clínica           |
|         3 | R-02 XSS Reflected     | Alto         |  6.1 | Puede comprometer sesiones y credenciales               |

## 12.1 Justificación del orden

**Command Injection** se prioriza en primer lugar porque permite ejecución de comandos sobre el sistema operativo. Esto implica un compromiso más amplio que puede afectar infraestructura, disponibilidad y continuidad operacional.

**SQL Injection** se ubica en segundo lugar porque compromete directamente la base de datos clínica y la información médica almacenada.

**XSS Reflected** se ubica en tercer lugar porque requiere interacción del usuario y su impacto técnico es menor; sin embargo, sigue siendo prioritario debido al riesgo de robo de sesiones y suplantación de usuarios.

---

# 13. Estrategias de Tratamiento

| Riesgo                 | Estrategia             | Acción principal                        | Urgencia  |
| ---------------------- | ---------------------- | --------------------------------------- | --------- |
| R-03 Command Injection | Mitigar inmediatamente | Eliminar ejecución insegura de comandos | Inmediata |
| R-01 SQL Injection     | Mitigar inmediatamente | Implementar consultas parametrizadas    | Inmediata |
| R-02 XSS Reflected     | Reducir                | Codificación de salida y CSP            | Alta      |

---

# 14. Tratamiento Propuesto por Riesgo

---

## 14.1 Tratamiento R-03: Command Injection

### Estrategia

Mitigación inmediata.

### Acciones recomendadas

* Eliminar llamadas directas a comandos del sistema operativo.
* Utilizar APIs seguras del lenguaje.
* Aplicar listas blancas estrictas.
* Restringir privilegios del servicio web.
* Implementar monitoreo de procesos.
* Segmentar servidores críticos.
* Aplicar hardening del sistema operativo.

### Riesgo residual esperado

Con los controles aplicados, el riesgo podría reducirse desde **crítico** a **medio**, siempre que se elimine la causa raíz y se mantenga monitoreo permanente.

---

## 14.2 Tratamiento R-01: SQL Injection

### Estrategia

Mitigación inmediata.

### Acciones recomendadas

* Implementar consultas parametrizadas.
* Evitar concatenación directa de SQL.
* Validar entradas de usuario.
* Restringir permisos de la cuenta de base de datos.
* Monitorear errores SQL.
* Mantener respaldos verificados.
* Realizar pruebas de seguridad periódicas.

### Riesgo residual esperado

Con consultas parametrizadas y controles adecuados, el riesgo podría reducirse desde **crítico** a **bajo o medio**, dependiendo del nivel de exposición del portal.

---

## 14.3 Tratamiento R-02: XSS Reflected

### Estrategia

Reducción del riesgo.

### Acciones recomendadas

* Validar entradas.
* Codificar salidas.
* Implementar Content Security Policy.
* Configurar cookies con `HttpOnly`, `Secure` y `SameSite`.
* Establecer expiración de sesiones.
* Monitorear intentos de inyección de scripts.

### Riesgo residual esperado

Con codificación de salida, CSP y gestión segura de sesiones, el riesgo podría reducirse desde **alto** a **bajo o medio**.

---

# 15. Riesgo Residual Esperado

| Riesgo                 | Nivel inicial | Controles principales                                               | Nivel residual esperado |
| ---------------------- | ------------- | ------------------------------------------------------------------- | ----------------------- |
| R-03 Command Injection | Crítico       | Validación estricta, APIs seguras, menor privilegio, WAF, monitoreo | Medio                   |
| R-01 SQL Injection     | Crítico       | Consultas parametrizadas, validación, menor privilegio, monitoreo   | Bajo / Medio            |
| R-02 XSS Reflected     | Alto          | Codificación de salida, CSP, cookies seguras, monitoreo             | Bajo / Medio            |

El riesgo residual corresponde al nivel de riesgo que permanece después de aplicar controles. No significa que el riesgo desaparece completamente, sino que queda reducido a un nivel más aceptable para la organización.

---

# 16. Responsables Sugeridos

| Actividad                       | Responsable sugerido           |
| ------------------------------- | ------------------------------ |
| Corrección de código vulnerable | Equipo de desarrollo           |
| Revisión de base de datos       | Administrador de base de datos |
| Configuración de WAF            | Equipo TI / Seguridad          |
| Monitoreo de eventos            | Equipo de seguridad            |
| Gestión de respaldos            | Infraestructura                |
| Validación de controles         | Auditoría / Seguridad          |
| Priorización ejecutiva          | Jefatura TI / Dirección        |

---

# 17. Conexión con Controles y Recuperación

La matriz de riesgo sirve como base para los documentos posteriores del informe.

| Documento                   | Relación con esta matriz                                                              |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `07_controles_anajul.md`    | Define políticas de prevención y controles de mitigación para los riesgos priorizados |
| `08_recuperacion_anajul.md` | Establece medidas de recuperación y continuidad frente a incidentes                   |
| `09_prompts_anajul.md`      | Documentará el uso de IA para apoyar análisis, correcciones y desarrollo              |

---

# 18. Conclusión

La matriz de riesgo permitió priorizar las vulnerabilidades identificadas durante la auditoría de seguridad web realizada sobre el portal de clientes de Clínica Vista Hermosa.

Los resultados muestran que **Command Injection** y **SQL Injection** representan riesgos críticos, debido a su alta probabilidad de explotación y a su impacto directo sobre servidores, bases de datos clínicas e información médica sensible.

Por otra parte, **XSS Reflected** se clasifica como riesgo alto. Aunque su severidad técnica CVSS es menor, su impacto para el negocio sigue siendo relevante debido a la posibilidad de comprometer sesiones, credenciales y confianza de usuarios del portal.

Desde una perspectiva de negocio, los riesgos identificados no son aceptables para una institución de salud privada. La clínica debe priorizar la mitigación inmediata de Command Injection y SQL Injection, y abordar XSS Reflected mediante controles de validación, codificación y gestión segura de sesiones.

La matriz demuestra que una vulnerabilidad técnica puede convertirse en un riesgo crítico cuando afecta activos sensibles, continuidad operacional y confianza de pacientes. Por ello, la gestión del riesgo debe mantenerse como un proceso continuo dentro de la estrategia de seguridad de Clínica Vista Hermosa.
