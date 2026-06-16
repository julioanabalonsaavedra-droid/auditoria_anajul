# Auditoría de Seguridad Web
# Clínica Vista Hermosa

---

# 1. Resumen Ejecutivo

La presente auditoría de seguridad informática fue desarrollada para evaluar vulnerabilidades existentes en el portal de clientes de Clínica Vista Hermosa, institución perteneciente al sector de salud privada que administra información médica altamente sensible de pacientes, profesionales de la salud y procesos clínicos internos.

En la actualidad, las organizaciones de salud dependen cada vez más de plataformas digitales para gestionar fichas clínicas electrónicas, resultados de exámenes, diagnósticos, tratamientos médicos y datos personales de pacientes. Esta transformación digital ha permitido mejorar la eficiencia operativa y la calidad de atención; sin embargo, también ha incrementado significativamente los riesgos asociados a la ciberseguridad.

La información almacenada por Clínica Vista Hermosa constituye uno de sus activos más valiosos, ya que contiene antecedentes médicos confidenciales cuya exposición, alteración o pérdida podría afectar directamente la privacidad de los pacientes, la continuidad operacional de la organización y su reputación institucional.

Con el objetivo de identificar posibles debilidades de seguridad, se realizó una auditoría utilizando la plataforma DVWA (Damn Vulnerable Web Application), un entorno controlado diseñado para la enseñanza y análisis de vulnerabilidades web. Las pruebas fueron ejecutadas bajo condiciones autorizadas y exclusivamente con fines académicos.

Durante el proceso de auditoría se analizaron tres vulnerabilidades ampliamente reconocidas dentro del ámbito de la seguridad informática:

- SQL Injection (Inyección SQL).
- Cross Site Scripting Reflected (XSS Reflected).
- Command Injection (Inyección de Comandos).

Estas vulnerabilidades forman parte de las amenazas más frecuentes que afectan aplicaciones web y continúan siendo responsables de una gran cantidad de incidentes de seguridad en organizaciones públicas y privadas a nivel mundial.

La explotación controlada de estas vulnerabilidades permitió comprender su funcionamiento, evaluar su impacto potencial sobre los activos de información de la clínica y determinar medidas orientadas a la prevención, mitigación y recuperación frente a posibles incidentes de seguridad.

---

# 2. Descripción de la Organización

## Clínica Vista Hermosa

Clínica Vista Hermosa es una institución privada dedicada a la prestación de servicios médicos y atención de salud especializada.

Su portal de clientes permite a pacientes y personal autorizado acceder a diversos servicios digitales relacionados con la gestión clínica y administrativa.

Entre los principales datos administrados por el portal se encuentran:

- Fichas clínicas electrónicas.
- Resultados de exámenes médicos.
- Diagnósticos clínicos.
- Historiales de tratamientos.
- Datos personales de pacientes.
- Información de médicos y especialistas.
- Credenciales de acceso al sistema.
- Información administrativa asociada a la atención médica.

Debido a la sensibilidad de estos datos, cualquier vulnerabilidad que permita el acceso no autorizado representa un riesgo significativo para la organización.

---

# 3. Contexto de la Auditoría

Las instituciones de salud son objetivos frecuentes de ataques informáticos debido al alto valor de la información que administran.

A diferencia de otros sectores económicos, una clínica almacena información médica que forma parte de la privacidad personal de cada paciente, por lo que su protección resulta fundamental.

Una vulnerabilidad explotada exitosamente podría permitir:

- Acceso no autorizado a información médica.
- Alteración de diagnósticos clínicos.
- Robo de credenciales de usuarios.
- Interrupción de servicios esenciales.
- Divulgación de información confidencial.
- Pérdida de confianza por parte de pacientes y profesionales.

Por esta razón, la evaluación de vulnerabilidades constituye una actividad crítica dentro de cualquier estrategia moderna de seguridad de la información.

---

# 4. Objetivo General

Evaluar vulnerabilidades presentes en el portal web de Clínica Vista Hermosa mediante técnicas de auditoría ejecutadas en un entorno controlado, determinando su impacto potencial sobre la organización y proponiendo medidas de prevención, mitigación y recuperación.

