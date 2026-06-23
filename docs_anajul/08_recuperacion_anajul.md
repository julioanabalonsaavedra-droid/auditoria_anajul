# Plan de Recuperación y Mejora Tecnológica

# Clínica Vista Hermosa

---

# 1. Introducción

La seguridad de la información no se limita únicamente a prevenir vulnerabilidades. Incluso cuando una organización implementa controles de protección, siempre existe la posibilidad de que ocurra un incidente de seguridad que afecte la confidencialidad, integridad o disponibilidad de sus sistemas.

Por esta razón, las organizaciones deben contar con un plan de recuperación que permita responder de forma ordenada, reducir el impacto del incidente y restaurar los servicios críticos en el menor tiempo posible.

En el caso de **Clínica Vista Hermosa**, la recuperación ante incidentes adquiere especial importancia debido a que los sistemas tecnológicos apoyan procesos relacionados con la atención de pacientes, consulta de fichas clínicas, resultados de exámenes, diagnósticos médicos, credenciales de acceso y servicios administrativos.

Un incidente que afecte el portal de clientes o los servidores institucionales podría interrumpir la atención, impedir el acceso a información médica, generar pérdida de confianza y exponer información altamente sensible.

Este documento presenta un plan de recuperación y mejora tecnológica orientado a fortalecer la continuidad operacional de Clínica Vista Hermosa frente a incidentes relacionados con:

* SQL Injection.
* XSS Reflected.
* Command Injection.
* Compromiso de credenciales.
* Interrupción de servicios.
* Pérdida o alteración de información.
* Afectación de servidores o bases de datos.

---

# 2. Objetivo General

Definir un plan de recuperación y mejora tecnológica para Clínica Vista Hermosa, orientado a responder ante incidentes de seguridad, restaurar servicios críticos, proteger información médica sensible y fortalecer la continuidad operacional del portal de clientes.

---

# 3. Objetivos Específicos

* Establecer un procedimiento de respuesta ante incidentes.
* Definir acciones de contención, erradicación y recuperación.
* Proponer mejoras tecnológicas para reducir el impacto de futuros ataques.
* Definir políticas de respaldo y restauración.
* Establecer prioridades de recuperación según criticidad del servicio.
* Proponer indicadores RTO y RPO.
* Determinar responsables sugeridos para la respuesta.
* Incorporar acciones de notificación y documentación.
* Relacionar el plan con los riesgos identificados en la matriz.
* Fortalecer la resiliencia tecnológica de la organización.

---

# 4. Alcance del Plan

El presente plan aplica al portal de clientes de Clínica Vista Hermosa y a los activos tecnológicos asociados a su funcionamiento.

Incluye:

* Portal de pacientes.
* Base de datos clínica.
* Servidores institucionales.
* Credenciales de acceso.
* Fichas clínicas electrónicas.
* Resultados de exámenes.
* Registros de auditoría.
* Sistemas de respaldo.
* Infraestructura de monitoreo.

No contempla sistemas reales externos, proveedores no definidos ni infraestructura productiva fuera del contexto académico de esta evaluación.

---

# 5. Relación con la Matriz de Riesgo

El plan de recuperación se construye a partir de los riesgos identificados previamente en la matriz.

| ID   | Riesgo            | Nivel   | Activo principal           | Necesidad de recuperación                        |
| ---- | ----------------- | ------- | -------------------------- | ------------------------------------------------ |
| R-01 | SQL Injection     | Crítico | Base de datos clínica      | Restaurar integridad y confidencialidad de datos |
| R-02 | XSS Reflected     | Alto    | Sesiones y credenciales    | Invalidar sesiones y proteger usuarios           |
| R-03 | Command Injection | Crítico | Servidores institucionales | Aislar, limpiar y restaurar infraestructura      |

Los riesgos críticos deben contar con procedimientos de recuperación inmediata, debido a su impacto sobre información médica y continuidad operacional.

---

# 6. Principios del Plan de Recuperación

El plan se basa en cinco principios fundamentales.

## 6.1 Rapidez

La organización debe actuar con rapidez para contener el incidente y evitar que el daño se propague.

## 6.2 Trazabilidad

Todas las acciones realizadas durante el incidente deben quedar registradas para facilitar investigación, auditoría y mejora posterior.

## 6.3 Priorización

Los servicios más críticos deben recuperarse primero, especialmente aquellos relacionados con información médica y atención de pacientes.

## 6.4 Integridad

