# docker
# Proyecto Docker - Aplicación de Login

Este proyecto es una aplicación de login simple que utiliza Docker Compose para levantar tres servicios: un frontend (servido por Apache), un backend en Flask (Python) y una base de datos PostgreSQL.

## Prerrequisitos

1. **Docker**: Asegúrate de tener Docker instalado en la máquina virtual. Puedes instalarlo ejecutando:

   ```bash
   sudo apt update
   sudo apt install -y docker.io
   sudo systemctl start docker
   sudo systemctl enable docker
2. **Docker Compose**: Docker Compose: También necesitas Docker Compose. Instálalo con el siguiente comando:

   
    ```bash
   sudo apt install -y docker-compose
  
4.  **Levantar los Servicios con Docker Compose** :En la carpeta raíz del proyecto (proyecto_docker), ejecuta el siguiente comando para levantar todos los servicios:
   
 ```bash
    docker-compose up -d
 
