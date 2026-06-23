# Identificación de Activos de Información

# Clínica Vista Hermosa

---

# 1. Introducción

La identificación de activos de información es una etapa fundamental dentro de la gestión de riesgos en seguridad informática. Antes de evaluar amenazas o proponer controles, es necesario comprender qué elementos poseen valor para la organización, qué información almacenan, qué procesos soportan y qué consecuencias tendría su compromiso.

Un activo de información corresponde a cualquier recurso que almacena, procesa, transmite o protege información relevante para el funcionamiento de una organización. En el caso de una institución de salud privada, estos activos adquieren un nivel de criticidad elevado debido al carácter sensible de la información médica y personal que administran.

En **Clínica Vista Hermosa**, los activos de información están directamente relacionados con la atención de pacientes, la gestión clínica, la continuidad operacional y la confianza institucional. Por esta razón, su protección debe abordarse considerando los principios de **confidencialidad**, **integridad** y **disponibilidad**.

La presente sección identifica los principales activos del portal de clientes de Clínica Vista Hermosa, los clasifica según su naturaleza, evalúa su criticidad y los relaciona con las vulnerabilidades analizadas durante la auditoría:

* SQL Injection.
* XSS Reflected.
* Command Injection.

---

# 2. Contexto Organizacional

**Clínica Vista Hermosa** es una organización ficticia perteneciente al rubro de salud privada. Su portal de clientes permite representar un sistema web utilizado para entregar servicios digitales a pacientes, médicos y personal administrativo.

Entre las funciones principales del portal se consideran:

* Consulta de fichas clínicas electrónicas.
* Acceso a resultados de exámenes.
* Visualización de diagnósticos médicos.
* Revisión de antecedentes de tratamientos.
* Gestión de datos personales de pacientes.
* Acceso de usuarios mediante credenciales.
* Comunicación entre pacientes y la institución.
* Soporte a procesos administrativos de atención.

Debido a la naturaleza del rubro, los activos asociados al portal no pueden considerarse genéricos. La información médica posee un nivel de sensibilidad superior, ya que su exposición o alteración puede afectar directamente la privacidad de los pacientes, la calidad de atención, la operación de la clínica y su reputación.

---

# 3. Criterios de Clasificación de Activos

Para organizar el análisis, los activos fueron clasificados de acuerdo con su función dentro de la organización.

| Categoría                  | Descripción                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Activos de información     | Datos clínicos, personales, administrativos o de seguridad                         |
| Activos de software        | Aplicaciones, portales y sistemas que procesan información                         |
| Activos de infraestructura | Servidores, bases de datos, redes y componentes tecnológicos                       |
| Activos humanos            | Usuarios, funcionarios y equipos responsables del uso o administración del sistema |
| Activos de continuidad     | Elementos necesarios para mantener los servicios operativos                        |

Esta clasificación permite comprender que la seguridad no depende solamente de proteger archivos o bases de datos, sino también de resguardar sistemas, personas, procesos y servicios asociados.

---

# 4. Principios de Seguridad Aplicados

La evaluación de activos se basa en tres principios fundamentales de seguridad de la información.

## 4.1 Confidencialidad

Garantiza que la información solo sea accesible por personas autorizadas.

En una clínica, este principio es fundamental porque los datos médicos pertenecen a la vida privada de los pacientes.

## 4.2 Integridad

Garantiza que la información sea exacta, completa y no sea modificada de manera no autorizada.

En salud, la integridad es crítica porque médicos y especialistas toman decisiones basadas en registros clínicos, resultados de exámenes y diagnósticos.

## 4.3 Disponibilidad

Garantiza que los sistemas y datos estén accesibles cuando sean requeridos.

En Clínica Vista Hermosa, la disponibilidad es esencial para mantener la atención de pacientes, acceso a antecedentes médicos y continuidad operacional.

---

# 5. Inventario de Activos Críticos

A continuación, se identifican los activos más relevantes del portal de clientes de Clínica Vista Hermosa.

---

## 5.1 Activo A-01: Fichas Clínicas Electrónicas

