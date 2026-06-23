# Vulnerabilidad: Cross Site Scripting (XSS Reflected)
# Clínica Vista Hermosa

---

# 1. Descripción General

Cross Site Scripting (XSS) es una vulnerabilidad de aplicaciones web que permite a un atacante inyectar código JavaScript malicioso en páginas visualizadas por otros usuarios.

Cuando la aplicación no valida o filtra correctamente la información ingresada por los usuarios, el navegador interpreta dicho contenido como código legítimo y lo ejecuta.

La vulnerabilidad XSS es especialmente peligrosa porque permite comprometer directamente a los usuarios del sistema, facilitando el robo de credenciales, secuestro de sesiones y manipulación del contenido mostrado por la aplicación.

---

# 2. Objetivo de la Prueba

El objetivo de esta prueba fue demostrar que la aplicación es capaz de ejecutar código JavaScript proporcionado por el usuario sin aplicar mecanismos adecuados de validación.

En el contexto de Clínica Vista Hermosa, esta vulnerabilidad podría ser utilizada para comprometer cuentas de pacientes, médicos, personal administrativo o cualquier usuario que acceda al portal web.

---

# 3. Evidencia del Ataque

## Payload utilizado

```html
<script>alert('XSS')</script>
```

## Captura de Evidencia

![XSS Reflected](img_anajul/xss_anajul.png)

## Resultado Obtenido

Al ingresar el payload anterior, el navegador ejecutó correctamente el código JavaScript y mostró una ventana emergente.

Este comportamiento demuestra que la aplicación procesa y devuelve información proporcionada por el usuario sin validación adecuada, permitiendo la ejecución de scripts arbitrarios.

---

# 4. Explicación Técnica

## ¿Cómo funciona XSS?

Las aplicaciones web suelen mostrar información ingresada por los usuarios.

Por ejemplo, si un usuario introduce su nombre en un formulario, la aplicación puede mostrar posteriormente dicho valor en la página.

Cuando no existe validación adecuada, un atacante puede reemplazar texto normal por código JavaScript.

En lugar de ingresar:

```text
Juan Pérez
```

el atacante introduce:

```html
<script>alert('XSS')</script>
```

La aplicación devuelve el contenido al navegador y este interpreta la etiqueta `<script>` como una instrucción válida.

Como consecuencia, el navegador ejecuta el código enviado por el atacante.

---

# 5. Escenario de Ataque Real

En un escenario real, el atacante no utilizaría simplemente una alerta emergente.

Podría utilizar scripts diseñados para:

- Robar credenciales de acceso.
- Capturar cookies de sesión.
- Redirigir usuarios a sitios falsos.
- Modificar información visualizada.
- Realizar acciones en nombre de la víctima.
- Instalar malware mediante enlaces maliciosos.

Por esta razón, una vulnerabilidad XSS puede convertirse rápidamente en una puerta de entrada para ataques más complejos.

---

# 6. Impacto para Clínica Vista Hermosa

En una institución de salud, el impacto de una vulnerabilidad XSS puede ser considerable.

Si un atacante consigue robar la sesión de un médico o funcionario autorizado, podría acceder a información clínica confidencial.

Los principales activos comprometidos serían:

- Fichas clínicas.
- Diagnósticos médicos.
- Resultados de exámenes.
- Información personal de pacientes.
- Historiales de tratamientos.
- Datos administrativos.
- Credenciales de usuarios.

Asimismo, el atacante podría realizar acciones utilizando los privilegios de la víctima, dificultando la detección del incidente.

---

# 7. Evaluación CVSS

## Métrica Base

| Métrica | Valor |
|----------|---------|
| Attack Vector | Network |
| Attack Complexity | Low |
| Privileges Required | None |
| User Interaction | Required |
| Scope | Changed |
| Confidentiality | High |
| Integrity | Low |
| Availability | Low |

## Puntaje CVSS

**6.1 / 10**

## Nivel de Severidad

**MEDIO**

Aunque la puntuación CVSS es media, el impacto real dentro de una organización de salud puede ser significativamente mayor debido al valor de la información comprometida.

---

# 8. Riesgos Asociados

## Robo de Sesiones

El atacante podría secuestrar sesiones activas de usuarios legítimos.

## Robo de Credenciales

Los usuarios podrían ser engañados para entregar información de acceso.

## Manipulación de Contenido

La información mostrada por la aplicación podría ser alterada.

## Pérdida de Confianza

Los pacientes podrían perder confianza en la seguridad del portal.

## Exposición de Información Médica

Los datos clínicos podrían quedar accesibles para personas no autorizadas.

---

# 9. Medidas de Prevención

## Validación de Entradas

Toda información proporcionada por los usuarios debe validarse antes de ser procesada.

## Escape de Caracteres Especiales

Los caracteres HTML deben codificarse para impedir la ejecución de scripts.

## Content Security Policy (CSP)

Implementar políticas CSP para restringir la ejecución de código no autorizado.

## Frameworks Seguros

Utilizar bibliotecas y frameworks que incorporen protección contra XSS.

## Capacitación de Desarrolladores

Promover buenas prácticas de programación segura.

---

# 10. Controles de Mitigación

### Implementar CSP

Restringir la ejecución de scripts externos o no autorizados.

### Monitorear Actividades Sospechosas

Detectar intentos de explotación mediante registros de auditoría.

### Gestión Segura de Cookies

Configurar cookies con atributos:

- HttpOnly
- Secure
- SameSite

### Auditorías de Seguridad

Realizar evaluaciones periódicas sobre aplicaciones web.

### Gestión de Sesiones

Aplicar mecanismos seguros para la creación y expiración de sesiones.

---

# 11. Conclusión

La vulnerabilidad Cross Site Scripting (XSS Reflected) demuestra que una aplicación web puede ejecutar código suministrado por un usuario sin aplicar controles adecuados de validación.

En el caso de Clínica Vista Hermosa, esta vulnerabilidad podría facilitar el robo de sesiones, la obtención de credenciales y el acceso no autorizado a información médica altamente sensible.

Si bien su severidad técnica es inferior a la de SQL Injection o Command Injection, continúa representando un riesgo significativo para la confidencialidad de la información y la confianza de los usuarios.

La implementación de controles de validación, codificación de salida y políticas de seguridad modernas resulta fundamental para reducir la probabilidad de explotación de esta vulnerabilidad.