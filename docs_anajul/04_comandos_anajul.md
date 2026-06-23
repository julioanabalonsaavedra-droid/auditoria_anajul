# Vulnerabilidad: Command Injection
# Clínica Vista Hermosa

---

# 1. Descripción General

La vulnerabilidad conocida como Command Injection (Inyección de Comandos) permite a un atacante ejecutar comandos del sistema operativo a través de una aplicación web vulnerable.

Este tipo de vulnerabilidad ocurre cuando una aplicación recibe información proporcionada por el usuario y la incorpora directamente dentro de comandos ejecutados por el servidor sin aplicar mecanismos adecuados de validación.

Command Injection es considerada una de las vulnerabilidades más críticas dentro de la seguridad informática debido a que puede otorgar acceso directo al sistema operativo que ejecuta la aplicación.

Cuando esta vulnerabilidad es explotada exitosamente, el atacante puede obtener control parcial o total del servidor, comprometiendo información sensible y afectando la continuidad operacional de la organización.

---

# 2. Objetivo de la Prueba

El objetivo de esta prueba fue demostrar que una aplicación vulnerable puede ejecutar comandos arbitrarios enviados por un usuario malicioso.

En el contexto de Clínica Vista Hermosa, una vulnerabilidad de este tipo podría permitir el acceso a información médica confidencial, la manipulación de sistemas clínicos y la interrupción de servicios esenciales para la atención de pacientes.

---

# 3. Evidencia del Ataque

## Payload utilizado

```bash
127.0.0.1; cat /etc/passwd
```

## Captura de Evidencia

![Command Injection](img_anajul/comandos_anajul.png)

## Resultado Obtenido

La aplicación ejecutó correctamente el comando introducido por el usuario y mostró el contenido del archivo `/etc/passwd`.

Este resultado demuestra que la entrada proporcionada fue interpretada como una instrucción válida del sistema operativo.

La aplicación no aplicó mecanismos de validación suficientes para impedir la ejecución de comandos externos.

---

# 4. Explicación Técnica

## ¿Cómo funciona Command Injection?

Muchas aplicaciones web utilizan comandos del sistema operativo para realizar determinadas tareas.

Por ejemplo, una aplicación podría utilizar el comando:

```bash
ping 127.0.0.1
```

para verificar conectividad de red.

Si la entrada del usuario no es validada correctamente, un atacante puede agregar instrucciones adicionales.

Por ejemplo:

```bash
127.0.0.1; cat /etc/passwd
```

El carácter:

```bash
;
```

permite ejecutar múltiples comandos de forma consecutiva.

Como resultado, el sistema ejecuta:

```bash
ping 127.0.0.1
cat /etc/passwd
```

Mostrando información que normalmente debería permanecer protegida.

---

# 5. Análisis de la Vulnerabilidad

La vulnerabilidad se produce porque la aplicación mezcla datos proporcionados por el usuario con instrucciones del sistema operativo.

Este comportamiento rompe uno de los principios fundamentales de la programación segura:

> Nunca confiar en la entrada proporcionada por el usuario.

Al no existir validación, filtrado o restricciones adecuadas, el servidor interpreta los datos recibidos como comandos legítimos.

---

# 6. Impacto para Clínica Vista Hermosa

En una organización del sector salud, las consecuencias de una vulnerabilidad Command Injection pueden ser extremadamente graves.

Un atacante podría acceder directamente al servidor que almacena o procesa información clínica.

Entre los activos potencialmente comprometidos se encuentran:

- Fichas clínicas electrónicas.
- Diagnósticos médicos.
- Resultados de exámenes.
- Información de pacientes.
- Información de médicos.
- Sistemas de gestión hospitalaria.
- Credenciales de acceso.
- Bases de datos clínicas.

Además, el atacante podría:

- Crear usuarios administrativos.
- Instalar software malicioso.
- Eliminar información crítica.
- Alterar registros médicos.
- Interrumpir servicios clínicos.
- Utilizar el servidor como punto de acceso para otros ataques.

