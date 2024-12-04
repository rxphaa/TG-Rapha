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





/*===== CHANGE COLOR HEADER =====*/ 
    const botaoCostas = document.getElementById("botao-costas");
    const imagemProduto = document.getElementById("imagem-produto");
    
    // Alternar entre frente e costas
    botaoCostas.addEventListener("click", () => {
      if (imagemProduto.src.includes("assets/img/Personalizar/sREGULAR_FRONT.png")) {
        imagemProduto.src = "assets/img/Personalizar/sREGULAR_BACK.png"; // Substitua pelo caminho da imagem das costas
        botaoCostas.textContent = "Frente";
      } else {
        imagemProduto.src = "assets/img/Personalizar/sREGULAR_FRONT.png"; // Substitua pelo caminho da imagem da frente
        botaoCostas.textContent = "Costas";
      }
    });


    const imagemContainer = document.getElementById("imagem-container");

// Adiciona evento a todos os botões
document.querySelectorAll("button[data-img]").forEach((button) => {
    button.addEventListener("click", () => {
      const categoria = button.closest(".grupo").getAttribute("data-categoria");
      const imgSrc = button.getAttribute("data-img");
  
      // Seleciona o contêiner específico para a categoria
      const categoriaContainer = document.getElementById(categoria);
  
      // Verifica se já existe uma imagem dentro dessa categoria
      let imgElement = categoriaContainer.querySelector("img");
  
      if (imgElement) {
        // Compara o src da imagem com o imgSrc do botão
        if (imgElement.src.includes(imgSrc)) {
          // Se a imagem atual for a mesma que foi clicada, remove
          categoriaContainer.removeChild(imgElement);
        } else {
          // Se a imagem for diferente, atualiza o src
          imgElement.src = imgSrc;
          imgElement.alt = `Imagem da categoria ${categoria}`;
        }
      } else {
        // Se não existir imagem, cria uma nova
        imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = `Imagem da categoria ${categoria}`;
        categoriaContainer.appendChild(imgElement);
      }
    });
  });
  