| Campo                  | Detalle                       |
| ---------------------- | ----------------------------- |
| Código                 | A-01                          |
| Nombre                 | Fichas clínicas electrónicas  |
| Categoría              | Información clínica           |
| Responsable sugerido   | Dirección médica / Área de TI |
| Criticidad             | Muy alta                      |
| Principio más afectado | Confidencialidad e integridad |

### Descripción

Las fichas clínicas electrónicas contienen el historial médico de los pacientes atendidos por la clínica. Incluyen antecedentes médicos, diagnósticos, tratamientos, indicaciones, evolución clínica y otros registros asociados a la atención.

### Información contenida

* Diagnósticos médicos.
* Antecedentes clínicos.
* Tratamientos indicados.
* Medicamentos.
* Historial de atenciones.
* Observaciones médicas.
* Datos personales asociados al paciente.

### Importancia para la clínica

Este activo es uno de los más críticos, ya que respalda la atención médica y permite a los profesionales tomar decisiones clínicas informadas.

### Impacto si es comprometido

Si este activo es expuesto, alterado o eliminado, la clínica podría enfrentar consecuencias graves, como vulneración de privacidad, pérdida de confianza, errores de atención y daño reputacional.

---

## 5.2 Activo A-02: Resultados de Exámenes Médicos

| Campo                  | Detalle                        |
| ---------------------- | ------------------------------ |
| Código                 | A-02                           |
| Nombre                 | Resultados de exámenes médicos |
| Categoría              | Información clínica            |
| Responsable sugerido   | Laboratorio / Área médica / TI |
| Criticidad             | Muy alta                       |
| Principio más afectado | Integridad y confidencialidad  |

### Descripción

Corresponde a la información generada por laboratorios, imagenología u otras áreas clínicas. Estos resultados son utilizados por médicos para confirmar diagnósticos, definir tratamientos y realizar seguimiento a pacientes.

### Información contenida

* Exámenes de sangre.
* Informes de laboratorio.
* Radiografías.
* Ecografías.
* Resonancias.
* Informes médicos.
* Resultados históricos.

### Importancia para la clínica

La exactitud de los resultados de exámenes es esencial para la calidad de la atención. Una alteración de esta información podría provocar decisiones médicas incorrectas.

### Impacto si es comprometido

La exposición afectaría la privacidad del paciente. La modificación podría afectar la seguridad clínica, ya que un médico podría interpretar información alterada como válida.

---

## 5.3 Activo A-03: Diagnósticos Médicos

| Campo                  | Detalle                       |
| ---------------------- | ----------------------------- |
| Código                 | A-03                          |
| Nombre                 | Diagnósticos médicos          |
| Categoría              | Información clínica sensible  |
| Responsable sugerido   | Dirección médica              |
| Criticidad             | Muy alta                      |
| Principio más afectado | Confidencialidad e integridad |

### Descripción

Los diagnósticos médicos representan conclusiones clínicas realizadas por profesionales de salud. Esta información posee un alto nivel de sensibilidad, ya que puede revelar condiciones personales, enfermedades o tratamientos en curso.

### Información contenida

* Diagnóstico principal.
* Diagnósticos secundarios.
* Observaciones clínicas.
* Indicaciones médicas.
* Evolución del paciente.

### Importancia para la clínica

Los diagnósticos permiten dar continuidad a la atención médica y respaldan decisiones clínicas posteriores.

### Impacto si es comprometido

Una filtración podría afectar gravemente la privacidad del paciente. Una modificación indebida podría alterar el tratamiento o generar errores administrativos y clínicos.

---

## 5.4 Activo A-04: Datos Personales de Pacientes

| Campo                  | Detalle                       |
| ---------------------- | ----------------------------- |
| Código                 | A-04                          |
| Nombre                 | Datos personales de pacientes |
| Categoría              | Información personal          |
| Responsable sugerido   | Administración / TI           |
| Criticidad             | Alta                          |
| Principio más afectado | Confidencialidad              |

### Descripción

Corresponde a la información identificatoria utilizada para registrar, contactar y administrar a los pacientes dentro de la clínica.

