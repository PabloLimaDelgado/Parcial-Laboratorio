# Gestión de Productos con Node.js

Este proyecto permite al usuario agregar productos a un archivo JSON de manera sencilla, con funcionalidad de lectura y escritura asincrónica, utilizando módulos nativos de Node.js como `readline`, `fs` y `yargs`.

## Funcionalidades

1. **Solicitar Datos al Usuario**  
   Se solicita el nombre, precio y cantidad de un producto.  
   La entrada de datos se realiza de manera asincrónica sin necesidad de usar callback hell.

2. **Guardar los Datos en un Archivo JSON**  
   Utilizando el módulo `fs`, el producto ingresado por el usuario se guarda en un archivo JSON.  
   Si el archivo especificado por el usuario ya existe, los datos del nuevo producto se agregan a un array existente.  
   Si el archivo no existe, se crea uno nuevo con el producto ingresado como primer elemento.

3. **Leer y Mostrar el Contenido del Archivo JSON**  
   Después de guardar los datos, el archivo JSON se lee y su contenido se muestra en la consola.

4. **Argumentos de Línea de Comandos con `yargs`**  
   El usuario puede especificar el nombre del archivo de productos mediante el argumento `--file` (o `-f`).  
   Si no se proporciona un archivo, el valor predeterminado es `productos.json`.
