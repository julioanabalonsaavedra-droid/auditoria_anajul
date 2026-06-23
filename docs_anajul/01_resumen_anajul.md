# Auditoría de Seguridad Web

# Clínica Vista Hermosa

---

# 1. Resumen Ejecutivo

La presente auditoría de seguridad web tiene como finalidad evaluar las principales vulnerabilidades que podrían afectar el portal de clientes de **Clínica Vista Hermosa**, institución ficticia perteneciente al rubro de **salud privada**. Este portal representa un activo crítico para la organización, ya que permite la gestión y consulta de información médica sensible, incluyendo fichas clínicas, resultados de exámenes, diagnósticos, antecedentes de tratamiento, datos personales de pacientes y credenciales de acceso.

En el contexto de una institución de salud, la seguridad de la información no solo cumple una función técnica, sino también operacional, ética y reputacional. La información médica posee un alto nivel de sensibilidad debido a que está directamente relacionada con la privacidad, la atención y el bienestar de los pacientes. Por esta razón, cualquier vulnerabilidad que permita el acceso no autorizado, la modificación indebida o la interrupción de los servicios puede generar consecuencias graves para la organización.

La auditoría se desarrolló en un ambiente controlado mediante el uso de **DVWA (Damn Vulnerable Web Application)**, una aplicación deliberadamente vulnerable utilizada con fines educativos para comprender, demostrar y analizar fallas de seguridad web. Las pruebas fueron ejecutadas siguiendo un enfoque ético y académico, sin intervenir sistemas reales ni infraestructura productiva.

Durante el proceso se analizaron tres vulnerabilidades principales:

* **SQL Injection**, orientada a demostrar cómo una entrada maliciosa puede alterar consultas a bases de datos.
* **Cross Site Scripting Reflected (XSS Reflected)**, orientada a demostrar la ejecución de código JavaScript en el navegador de un usuario.
* **Command Injection**, orientada a demostrar la ejecución de comandos del sistema operativo desde una aplicación web vulnerable.

La explotación controlada de estas vulnerabilidades permitió identificar escenarios de riesgo relevantes para Clínica Vista Hermosa. En particular, se evidenció que una falla técnica puede transformarse en un riesgo de negocio cuando afecta activos críticos como bases de datos clínicas, servidores, sesiones de usuario, fichas médicas y sistemas de atención.

El análisis realizado no se limita a describir los ataques, sino que busca relacionar cada vulnerabilidad con sus posibles impactos sobre la **confidencialidad**, **integridad** y **disponibilidad** de la información. Además, se proponen medidas de prevención, controles de mitigación y acciones de recuperación orientadas a fortalecer la postura de seguridad de la organización.

Desde una perspectiva ejecutiva, los hallazgos de esta auditoría demuestran que el portal de clientes de una clínica privada debe contar con controles robustos de validación de entradas, protección de sesiones, restricción de privilegios, monitoreo continuo, respaldo de información y planes de recuperación ante incidentes. La seguridad del portal no debe ser considerada un elemento secundario, sino una condición esencial para proteger la confianza de los pacientes y asegurar la continuidad de los servicios clínicos.

---

# 2. Descripción de la Organización

## 2.1 Nombre de la empresa

**Clínica Vista Hermosa**

## 2.2 Rubro

**Salud privada**

## 2.3 Tipo de sistema evaluado

El sistema evaluado corresponde al **portal de clientes** de la organización. Este portal permite representar, dentro del entorno de laboratorio, una plataforma web utilizada por pacientes, médicos y personal administrativo para acceder o gestionar información clínica.

## 2.4 Información administrada por el portal

El portal de clientes de Clínica Vista Hermosa custodia información de alto valor, entre la que se considera:

* Fichas clínicas electrónicas.
* Resultados de exámenes médicos.
* Diagnósticos clínicos.
* Historiales de tratamientos.
* Datos personales de pacientes.
* Información de médicos y especialistas.
* Credenciales de acceso de usuarios.
* Información administrativa asociada a prestaciones de salud.

La sensibilidad de estos datos hace que la seguridad del sistema sea prioritaria. Una filtración, modificación o pérdida de información podría afectar directamente a pacientes, funcionarios y a la propia continuidad operacional de la clínica.

---

# 3. Contexto de Seguridad

Las organizaciones del sector salud se encuentran expuestas a múltiples amenazas informáticas debido al valor de la información que manejan. A diferencia de otros rubros, una clínica administra datos que no solo identifican a una persona, sino que también revelan antecedentes médicos, diagnósticos, tratamientos y condiciones de salud.

Esto convierte a los sistemas clínicos en objetivos atractivos para actores maliciosos que buscan:

