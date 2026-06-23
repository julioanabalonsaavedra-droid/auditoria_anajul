# Controles de Seguridad y Medidas de Mitigación

# Clínica Vista Hermosa

---

# 1. Introducción

La identificación de vulnerabilidades es solo una parte del proceso de auditoría de seguridad. Una vez detectados los riesgos, la organización debe definir medidas concretas para prevenir, mitigar, monitorear y responder ante posibles incidentes.

En el caso de **Clínica Vista Hermosa**, la implementación de controles de seguridad resulta crítica debido a la sensibilidad de la información administrada por el portal de clientes. La organización procesa datos médicos, fichas clínicas, diagnósticos, resultados de exámenes, credenciales de acceso y datos personales de pacientes.

Por esta razón, las medidas propuestas en este documento buscan proteger los principios fundamentales de la seguridad de la información:

* **Confidencialidad:** impedir el acceso no autorizado a información médica.
* **Integridad:** evitar modificaciones indebidas sobre registros clínicos.
* **Disponibilidad:** asegurar que los servicios digitales estén operativos cuando sean requeridos.

Los controles definidos se orientan a las tres vulnerabilidades evaluadas durante la auditoría:

* SQL Injection.
* XSS Reflected.
* Command Injection.

Además, se consideran controles generales de acceso, monitoreo, protección de datos, capacitación y gestión continua de vulnerabilidades.

---

# 2. Objetivo del Documento

El objetivo de este documento es proponer políticas de prevención y controles de mitigación concretos para los riesgos identificados en el portal de clientes de Clínica Vista Hermosa.

Los objetivos específicos son:

* Definir controles preventivos para evitar la explotación de vulnerabilidades.
* Proponer controles de mitigación para reducir el impacto de un incidente.
* Relacionar cada control con los riesgos priorizados en la matriz.
* Establecer responsables sugeridos para su implementación.
* Alinear las recomendaciones con buenas prácticas reconocidas por la industria.
* Fortalecer la seguridad del portal de clientes y de la infraestructura asociada.

---

# 3. Diferencia entre Prevención y Mitigación

Para efectos de esta auditoría, se diferencia entre **prevención** y **mitigación**.

## 3.1 Prevención

La prevención busca evitar que la vulnerabilidad exista o pueda ser explotada. Ataca directamente la causa raíz del problema.

Ejemplos:

* Uso de consultas parametrizadas.
* Validación estricta de entradas.
* Codificación de salida.
* Eliminación de ejecución directa de comandos.
* Aplicación del principio de menor privilegio.

## 3.2 Mitigación

La mitigación busca reducir el impacto en caso de que exista una vulnerabilidad o se produzca un intento de explotación.

Ejemplos:

* Web Application Firewall.
* Monitoreo de logs.
* Alertas de seguridad.
* Segmentación de red.
* Copias de seguridad.
* Sistemas IDS/IPS.

Ambos enfoques son necesarios. La prevención reduce la probabilidad del incidente, mientras que la mitigación disminuye sus consecuencias.

---

# 4. Marcos de Referencia Utilizados

Las recomendaciones propuestas se alinean con buenas prácticas reconocidas en seguridad de la información.

## 4.1 OWASP

OWASP entrega recomendaciones para el desarrollo seguro de aplicaciones web. Sus lineamientos son especialmente relevantes para vulnerabilidades como SQL Injection, XSS y Command Injection.

Las medidas propuestas se relacionan con:

* Validación de entradas.
* Consultas parametrizadas.
* Codificación de salida.
* Gestión segura de sesiones.
* Reducción de privilegios.
* Protección contra fallas de inyección.

## 4.2 NIST Cybersecurity Framework

El marco NIST organiza la gestión de ciberseguridad en cinco funciones:

* Identificar.
* Proteger.
* Detectar.
* Responder.
* Recuperar.

Los controles de este documento se vinculan principalmente con las funciones de protección, detección y respuesta.

## 4.3 CIS Controls

Los controles CIS entregan prácticas concretas para fortalecer la seguridad operacional de sistemas e infraestructura.

Las recomendaciones de este informe se relacionan con:

* Control de accesos.
* Gestión de vulnerabilidades.
* Monitoreo de logs.
* Protección de datos.
* Configuración segura.
* Respuesta ante incidentes.

---

# 5. Relación con la Matriz de Riesgo

Los controles propuestos se priorizan según la matriz de riesgo construida para Clínica Vista Hermosa.

