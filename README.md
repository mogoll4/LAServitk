LA Servitk

LA Servitk es una página web de mecánica rápida diseñada para facilitar la gestión y el servicio de vehículos. Este proyecto está en desarrollo y actualmente cuenta con funcionalidades básicas de login, registro y un menú principal. Además, ahora integra un servidor local para gestionar datos a través de una API.

Tabla de Contenidos

Descripción

Instalación

Uso

Ejecutar la API Local

Integración con React


Descripción


LA Servitk es una aplicación web destinada a talleres de mecánica rápida. Permite a los usuarios registrarse, iniciar sesión y navegar por un menú principal que da acceso a diferentes servicios y funciones relacionados con la mecánica rápida. Además, cuenta con una API local para gestionar los datos de la aplicación.

Instalación

Clona el repositorio


git clone https://github.com/tuusuario/la-servitk.git


Navega al directorio del proyecto

cd LAServitk


Instala las dependencias


npm install

Instala json-server para la API local

npm install json-server --save-dev

Uso

Para iniciar la aplicación en modo desarrollo y ejecutar la API local, utiliza el siguiente comando:

npm run dev

Esto ejecutará tanto la aplicación React como el servidor json-server.

Abre http://localhost:3000 para ver la aplicación en tu navegador y http://localhost:5000 para acceder a la API local.

Ejecutar la API Local

Para iniciar el servidor json-server que proporciona la API local, se ha configurado el script start-api en el archivo package.json. Asegúrate de tener json-server instalado y luego usa el siguiente comando:

npm run start-api
Esto iniciará el servidor API en http://localhost:5000.

Integración con React
El script dev utiliza concurrently para ejecutar tanto la aplicación React como el servidor json-server. Aquí está cómo está configurado en el package.json:

{
  "scripts": {
    "start": "react-scripts start",
    "start-api": "json-server --watch db.json --port 5000",
    "dev": "concurrently \"npm run start\" \"npm run start-api\""
  }
}

Con esto, puedes correr ambos procesos simultáneamente y tener tu aplicación y API funcionando al mismo tiempo.