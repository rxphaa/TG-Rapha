/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

    function linkAction (){
        navMenu.classList.remove('show')
    }

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__meenu a[href*='+ sectionId + ']').classList.add(active)
        }
        else{
            document.querySelector('.nav__meenu a[href*='+ sectionId + ']').classList.remove(active)
        }
    })
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')}





    const botaoCostas = document.getElementById("botao-costas");
const imagemProduto = document.getElementById("imagem-produto");
const imagemContainer = document.getElementById("imagem-container");

let costasAtivas = false;

// Alternar entre frente e costas da imagem principal
botaoCostas.addEventListener("click", () => {
  if (imagemProduto.src.includes("assets/img/Personalizar/sREGULAR_FRONT.png")) {
    imagemProduto.src = "assets/img/Personalizar/sREGULAR_BACK.png"; // Substitua pelo caminho da imagem das costas
    botaoCostas.textContent = "Frente";
  } else {
    imagemProduto.src = "assets/img/Personalizar/sREGULAR_FRONT.png"; // Substitua pelo caminho da imagem da frente
    botaoCostas.textContent = "Costas";
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const opcoes = document.querySelectorAll(".grupo button");
    const botaoCostas = document.getElementById("botao-costas");
    const imagemContainers = document.querySelectorAll(".categoria-container");
  
    opcoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        const categoria = botao.closest(".grupo").dataset.categoria;
        const container = document.getElementById(categoria);
        const imgSrc = botao.dataset.img;
  
        // Verifica se a imagem já está selecionada
        const existingImage = container.querySelector("img");
        if (existingImage && existingImage.src.includes(imgSrc)) {
          container.innerHTML = ""; // Remove a imagem
        } else {
          // Exibe a nova imagem, removendo a anterior
          container.innerHTML = `<img src="${imgSrc}" alt="${categoria}" />`;
        }
      });
    });
  
    botaoCostas.addEventListener("click", () => {
      // Limpa as categorias especificadas
      ["frente-direita", "frente-esquerda", "frente-meio", "costas"].forEach((categoria) => {
        const container = document.getElementById(categoria);
        container.innerHTML = "";

         // Cria o botão "Limpar"
    const limparBotao = document.createElement("button");
    limparBotao.textContent = `Limpar ${categoria.replace("-", " ")}`;
    limparBotao.classList.add("limpar-botao");

    // Adiciona evento ao botão "Limpar"
    limparBotao.addEventListener("click", () => {
      container.innerHTML = ""; // Limpa o contêiner da categoria
    });

    // Adiciona o botão ao final do container da categoria
    container.parentElement.insertBefore(limparBotao, container.nextSibling);
      });
    });
  });
