# Vulnerabilidad: SQL Injection
# Clínica Vista Hermosa

---

# 1. Descripción General

La vulnerabilidad SQL Injection (Inyección SQL) corresponde a una falla de seguridad presente en aplicaciones web que construyen consultas hacia una base de datos utilizando directamente información proporcionada por el usuario sin aplicar mecanismos adecuados de validación o sanitización.

Esta vulnerabilidad permite que un atacante modifique la consulta SQL original mediante la inserción de instrucciones maliciosas, logrando acceder a información que normalmente debería permanecer protegida.

SQL Injection es considerada una de las vulnerabilidades más peligrosas en aplicaciones web debido a que puede comprometer directamente la confidencialidad, integridad y disponibilidad de los datos almacenados.

---

# 2. Objetivo de la Prueba

El objetivo de esta prueba fue demostrar cómo una entrada manipulada por un usuario malicioso puede alterar el comportamiento de una consulta SQL y permitir el acceso no autorizado a información almacenada en la base de datos.

En el contexto de Clínica Vista Hermosa, una vulnerabilidad de este tipo podría permitir la exposición de información médica altamente sensible perteneciente a pacientes y profesionales de la salud.

---

# 3. Evidencia del Ataque

## Payload utilizado

```sql
' OR '1'='1
```

## Captura de Evidencia

![SQL Injection](img_anajul/sqli_anajul.png)

## Resultado Obtenido

Al ingresar el payload en el campo vulnerable, la aplicación retornó múltiples registros almacenados en la base de datos.

Esto demuestra que la condición original de búsqueda fue alterada exitosamente y que el sistema ejecutó una consulta manipulada por el atacante.

---

# 4. Explicación Técnica

## ¿Cómo funciona SQL Injection?

Las aplicaciones web suelen enviar consultas a una base de datos para recuperar información.

Por ejemplo, una consulta legítima podría ser:

```sql
SELECT * FROM pacientes
WHERE id='1';
```

Sin embargo, cuando la aplicación no valida correctamente los datos ingresados por el usuario, un atacante puede modificar la lógica de la consulta.

Al introducir:

```sql
' OR '1'='1
```

la consulta podría transformarse en:

```sql
SELECT * FROM pacientes
WHERE id='' OR '1'='1';
```

Debido a que la condición:

```sql
'1'='1'
```

siempre es verdadera, la base de datos devuelve todos los registros almacenados.

Este comportamiento permite a un atacante obtener acceso a información que normalmente no debería visualizar.

---

# 5. Impacto para Clínica Vista Hermosa

En una organización del sector salud, la explotación de una vulnerabilidad SQL Injection podría generar consecuencias extremadamente graves.

Entre los posibles datos comprometidos se encuentran:

- Fichas clínicas electrónicas.
- Resultados de exámenes médicos.
- Diagnósticos clínicos.
- Historiales de tratamientos.
- Datos personales de pacientes.
- Información de médicos y especialistas.
- Credenciales de acceso.

Un atacante podría:

- Acceder a información confidencial.
- Extraer bases de datos completas.
- Modificar registros médicos.
- Eliminar información crítica.
- Crear cuentas administrativas.
- Comprometer sistemas relacionados.

La exposición de información médica podría derivar además en sanciones legales, pérdida de confianza institucional y daño reputacional significativo.

---

# 6. Evaluación CVSS

## Métrica Base

| Métrica | Valor |
|----------|---------|
| Attack Vector | Network |
| Attack Complexity | Low |
| Privileges Required | None |
| User Interaction | None |
| Scope | Unchanged |
| Confidentiality | High |
| Integrity | High |
| Availability | High |

## Puntaje CVSS

**9.8 / 10**

## Nivel de Severidad

**CRÍTICO**

---

# 7. Riesgos Asociados

## Riesgo de Confidencialidad

La información médica podría ser visualizada por personas no autorizadas.

## Riesgo de Integridad

Los registros clínicos podrían ser modificados o alterados.

## Riesgo de Disponibilidad

Un atacante podría eliminar información o afectar el funcionamiento normal del sistema.

## Riesgo Legal

La organización podría enfrentar sanciones regulatorias por incumplimiento de medidas de protección de datos sensibles.

---

# 8. Medidas de Prevención

Para evitar vulnerabilidades de SQL Injection se recomienda:

## Consultas Parametrizadas

Utilizar consultas preparadas (Prepared Statements) para separar los datos de las instrucciones SQL.

## Validación de Entradas

Verificar que toda información ingresada por usuarios cumpla con formatos esperados.

## Sanitización de Datos

Eliminar caracteres potencialmente peligrosos antes de procesar la información.

## Principio de Menor Privilegio

Las cuentas utilizadas por la aplicación deben poseer únicamente los permisos estrictamente necesarios.

## Actualización de Sistemas

Mantener frameworks, bibliotecas y motores de bases de datos permanentemente actualizados.

---

# 9. Controles de Mitigación

Si la vulnerabilidad ya existe en producción, se recomienda:

### Implementar un Web Application Firewall (WAF)

Permite detectar y bloquear intentos de SQL Injection.

### Monitoreo de Logs

Registrar y analizar consultas sospechosas.

### Auditorías Periódicas

Realizar pruebas de seguridad de forma regular.

### Segmentación de Bases de Datos

Limitar el acceso entre distintos sistemas.

### Copias de Seguridad

Mantener respaldos actualizados para facilitar la recuperación ante incidentes.

---

# 10. Conclusión

La vulnerabilidad SQL Injection representa una de las amenazas más críticas para aplicaciones web que almacenan información sensible.

En el caso de Clínica Vista Hermosa, la explotación exitosa de esta vulnerabilidad podría exponer fichas clínicas, diagnósticos y otros antecedentes médicos de carácter confidencial.

Debido al impacto potencial sobre la confidencialidad, integridad y disponibilidad de la información, resulta indispensable implementar mecanismos de validación segura, consultas parametrizadas y controles de monitoreo que permitan reducir significativamente el riesgo de explotación.

La corrección de esta vulnerabilidad debe considerarse una prioridad crítica dentro de la estrategia de seguridad de la organización.