| Riesgo | Vulnerabilidad    | Nivel   | Prioridad | Tratamiento esperado  |
| ------ | ----------------- | ------- | --------- | --------------------- |
| R-03   | Command Injection | Crítico | 1         | Mitigación inmediata  |
| R-01   | SQL Injection     | Crítico | 2         | Mitigación inmediata  |
| R-02   | XSS Reflected     | Alto    | 3         | Reducción prioritaria |

Los riesgos críticos deben abordarse primero, ya que comprometen activos esenciales como servidores, bases de datos clínicas, fichas médicas y continuidad operacional.

---

# 6. Controles para SQL Injection

---

## 6.1 Riesgo Asociado

SQL Injection permite manipular consultas a bases de datos mediante entradas maliciosas. En Clínica Vista Hermosa, esta vulnerabilidad podría comprometer fichas clínicas, diagnósticos, resultados de exámenes, datos personales y credenciales de acceso.

| Elemento          | Detalle                                       |
| ----------------- | --------------------------------------------- |
| Riesgo asociado   | R-01                                          |
| Nivel de riesgo   | Crítico                                       |
| Activo principal  | Base de datos clínica                         |
| Impacto principal | Exposición o alteración de información médica |

---

## 6.2 Causa Raíz

La causa raíz de SQL Injection es construir consultas SQL utilizando directamente datos ingresados por usuarios sin separar los datos de las instrucciones SQL.

Esto permite que una entrada maliciosa modifique la lógica de la consulta ejecutada por la base de datos.

---

## 6.3 Políticas de Prevención

### 6.3.1 Uso obligatorio de consultas parametrizadas

Todas las consultas hacia la base de datos deben realizarse mediante consultas parametrizadas o prepared statements.

Esto permite separar los datos ingresados por el usuario de las instrucciones SQL, evitando que una entrada maliciosa sea interpretada como código.

### 6.3.2 Prohibición de concatenación directa de SQL

Se debe prohibir la construcción de consultas mediante concatenación directa de variables ingresadas por usuarios.

Ejemplo inseguro conceptual:

```sql
SELECT * FROM pacientes WHERE id = '" + entradaUsuario + "';
```

Ejemplo seguro conceptual:

```sql
SELECT * FROM pacientes WHERE id = ?;
```

### 6.3.3 Validación estricta de entradas

Todo campo debe validar:

* Tipo de dato esperado.
* Longitud máxima.
* Formato permitido.
* Caracteres autorizados.
* Reglas de negocio asociadas.

Si un campo espera un número, debe aceptar únicamente números. Si espera un RUT, debe validar el formato correspondiente.

### 6.3.4 Principio de menor privilegio en base de datos

La cuenta utilizada por la aplicación no debe tener privilegios administrativos.

Debe contar solo con los permisos necesarios para cumplir su función.

Ejemplos:

* Evitar cuentas root o administrador.
* Separar cuentas por módulo.
* Limitar permisos de eliminación.
* Restringir modificación de tablas críticas.
* Registrar operaciones sensibles.

### 6.3.5 Manejo seguro de errores

La aplicación no debe mostrar errores SQL detallados al usuario final, ya que estos pueden entregar información útil a un atacante.

Los errores deben registrarse internamente y mostrarse al usuario mediante mensajes genéricos.

---

## 6.4 Controles de Mitigación

### 6.4.1 Web Application Firewall

Implementar un WAF con reglas para detectar patrones comunes de SQL Injection, como:

* Comillas sospechosas.
* Operadores lógicos anómalos.
* Condiciones siempre verdaderas.
* Intentos de unión de consultas.
* Errores SQL repetidos.

El WAF no reemplaza la corrección del código, pero permite reducir intentos de explotación mientras se aplican soluciones definitivas.

### 6.4.2 Monitoreo de consultas anómalas

Registrar y analizar eventos relacionados con consultas inusuales.

Se deben monitorear:

* Acceso masivo a registros.
* Consultas fuera de horario habitual.
* Errores SQL frecuentes.
* Solicitudes con patrones de inyección.
* Intentos repetidos desde una misma dirección IP.

### 6.4.3 Alertas automáticas

Configurar alertas ante eventos críticos, como:

* Múltiples errores SQL.
* Búsquedas anómalas.
* Respuestas con gran volumen de registros.
* Intentos repetidos de acceso a tablas sensibles.

### 6.4.4 Respaldos de base de datos

Mantener respaldos periódicos, cifrados y verificados de la base de datos clínica.