Antes de restaurar un sistema, se debe validar que los datos no estén alterados y que los respaldos sean confiables.

## 6.5 Mejora continua

Después de cada incidente, la organización debe analizar lo ocurrido y fortalecer sus controles para evitar recurrencias.

---

# 7. Escenarios de Incidente Considerados

## 7.1 Incidente por SQL Injection

Posible acceso no autorizado, filtración, modificación o eliminación de información almacenada en la base de datos clínica.

### Impacto principal

* Exposición de fichas clínicas.
* Alteración de diagnósticos.
* Acceso indebido a resultados de exámenes.
* Compromiso de credenciales.
* Pérdida de integridad de la base de datos.

---

## 7.2 Incidente por XSS Reflected

Posible ejecución de JavaScript en el navegador de pacientes, médicos o funcionarios.

### Impacto principal

* Robo de sesiones.
* Suplantación de usuarios.
* Manipulación del contenido del portal.
* Redirección a sitios maliciosos.
* Pérdida de confianza de usuarios.

---

## 7.3 Incidente por Command Injection

Posible ejecución de comandos del sistema operativo desde la aplicación vulnerable.

### Impacto principal

* Compromiso del servidor.
* Acceso a archivos sensibles.
* Interrupción de servicios.
* Alteración de configuraciones.
* Movimiento lateral hacia otros sistemas.

---

## 7.4 Incidente por pérdida de disponibilidad

Interrupción total o parcial del portal de clientes.

### Impacto principal

* Pacientes sin acceso a información médica.
* Funcionarios sin acceso a servicios administrativos.
* Retrasos en procesos clínicos.
* Aumento de consultas de soporte.
* Daño reputacional.

---

## 7.5 Incidente por compromiso de credenciales

Acceso no autorizado mediante cuentas válidas.

### Impacto principal

* Suplantación de identidad.
* Acceso indebido a información clínica.
* Modificación de datos.
* Escalamiento de privilegios.
* Uso indebido de sistemas internos.

---

# 8. Modelo de Respuesta ante Incidentes

El plan de respuesta se organiza en seis etapas.

---

## 8.1 Preparación

La preparación corresponde a las acciones realizadas antes de que ocurra un incidente.

### Acciones recomendadas

* Mantener inventario de activos críticos.
* Definir responsables de respuesta.
* Mantener respaldos actualizados.
* Configurar monitoreo y alertas.
* Documentar procedimientos de emergencia.
* Capacitar al equipo técnico.
* Realizar pruebas periódicas de recuperación.
* Mantener contactos internos y externos actualizados.

---

## 8.2 Identificación

Consiste en detectar y confirmar que existe un incidente de seguridad.

### Fuentes de detección

* Alertas del SIEM.
* Logs del servidor.
* Reportes de usuarios.
* Alertas del WAF.
* Comportamiento anómalo del portal.
* Errores repetidos en la aplicación.
* Cambios inesperados en archivos o base de datos.
* Aumento inusual de tráfico o consultas.

### Evidencia a recopilar

* Fecha y hora del evento.
* Usuario o IP involucrada.
* Servicio afectado.
* Tipo de actividad detectada.
* Mensajes de error.
* Capturas o registros relevantes.
* Posibles activos comprometidos.

---

## 8.3 Contención

La contención busca detener la propagación del incidente.

### Acciones generales

* Aislar sistemas afectados.
* Deshabilitar temporalmente funciones vulnerables.
* Bloquear direcciones IP sospechosas.
* Revocar sesiones activas.
* Cambiar credenciales comprometidas.
* Restringir accesos administrativos.
* Activar reglas temporales en WAF.
* Notificar al equipo responsable.

### Objetivo

Evitar que el incidente siga afectando sistemas, datos o usuarios mientras se investiga la causa raíz.

---

## 8.4 Erradicación

La erradicación consiste en eliminar la causa del incidente.

### Acciones generales

* Corregir vulnerabilidades en el código.
* Aplicar parches de seguridad.
* Eliminar archivos maliciosos.
* Revisar configuraciones inseguras.
* Reinstalar componentes comprometidos si corresponde.
* Validar permisos de servicios.
* Eliminar cuentas no autorizadas.
* Revisar integridad de archivos y base de datos.

---

## 8.5 Recuperación

La recuperación busca restaurar los servicios afectados de manera segura.

### Acciones generales

