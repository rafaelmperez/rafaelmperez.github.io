# 🔐 Implementación y Validación de UFW como Firewall Local en Linux

## 📁 Proyecto del Portafolio de Rafael M. Pérez | Sysadmin Junior

Este proyecto técnico documenta la instalación, configuración y validación de **UFW (Uncomplicated Firewall)** en un entorno Linux, con pruebas de acceso remoto desde una máquina cliente con Parrot OS. El objetivo es fortalecer la seguridad perimetral del servidor mediante reglas de tráfico claras y controladas.

---

## 🎯 Desafío

Muchos sistemas Linux operan sin restricciones de tráfico entrante, lo que representa un riesgo considerable. Este ejercicio busca:

- Activar y configurar UFW como firewall local.
- Definir políticas restrictivas por defecto.
- Permitir únicamente servicios autorizados (como SSH).
- Validar el acceso remoto seguro desde Parrot OS.

---

## 🧰 Tecnologías utilizadas

| Tecnología       | Propósito                                      |
|------------------|-----------------------------------------------|
| **Ubuntu 24.04 LTS** | Sistema operativo del servidor protegido     |
| **Parrot OS**       | Máquina cliente para pruebas de conectividad |
| **Bash**            | Automatización de comandos y configuración   |
| **UFW**             | Herramienta principal de firewall            |
| **OpenSSH**         | Protocolo para acceso remoto seguro          |

---

## 🛠️ Pasos realizados

1. **Actualización del sistema e instalación de UFW**
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install ufw -y