Los respaldos permiten recuperar información si ocurre eliminación, corrupción o alteración de registros.

### 6.4.5 Segmentación de base de datos

La base de datos clínica debe estar separada de otros servicios, evitando que el compromiso de una aplicación exponga toda la infraestructura interna.

---

## 6.5 Resultado Esperado

Con estas medidas, el riesgo de SQL Injection debería disminuir desde **crítico** a un nivel **bajo o medio**, siempre que se corrija la causa raíz mediante consultas parametrizadas y validación estricta.

---

# 7. Controles para XSS Reflected

---

## 7.1 Riesgo Asociado

XSS Reflected permite ejecutar JavaScript en el navegador de un usuario. En Clínica Vista Hermosa, esta vulnerabilidad podría afectar pacientes, médicos o personal administrativo que utilicen el portal.

| Elemento          | Detalle                                                    |
| ----------------- | ---------------------------------------------------------- |
| Riesgo asociado   | R-02                                                       |
| Nivel de riesgo   | Alto                                                       |
| Activo principal  | Credenciales y sesiones                                    |
| Impacto principal | Robo de sesiones, manipulación de contenido o suplantación |

---

## 7.2 Causa Raíz

La causa raíz de XSS Reflected es reflejar datos ingresados por el usuario dentro de una página web sin aplicar validación de entrada ni codificación de salida.

El navegador interpreta el contenido como código ejecutable en lugar de tratarlo como texto.

---

## 7.3 Políticas de Prevención

### 7.3.1 Validación de entradas

Los formularios y parámetros de URL deben validar todo dato ingresado por el usuario.

Se debe verificar:

* Longitud máxima.
* Tipo de dato.
* Caracteres permitidos.
* Formato esperado.
* Rechazo de etiquetas HTML no autorizadas.

### 7.3.2 Codificación de salida

Toda información ingresada por usuarios debe codificarse antes de mostrarse en una página HTML.

Caracteres como:

```html
< > " ' /
```

deben representarse de forma segura para que no sean interpretados como código.

### 7.3.3 Content Security Policy

Implementar una política CSP que limite la ejecución de scripts no autorizados.

Una CSP adecuada puede impedir:

* Scripts inline.
* Carga de scripts desde dominios no autorizados.
* Ejecución de código externo malicioso.

### 7.3.4 Prohibición de HTML no controlado

La aplicación no debe renderizar contenido HTML ingresado por usuarios, salvo que exista una necesidad justificada y controles estrictos de sanitización.

### 7.3.5 Uso seguro de frameworks

Los frameworks deben utilizarse siguiendo buenas prácticas. No se deben emplear funciones que inserten HTML sin validación, como renderizado inseguro de contenido dinámico.

---

## 7.4 Controles de Mitigación

### 7.4.1 Cookies con HttpOnly

Configurar cookies de sesión con el atributo `HttpOnly`, para impedir que JavaScript acceda directamente a ellas.

### 7.4.2 Cookies con Secure

Configurar cookies con el atributo `Secure`, asegurando que solo sean transmitidas mediante HTTPS.

### 7.4.3 Cookies con SameSite

Aplicar `SameSite` para reducir riesgos asociados al envío no deseado de cookies en solicitudes externas.

### 7.4.4 Expiración de sesiones

Configurar expiración automática de sesiones inactivas, especialmente en cuentas de médicos y personal administrativo.

### 7.4.5 Regeneración de sesión

Regenerar identificadores de sesión después del inicio de sesión para reducir riesgos de fijación de sesión.

### 7.4.6 Monitoreo de parámetros sospechosos

Registrar intentos de uso de:

* Etiquetas `<script>`.
* Eventos JavaScript.
* Redirecciones externas.
* Carga de recursos no autorizados.
* Parámetros con caracteres anómalos.

### 7.4.7 Educación de usuarios

Capacitar a funcionarios para no abrir enlaces sospechosos, especialmente si provienen de correos externos o mensajes no verificados.

---

## 7.5 Resultado Esperado

Con validación de entradas, codificación de salida, CSP y cookies seguras, el riesgo de XSS Reflected debería disminuir desde **alto** a un nivel **bajo o medio**.

---

# 8. Controles para Command Injection

---

## 8.1 Riesgo Asociado

Command Injection permite ejecutar comandos del sistema operativo desde una aplicación web vulnerable. En Clínica Vista Hermosa, esto podría comprometer servidores, servicios clínicos, logs, bases de datos e infraestructura tecnológica.