* Restaurar datos desde respaldos confiables.
* Verificar integridad de la información.
* Rehabilitar servicios de forma controlada.
* Monitorear actividad posterior.
* Confirmar que la vulnerabilidad fue corregida.
* Validar funcionamiento del portal.
* Confirmar que usuarios legítimos puedan acceder.
* Mantener observación reforzada durante el periodo posterior.

---

## 8.6 Lecciones aprendidas

Después de resolver el incidente, se debe realizar una revisión formal.

### Actividades

* Documentar causa raíz.
* Evaluar efectividad de controles.
* Identificar demoras o errores de respuesta.
* Actualizar procedimientos.
* Capacitar nuevamente si es necesario.
* Implementar controles adicionales.
* Registrar recomendaciones para auditorías futuras.

---

# 9. Recuperación Específica por Vulnerabilidad

---

## 9.1 Recuperación ante SQL Injection

### Objetivo

Restaurar la seguridad, integridad y confidencialidad de la base de datos clínica.

### Procedimiento recomendado

1. Deshabilitar temporalmente el módulo vulnerable.
2. Revisar logs de consultas SQL.
3. Identificar registros accedidos, modificados o eliminados.
4. Bloquear cuentas o sesiones sospechosas.
5. Aplicar corrección mediante consultas parametrizadas.
6. Validar entradas de usuario.
7. Revisar permisos de la cuenta de base de datos.
8. Restaurar registros desde respaldos si se detecta alteración.
9. Verificar integridad de fichas clínicas y exámenes.
10. Habilitar el servicio solo después de pruebas de seguridad.
11. Monitorear actividad posterior.

### Información que debe revisarse

* Fichas clínicas.
* Resultados de exámenes.
* Diagnósticos.
* Datos personales.
* Credenciales.
* Registros administrativos.

### Resultado esperado

Base de datos corregida, información validada y módulo vulnerable reparado.

---

## 9.2 Recuperación ante XSS Reflected

### Objetivo

Proteger usuarios, sesiones y credenciales afectadas por la ejecución de scripts en el navegador.

### Procedimiento recomendado

1. Identificar el parámetro vulnerable.
2. Deshabilitar temporalmente la funcionalidad afectada.
3. Eliminar o corregir la reflexión insegura de datos.
4. Implementar codificación de salida.
5. Configurar Content Security Policy.
6. Invalidar sesiones activas de usuarios potencialmente afectados.
7. Forzar cambio de contraseña en cuentas críticas.
8. Revisar logs de accesos sospechosos.
9. Verificar que no existan redirecciones maliciosas.
10. Probar nuevamente el módulo corregido.
11. Notificar recomendaciones preventivas a usuarios internos si corresponde.

### Información que debe revisarse

* Sesiones activas.
* Accesos recientes.
* Cuentas administrativas.
* Parámetros manipulados.
* Logs del portal.
* Reportes de usuarios afectados.

### Resultado esperado

Funcionalidad corregida, sesiones protegidas y reducción del riesgo de suplantación.

---

## 9.3 Recuperación ante Command Injection

### Objetivo

Contener el compromiso del servidor, eliminar la causa raíz y restaurar servicios de forma segura.

### Procedimiento recomendado

1. Aislar inmediatamente el servidor afectado.
2. Preservar logs y evidencia para análisis.
3. Identificar comandos ejecutados.
4. Revisar archivos modificados o creados.
5. Revocar credenciales potencialmente comprometidas.
6. Deshabilitar la funcionalidad vulnerable.
7. Eliminar ejecución insegura de comandos.
8. Revisar permisos del usuario del servidor web.
9. Aplicar hardening al sistema operativo.
10. Restaurar desde respaldo confiable si existe compromiso.
11. Validar integridad del servidor.
12. Realizar pruebas de seguridad antes de volver a producción.
13. Monitorear actividad intensivamente después de la recuperación.

### Información que debe revisarse

* Archivos del sistema.
* Configuración del servidor.
* Usuarios locales.
* Procesos ejecutados.
* Logs de acceso.
* Integridad de la aplicación.
* Conexiones de red.
* Servicios activos.

### Resultado esperado

Servidor limpio, funcionalidad corregida, privilegios reducidos y monitoreo reforzado.

---

# 10. Política de Respaldos

Los respaldos son esenciales para recuperar información ante incidentes, fallas técnicas o errores humanos.

## 10.1 Objetivo de la política

Garantizar que la información crítica de Clínica Vista Hermosa pueda ser restaurada de forma segura, íntegra y oportuna.

## 10.2 Información que debe respaldarse