* Obtener información médica confidencial.
* Robar credenciales de acceso.
* Manipular registros o diagnósticos.
* Interrumpir servicios de atención.
* Extorsionar a la organización mediante filtraciones o pérdida de disponibilidad.
* Utilizar información personal para fraudes o ataques de ingeniería social.

En este escenario, una vulnerabilidad web puede generar consecuencias que van más allá del ámbito técnico. Por ejemplo, una inyección SQL no solo representa una falla de programación, sino también una posible exposición masiva de datos médicos. Del mismo modo, una inyección de comandos podría comprometer servidores que soportan sistemas críticos para la atención de pacientes.

Por esta razón, la auditoría se enfoca en transformar cada hallazgo técnico en un análisis de riesgo comprensible para la organización.

---

# 4. Objetivo General

Evaluar vulnerabilidades de seguridad presentes en el portal web de Clínica Vista Hermosa mediante pruebas controladas en DVWA, determinando su impacto potencial sobre los activos críticos de información y proponiendo medidas de prevención, mitigación y recuperación acordes al contexto de una institución de salud privada.

---

# 5. Objetivos Específicos

* Identificar vulnerabilidades web explotables en un ambiente controlado.
* Ejecutar pruebas controladas de SQL Injection, XSS Reflected y Command Injection.
* Documentar evidencia de cada ataque mediante capturas de pantalla.
* Explicar técnicamente por qué funciona cada vulnerabilidad.
* Evaluar la severidad de cada hallazgo mediante CVSS.
* Relacionar cada vulnerabilidad con activos críticos de Clínica Vista Hermosa.
* Analizar el impacto sobre la confidencialidad, integridad y disponibilidad de la información.
* Construir una matriz de riesgo basada en probabilidad e impacto.
* Priorizar los riesgos de acuerdo con su gravedad técnica y su impacto en el negocio.
* Proponer políticas de prevención específicas para cada vulnerabilidad.
* Proponer controles de mitigación concretos y viables.
* Definir medidas de recuperación y continuidad operacional ante incidentes.
* Integrar el informe en una aplicación web desarrollada en React.

---

# 6. Alcance de la Auditoría

La auditoría contempla exclusivamente pruebas realizadas dentro del entorno controlado DVWA. El objetivo no es atacar sistemas reales, sino comprender el comportamiento de vulnerabilidades web comunes y analizar su impacto desde el punto de vista de una organización del sector salud.

Las vulnerabilidades evaluadas son:

## 6.1 SQL Injection

Permite manipular consultas SQL mediante datos ingresados por el usuario. En un escenario real, podría permitir acceso no autorizado a bases de datos clínicas.

## 6.2 XSS Reflected

Permite ejecutar código JavaScript en el navegador de un usuario. En un escenario real, podría facilitar el robo de sesiones, credenciales o la manipulación del contenido visualizado por pacientes o funcionarios.

## 6.3 Command Injection

Permite ejecutar comandos del sistema operativo desde una aplicación vulnerable. En un escenario real, podría comprometer servidores, servicios internos y sistemas críticos de la organización.

---

# 7. Exclusiones del Alcance

Para mantener el carácter ético y académico de la evaluación, se establecen las siguientes exclusiones:

* No se realizaron pruebas sobre sistemas reales de salud.
* No se atacaron servidores externos ni infraestructura de terceros.
* No se utilizaron datos reales de pacientes.
* No se realizaron pruebas destructivas.
* No se intentó persistencia, escalamiento real de privilegios ni exfiltración de información real.
* No se modificaron sistemas productivos.

Todas las pruebas fueron realizadas con fines defensivos y de aprendizaje.

---

# 8. Importancia de la Seguridad de la Información

La seguridad de la información se basa en proteger los activos digitales de la organización frente a accesos no autorizados, alteraciones indebidas o interrupciones del servicio.

En Clínica Vista Hermosa, esta protección debe garantizar tres principios fundamentales:

## 8.1 Confidencialidad

La confidencialidad asegura que solo personas autorizadas puedan acceder a la información médica. Su incumplimiento podría provocar filtración de fichas clínicas, diagnósticos, exámenes y datos personales.

## 8.2 Integridad

La integridad asegura que la información no sea modificada de manera no autorizada. En una clínica, una alteración de diagnósticos, tratamientos o resultados médicos podría afectar directamente la calidad de atención.

## 8.3 Disponibilidad

La disponibilidad asegura que los sistemas estén operativos cuando sean requeridos. La interrupción del portal o de sistemas clínicos podría afectar la atención de pacientes, la entrega de resultados y la continuidad administrativa.

---

# 9. Activos Críticos Relacionados

Durante la auditoría se consideran especialmente relevantes los siguientes activos:

| Activo                       | Importancia para la clínica                         | Riesgo principal                        |
| ---------------------------- | --------------------------------------------------- | --------------------------------------- |
| Fichas clínicas electrónicas | Contienen historial médico y antecedentes sensibles | Exposición o modificación no autorizada |
| Resultados de exámenes       | Apoyan decisiones médicas y diagnósticos            | Alteración o acceso indebido            |
| Base de datos clínica        | Centraliza información médica y administrativa      | Filtración masiva de datos              |
| Credenciales de acceso       | Permiten ingreso al portal y sistemas internos      | Robo de cuentas y suplantación          |
| Servidores institucionales   | Soportan el funcionamiento del portal               | Compromiso total del sistema            |
| Portal de pacientes          | Canal de acceso digital para usuarios               | Ataques web y robo de sesiones          |

---

# 10. Resumen de Vulnerabilidades Evaluadas

| Vulnerabilidad    | Descripción                                | Posible impacto en Clínica Vista Hermosa                              |
| ----------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| SQL Injection     | Manipulación de consultas a bases de datos | Exposición masiva de fichas clínicas, diagnósticos y datos personales |
| XSS Reflected     | Ejecución de scripts en el navegador       | Robo de sesiones, credenciales o manipulación del portal              |
| Command Injection | Ejecución de comandos en el servidor       | Compromiso del servidor y afectación de la continuidad operacional    |

---

# 11. Metodología Utilizada

La auditoría se desarrolló mediante una metodología ordenada, compuesta por las siguientes etapas:

1. Identificación del contexto de negocio.
2. Definición de activos críticos.
3. Ejecución controlada de ataques en DVWA.
4. Obtención y organización de evidencias.
5. Análisis técnico de cada vulnerabilidad.
6. Evaluación de severidad mediante CVSS.
7. Identificación del impacto sobre confidencialidad, integridad y disponibilidad.
8. Construcción de matriz de riesgo.
9. Priorización de vulnerabilidades.
10. Propuesta de políticas de prevención.
11. Propuesta de controles de mitigación.
12. Definición de medidas de recuperación.
13. Integración del contenido en una aplicación React.

---

# 12. Criterios de Evaluación del Riesgo

Para evaluar el riesgo asociado a cada vulnerabilidad se consideran dos variables principales:

## 12.1 Probabilidad

Representa la posibilidad de que la vulnerabilidad sea explotada. Se consideran factores como facilidad de explotación, necesidad de privilegios, interacción del usuario y exposición del sistema.

## 12.2 Impacto

Representa las consecuencias que tendría la explotación de la vulnerabilidad para la organización. En el caso de Clínica Vista Hermosa, el impacto se analiza considerando información médica, continuidad operacional, confianza de pacientes y posibles consecuencias legales o reputacionales.

---

# 13. Resultados Generales Esperados

Como resultado de la auditoría se espera entregar:

* Un informe técnico en formato Markdown.
* Evidencias de explotación de las vulnerabilidades.
* Clasificación CVSS de cada hallazgo.
* Identificación de activos críticos.
* Matriz de riesgo con mapa de calor.
* Políticas de prevención.
* Controles de mitigación.
* Plan de recuperación y mejora tecnológica.
* Aplicación web React para presentar el informe.
* Bitácora de uso de inteligencia artificial.

---

# 14. Valor del Informe para la Organización

Este informe permite a Clínica Vista Hermosa comprender cómo fallas técnicas en una aplicación web pueden transformarse en riesgos concretos para el negocio.

Su valor principal consiste en:

* Traducir vulnerabilidades técnicas a consecuencias organizacionales.
* Priorizar riesgos de acuerdo con su impacto.
* Proponer medidas concretas de mejora.
* Fortalecer la cultura de seguridad.
* Apoyar la toma de decisiones en materia de ciberseguridad.
* Mejorar la protección de información clínica sensible.

---

# 15. Conclusión

La auditoría realizada demuestra que las vulnerabilidades web representan una amenaza relevante para organizaciones que administran información sensible, especialmente en el sector salud.

En el caso de Clínica Vista Hermosa, vulnerabilidades como SQL Injection, XSS Reflected y Command Injection podrían comprometer información médica confidencial, afectar la continuidad operacional y dañar la confianza de pacientes y funcionarios.

El análisis desarrollado permite concluir que la seguridad del portal de clientes debe abordarse mediante una estrategia integral que incluya prevención, mitigación, monitoreo, respuesta ante incidentes y recuperación operacional.

La protección de los datos clínicos no debe considerarse únicamente una obligación técnica, sino una responsabilidad institucional asociada a la calidad del servicio, la privacidad de los pacientes y la continuidad de la atención médica.

Por lo tanto, Clínica Vista Hermosa debe mantener un proceso permanente de evaluación y mejora de sus controles de seguridad, priorizando los riesgos críticos identificados y fortaleciendo su capacidad de respuesta frente a incidentes futuros.