---

# 7. Consecuencias para el Negocio

La explotación exitosa de esta vulnerabilidad podría generar:

## Consecuencias Operacionales

- Interrupción de servicios médicos.
- Caída del portal de pacientes.
- Pérdida de disponibilidad de sistemas clínicos.

## Consecuencias Económicas

- Costos de recuperación.
- Pérdidas por interrupción operacional.
- Inversiones de emergencia en infraestructura.

## Consecuencias Legales

- Sanciones por exposición de información sensible.
- Investigaciones regulatorias.
- Posibles acciones legales por parte de pacientes afectados.

## Consecuencias Reputacionales

- Pérdida de confianza de pacientes.
- Daño a la imagen institucional.
- Disminución de la credibilidad organizacional.

---

# 8. Evaluación CVSS

## Métrica Base

| Métrica | Valor |
|----------|---------|
| Attack Vector | Network |
| Attack Complexity | Low |
| Privileges Required | None |
| User Interaction | None |
| Scope | Changed |
| Confidentiality | High |
| Integrity | High |
| Availability | High |

## Puntaje CVSS

**10.0 / 10**

## Nivel de Severidad

# CRÍTICO

Esta vulnerabilidad representa el máximo nivel de riesgo debido a la posibilidad de comprometer completamente el servidor.

---

# 9. Riesgos Asociados

## Compromiso Total del Servidor

El atacante podría tomar control completo del sistema.

## Exposición de Información Médica

Datos clínicos podrían quedar accesibles para personas no autorizadas.

## Alteración de Información

Registros médicos podrían ser modificados o eliminados.

## Instalación de Malware

El servidor podría ser utilizado para distribuir software malicioso.

## Interrupción de Servicios

Los sistemas críticos podrían quedar fuera de servicio.

---

# 10. Medidas de Prevención

## Validación Estricta de Entradas

Aceptar únicamente caracteres y formatos autorizados.

## Uso de APIs Seguras

Evitar la ejecución directa de comandos del sistema operativo.

## Principio de Menor Privilegio

Ejecutar servicios con permisos mínimos.

## Segmentación de Sistemas

Separar servicios críticos en entornos independientes.

## Actualización de Software

Mantener sistemas operativos y aplicaciones actualizadas.

---

# 11. Controles de Mitigación

### Web Application Firewall (WAF)

Detectar y bloquear intentos de explotación.

### Monitoreo Continuo

Supervisar eventos sospechosos en servidores.

### Gestión de Logs

Mantener registros detallados de actividades.

### Control de Accesos

Restringir privilegios administrativos.

### Respaldo de Información

Mantener copias de seguridad periódicas.

### Sistemas de Detección de Intrusiones

Implementar IDS e IPS para detectar actividades maliciosas.

---

# 12. Plan de Respuesta ante Incidentes

Si se detecta una explotación de Command Injection se recomienda:

1. Aislar inmediatamente el servidor afectado.
2. Identificar el alcance del compromiso.
3. Revocar credenciales potencialmente comprometidas.
4. Restaurar sistemas desde respaldos confiables.
5. Aplicar correcciones de seguridad.
6. Realizar análisis forense.
7. Documentar el incidente.
8. Implementar medidas preventivas adicionales.

---

# 13. Conclusión

La vulnerabilidad Command Injection representa uno de los riesgos más graves para cualquier organización que dependa de aplicaciones web.

Durante la auditoría realizada sobre el entorno DVWA se comprobó que una entrada manipulada permite ejecutar comandos directamente sobre el sistema operativo del servidor.

Para Clínica Vista Hermosa, una vulnerabilidad de esta naturaleza podría comprometer completamente la infraestructura tecnológica que soporta la atención médica, exponiendo información altamente sensible y afectando la continuidad operacional de la organización.

Debido a su criticidad, la mitigación de esta vulnerabilidad debe ser considerada una prioridad inmediata dentro de cualquier estrategia de seguridad de la información.