### Información contenida

* Nombre completo.
* RUT.
* Dirección.
* Teléfono.
* Correo electrónico.
* Fecha de nacimiento.
* Datos de contacto de emergencia.

### Importancia para la clínica

Permite la correcta identificación y comunicación con los pacientes. También se vincula con procesos administrativos y de atención.

### Impacto si es comprometido

Puede ser utilizada para suplantación de identidad, fraude, phishing o ataques dirigidos contra pacientes.

---

## 5.5 Activo A-05: Credenciales de Acceso

| Campo                  | Detalle                       |
| ---------------------- | ----------------------------- |
| Código                 | A-05                          |
| Nombre                 | Credenciales de acceso        |
| Categoría              | Seguridad de acceso           |
| Responsable sugerido   | Área TI / Seguridad           |
| Criticidad             | Muy alta                      |
| Principio más afectado | Confidencialidad e integridad |

### Descripción

Las credenciales permiten autenticar usuarios en el portal. Incluyen cuentas de pacientes, médicos, administrativos y personal TI.

### Información contenida

* Nombre de usuario.
* Correo asociado.
* Contraseña o hash de contraseña.
* Rol o perfil de acceso.
* Identificador de sesión.
* Permisos asociados.

### Importancia para la clínica

Las credenciales controlan quién puede acceder a cada sistema o información. Si son comprometidas, un atacante podría suplantar usuarios legítimos.

### Impacto si es comprometido

El compromiso de credenciales podría permitir acceso no autorizado a información médica, modificación de datos, robo de sesiones o escalamiento de privilegios.

---

## 5.6 Activo A-06: Base de Datos Clínica

| Campo                  | Detalle                                       |
| ---------------------- | --------------------------------------------- |
| Código                 | A-06                                          |
| Nombre                 | Base de datos clínica                         |
| Categoría              | Infraestructura de información                |
| Responsable sugerido   | Administrador de base de datos / TI           |
| Criticidad             | Muy alta                                      |
| Principio más afectado | Confidencialidad, integridad y disponibilidad |

### Descripción

La base de datos clínica almacena y organiza la información médica, personal y administrativa utilizada por el portal.

### Información contenida

* Fichas clínicas.
* Datos personales.
* Resultados de exámenes.
* Diagnósticos.
* Cuentas de usuario.
* Registros administrativos.

### Importancia para la clínica

Es el repositorio central de información. Su compromiso podría afectar simultáneamente múltiples servicios y procesos.

### Impacto si es comprometido

Puede provocar filtración masiva de datos, alteración de registros, pérdida de información, interrupción de servicios y daño reputacional.

---

## 5.7 Activo A-07: Portal de Pacientes

| Campo                  | Detalle                           |
| ---------------------- | --------------------------------- |
| Código                 | A-07                              |
| Nombre                 | Portal de pacientes               |
| Categoría              | Software / Aplicación web         |
| Responsable sugerido   | Equipo de desarrollo / TI         |
| Criticidad             | Alta                              |
| Principio más afectado | Disponibilidad y confidencialidad |

### Descripción

Es la interfaz web mediante la cual los usuarios interactúan con los servicios digitales de la clínica.

### Funciones principales

* Inicio de sesión.
* Consulta de información médica.
* Visualización de resultados.
* Gestión de datos personales.
* Acceso a información administrativa.

### Importancia para la clínica

Permite entregar servicios digitales y mejorar la experiencia de pacientes y funcionarios.

### Impacto si es comprometido

Un ataque podría afectar la confianza de los usuarios, permitir robo de sesiones, exposición de información o caída del servicio.

---

## 5.8 Activo A-08: Servidores Institucionales

| Campo                  | Detalle                     |
| ---------------------- | --------------------------- |
| Código                 | A-08                        |
| Nombre                 | Servidores institucionales  |
| Categoría              | Infraestructura tecnológica |
| Responsable sugerido   | Infraestructura / TI        |
| Criticidad             | Muy alta                    |
| Principio más afectado | Disponibilidad e integridad |

### Descripción

