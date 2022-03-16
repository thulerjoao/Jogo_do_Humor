const itens = document.querySelectorAll("[data-anime]");
let frase = document.querySelector("[data-frase]");

const animeScroll = () => { 
    const windowTop = window.pageYOffset + window.innerHeight * 0.7;
    itens.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
            frase.classList.add("animate");
        }else {
            element.classList.remove("animate");
        }
    })
}
animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
});


let elementoBtn = document.querySelector("#alterar");
const elementoImg = document.querySelector("#imagem01");



elementoBtn.addEventListener("click", ()=>{
    if(elementoBtn.value == "primeiro"){
        elementoBtn.innerText="Next"
        frase.innerText = `"As ameaças doem, mas não tanto quanto uma faca serrilhada"`;
        elementoImg.src = "./assets/IMG/imagem02.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 3rem;';
        elementoBtn.value = "segundo";    
    }else if(elementoBtn.value == "segundo"){
        frase.innerText = `"Terceira frase aqui"`;
        elementoImg.src = "./assets/IMG/imagem03.png";
        elementoImg.style.cssText = 'width: 46%;'+'margin-top: 10rem;'+'margin-bottom:4rem;';
        elementoBtn.value = "terceiro";
    }else if(elementoBtn.value = "terceiro"){
        frase.innerText = `"Quarta frase aqui"`;
        elementoImg.src = "./assets/IMG/imagem04.png";
        elementoImg.style.cssText = 'width: 50%;'+'margin-top: 6rem;';
        elementoBtn.value = "primeiro";
    }
});
 