| Información                  | Frecuencia recomendada | Criticidad |
| ---------------------------- | ---------------------- | ---------- |
| Base de datos clínica        | Diaria                 | Muy alta   |
| Fichas clínicas electrónicas | Diaria                 | Muy alta   |
| Resultados de exámenes       | Diaria                 | Muy alta   |
| Configuración del servidor   | Semanal                | Alta       |
| Código fuente del portal     | Por cada cambio        | Alta       |
| Logs de auditoría            | Diaria                 | Alta       |
| Documentación de seguridad   | Semanal                | Media      |

---

## 10.3 Regla 3-2-1

Se recomienda aplicar la regla 3-2-1:

* Mantener **3 copias** de la información.
* Utilizar **2 medios diferentes** de almacenamiento.
* Conservar **1 copia fuera del entorno principal**.

Esta estrategia reduce el riesgo de pérdida total de información ante incidentes graves.

---

## 10.4 Validación de respaldos

No basta con crear respaldos. La clínica debe probar regularmente que estos pueden restaurarse.

### Acciones de validación

* Restauración de prueba.
* Verificación de integridad.
* Revisión de fechas de respaldo.
* Validación de permisos.
* Documentación de resultados.
* Corrección de fallas detectadas.

---

## 10.5 Protección de respaldos

Los respaldos deben protegerse contra acceso no autorizado y alteración.

### Medidas recomendadas

* Cifrado de respaldos.
* Control de acceso.
* Almacenamiento externo seguro.
* Registro de restauraciones.
* Protección contra eliminación accidental.
* Acceso limitado a personal autorizado.

---

# 11. Prioridad de Recuperación de Servicios

En un incidente, no todos los servicios tienen la misma prioridad. La recuperación debe enfocarse primero en los sistemas críticos para la atención.

| Prioridad | Servicio / Activo            | Motivo                                       |
| --------: | ---------------------------- | -------------------------------------------- |
|         1 | Base de datos clínica        | Centraliza información médica crítica        |
|         2 | Fichas clínicas electrónicas | Soportan atención y seguimiento de pacientes |
|         3 | Resultados de exámenes       | Necesarios para decisiones médicas           |
|         4 | Portal de pacientes          | Canal de acceso digital para usuarios        |
|         5 | Credenciales y autenticación | Controlan acceso seguro a sistemas           |
|         6 | Logs de auditoría            | Permiten investigación y trazabilidad        |
|         7 | Servicios administrativos    | Apoyan procesos internos                     |

---

# 12. Indicadores de Recuperación

## 12.1 RTO - Recovery Time Objective

El RTO corresponde al tiempo máximo aceptable para recuperar un servicio después de un incidente.

| Servicio                  | RTO recomendado |
| ------------------------- | --------------- |
| Base de datos clínica     | 4 horas         |
| Portal de pacientes       | 6 horas         |
| Sistema de autenticación  | 4 horas         |
| Resultados de exámenes    | 8 horas         |
| Servicios administrativos | 12 horas        |

---

## 12.2 RPO - Recovery Point Objective

El RPO corresponde a la cantidad máxima de información que la organización puede permitirse perder.

| Servicio / Información    | RPO recomendado        |
| ------------------------- | ---------------------- |
| Base de datos clínica     | 24 horas o menos       |
| Fichas clínicas           | 24 horas o menos       |
| Resultados de exámenes    | 24 horas o menos       |
| Logs de seguridad         | 24 horas o menos       |
| Configuración del sistema | Última versión estable |

---

## 12.3 Interpretación

Para Clínica Vista Hermosa, se recomienda que la base de datos clínica tenga tiempos de recuperación reducidos, ya que contiene información esencial para la atención de pacientes.

Un RPO de 24 horas implica que la organización no debería perder más de un día de información en caso de incidente. En sistemas clínicos más críticos, este valor podría reducirse aún más.

---

# 13. Mejoras Tecnológicas Recomendadas

---

## 13.1 Web Application Firewall

Implementar un WAF para proteger el portal contra patrones comunes de ataque.

### Riesgos que ayuda a mitigar

* SQL Injection.
* XSS.
* Command Injection.
* Escaneo automatizado.
* Solicitudes maliciosas.

### Beneficio

Permite bloquear intentos conocidos mientras se corrige la causa raíz en el código.

---

## 13.2 SIEM

Implementar una plataforma SIEM para centralizar y correlacionar eventos de seguridad.

### Eventos a monitorear