Corresponde a los servidores que alojan aplicaciones, servicios, bases de datos o componentes asociados al portal.

### Importancia para la clínica

Soportan la operación tecnológica de los servicios digitales. Su disponibilidad es clave para mantener el funcionamiento del portal y sistemas relacionados.

### Impacto si es comprometido

El compromiso del servidor puede permitir ejecución de comandos, alteración de archivos, caída de servicios, acceso a configuraciones y movimiento hacia otros sistemas internos.

---

## 5.9 Activo A-09: Logs y Registros de Auditoría

| Campo                  | Detalle                       |
| ---------------------- | ----------------------------- |
| Código                 | A-09                          |
| Nombre                 | Logs y registros de auditoría |
| Categoría              | Información de seguridad      |
| Responsable sugerido   | Equipo TI / Seguridad         |
| Criticidad             | Alta                          |
| Principio más afectado | Integridad y disponibilidad   |

### Descripción

Los logs registran eventos relevantes del sistema, accesos, errores, consultas, cambios y posibles intentos de ataque.

### Importancia para la clínica

Permiten investigar incidentes, detectar actividad sospechosa y reconstruir eventos después de una vulneración.

### Impacto si es comprometido

Si los logs son eliminados o alterados, la clínica perdería trazabilidad y capacidad de investigación ante incidentes.

---

# 6. Evaluación de Criticidad de Activos

La criticidad se evalúa según el impacto potencial sobre la operación de la clínica, la sensibilidad de la información y su relación con la atención de pacientes.

| Código | Activo                         | Confidencialidad | Integridad | Disponibilidad | Criticidad |
| ------ | ------------------------------ | ---------------- | ---------- | -------------- | ---------- |
| A-01   | Fichas clínicas electrónicas   | Muy alta         | Muy alta   | Alta           | Muy alta   |
| A-02   | Resultados de exámenes médicos | Alta             | Muy alta   | Alta           | Muy alta   |
| A-03   | Diagnósticos médicos           | Muy alta         | Muy alta   | Alta           | Muy alta   |
| A-04   | Datos personales de pacientes  | Alta             | Media      | Media          | Alta       |
| A-05   | Credenciales de acceso         | Muy alta         | Alta       | Media          | Muy alta   |
| A-06   | Base de datos clínica          | Muy alta         | Muy alta   | Muy alta       | Muy alta   |
| A-07   | Portal de pacientes            | Media            | Alta       | Alta           | Alta       |
| A-08   | Servidores institucionales     | Alta             | Muy alta   | Muy alta       | Muy alta   |
| A-09   | Logs y registros de auditoría  | Media            | Alta       | Alta           | Alta       |

---

# 7. Relación Vulnerabilidad → Activo

Esta sección relaciona cada vulnerabilidad evaluada con los activos que pone en riesgo.

| Vulnerabilidad       | Activos afectados                  | Tipo de afectación                                                       |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| SQL Injection        | A-01, A-02, A-03, A-04, A-05, A-06 | Acceso no autorizado, filtración, modificación o eliminación de datos    |
| XSS Reflected        | A-04, A-05, A-07                   | Robo de sesiones, suplantación, manipulación de contenido                |
| Command Injection    | A-06, A-07, A-08, A-09             | Ejecución de comandos, compromiso de servidor, interrupción de servicios |
| Robo de credenciales | A-05, A-07                         | Acceso no autorizado a cuentas                                           |
| Malware o ransomware | A-06, A-08, A-09                   | Cifrado, interrupción o pérdida de información                           |
| Error humano         | A-01, A-02, A-04, A-06             | Exposición accidental, pérdida o modificación de datos                   |

---

# 8. Análisis por Vulnerabilidad

## 8.1 SQL Injection

SQL Injection afecta principalmente la **base de datos clínica** y todos los activos almacenados en ella.

### Activos expuestos

* A-01 Fichas clínicas electrónicas.
* A-02 Resultados de exámenes médicos.
* A-03 Diagnósticos médicos.
* A-04 Datos personales de pacientes.
* A-05 Credenciales de acceso.
* A-06 Base de datos clínica.

