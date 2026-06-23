# Bitácora de Uso de Inteligencia Artificial

# Clínica Vista Hermosa

---

# 1. Introducción

Durante el desarrollo de la auditoría de seguridad web para **Clínica Vista Hermosa**, se utilizó inteligencia artificial como herramienta de apoyo para organizar información, mejorar redacción técnica, estructurar el informe, revisar coherencia con la rúbrica y construir componentes de la aplicación React.

El uso de IA no reemplazó el trabajo del estudiante, sino que sirvió como apoyo para comprender mejor las vulnerabilidades, ordenar los hallazgos, mejorar la presentación del contenido y relacionar los ataques realizados en DVWA con riesgos reales para una empresa del rubro de salud privada.

La auditoría se enfocó en tres vulnerabilidades principales:

* SQL Injection.
* XSS Reflected.
* Command Injection.

Además, se desarrollaron secciones relacionadas con activos de información, matriz de riesgo, controles de seguridad, recuperación ante incidentes y presentación del informe mediante React.

---

# 2. Objetivo del Uso de IA

El objetivo del uso de inteligencia artificial fue apoyar el proceso de construcción del informe y la aplicación web, manteniendo una revisión crítica del contenido generado.

La IA fue utilizada para:

* Ordenar la estructura del informe.
* Mejorar la redacción de los archivos Markdown.
* Profundizar el análisis técnico de vulnerabilidades.
* Relacionar vulnerabilidades con activos de una clínica privada.
* Apoyar la creación de la matriz de riesgo.
* Proponer controles de prevención y mitigación.
* Mejorar el plan de recuperación ante incidentes.
* Corregir problemas de rutas, imágenes y componentes React.
* Revisar el cumplimiento de la rúbrica.
* Documentar el proceso de trabajo.

---

# 3. Herramienta Utilizada

| Elemento              | Detalle                                                                  |
| --------------------- | ------------------------------------------------------------------------ |
| Herramienta utilizada | ChatGPT                                                                  |
| Uso principal         | Apoyo en redacción, análisis, estructura, React y revisión según rúbrica |
| Proyecto              | auditoria_anajul                                                         |
| Empresa asignada      | Clínica Vista Hermosa                                                    |
| Rubro                 | Salud privada                                                            |
| Formato del informe   | Markdown + React                                                         |
| Entorno de pruebas    | DVWA                                                                     |
| Despliegue esperado   | GitHub + Vercel                                                          |

---

# 4. Criterio de Uso Responsable

El contenido generado con IA fue revisado antes de incorporarse al informe.

No se aceptó automáticamente toda la información entregada. Se realizaron ajustes para que el contenido cumpliera con:

* La empresa asignada.
* La nomenclatura `anajul`.
* El contexto de salud privada.
* La rúbrica de la evaluación.
* La estructura solicitada por el docente.
* La evidencia obtenida en DVWA.
* La integración con React.

Además, se decidió dejar esta bitácora para el final del trabajo, con el objetivo de documentar el proceso real seguido durante la construcción del proyecto.

---

# 5. Prompts Utilizados y Resultados

---

## Prompt 1: Definición de la empresa asignada y estructura inicial

### Prompt utilizado

```text
E02 Clínica Vista Hermosa Salud privada Fichas clínicas, exámenes, diagnósticos. Haz todo al pie de la letra guiándote por la imagen.
```

### Propósito

Definir correctamente el contexto de la empresa asignada y orientar todo el informe hacia el rubro de salud privada.

### Resultado aceptado

Se aceptó la idea de contextualizar toda la auditoría en torno a una clínica privada que administra fichas clínicas, resultados de exámenes, diagnósticos y datos personales de pacientes.

### Correcciones realizadas

Se corrigió la nomenclatura inicial, ya que el sufijo correcto del proyecto era `anajul`.

### Aplicación en el informe

Esta información fue utilizada principalmente en:

* `01_resumen_anajul.md`
* `05_activos_anajul.md`
* `06_matriz_anajul.md`

---

## Prompt 2: Corrección de nomenclatura del proyecto

### Prompt utilizado

```text
Es anajul por si acaso.
```

### Propósito

Corregir el sufijo utilizado en carpetas, archivos, imágenes y proyecto.

