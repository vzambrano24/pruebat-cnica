---------------------------------------------------------------
|README EJERCICIO DE AUTOMATIZACIÓN E2E|
---------------------------------------------------------------

1. Prerequisitos:
  * Máquina local con Windows 10 o superior
  * Tener instalado visual studio code
  * Contar con un navegador instalado
  * Descargar la carpeta que contiene todo el proyecto
  * Descargar Java JDK versión 1.8 (debe estar en la variable de entorno)
  * Instalar Node.js y npm en tu sistema

2. Comandos de instalación
** Para instalar npm se requiere ejecutar el siguiente comando:
      - npm init
** Para instalar cypress se requiere ejecutar el siguiente comando:
	- npm install -save-dev cypress
** Para abrir cypress se requiere ejecutar el siguiente comando:       
	- npx cypress open
** Para correr las pruebas en cypress ejecuta el siguiente comando: 
      - npx cypress run --record --key 64b2d22f-c86e-4e51-8e2d-1c54205ad2ed
** Para instalar la librerias de mocha eejcutar el siguiente comando: 
	- npm install --save-dev mochawesome
  - npx cypress run --reporter mochawesome

3. Instrucciones para ejecutar los test
** Para ejecutar el proyeto debes realizar lo siguiente: 
  - Asegúrate de tener Node.js y npm instalados en tu sistema. (Comando de instalación y prerequisitos) 
  - Crear un repositorio en tu PC y copiar el proyecto en dicho repositorio
  - Con ayuda del visual studio code, abrir la terminal con la ruta del repositorio del proyecto y ejecutar el comando  npm init // Para inicializar el nodejs
  - Ejecutar el comando para instalar cypress: npm install -save-dev cypress
  - Ejecutar el comando de la libreria de mocha: npm install --save-dev mochawesome
  - Ejecutar las pruebas con el comando: npx cypress run --record --key 64b2d22f-c86e-4e51-8e2d-1c54205ad2ed
  - Para ejecutar uno a uno los test, ejecutar el comando npx cypress open y haz clic en las pruebas que deseas ejecutar en la interfaz gráfica de usuario. 

4. Información adicional

Referencia:https://github.com/vzambrano24/pruebat-cnica.git 