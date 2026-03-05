  const titulo = document.querySelector(".titulo-animado");
  const texto = titulo.textContent;
  titulo.textContent = "";

  texto.split("").forEach((letra, index) => {
    const span = document.createElement("span");
    span.textContent = letra === " " ? "\u00A0" : letra;
    span.style.animationDelay = `${index * 0.08}s`;
    titulo.appendChild(span);
  });