### Resultado aceptado

Se ajustó la estructura para que todos los archivos utilizaran el sufijo correcto:

```text
anajul
```

### Correcciones realizadas

Se reemplazaron nombres anteriores incorrectos por:

```text
auditoria_anajul
docs_anajul
img_anajul
01_resumen_anajul.md
02_sqli_anajul.md
03_xss_anajul.md
04_comandos_anajul.md
05_activos_anajul.md
06_matriz_anajul.md
07_controles_anajul.md
08_recuperacion_anajul.md
09_prompts_anajul.md
```

### Aplicación en el informe

La corrección se aplicó a todo el proyecto.

---

## Prompt 3: Redacción del resumen ejecutivo

### Prompt utilizado

```text
Necesito que el markdown esté bien definido y explicado, mucho más.
```

### Propósito

Mejorar el archivo de resumen para que no fuera genérico, sino formal, completo y contextualizado.

### Resultado aceptado

Se aceptó una versión ampliada del resumen ejecutivo, incluyendo:

* Descripción de Clínica Vista Hermosa.
* Contexto de seguridad en salud privada.
* Objetivo general.
* Objetivos específicos.
* Alcance.
* Exclusiones.
* Activos críticos.
* Resumen de vulnerabilidades.
* Metodología.
* Conclusión.

### Correcciones realizadas

Se solicitó que el contenido fuera entregado en formato Markdown, para poder copiarlo directamente al archivo correspondiente.

### Aplicación en el informe

Archivo utilizado:

```text
01_resumen_anajul.md
```

---

## Prompt 4: Desarrollo de SQL Injection

### Prompt utilizado

```text
Sigue con el SQLi.
```

### Propósito

Extender y profesionalizar el análisis de la vulnerabilidad SQL Injection.

### Resultado aceptado

Se aceptó una versión más completa del archivo, incluyendo:

* Identificación del hallazgo.
* Descripción técnica.
* Payload utilizado.
* Evidencia.
* Explicación de por qué funciona la vulnerabilidad.
* Causa raíz.
* Impacto para Clínica Vista Hermosa.
* Activos afectados.
* Evaluación CVSS.
* Relación con la matriz de riesgo.
* Políticas de prevención.
* Controles de mitigación.
* Marcos de referencia.
* Plan de acción.

### Correcciones realizadas

Se ajustó el contenido para diferenciar prevención de mitigación y para relacionar el riesgo con fichas clínicas, base de datos médica, resultados de exámenes y credenciales.

### Aplicación en el informe

Archivo utilizado:

```text
02_sqli_anajul.md
```

---

## Prompt 5: Desarrollo de XSS Reflected

### Prompt utilizado

```text
Sigue con XSS.
```

### Propósito

Mejorar el análisis de XSS Reflected, enfocándolo en el impacto sobre usuarios, sesiones y credenciales.

### Resultado aceptado

Se aceptó una estructura más profesional, incluyendo:

* Identificación del hallazgo.
* Descripción general.
* Evidencia del ataque.
* Explicación técnica.
* Escenario de ataque real.
* Activos afectados.
* Impacto sobre confidencialidad, integridad y disponibilidad.
* Evaluación CVSS.
* Diferencia entre severidad técnica y riesgo de negocio.
* Políticas de prevención.
* Controles de mitigación.
* Marcos de referencia.

### Correcciones realizadas

Se ajustó la severidad para explicar que, aunque el CVSS técnico es medio, el riesgo para una clínica puede ser alto por el compromiso de sesiones y datos sensibles.

### Aplicación en el informe

Archivo utilizado:

```text
03_xss_anajul.md
```

---

## Prompt 6: Desarrollo de Command Injection

### Prompt utilizado

```text
Sigue con comandos.
```

### Propósito

Extender el análisis de Command Injection, considerando su impacto sobre servidores e infraestructura.

### Resultado aceptado

Se aceptó una versión más completa que incluyó:

* Identificación del hallazgo.
* Descripción técnica.
* Payload utilizado.
* Explicación del uso de separadores de comandos.
* Causa raíz.
* Activos afectados.
* Consecuencias operacionales.
* Evaluación CVSS.
* Relación con matriz de riesgo.
* Políticas de prevención.
* Controles de mitigación.
* Plan de respuesta ante incidente.
* Recomendaciones técnicas.