* Errores SQL.
* Intentos XSS.
* Ejecución de comandos.
* Accesos fallidos.
* Cambios de privilegios.
* Actividad fuera de horario.
* Descargas masivas.

### Beneficio

Facilita detección temprana y respuesta coordinada ante incidentes.

---

## 13.3 IDS e IPS

Implementar sistemas de detección y prevención de intrusiones.

### Beneficio

Permite identificar actividad sospechosa en red y servidores.

---

## 13.4 Segmentación de red

Separar los componentes críticos en zonas independientes.

### Segmentos sugeridos

* Zona pública del portal.
* Zona de aplicación.
* Zona de base de datos.
* Zona administrativa.
* Zona de respaldos.

### Beneficio

Reduce el impacto si un atacante compromete un componente.

---

## 13.5 Autenticación Multifactor

Implementar MFA para cuentas críticas.

### Usuarios prioritarios

* Médicos.
* Personal administrativo.
* Equipo TI.
* Administradores.
* Usuarios con acceso a información sensible.

### Beneficio

Disminuye el riesgo de acceso no autorizado ante robo de credenciales.

---

## 13.6 Gestión de vulnerabilidades

Establecer un proceso permanente para identificar, clasificar y corregir vulnerabilidades.

### Actividades

* Escaneos periódicos.
* Revisión de dependencias.
* Aplicación de parches.
* Pruebas después de cambios.
* Registro de hallazgos.
* Seguimiento de correcciones.

---

## 13.7 Hardening de servidores

Fortalecer la configuración de servidores institucionales.

### Acciones

* Deshabilitar servicios innecesarios.
* Reducir privilegios.
* Aplicar parches.
* Configurar firewall.
* Restringir acceso remoto.
* Monitorear procesos.
* Proteger archivos sensibles.

---

## 13.8 Protección de logs

Los logs deben almacenarse de forma segura y centralizada.

### Beneficio

Permite investigar incidentes incluso si un servidor es comprometido.

---

# 14. Notificación y Comunicación de Incidentes

Durante un incidente, la comunicación debe ser clara, oportuna y controlada.

## 14.1 Notificación interna

Se debe informar a:

* Equipo TI.
* Encargado de seguridad.
* Dirección de la clínica.
* Áreas afectadas.
* Responsable del portal.

## 14.2 Notificación a usuarios

Si el incidente afecta a pacientes o funcionarios, se debe evaluar la necesidad de informar:

* Tipo de incidente.
* Información potencialmente comprometida.
* Medidas adoptadas.
* Recomendaciones para usuarios.
* Canales de soporte.

## 14.3 Registro de comunicación

Toda comunicación debe quedar documentada.

### Datos a registrar

* Fecha y hora.
* Responsable que comunica.
* Destinatarios.
* Mensaje enviado.
* Medio utilizado.
* Respuesta recibida.

---

# 15. Roles y Responsabilidades

| Rol                            | Responsabilidades                                                     |
| ------------------------------ | --------------------------------------------------------------------- |
| Equipo TI                      | Contención técnica, restauración de servicios, revisión de servidores |
| Equipo de desarrollo           | Corrección de vulnerabilidades en el código                           |
| Administrador de base de datos | Validación, respaldo y restauración de datos                          |
| Encargado de seguridad         | Coordinación del incidente, monitoreo y documentación                 |
| Dirección de la clínica        | Toma de decisiones, comunicación institucional y priorización         |
| Usuarios internos              | Reportar anomalías y seguir instrucciones de seguridad                |

---

# 16. Plan de Pruebas de Recuperación

El plan de recuperación debe ser probado periódicamente.

## 16.1 Pruebas recomendadas

* Restauración de base de datos en ambiente de prueba.
* Simulación de caída del portal.
* Simulación de compromiso de credenciales.
* Prueba de recuperación de servidor.
* Validación de respaldos.
* Ejercicio de comunicación interna.
* Revisión de tiempos RTO y RPO.

## 16.2 Frecuencia sugerida

| Prueba                         | Frecuencia                                    |
| ------------------------------ | --------------------------------------------- |
| Restauración de base de datos  | Trimestral                                    |
| Revisión de respaldos          | Mensual                                       |
| Simulación de incidente        | Semestral                                     |
| Revisión de contactos          | Trimestral                                    |
| Actualización de procedimiento | Después de cada incidente o cambio importante |

---

# 17. Documentación Posterior al Incidente

Después de cada incidente se debe generar un informe interno.

