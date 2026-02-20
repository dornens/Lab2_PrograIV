/* ============================================================
   Laboratorio 2 – Selectores JavaScript
   Programación Computacional IV
   ============================================================ */

/* ── 1. getElementById → saludar ── */
function saludar() {
  const nombre = document.getElementById("nombreInput").value.trim();
  const resultado = document.getElementById("resultado");

  resultado.textContent = nombre
    ? `¡Hola, ${nombre}! Bienvenido/a`
    : "Por favor escribe tu nombre primero.";
}

/* ── 2. querySelector → cambiarColor del panel ── */
function cambiarColor() {
  const color = document.getElementById("colorSelect").value;
  const panel = document.querySelector(".programa");
  panel.style.backgroundColor = color;
}

/* ── 3. querySelectorAll → mostrar lenguajes seleccionados ── */
function mostrarLenguajes() {
  const checks = document.querySelectorAll(".lang-check:checked");
  const p = document.getElementById("resultadoLenguajes");

  if (checks.length === 0) {
    p.textContent = "No seleccionaste ningún lenguaje.";
    return;
  }

  const nombres = Array.from(checks).map((c) => c.value);
  p.textContent = "Tus favoritos: " + nombres.join(", ");
}

/* ── 4. getElementById → cambiar tamaño del subtítulo (range) ── */
function cambiarTamano(val) {
  document.getElementById("subtitulo").style.fontSize = val + "px";
  document.getElementById("valorRange").textContent = val + "px";
}

/* ── 5. getElementsByTagName → contar palabras en textarea ── */
function contarPalabras() {
  const textarea = document.getElementsByTagName("textarea")[0];
  const texto = textarea.value.trim();
  const cantidad = texto === "" ? 0 : texto.split(/\s+/).length;

  document.getElementById("resultadoConteo").textContent =
    `Palabras encontradas: ${cantidad}`;
}

/* ── 6. getElementById → cambiar imagen del panel ── */
const imagenes = [
  "https://placehold.co/350x220/a8d8ea/ffffff?text=JavaScript+DOM",
  "https://placehold.co/350x220/f9a8d4/ffffff?text=Selectores+CSS",
  "https://placehold.co/350x220/86efac/ffffff?text=getElementById",
  "https://placehold.co/350x220/fde68a/444?text=querySelectorAll",
];
let imgIndex = 0;

function cambiarImagen() {
  imgIndex = (imgIndex + 1) % imagenes.length;
  document.getElementById("imagenPanel").src = imagenes[imgIndex];
}

/* ── 7. querySelector por etiqueta → cambiar color del título h1 ── */
function cambiarColorTitulo(color) {
  document.querySelector("h1").style.color = color;
}

/* ── 8. getElementById → mostrar / ocultar subtítulo ── */
function toggleSubtitulo() {
  const sub = document.getElementById("subtitulo");
  const btn = document.getElementById("btnToggle");

  if (sub.style.display === "none") {
    sub.style.display = "block";
    btn.textContent = "Ocultar subtítulo";
  } else {
    sub.style.display = "none";
    btn.textContent = "Mostrar subtítulo";
  }
}