### Correcciones realizadas

Se reforzó que Command Injection debe priorizarse por encima de otras vulnerabilidades debido al riesgo de compromiso del servidor y afectación de la continuidad operacional.

### Aplicación en el informe

Archivo utilizado:

```text
04_comandos_anajul.md
```

---

## Prompt 7: Identificación de activos

### Prompt utilizado

```text
Sigue con activos.
```

### Propósito

Mejorar el archivo de activos para cumplir con la rúbrica de la Entrega B, que exige activos vinculados a la industria y relación vulnerabilidad-activo.

### Resultado aceptado

Se aceptó una estructura más completa, incluyendo:

* Contexto organizacional.
* Clasificación de activos.
* Principios CIA.
* Inventario de activos críticos.
* Evaluación de criticidad.
* Relación vulnerabilidad-activo.
* Priorización de activos.
* Controles generales asociados.

### Correcciones realizadas

Se aumentó la cantidad de activos y se conectaron directamente con el rubro de salud privada.

### Aplicación en el informe

Archivo utilizado:

```text
05_activos_anajul.md
```

---

## Prompt 8: Matriz de riesgo

### Prompt utilizado

```text
Entonces hazme el markdown de nuevo agregando las cosas.
```

### Propósito

Mejorar la matriz de riesgo para que incluyera justificación de valores, priorización, relación con CVSS y mapa de calor.

### Resultado aceptado

Se aceptó una versión más profesional con:

* Metodología de evaluación.
* Escala de probabilidad.
* Escala de impacto.
* Escala de clasificación.
* Resumen ejecutivo de riesgos.
* Mapa de calor.
* Evaluación individual de riesgos.
* Comparación CVSS vs matriz.
* Priorización de vulnerabilidades.
* Estrategias de tratamiento.
* Riesgo residual esperado.

### Correcciones realizadas

Se agregó una matriz visual con colores en React para cumplir mejor con la rúbrica.

### Aplicación en el informe

Archivo utilizado:

```text
06_matriz_anajul.md
```

---

## Prompt 9: Controles de seguridad

### Prompt utilizado

```text
Sigue con controles.
```

### Propósito

Extender el archivo de controles, separando claramente prevención y mitigación.

### Resultado aceptado

Se aceptó una versión más completa que incluyó:

* Diferencia entre prevención y mitigación.
* Marcos de referencia OWASP, NIST y CIS.
* Controles para SQL Injection.
* Controles para XSS Reflected.
* Controles para Command Injection.
* Controles generales de acceso.
* Protección de información médica.
* Monitoreo y detección.
* Gestión de vulnerabilidades.
* Capacitación.
* Plan de implementación.
* Indicadores de cumplimiento.
* Riesgo residual.

### Correcciones realizadas

Se reforzó que los controles no fueran genéricos, sino vinculados directamente a los hallazgos de la auditoría.

### Aplicación en el informe

Archivo utilizado:

```text
07_controles_anajul.md
```

---

## Prompt 10: Recuperación y mejora tecnológica

### Prompt utilizado

```text
Sigue con recuperación.
```

### Propósito

Crear un plan de recuperación más profesional, considerando continuidad operacional y respuesta ante incidentes.

### Resultado aceptado

Se aceptó una versión extendida que incluyó:

* Objetivos del plan.
* Alcance.
* Relación con matriz de riesgo.
* Escenarios de incidente.
* Modelo de respuesta.
* Recuperación específica por vulnerabilidad.
* Política de respaldos.
* RTO y RPO.
* Mejoras tecnológicas.
* Notificación y comunicación.
* Roles y responsabilidades.
* Pruebas de recuperación.
* Hoja de ruta.

### Correcciones realizadas

Se reforzó la relación entre recuperación, salud privada, atención de pacientes e información clínica sensible.

### Aplicación en el informe

Archivo utilizado:

```text
08_recuperacion_anajul.md
```

---

## Prompt 11: Integración con React

### Prompt utilizado

