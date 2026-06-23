# Identificación de Activos de Información
# Clínica Vista Hermosa

---

# 1. Introducción

La gestión de riesgos en seguridad de la información comienza con la identificación de los activos que poseen valor para la organización.

Un activo de información corresponde a cualquier elemento que almacena, procesa, transmite o protege información necesaria para el funcionamiento del negocio.

En el caso de Clínica Vista Hermosa, la información constituye uno de los recursos más importantes de la organización, ya que permite brindar atención médica, mantener la continuidad operacional y resguardar la privacidad de los pacientes.

La identificación de activos es fundamental para comprender qué elementos deben protegerse y cuáles serían las consecuencias en caso de sufrir una vulneración de seguridad.

---

# 2. Contexto Organizacional

Clínica Vista Hermosa es una institución privada de salud que administra información médica altamente sensible mediante plataformas digitales.

Sus sistemas permiten:

- Gestionar fichas clínicas electrónicas.
- Consultar resultados de exámenes.
- Registrar diagnósticos médicos.
- Administrar tratamientos.
- Gestionar reservas de atención.
- Controlar accesos de pacientes y funcionarios.

Debido a la naturaleza de sus operaciones, cualquier incidente de seguridad puede afectar directamente la atención de pacientes y la continuidad de los servicios médicos.

---

# 3. Clasificación de Activos

Los activos identificados se clasifican en:

- Información.
- Software.
- Hardware.
- Servicios.
- Personas.
- Infraestructura tecnológica.

---

# 4. Activos Críticos de Información

## Activo 1: Fichas Clínicas Electrónicas

### Descripción

Contienen el historial médico completo de cada paciente.

### Información almacenada

- Diagnósticos.
- Enfermedades previas.
- Tratamientos.
- Medicamentos.
- Antecedentes médicos.

### Importancia

Constituyen el activo más crítico de la organización.

### Impacto si es comprometido

Muy Alto.

La exposición o alteración de esta información podría afectar directamente la salud de los pacientes.

---

## Activo 2: Resultados de Exámenes Médicos

### Descripción

Información generada por laboratorios, radiología y otras áreas clínicas.

### Información almacenada

- Exámenes de sangre.
- Radiografías.
- Resonancias.
- Informes médicos.

### Impacto si es comprometido

Muy Alto.

La modificación de resultados podría generar diagnósticos incorrectos.

---

## Activo 3: Datos Personales de Pacientes

### Descripción

Información identificatoria utilizada para la atención médica.

### Información almacenada

- Nombre completo.
- RUT.
- Dirección.
- Correo electrónico.
- Teléfono.

### Impacto si es comprometido

Alto.

Podría utilizarse para fraude, robo de identidad o campañas de phishing.

---

## Activo 4: Credenciales de Acceso

### Descripción

Usuarios y contraseñas utilizadas para acceder a sistemas institucionales.

### Impacto si es comprometido

Crítico.

Permitiría acceso no autorizado a múltiples plataformas.

---

## Activo 5: Base de Datos Clínica

### Descripción

Sistema central que almacena toda la información médica y administrativa.

### Impacto si es comprometido

Crítico.

Una falla en este activo podría afectar la operación completa de la clínica.

---

# 5. Activos de Software

## Sistema de Gestión Clínica

Permite administrar la atención médica de pacientes.

### Riesgo principal

Acceso no autorizado.

---

## Portal de Pacientes

Permite consultas y acceso remoto a información médica.

### Riesgo principal

Explotación de vulnerabilidades web.

---

## Sistema de Gestión de Exámenes

Administra resultados e informes clínicos.

### Riesgo principal

Manipulación de información.

---

# 6. Activos de Hardware

## Servidores

Almacenan aplicaciones y bases de datos institucionales.

### Riesgo principal

Compromiso del sistema operativo.

---

## Equipos Médicos Conectados

Dispositivos que intercambian información con sistemas clínicos.

### Riesgo principal

Interrupción operativa.

---

## Equipos de Usuarios

Computadores utilizados por médicos y personal administrativo.

### Riesgo principal

Malware o robo de credenciales.

---

# 7. Activos Humanos

Las personas constituyen uno de los activos más importantes dentro de la organización.

## Médicos

Acceden diariamente a información clínica.

## Personal Administrativo

Gestionan información de pacientes y procesos internos.

## Pacientes

Utilizan el portal para acceder a sus antecedentes médicos.

## Equipo TI

Responsable de la administración y seguridad tecnológica.

---

# 8. Amenazas Asociadas

Los activos identificados pueden verse afectados por diversas amenazas.

| Amenaza | Activos afectados |
|----------|------------------|
| SQL Injection | Bases de datos, fichas clínicas |
| XSS | Cuentas de usuarios, credenciales |
| Command Injection | Servidores, sistemas clínicos |
| Malware | Equipos y servidores |
| Robo de credenciales | Cuentas institucionales |
| Error humano | Información crítica |
| Fallas de software | Servicios clínicos |

---

# 9. Evaluación de Criticidad

| Activo | Criticidad |
|----------|------------|
| Fichas clínicas | Muy Alta |
| Base de datos clínica | Muy Alta |
| Credenciales de acceso | Muy Alta |
| Resultados de exámenes | Alta |
| Datos personales | Alta |
| Portal de pacientes | Alta |
| Servidores | Muy Alta |

---

# 10. Relación con las Vulnerabilidades Identificadas

Las vulnerabilidades detectadas durante la auditoría afectan directamente a los activos críticos identificados.

### SQL Injection

Permite acceder a fichas clínicas y bases de datos.

### XSS Reflected

Permite comprometer credenciales y sesiones de usuarios.

### Command Injection

Permite comprometer servidores y sistemas institucionales.

Por esta razón, los hallazgos obtenidos representan riesgos significativos para la organización.

---

# 11. Conclusión

La identificación de activos permitió determinar cuáles son los elementos más importantes para la operación de Clínica Vista Hermosa.

Los activos más críticos corresponden a las fichas clínicas electrónicas, bases de datos médicas, credenciales de acceso y servidores institucionales.

Las vulnerabilidades identificadas durante la auditoría afectan directamente estos activos, generando riesgos que podrían comprometer la confidencialidad, integridad y disponibilidad de la información.

La correcta protección de estos recursos debe considerarse una prioridad estratégica para garantizar la continuidad operacional, el cumplimiento normativo y la confianza de los pacientes.