### Impacto principal

El impacto principal corresponde a la exposición o modificación de información médica sensible.

### Consecuencia para la clínica

Un ataque exitoso podría permitir filtración masiva de datos clínicos, alteración de registros médicos o acceso a credenciales de usuarios.

---

## 8.2 XSS Reflected

XSS Reflected afecta principalmente a los usuarios del portal y a la información visible durante una sesión activa.

### Activos expuestos

* A-04 Datos personales de pacientes.
* A-05 Credenciales de acceso.
* A-07 Portal de pacientes.

### Impacto principal

El impacto principal corresponde al robo de sesiones, manipulación de contenido y posible suplantación de usuarios.

### Consecuencia para la clínica

Un atacante podría engañar a pacientes o funcionarios, comprometer sesiones activas y acceder indirectamente a información sensible visible dentro del portal.

---

## 8.3 Command Injection

Command Injection afecta principalmente la infraestructura tecnológica que soporta el portal.

### Activos expuestos

* A-06 Base de datos clínica.
* A-07 Portal de pacientes.
* A-08 Servidores institucionales.
* A-09 Logs y registros de auditoría.

### Impacto principal

El impacto principal corresponde al compromiso del servidor, ejecución de comandos no autorizados e interrupción de servicios.

### Consecuencia para la clínica

Un ataque exitoso podría permitir control sobre el servidor, caída del portal, alteración de archivos, eliminación de registros o afectación de servicios clínicos.

---

# 9. Matriz de Activos y Principios CIA

| Activo                 | Confidencialidad | Integridad | Disponibilidad | Justificación                                                      |
| ---------------------- | ---------------- | ---------- | -------------- | ------------------------------------------------------------------ |
| Fichas clínicas        | Muy alta         | Muy alta   | Alta           | Contienen información médica sensible y respaldan atención clínica |
| Resultados de exámenes | Alta             | Muy alta   | Alta           | Su alteración puede afectar diagnósticos                           |
| Diagnósticos médicos   | Muy alta         | Muy alta   | Alta           | Información altamente sensible y clínicamente relevante            |
| Datos personales       | Alta             | Media      | Media          | Pueden utilizarse para fraude o suplantación                       |
| Credenciales           | Muy alta         | Alta       | Media          | Permiten acceso a sistemas internos                                |
| Base de datos clínica  | Muy alta         | Muy alta   | Muy alta       | Centraliza información crítica                                     |
| Portal de pacientes    | Media            | Alta       | Alta           | Canal principal de acceso digital                                  |
| Servidores             | Alta             | Muy alta   | Muy alta       | Soportan sistemas y servicios                                      |
| Logs                   | Media            | Alta       | Alta           | Permiten investigación y trazabilidad                              |

---

# 10. Amenazas Asociadas por Activo

| Activo                 | Amenazas principales                                      |
| ---------------------- | --------------------------------------------------------- |
| Fichas clínicas        | SQL Injection, robo de credenciales, acceso no autorizado |
| Resultados de exámenes | SQL Injection, modificación no autorizada, error humano   |
| Diagnósticos médicos   | SQL Injection, alteración de registros, acceso indebido   |
| Datos personales       | SQL Injection, XSS, phishing, robo de credenciales        |
| Credenciales           | XSS, phishing, fuerza bruta, filtración de base de datos  |
| Base de datos clínica  | SQL Injection, Command Injection, ransomware              |
| Portal de pacientes    | XSS, fallas de autenticación, indisponibilidad            |
| Servidores             | Command Injection, malware, mala configuración            |
| Logs                   | Eliminación, alteración, falta de monitoreo               |

---

# 11. Riesgos Específicos para la Industria de Salud

La industria de salud presenta riesgos particulares debido a la naturaleza de los datos tratados.

## 11.1 Exposición de información médica

La filtración de fichas clínicas, diagnósticos o exámenes puede afectar directamente la privacidad y dignidad de los pacientes.

## 11.2 Alteración de información clínica

La modificación de información médica puede afectar decisiones de atención, seguimiento de tratamientos o interpretación de resultados.