```text
Ahora exactamente siguiendo con los markdowns, no sacando info de ningún lugar más sigamos con los pasos del 6 hasta el 11.
```

### Propósito

Integrar los archivos Markdown al proyecto React sin agregar información externa.

### Resultado aceptado

Se aceptó la creación de componentes React para mostrar cada archivo Markdown:

```text
Resumen.jsx
InyeccionSQL.jsx
XSS.jsx
Comandos.jsx
Activos.jsx
Matriz.jsx
Controles.jsx
Recuperacion.jsx
MarkdownSection.jsx
HeatMap.jsx
```

### Correcciones realizadas

Se ajustó la renderización de Markdown para que los archivos se cargaran desde `docs_anajul` y se mostraran en la aplicación mediante navegación lateral.

### Aplicación en el proyecto

Se aplicó principalmente en:

```text
src/App.jsx
src/App.css
src/components/
```

---

## Prompt 12: Corrección de imágenes en React

### Prompt utilizado

```text
¿Por qué no se ven las imágenes?
```

### Propósito

Solucionar el problema de visualización de capturas dentro del sitio React.

### Resultado aceptado

Se identificó que la carpeta:

```text
public/img_anajul
```

estaba vacía, por lo que React no encontraba las imágenes.

### Correcciones realizadas

Se indicó copiar las evidencias desde:

```text
docs_anajul/img_anajul/
```

hacia:

```text
public/img_anajul/
```

También se recomendó utilizar rutas absolutas en los Markdown:

```markdown
![SQL Injection](/img_anajul/sqli_anajul.png)
![XSS Reflected](/img_anajul/xss_anajul.png)
![Command Injection](/img_anajul/comandos_anajul.png)
```

### Aplicación en el proyecto

Se aplicó a:

```text
02_sqli_anajul.md
03_xss_anajul.md
04_comandos_anajul.md
public/img_anajul/
```

---

## Prompt 13: Revisión según rúbrica

### Prompt utilizado

```text
Arregla las letras y todo hazlo tal cual la rúbrica, ya que el profe es exigente en su máximo esplendor.
```

### Propósito

Mejorar la presentación visual y estructura del sitio para ajustarlo a los criterios de evaluación.

### Resultado aceptado

Se aceptaron mejoras en:

* Tamaños de letra.
* Espaciado.
* Navegación.
* Legibilidad.
* Diseño profesional.
* Mapa de calor visual.
* Checklist de rúbrica.
* Organización de secciones.

### Correcciones realizadas

Se reforzó que lo visual no reemplaza el análisis, pero ayuda a presentar mejor la información en React.

### Aplicación en el proyecto

Se aplicó a:

```text
src/App.jsx
src/App.css
src/components/HeatMap.jsx
CHECKLIST_RUBRICA.md
README.md
```

---

# 6. Contenido Aceptado de la IA

Se aceptó principalmente el apoyo de la IA en:

* Redacción profesional de los informes.
* Organización de secciones.
* Explicación técnica de vulnerabilidades.
* Estructura de tablas.
* Relación vulnerabilidad-activo.
* Construcción de matriz de riesgo.
* Propuesta de controles.
* Plan de recuperación.
* Código base de React.
* Corrección de rutas de imágenes.
* Comandos de Git.

---

# 7. Contenido Corregido por el Estudiante

No todo el contenido generado fue utilizado directamente. Se realizaron correcciones y decisiones propias durante el proceso.

Entre las principales correcciones se encuentran:

* Cambiar el sufijo del proyecto a `anajul`.
* Ajustar la empresa asignada a Clínica Vista Hermosa.
* Mantener la bitácora de IA para el final del trabajo.
* Revisar que los nombres de archivos coincidieran con la pauta.
* Corregir la carpeta `docs.anajul` por `docs_anajul`.
* Identificar que las imágenes no se veían porque `public/img_anajul` estaba vacío.
* Ajustar las rutas de imágenes en Markdown.
* Decidir trabajar con Markdown extendido y no con textos resumidos.
* Organizar commits progresivos para GitHub.
* Verificar que el contenido estuviera orientado al rubro de salud privada.

---

# 8. Correcciones Técnicas Realizadas

Durante el trabajo también se corrigieron problemas técnicos relacionados con el proyecto.