## 17.1 Contenido mínimo del informe

* Fecha y hora del incidente.
* Sistema afectado.
* Vulnerabilidad explotada.
* Activos comprometidos.
* Impacto observado.
* Acciones de contención.
* Acciones de recuperación.
* Tiempo de interrupción.
* Datos restaurados.
* Evidencia recopilada.
* Causa raíz.
* Controles mejorados.
* Recomendaciones futuras.

---

# 18. Relación con Marcos de Referencia

## 18.1 NIST

El plan se relaciona con las funciones de NIST:

| Función     | Aplicación en este plan                          |
| ----------- | ------------------------------------------------ |
| Identificar | Inventario de activos y riesgos                  |
| Proteger    | Controles preventivos y respaldos                |
| Detectar    | Monitoreo, SIEM y alertas                        |
| Responder   | Contención y erradicación                        |
| Recuperar   | Restauración, continuidad y lecciones aprendidas |

---

## 18.2 CIS Controls

Las medidas propuestas se relacionan con controles CIS como:

* Gestión de vulnerabilidades.
* Protección de datos.
* Control de accesos.
* Monitoreo de logs.
* Configuración segura.
* Respuesta ante incidentes.
* Recuperación de datos.

---

## 18.3 OWASP

Las mejoras tecnológicas también se relacionan con OWASP, especialmente en el fortalecimiento de aplicaciones web, reducción de fallas de inyección, validación de entradas, gestión segura de sesiones y monitoreo de actividad maliciosa.

---

# 19. Hoja de Ruta de Implementación

| Fase   | Acción                                      | Prioridad | Plazo sugerido |
| ------ | ------------------------------------------- | --------- | -------------- |
| Fase 1 | Corregir SQL Injection y Command Injection  | Crítica   | Inmediato      |
| Fase 1 | Invalidar sesiones y corregir XSS           | Alta      | Inmediato      |
| Fase 2 | Implementar WAF y reglas de bloqueo         | Alta      | Corto plazo    |
| Fase 2 | Configurar respaldos y restauración probada | Alta      | Corto plazo    |
| Fase 3 | Implementar SIEM y centralización de logs   | Media     | Mediano plazo  |
| Fase 3 | Segmentar red y bases de datos              | Media     | Mediano plazo  |
| Fase 4 | Ejecutar simulaciones de recuperación       | Media     | Permanente     |
| Fase 4 | Capacitar equipos internos                  | Media     | Permanente     |

---

# 20. Beneficios Esperados

La implementación del plan permitirá:

* Reducir tiempos de respuesta ante incidentes.
* Restaurar servicios críticos de manera ordenada.
* Disminuir el impacto operacional.
* Proteger información médica sensible.
* Mejorar la capacidad de detección.
* Fortalecer la continuidad operacional.
* Reducir el riesgo de pérdida de información.
* Aumentar la confianza de pacientes y funcionarios.
* Mejorar la trazabilidad ante incidentes.
* Fortalecer la postura de seguridad institucional.

---

# 21. Conclusión

El plan de recuperación y mejora tecnológica propuesto permite a Clínica Vista Hermosa prepararse frente a incidentes de seguridad que podrían afectar su portal de clientes, bases de datos clínicas, servidores institucionales y servicios digitales.

La recuperación ante incidentes es especialmente relevante en el sector salud, ya que la interrupción de sistemas o la pérdida de información médica puede afectar directamente la continuidad de la atención y la confianza de los pacientes.

Los riesgos críticos identificados, especialmente SQL Injection y Command Injection, requieren procedimientos claros de contención, erradicación y restauración. Además, XSS Reflected debe abordarse mediante protección de sesiones, corrección del código vulnerable y comunicación preventiva a usuarios cuando corresponda.

Las mejoras tecnológicas recomendadas, como WAF, SIEM, IDS/IPS, segmentación de red, MFA, hardening, gestión de vulnerabilidades y respaldos verificados, permiten reducir la probabilidad de nuevos incidentes y mejorar la capacidad de respuesta de la organización.

Desde una perspectiva estratégica, Clínica Vista Hermosa debe entender la recuperación ante incidentes como parte esencial de su gestión de seguridad. No basta con prevenir ataques; también es necesario estar preparada para detectar, responder, recuperar y aprender de cada evento.

Con este plan, la organización puede fortalecer su resiliencia tecnológica, proteger información médica sensible y mantener la continuidad de sus servicios clínicos frente a amenazas futuras.
