const readline = require("readline");
const fs = require("fs");
const yargs = require("yargs");

const argv = yargs
  .option("file", {
    alias: "f",
    describe: "Nombre del archivo donde se guardarán los productos",
    type: "string",
    default: "productos.json",
  })
  .help().argv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const datos = async () => {
  try {
    rl.question("Ingrese el nombre del producto: ", (nombre) => {
      rl.question("Ingrese el precio del producto: ", (precio) => {
        rl.question(
          "Ingrese la cantidad de unidades del producto: ",
          (cantidad) => {
            const nuevoProducto = {
              nombre: nombre,
              precio: precio,
              cantidad: cantidad,
            };

            const carpeta = "./data";
            const archivo = argv.producto
              ? `${carpeta}/${argv.producto}`
              : `${carpeta}/productos.json`;

            if (!fs.existsSync(carpeta)) {
              fs.mkdirSync(carpeta);
            }
            if (fs.existsSync(archivo)) {
              const datosExistentes = fs.readFileSync(archivo, "utf-8");
              const productos = JSON.parse(datosExistentes);

              productos.push(nuevoProducto);

              fs.writeFileSync(archivo, JSON.stringify(productos, null, 2));
            } else {
              const productos = [nuevoProducto];
              fs.writeFileSync(archivo, JSON.stringify(productos, null, 2));
              crarArchivo();
            }

            const datosGuardados = fs.readFileSync(archivo, "utf-8");
            const productosGuardados = JSON.parse(datosGuardados);

            console.log("Productos en el archivo:");
            console.log(JSON.stringify(productosGuardados, null, 2));

            rl.close();
          }
        );
      });
    });
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
  }
};

datos();
