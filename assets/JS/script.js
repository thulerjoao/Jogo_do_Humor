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
        elementoBtn.innerText="Next"
        frase.innerText = `"Algumas das melhores histórias de amor começam com um homicídio."`;
        elementoImg.src = "./assets/IMG/imagem02.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 3em;';
        elementoBtn.value = "segundo";    
    }else if(elementoBtn.value == "segundo"){
        frase.innerText = `"As ameaças doem, mas não tanto quanto uma faca serrilhada"`;
        elementoImg.src = "./assets/IMG/imagem03.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 10rem;'+'margin-bottom:4em;';
        elementoBtn.value = "terceiro";
    }else if(elementoBtn.value == "terceiro"){
        frase.innerText = `"Água oxigenada e limão para remover manchas de sangue."`;
        elementoImg.src = "./assets/IMG/imagem04.png";
        elementoImg.style.cssText = 'width: 50%;'+'margin-top: 6em;';
        elementoBtn.value = "quarto";
    }
    else if(elementoBtn.value == "quarto"){
        frase.innerText = `"Contras de ser um super-herói: todos são idiotas treinados para respeitar a lei."`;
        elementoImg.src = "./assets/IMG/imagem06.png";
        elementoImg.style.cssText = 'width: 46%;';
        elementoBtn.value = "";
    }else{
        elementoBtn.innerText="Recomeçar"
        frase.innerText = `Por hoje é só... Mas clica aí para ver de novo, vai!`;
        elementoImg.src = "./assets/IMG/imagem05.png";
        elementoImg.style.cssText = 'width: 84%;'+'margin-top: 7em;';
        elementoBtn.value = "primeiro";
    }
});