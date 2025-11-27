const receitasSurpresa = [
    {
        titulo: "Bolo de Cenoura",
        imagem: "assets/bolo_cenoura.jpg",
        texto: `
            <strong class="Ingredientes">Ingredientes</strong>
            3 cenouras médias picadas<br>
            3 ovos<br>
            1 xícara de óleo<br>
            2 xícaras de farinha<br>
            2 xícaras de açúcar<br>
            1 colher de fermento<br><br>

            <strong class="modoPreparo">Modo de Preparo</strong>
            Bata tudo no liquidificador, asse por 40 minutos a 180 graus e finalize com calda de chocolate.
        `
    },
    {
        titulo: "Arroz Doce Cremoso",
        imagem: "assets/arroz_doce.jpg",
        texto: `
            <strong class="Ingredientes">Ingredientes</strong>
            1 xícara de arroz<br>
            1 litro de leite<br>
            1 lata de leite condensado<br>
            Canela a gosto<br><br>

            <strong class="modoPreparo">Modo de Preparo</strong>
            Cozinhe o arroz, adicione o leite e o leite condensado e deixe engrossar. Sirva quente.
        `
    },
    {
        titulo: "Panqueca Simples",
        imagem: "assets/panqueca.jpg",
        texto: `
            <strong class="Ingredientes">Ingredientes</strong>
            1 ovo<br>
            1 xícara de leite<br>
            1 xícara de farinha<br>
            Sal a gosto<br><br>

            <strong class="modoPreparo">Modo de Preparo</strong>
            Bata tudo e frite pequenas porções em frigideira untada.
        `
    }
];

document.getElementById("btn-surpresa").addEventListener("click", function () {

    // Seleciona receita aleatória
    const sorteada = receitasSurpresa[Math.floor(Math.random() * receitasSurpresa.length)];

    // Atualiza conteúdo no card
    document.getElementById("titulo-surpresa").innerHTML = sorteada.titulo;
    document.getElementById("img-surpresa").src = sorteada.imagem;
    document.getElementById("texto-surpresa").innerHTML = sorteada.texto;

    // Mostra card caso esteja oculto
    document.querySelector(".surpresa-card").classList.remove("hidden");

    // Efeito flip
    setTimeout(() => {
        document.querySelector(".surpresa-card .card-inner").style.transform = "rotateY(180deg)";
    }, 100);
});
