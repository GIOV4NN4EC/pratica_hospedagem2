// Alternar tema
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
};

// Filtro de projetos
function filtrar(tipo) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (tipo === "todos") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(tipo)
                ? "block"
                : "none";
        }
    });
}

// Simulação de envio
function enviar() {
    alert("Mensagem enviada! (simulação)");
}
