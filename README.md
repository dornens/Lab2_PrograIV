# Lab2_PrograIV
# Laboratorio 2 – Primer Cómputo
### Programación Computacional IV | Semana 5
**Universidad Gerardo Barrios**

---

## Descripción

Página web interactiva desarrollada con **HTML, CSS y JavaScript** que demuestra el uso de los distintos selectores del DOM para manipular elementos de forma dinámica. La página cuenta con al menos **8 etiquetas diferentes**, cada una con una acción asociada mediante JavaScript.

---

## Estructura de archivos

```
repositorio/
 ├── index.html     → Estructura principal de la página
 ├── styles.css     → Estilos visuales de la página
 ├── script.js      → Lógica e interactividad en JavaScript
 ├── fondo.jpg      → Imagen de fondo de la página
 └── README.md      → Documentación del proyecto
```

---

## Tabla de Selectores

| Tipo de selector | Código del selector | Descripción de la tarea que realiza el elemento |
|---|---|---|
| `getElementById` | `document.getElementById("nombreInput")` | Lee el valor escrito en el input de texto y muestra un saludo personalizado en el párrafo con id `resultado`. |
| `querySelector` | `document.querySelector(".programa")` | Detecta el cambio en el elemento `<select>` y aplica el color elegido como fondo del panel izquierdo. |
| `querySelectorAll` | `document.querySelectorAll(".lang-check:checked")` | Recorre todos los checkboxes que tienen la clase `.lang-check` y lista únicamente los que están marcados. |
| `getElementById` | `document.getElementById("subtitulo")` | Toma el valor del `<input type="range">` y ajusta dinámicamente el `font-size` del subtítulo de la página. |
| `getElementsByTagName` | `document.getElementsByTagName("textarea")[0]` | Accede al elemento `<textarea>` por nombre de etiqueta y cuenta la cantidad de palabras que contiene. |
| `getElementById` | `document.getElementById("imagenPanel")` | Al presionar el botón, alterna el atributo `src` de la imagen entre cuatro opciones distintas. |
| `querySelector` (etiqueta) | `document.querySelector("h1")` | Toma el color seleccionado en el `<input type="color">` y lo aplica al título principal `<h1>`. |
| `getElementById` | `document.getElementById("btnToggle")` | Alterna la visibilidad del subtítulo usando `display`, y actualiza el texto del botón según el estado actual. |

---# Lab2_PrograIV

## Preguntas de Análisis

### ¿Cuál es la ventaja de utilizar `getElementById` frente a `querySelector`?

`getElementById` está optimizado directamente por el navegador a través del índice interno de IDs del DOM, lo que lo hace ligeramente más **rápido y eficiente** en situaciones donde el elemento buscado tiene un ID único. Su sintaxis también es más simple y explícita para ese caso específico.

`querySelector`, por otro lado, es más **flexible y versátil** porque acepta cualquier selector CSS válido (clases, atributos, pseudoclases, etc.), pero tiene un pequeño costo adicional de procesamiento al parsear el selector. En resumen: si solo se necesita buscar por ID, `getElementById` es la opción más directa y óptima; si se requiere mayor expresividad en el selector, `querySelector` es la mejor alternativa.

---

### ¿En qué situación es preferible usar `querySelectorAll` en lugar de `querySelector`? ¿Qué tipo de dato devuelve cada uno?

| | `querySelector` | `querySelectorAll` |
|---|---|---|
| **Devuelve** | El **primer** elemento que coincide con el selector (`Element`) o `null` si no hay coincidencias. | Una **NodeList** (estática) con **todos** los elementos que coinciden con el selector. |
| **Cuándo usarlo** | Cuando solo se necesita un único elemento (por ejemplo, el primer `<h1>` de la página). | Cuando se necesita manipular **múltiples elementos** al mismo tiempo (por ejemplo, todos los checkboxes de una clase). |
| **Iteración** | No es necesario iterar, se trabaja directamente con el elemento. | Se debe recorrer con `forEach`, `Array.from()` o un bucle `for...of`. |

**Ejemplo práctico de este laboratorio:** para leer los checkboxes marcados con la clase `.lang-check`, se usó `querySelectorAll(".lang-check:checked")` porque había más de uno y se necesitaba recorrerlos todos. Usar `querySelector` en ese caso solo habría devuelto el primero encontrado, ignorando el resto.

---