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

function toggleExclusiveImageC(activeImageId) {
  const images = document.querySelectorAll('.image-containerc');

  // Loop through all images and hide them
  images.forEach(image => {
      if (image.id === activeImageId) {
          // Toggle the active image
          image.style.display = image.style.display === 'none' || image.style.display === '' 
              ? 'block' 
              : 'none';

          // Set position if image is shown
          if (image.style.display === 'block') {
              switch (activeImageId) {
                  case 'image1':
                      image.style.left = '905px';
                      image.style.top = '575px';
                      break;
                  case 'image2':
                      image.style.left = '905px';
                      image.style.top = '575px';
                      break;
                  case 'image3':
                      image.style.left = '905px';
                      image.style.top = '575px';
                      break;
                  case 'image4':
                      image.style.left = '905px';
                      image.style.top = '575px';
                      break;
              }
          }
      } else {
          // Hide all other images
          image.style.display = 'none';
      }
  });
}

function toggleExclusiveImageFD(activeImageId) {
    const images = document.querySelectorAll('.image-containerfd');
  
    // Loop through all images and hide them
    images.forEach(image => {
        if (image.id === activeImageId) {
            // Toggle the active image
            image.style.display = image.style.display === 'none' || image.style.display === '' 
                ? 'block' 
                : 'none';
  
            // Set position if image is shown
            if (image.style.display === 'block') {
                switch (activeImageId) {
                    case 'image5':
                        image.style.left = '1030px';
                        image.style.top = '575px';
                        break;
                    case 'image6':
                        image.style.left = '1030px';
                        image.style.top = '575px';
                        break;
                    case 'image7':
                        image.style.left = '1030px';
                        image.style.top = '575px';
                        break;
                    case 'image8':
                        image.style.left = '1030px';
                        image.style.top = '575px';
                        break;
                }
            }
        } else {
            // Hide all other images
            image.style.display = 'none';
        }
    });
  }

  function toggleExclusiveImageFE(activeImageId) {
    const images = document.querySelectorAll('.image-containerfe');
  
    // Loop through all images and hide them
    images.forEach(image => {
        if (image.id === activeImageId) {
            // Toggle the active image
            image.style.display = image.style.display === 'none' || image.style.display === '' 
                ? 'block' 
                : 'none';
  
            // Set position if image is shown
            if (image.style.display === 'block') {
                switch (activeImageId) {
                    case 'image9':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        break;
                    case 'image10':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        break;
                    case 'image11':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        break;
                    case 'image12':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        break;
                }
            }
        } else {
            // Hide all other images
            image.style.display = 'none';
        }
    });
  }

  function toggleExclusiveImageFM(activeImageId) {
    const images = document.querySelectorAll('.image-containerfm');
  
    // Loop through all images and hide them
    images.forEach(image => {
        if (image.id === activeImageId) {
            // Toggle the active image
            image.style.display = image.style.display === 'none' || image.style.display === '' 
                ? 'block' 
                : 'none';
  
            // Set position if image is shown
            if (image.style.display === 'block') {
                switch (activeImageId) {
                    case 'image13':
                        image.style.left = '965px';
                        image.style.top = '575px';
                        break;
                    case 'image14':
                        image.style.left = '965px';
                        image.style.top = '575px';
                        break;
                    case 'image15':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        image.style.width = '200px';
                        image.style.height = '200px'
                        break;
                    case 'image16':
                        image.style.left = '915px';
                        image.style.top = '575px';
                        image.style.width = '200px';
                        image.style.height = '200px'
                        break;
                }
            }
        } else {
            // Hide all other images
            image.style.display = 'none';
        }
    });
  }
  
  