| Elemento          | Detalle                                                         |
| ----------------- | --------------------------------------------------------------- |
| Riesgo asociado   | R-03                                                            |
| Nivel de riesgo   | Crítico                                                         |
| Activo principal  | Servidores institucionales                                      |
| Impacto principal | Compromiso del servidor y afectación de continuidad operacional |

---

## 8.2 Causa Raíz

La causa raíz de Command Injection es incorporar entradas de usuario directamente dentro de comandos ejecutados por el sistema operativo.

Esto permite que caracteres especiales o separadores de comandos sean interpretados por la shell del servidor.

---

## 8.3 Políticas de Prevención

### 8.3.1 Evitar ejecución directa de comandos

La aplicación debe evitar ejecutar comandos del sistema operativo cuando existan alternativas seguras dentro del lenguaje de programación o framework utilizado.

### 8.3.2 Uso de APIs seguras

Cuando se requiera realizar una acción del sistema, se deben utilizar APIs seguras que no invoquen una shell ni permitan interpretación de caracteres especiales.

### 8.3.3 Validación mediante lista blanca

Si la aplicación espera una dirección IP, dominio o valor específico, debe aceptar únicamente formatos válidos.

Ejemplo de lista blanca para IP:

* Números.
* Puntos.
* Longitud máxima.
* Formato IPv4 o IPv6 válido.
* Rechazo de caracteres como `;`, `&`, `|`, `$`, `` ` ``.

### 8.3.4 Restricción de privilegios del servicio web

El servicio web debe ejecutarse con permisos mínimos.

No debe ejecutarse como administrador, root ni con cuentas que permitan modificar archivos críticos.

### 8.3.5 Separación de funciones críticas

Las funcionalidades que requieren interacción con el sistema operativo deben estar separadas del portal público y protegidas mediante controles adicionales.

---

## 8.4 Controles de Mitigación

### 8.4.1 Web Application Firewall

Implementar reglas WAF para detectar patrones de Command Injection, como:

* Separadores de comandos.
* Operadores encadenados.
* Intentos de lectura de archivos sensibles.
* Parámetros con comandos comunes del sistema.
* Caracteres especiales sospechosos.

### 8.4.2 Monitoreo de procesos

Registrar y revisar procesos ejecutados por el usuario del servidor web.

Se deben detectar:

* Procesos inesperados.
* Comandos ejecutados fuera del comportamiento normal.
* Acceso a archivos sensibles.
* Uso anómalo de CPU o memoria.
* Ejecución de comandos desde rutas no esperadas.

### 8.4.3 IDS e IPS

Implementar sistemas de detección y prevención de intrusiones para identificar actividad anómala en servidores y red.

### 8.4.4 Hardening del servidor

Aplicar configuración segura al servidor:

* Deshabilitar servicios innecesarios.
* Restringir permisos de archivos.
* Limitar acceso remoto.
* Aplicar parches.
* Configurar reglas de firewall.
* Usar cuentas sin privilegios administrativos.

### 8.4.5 Segmentación de red

Separar servidor web, base de datos clínica y sistemas internos en segmentos distintos.

Esto reduce el movimiento lateral si un componente es comprometido.

### 8.4.6 Protección de logs

Los logs deben almacenarse en una ubicación segura, idealmente centralizada, para evitar que un atacante los elimine o modifique después de comprometer el servidor.

### 8.4.7 Respaldo y restauración

Mantener respaldos verificados de configuraciones, aplicaciones y datos críticos.

Estos respaldos permiten recuperar servicios si el servidor resulta comprometido.

---

## 8.5 Resultado Esperado

Con la eliminación de ejecución insegura de comandos, menor privilegio, segmentación y monitoreo, el riesgo de Command Injection debería disminuir desde **crítico** a un nivel **medio**, dependiendo del nivel de exposición del sistema.

---

# 9. Controles Generales de Acceso

La gestión de accesos es fundamental para proteger el portal de pacientes y los sistemas internos de la clínica.

## 9.1 Autenticación Multifactor

Implementar MFA para cuentas de médicos, administrativos y personal TI.

Esto reduce el riesgo de acceso no autorizado incluso si una contraseña es comprometida.

## 9.2 Política de contraseñas

Definir requisitos mínimos:

* Longitud mínima.
* Complejidad adecuada.
* Prohibición de contraseñas comunes.
* Cambio ante sospecha de compromiso.
* Almacenamiento seguro mediante hash robusto.

## 9.3 Control de privilegios

Cada usuario debe contar solo con los permisos necesarios para cumplir su función.

Ejemplos:

* Pacientes solo acceden a su propia información.
* Médicos acceden a información asociada a pacientes bajo su atención.
* Administrativos acceden solo a datos requeridos para gestión.
* TI administra sistemas sin visualizar información clínica salvo necesidad justificada.

## 9.4 Bloqueo por intentos fallidos

Aplicar bloqueo temporal ante múltiples intentos fallidos de inicio de sesión.

## 9.5 Revisión periódica de cuentas

Revisar cuentas activas, roles y permisos al menos de forma periódica.

Se deben deshabilitar cuentas que ya no correspondan a usuarios activos.

---

# 10. Controles de Protección de Información Médica

La información médica debe protegerse con controles adicionales debido a su sensibilidad.

## 10.1 Cifrado en tránsito

Toda comunicación entre usuarios y portal debe realizarse mediante HTTPS.

## 10.2 Cifrado en reposo

Bases de datos, respaldos y archivos sensibles deben protegerse mediante cifrado.

## 10.3 Clasificación de información

La información debe clasificarse según su sensibilidad:

* Pública.
* Interna.
* Confidencial.
* Clínica sensible.

## 10.4 Registro de acceso a fichas clínicas

Todo acceso a fichas clínicas debe quedar registrado.

El registro debe incluir:

* Usuario.
* Fecha y hora.
* Paciente consultado.
* Acción realizada.
* Dirección IP.
* Resultado de la operación.

## 10.5 Control de descarga de documentos

La descarga de exámenes o documentos clínicos debe estar controlada, registrada y limitada según el rol del usuario.

---

# 11. Controles de Monitoreo y Detección

La detección temprana permite reducir el impacto de incidentes.

## 11.1 Centralización de logs

Los logs del portal, base de datos y servidores deben centralizarse en una plataforma segura.

## 11.2 SIEM

Implementar una herramienta SIEM para correlacionar eventos de seguridad.

Esto permite detectar patrones que de forma aislada podrían pasar desapercibidos.

## 11.3 Alertas automáticas

Configurar alertas para:

* Múltiples intentos fallidos.
* Errores SQL repetidos.
* Intentos XSS.
* Ejecución de comandos anómalos.
* Accesos fuera de horario.
* Descargas masivas.
* Cambios de privilegios.

## 11.4 Revisión periódica de eventos

El equipo TI o de seguridad debe revisar periódicamente los eventos relevantes.

No basta con registrar logs si estos no son analizados.

---

# 12. Gestión de Vulnerabilidades

La clínica debe mantener un proceso continuo de identificación y corrección de vulnerabilidades.

## 12.1 Escaneos periódicos

Realizar análisis periódicos sobre el portal y servicios asociados.

## 12.2 Pruebas después de cambios

Cada actualización relevante del portal debe ser acompañada por pruebas de seguridad.

## 12.3 Gestión de parches

Mantener actualizados:

* Sistema operativo.
* Frameworks.
* Librerías.
* Motor de base de datos.
* Servidor web.
* Dependencias del proyecto.

## 12.4 Registro de vulnerabilidades

Toda vulnerabilidad detectada debe documentarse con:

* Descripción.
* Riesgo asociado.
* Responsable.
* Fecha de detección.
* Estado.
* Fecha de corrección.
* Evidencia de validación.

---

# 13. Capacitación y Concientización

La seguridad no depende únicamente de herramientas técnicas. Los usuarios también forman parte del control.

## 13.1 Capacitación a desarrolladores

Los desarrolladores deben recibir capacitación en:

* SQL Injection.
* XSS.
* Command Injection.
* Validación de entradas.
* Codificación segura.
* Gestión segura de errores.
* Uso de frameworks de forma segura.

## 13.2 Capacitación a funcionarios

Médicos, administrativos y personal interno deben ser capacitados en:

* Uso seguro del portal.
* Protección de credenciales.
* Detección de correos sospechosos.
* Riesgos de phishing.
* Reporte de incidentes.
* Buenas prácticas de seguridad.

## 13.3 Simulaciones y ejercicios

Realizar ejercicios internos para evaluar la respuesta ante incidentes y mejorar la cultura de seguridad.

---

# 14. Plan de Implementación Propuesto

| Prioridad | Control                                 | Riesgo asociado              | Responsable sugerido        | Plazo         |
| --------- | --------------------------------------- | ---------------------------- | --------------------------- | ------------- |
| Crítica   | Eliminar ejecución insegura de comandos | Command Injection            | Desarrollo / TI             | Inmediato     |
| Crítica   | Implementar consultas parametrizadas    | SQL Injection                | Desarrollo                  | Inmediato     |
| Alta      | Codificación de salida y CSP            | XSS Reflected                | Desarrollo / Seguridad      | Corto plazo   |
| Alta      | Restringir privilegios del servicio web | Command Injection            | Infraestructura             | Corto plazo   |
| Alta      | Configurar WAF                          | SQLi, XSS, Command Injection | Seguridad / Infraestructura | Corto plazo   |
| Alta      | Activar monitoreo centralizado          | Todos                        | TI / Seguridad              | Corto plazo   |
| Media     | Implementar MFA                         | Credenciales                 | TI                          | Mediano plazo |
| Media     | Segmentar red y base de datos           | SQLi, Command Injection      | Infraestructura             | Mediano plazo |
| Media     | Capacitar usuarios y desarrolladores    | Todos                        | Seguridad / Jefatura TI     | Permanente    |
| Media     | Gestión continua de vulnerabilidades    | Todos                        | Seguridad / Auditoría       | Permanente    |

---

# 15. Indicadores de Cumplimiento

Para verificar la efectividad de los controles se proponen los siguientes indicadores:

| Indicador                                            | Objetivo                                |
| ---------------------------------------------------- | --------------------------------------- |
| Porcentaje de consultas parametrizadas               | 100% en módulos críticos                |
| Formularios con validación de entradas               | 100%                                    |
| Cookies con HttpOnly, Secure y SameSite              | 100%                                    |
| Servicios ejecutados sin privilegios administrativos | 100%                                    |
| Logs centralizados                                   | Portal, base de datos y servidores      |
| Tiempo de respuesta ante alertas críticas            | Menor a 4 horas                         |
| Frecuencia de revisión de vulnerabilidades           | Mensual o después de cambios relevantes |
| Respaldos verificados                                | Según política de recuperación          |

---

# 16. Riesgo Residual Esperado

Después de implementar los controles propuestos, se espera reducir los riesgos de la siguiente forma:

| Riesgo            | Nivel inicial | Controles principales                                             | Nivel residual esperado |
| ----------------- | ------------- | ----------------------------------------------------------------- | ----------------------- |
| Command Injection | Crítico       | APIs seguras, menor privilegio, WAF, monitoreo, segmentación      | Medio                   |
| SQL Injection     | Crítico       | Consultas parametrizadas, validación, menor privilegio, monitoreo | Bajo / Medio            |
| XSS Reflected     | Alto          | Codificación de salida, CSP, cookies seguras, monitoreo           | Bajo / Medio            |

El riesgo residual debe ser aceptado formalmente por la organización solo si se encuentra dentro de niveles tolerables.

---

# 17. Beneficios Esperados

La implementación de estos controles permitirá:

* Reducir la superficie de ataque.
* Disminuir la probabilidad de explotación.
* Proteger información médica sensible.
* Aumentar la confianza de pacientes y funcionarios.
* Mejorar la capacidad de detección.
* Reducir tiempos de respuesta ante incidentes.
* Fortalecer la continuidad operacional.
* Alinear la seguridad con buenas prácticas de la industria.

---

# 18. Conclusión

Los controles propuestos permiten abordar de manera integral los riesgos identificados durante la auditoría del portal de clientes de Clínica Vista Hermosa.

Las vulnerabilidades SQL Injection, XSS Reflected y Command Injection requieren controles específicos, ya que cada una posee causas, impactos y mecanismos de explotación distintos.

SQL Injection debe abordarse mediante consultas parametrizadas, validación de entradas, menor privilegio y monitoreo de base de datos. XSS Reflected requiere codificación de salida, validación, CSP y gestión segura de sesiones. Command Injection exige eliminar la ejecución insegura de comandos, restringir privilegios, segmentar sistemas y monitorear procesos del servidor.

Desde una perspectiva organizacional, estos controles no solo protegen sistemas tecnológicos, sino también la privacidad de los pacientes, la continuidad de los servicios clínicos y la confianza institucional.

La seguridad debe mantenerse como un proceso continuo, con revisiones periódicas, capacitación, monitoreo y mejora constante. Para una institución de salud privada, proteger la información médica es una responsabilidad estratégica y no solo una obligación técnica.