| Problema detectado                | Corrección realizada                       |
| --------------------------------- | ------------------------------------------ |
| Carpeta documental mal nombrada   | Se cambió `docs.anajul` por `docs_anajul`  |
| Sufijo incorrecto                 | Se utilizó `anajul` en archivos y carpetas |
| Imágenes no visibles en React     | Se copiaron a `public/img_anajul`          |
| Rutas relativas no funcionaban    | Se usaron rutas `/img_anajul/nombre.png`   |
| Pantalla inicial de Vite          | Se reemplazó por interfaz de auditoría     |
| Falta de mapa de calor visual     | Se creó componente `HeatMap.jsx`           |
| Markdown no renderizado           | Se instaló y utilizó `react-markdown`      |
| Falta de estructura por secciones | Se crearon componentes individuales        |

---

# 9. Validación del Contenido

El contenido fue validado según los siguientes criterios:

* Que cada vulnerabilidad tuviera explicación técnica.
* Que cada ataque incluyera payload y evidencia.
* Que cada vulnerabilidad tuviera CVSS.
* Que los controles fueran específicos y no genéricos.
* Que existiera separación entre prevención y mitigación.
* Que los activos estuvieran vinculados al rubro de salud privada.
* Que la matriz incluyera probabilidad, impacto y priorización.
* Que el mapa de calor fuera visible en React.
* Que la recuperación incluyera respaldos, restauración y notificación.
* Que la aplicación React mostrara las secciones del informe.

---

# 10. Relación con la Rúbrica

| Criterio                        | Cómo se abordó                                                             |
| ------------------------------- | -------------------------------------------------------------------------- |
| Evidencia de los 3 ataques      | Se incluyeron imágenes, payloads y pies descriptivos                       |
| Explicación técnica y CVSS      | Cada vulnerabilidad incluye explicación, causa raíz, vector y puntaje CVSS |
| Políticas de prevención         | Se definieron políticas específicas por vulnerabilidad                     |
| Controles de mitigación         | Se propusieron controles concretos y marcos OWASP, CIS y NIST              |
| Activos y riesgos por industria | Se identificaron activos clínicos y se relacionaron con vulnerabilidades   |
| Matriz de riesgo                | Se creó matriz probabilidad × impacto y mapa de calor                      |
| Priorización                    | Se priorizaron Command Injection, SQL Injection y XSS                      |
| Recuperación                    | Se definió plan con respaldo, restauración, notificación, RTO y RPO        |
| Entrega web                     | Se integró el informe en React                                             |
| Bitácora IA                     | Se documentaron prompts, usos, correcciones y reflexión                    |

---

# 11. Reflexión Final

El uso de inteligencia artificial fue útil para mejorar la calidad del informe, ordenar las ideas y transformar pruebas técnicas realizadas en DVWA en un análisis de riesgo más completo para una empresa del sector salud.

La IA permitió acelerar la redacción y estructuración de los archivos Markdown, pero fue necesario revisar, corregir y adaptar el contenido para que coincidiera con la empresa asignada, la nomenclatura exigida y los criterios de la rúbrica.

Uno de los aprendizajes más importantes fue que una vulnerabilidad técnica no debe analizarse de forma aislada. En el caso de Clínica Vista Hermosa, cada hallazgo debía relacionarse con activos reales del rubro, como fichas clínicas, diagnósticos, resultados de exámenes, credenciales y servidores institucionales.

También se aprendió que el uso de IA debe ser dirigido. Los mejores resultados se obtuvieron cuando los prompts fueron específicos, mencionando la empresa, la vulnerabilidad, el archivo a trabajar o el problema técnico a resolver.

Además, se comprobó que la responsabilidad final del trabajo sigue siendo del estudiante. La IA puede sugerir contenido, código o estructura, pero es necesario validar que las rutas funcionen, que las imágenes se vean, que los nombres de archivos sean correctos y que el informe cumpla realmente con lo solicitado.

En conclusión, la inteligencia artificial fue una herramienta de apoyo importante para desarrollar el informe y la aplicación React, pero el resultado final dependió de la revisión crítica, las correcciones realizadas y la adaptación del contenido al contexto de Clínica Vista Hermosa.
