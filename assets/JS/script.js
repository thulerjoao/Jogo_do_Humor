const itens = document.querySelectorAll("[data-anime]");
let frase = document.querySelector("[data-frase]");
let elementoBtn = document.querySelector("#alterar", "[data-btn]");
const elementoImg = document.querySelector("#imagem01");

//contrle das animações pelo js:

const animeScroll = () => { 
    const windowTop = window.pageYOffset + window.innerHeight * 0.65;
    itens.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
            frase.classList.add("animate");
            elementoBtn.classList.add("animate");
        }else {
            element.classList.remove("animate");
            frase.classList.remove("animate");
            elementoBtn.classList.remove("animate");
        }
    })
}
animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
});

//controle das ações:

elementoBtn.addEventListener("click", ()=>{
    if(elementoBtn.value == "primeiro"){
        let som = new Audio("./assets/SONGS/audio02.mp3")
        som.play();
        elementoBtn.innerText="Next"
        frase.innerText = `"Algumas das melhores histórias de amor começam com um homicídio."`;
        elementoImg.src = "./assets/IMG/imagem02.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 3rem;';
        elementoBtn.value = "segundo";    
    }else if(elementoBtn.value == "segundo"){
        let som = new Audio("./assets/SONGS/audio01.mp3")
        som.play();
        frase.innerText = `"As ameaças doem, mas não tanto quanto uma faca serrilhada"`;
        elementoImg.src = "./assets/IMG/imagem03.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 10rem;'+'margin-bottom:4rem;';
        elementoBtn.value = "terceiro";
    }else if(elementoBtn.value == "terceiro"){
        let som = new Audio("./assets/SONGS/audio02.mp3")
        som.play();
        frase.innerText = `"Água oxigenada e limão para remover manchas de sangue."`;
        elementoImg.src = "./assets/IMG/imagem04.png";
        elementoImg.style.cssText = 'width: 50%;'+'margin-top: 6rem;';
        elementoBtn.value = "quarto";
    }
    else if(elementoBtn.value == "quarto"){
        let som = new Audio("./assets/SONGS/audio03.mp3")
        som.play();
        frase.innerText = `"Contras de ser um super-herói: todos são idiotas treinados para respeitar a lei."`;
        elementoImg.src = "./assets/IMG/imagem06.png";
        elementoImg.style.cssText = 'width: 46%;';
        elementoBtn.value = "";
    }else{
        let som = new Audio("./assets/SONGS/audio04.mp3")
        som.play();
        elementoBtn.innerText="Recomeçar"
        frase.innerText = `Por hoje é só... Mas clica aí para ver de novo, vai!`;
        elementoImg.src = "./assets/IMG/imagem05.png";
        elementoImg.style.cssText = 'width: 84%;'+'margin-top: 7rem;';
        elementoBtn.value = "primeiro";
    }
});