## 11.3 Interrupción de servicios clínicos

La caída de sistemas puede retrasar atenciones, impedir consultas de antecedentes y afectar procesos internos.

## 11.4 Pérdida de confianza

Los pacientes esperan que una institución de salud proteja adecuadamente su información. Un incidente puede provocar daño reputacional significativo.

## 11.5 Uso malicioso de datos personales

Los datos personales y de contacto pueden ser utilizados para ataques de phishing, fraude o suplantación.

---

# 12. Priorización de Activos

Considerando sensibilidad, impacto operacional y relación con las vulnerabilidades evaluadas, los activos se priorizan de la siguiente manera:

| Prioridad | Activo                       | Motivo                                         |
| --------- | ---------------------------- | ---------------------------------------------- |
| 1         | Base de datos clínica        | Centraliza información médica y administrativa |
| 2         | Fichas clínicas electrónicas | Contienen información médica crítica           |
| 3         | Servidores institucionales   | Soportan continuidad del portal y servicios    |
| 4         | Credenciales de acceso       | Permiten ingreso a sistemas y datos sensibles  |
| 5         | Resultados de exámenes       | Apoyan decisiones médicas                      |
| 6         | Diagnósticos médicos         | Información clínica sensible                   |
| 7         | Portal de pacientes          | Canal de acceso digital                        |
| 8         | Datos personales             | Riesgo de fraude o suplantación                |
| 9         | Logs de auditoría            | Soportan investigación y trazabilidad          |

---

# 13. Controles Generales Asociados a los Activos

| Activo                 | Control recomendado                                              |
| ---------------------- | ---------------------------------------------------------------- |
| Base de datos clínica  | Consultas parametrizadas, cifrado, respaldos, control de accesos |
| Fichas clínicas        | Control de privilegios, auditoría de accesos, cifrado            |
| Resultados de exámenes | Validación de integridad, control de cambios, respaldo           |
| Credenciales           | MFA, hashing seguro, políticas de contraseña                     |
| Portal de pacientes    | Validación de entradas, CSP, pruebas de seguridad                |
| Servidores             | Hardening, monitoreo, segmentación, parches                      |
| Logs                   | Centralización, protección contra alteración, retención segura   |

---

# 14. Relación con la Matriz de Riesgo

Los activos identificados serán utilizados como base para la matriz de riesgo del informe.

La relación principal queda definida de la siguiente manera:

| Riesgo | Vulnerabilidad    | Activo principal           | Nivel esperado |
| ------ | ----------------- | -------------------------- | -------------- |
| R-01   | SQL Injection     | Base de datos clínica      | Crítico        |
| R-02   | XSS Reflected     | Credenciales y sesiones    | Alto           |
| R-03   | Command Injection | Servidores institucionales | Crítico        |

Esta relación permite priorizar los riesgos de forma coherente con el impacto que cada vulnerabilidad tendría sobre la operación de Clínica Vista Hermosa.

---

# 15. Conclusión

La identificación de activos permitió determinar cuáles son los elementos más importantes para la operación y seguridad de Clínica Vista Hermosa.

Los activos más críticos corresponden a la base de datos clínica, fichas clínicas electrónicas, servidores institucionales, credenciales de acceso, resultados de exámenes y diagnósticos médicos. Todos ellos se encuentran directamente relacionados con la atención de pacientes y la protección de información sensible.

El análisis demuestra que las vulnerabilidades evaluadas no afectan únicamente componentes técnicos, sino que pueden comprometer activos esenciales para la continuidad operacional de la clínica.

SQL Injection representa un riesgo crítico para la base de datos clínica y la información médica almacenada. XSS Reflected representa un riesgo alto para sesiones de usuario, credenciales y confianza en el portal. Command Injection representa un riesgo crítico para servidores institucionales, sistemas clínicos y disponibilidad del servicio.

Por lo tanto, la protección de estos activos debe ser considerada una prioridad estratégica. La clínica debe implementar controles técnicos, administrativos y operacionales que permitan reducir la probabilidad de incidentes, proteger la información médica y mantener la continuidad de sus servicios.