---

# 5. Objetivos Específicos

- Identificar vulnerabilidades presentes en aplicaciones web.
- Comprender técnicamente el funcionamiento de cada vulnerabilidad.
- Analizar los riesgos asociados para la organización.
- Evaluar la gravedad de cada hallazgo mediante la metodología CVSS.
- Determinar los activos críticos afectados.
- Elaborar una matriz de riesgo basada en probabilidad e impacto.
- Proponer controles de prevención y mitigación.
- Definir medidas de recuperación frente a incidentes de seguridad.
- Priorizar acciones correctivas según el nivel de riesgo identificado.

---

# 6. Alcance de la Auditoría

La auditoría considera exclusivamente el análisis de vulnerabilidades dentro del entorno académico DVWA.

Las pruebas realizadas corresponden a:

## SQL Injection

Evaluación de vulnerabilidades relacionadas con la manipulación de consultas a bases de datos mediante entradas maliciosas.

## XSS Reflected

Evaluación de vulnerabilidades que permiten la ejecución de scripts en el navegador de usuarios legítimos.

## Command Injection

Evaluación de vulnerabilidades que permiten la ejecución de comandos del sistema operativo desde una aplicación web.

No se realizaron pruebas sobre sistemas reales ni infraestructura productiva de terceros.

---

# 7. Importancia de la Seguridad de la Información

La seguridad de la información busca proteger los activos digitales de una organización mediante la aplicación de controles técnicos, administrativos y organizacionales.

Para Clínica Vista Hermosa, la protección de la información médica debe garantizar tres principios fundamentales:

## Confidencialidad

Garantizar que únicamente usuarios autorizados tengan acceso a la información clínica y administrativa.

## Integridad

Asegurar que la información almacenada sea exacta y no pueda ser modificada de forma no autorizada.

## Disponibilidad

Garantizar que los sistemas permanezcan operativos cuando sean requeridos por pacientes y profesionales de la salud.

La vulneración de cualquiera de estos principios podría afectar directamente la operación normal de la clínica.

---

# 8. Resumen de Hallazgos

Durante la auditoría fueron identificadas tres vulnerabilidades críticas.

| Vulnerabilidad | Descripción General | Impacto Potencial |
|---------------|--------------------|------------------|
| SQL Injection | Manipulación de consultas SQL | Exposición masiva de datos médicos |
| XSS Reflected | Ejecución de scripts maliciosos | Robo de sesiones y credenciales |
| Command Injection | Ejecución de comandos del sistema | Compromiso total del servidor |

Los hallazgos demuestran la importancia de implementar controles de seguridad adecuados para proteger los sistemas y la información de la organización.

---

# 9. Metodología Utilizada

La auditoría se desarrolló siguiendo las siguientes etapas:

1. Identificación del objetivo de evaluación.
2. Reconocimiento de vulnerabilidades.
3. Ejecución controlada de pruebas.
4. Obtención de evidencias.
5. Análisis técnico de los resultados.
6. Evaluación de gravedad mediante CVSS.
7. Identificación de activos afectados.
8. Construcción de matriz de riesgo.
9. Definición de controles de seguridad.
10. Elaboración de recomendaciones.

---

# 10. Conclusión

Los resultados obtenidos evidencian que las vulnerabilidades web continúan representando una amenaza significativa para organizaciones que administran información sensible.

En el caso de Clínica Vista Hermosa, la explotación exitosa de vulnerabilidades como SQL Injection, XSS Reflected o Command Injection podría comprometer información médica confidencial, afectar la continuidad operacional y generar importantes consecuencias legales y reputacionales.

Por este motivo, resulta indispensable implementar controles de seguridad orientados a la prevención, detección, mitigación y recuperación de incidentes, fortaleciendo así la protección de los activos críticos y la confianza de los pacientes en la organización.

La seguridad de la información debe ser entendida como un proceso continuo que requiere evaluación permanente, actualización tecnológica y compromiso organizacional para enfrentar las amenazas presentes en el entorno digital actual.