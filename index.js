// Principios de la programacio backend
//--- Programación Web ---//
/*
¿Qué es Front end y Back end?
El Back end y el Front end son dos partes fundamentales de la programación de una aplicación web. Al Front end se lo conoce como el lado del cliente y al Back end como el lado del servidor

Front End
- Es la parte de una aplicación que interactúa con los usuarios
- Conocida como “el lado del cliente”. 
- Todo lo que vemos en la pantalla cuando accedemos a un sitio web o aplicación: tipos de letra, colores, efectos del mouse, teclado, movimientos, desplazamientos, efectos visuales y otros elementos que permiten navegar dentro de una página web.

Back End
- Aplicaciones que viven en el servidor 
- A menudo se le denomina “el lado del servidor”.
- Consiste en un servidor, una aplicación y una base de datos.
- Se toman los datos, se procesa la información y se envía al usuario

MERN Stack
El stack MERN utiliza JavaScript como único lenguaje, por ello no tendremos dificultades al familiarizarnos con cualquiera de estas tecnologías, las cuales son mongoDB, Express, React y Node.js. 
La ventaja que encontramos al utilizar este stack en específico es que nos permite profundizar en un solo lenguaje de programación, logrando así enfocar y reforzar nuestros conocimientos y con ello ser más productivos.
- MongoDB base de datos no relacional
- ExpressJS framework para crear servidores en NodeJS
- ReactJS librería para desarrollar interfaces de usuario
- NodeJS entorno de ejecución de Javascript
*/

//--- Conceptos basicos de JavaScript ---//
/*
Tipos de datos en Javascript
- variable:  es un espacio reservado para almacenar un dato que puede ser usado o modificado tantas veces como se desee. 
- Tipo de dato:  es el atributo que especifica la clase de dato que almacena la variable.

Tipos de datos
- Tipo Primitivos:  Incluyen a las cadenas de texto (String), variables booleanas cuyo valor puede ser true o false (Boolean) y números (Number). Además hay dos tipos primitivos especiales que son Null y Undefined. La copia es por valor.

- Tipo Objeto: Incluyen a los objetos (Object), a los arrays (Array) y funciones. La copia es por referencia.

Javascript y ES6

EcmaScript 6
ES6 o EcmaScript 2015, fue una enorme revisión que surgió en el año 2015 y trajo -dentro de varias polémicas- enormes avances en el mundo de la programación JavaScript.
Entre sus mayores innovaciones se encuentra la declaración de variables con let y const, la introducción de clases al lenguaje, y los template strings.

Variables en Javascript
Let y const
let y const son dos formas de declarar variables en JavaScript introducidas en ES6 que limitan el ámbito de la variable al bloque en que fue declarada (antes de ES6 esto no era así).

Let
Un bloque en JavaScript se puede entender como “lo que queda entre dos llaves”, ya sean definiciones de funciones o bloques if, while, for y loops similares. Si una variable es declarada con let en el ámbito global o en el de una función, la variable pertenece al ámbito global o al ámbito de la función respectivamente.

Const
Al igual que con let, el ámbito (scope) para una variable declarada con const es el bloque. 
Sin embargo, const además prohíbe la reasignación de valores (const viene de constant).

Datos y Variables
1)Definir variables variables que almacenen los siguiente datos:
- Un nombre: “pepe”
- Una edad: 25
- Un precio: $99.90
- Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
- Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
2)Mostrar todos esos valores por consola
3) Incrementar la edad en 1 y volver a mostrarla
4) Agregar una serie a la lista y volver a mostrarla
*/