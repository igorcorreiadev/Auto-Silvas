document.addEventListener('DOMContentLoaded', function() {
    // Conjuntos de imagens
    const imageSets = {
        carro1:{
            title: 'Fotos do MG',
            images: [
                { carImg: 'img/gallery/carro1/mg1.webp', alt: 'Carro 1' },
                { carImg: 'img/gallery/carro1/mg2.webp', alt: 'Carro 2' },
                { carImg: 'img/gallery/carro1/mg3.webp', alt: 'Carro 3' },
                { carImg: 'img/gallery/carro1/mg4.webp', alt: 'Carro 4' },
                { carImg: 'img/gallery/carro1/mg5.webp', alt: 'Carro 5' },
                { carImg: 'img/gallery/carro1/mg6.webp', alt: 'Carro 6' }
            ],
        },
        carro2:{
            title: 'Fotos do Mini Cooper',
            images: [
                { carImg: 'img/gallery/carro2/mini1.webp', alt: 'Carro 1' },
                { carImg: 'img/gallery/carro2/mini2.webp', alt: 'Carro 2' },
                { carImg: 'img/gallery/carro2/mini3.webp', alt: 'Carro 3' },
                { carImg: 'img/gallery/carro2/mini4.webp', alt: 'Carro 4' },
                { carImg: 'img/gallery/carro2/mini5.webp', alt: 'Carro 5' },
                { carImg: 'img/gallery/carro2/mini6.webp', alt: 'Carro 6' }
            ]
        },
        carro3:{
            title: 'Fotos do BMW',
            images: [
                { carImg: 'img/gallery/carro3/bmw1.webp', alt: 'Carro 1' },
                { carImg: 'img/gallery/carro3/bmw2.webp', alt: 'Carro 2' },
                { carImg: 'img/gallery/carro3/bmw3.webp', alt: 'Carro 3' },
                { carImg: 'img/gallery/carro3/bmw4.webp', alt: 'Carro 4' },
                { carImg: 'img/gallery/carro3/bmw5.webp', alt: 'Carro 5' },
                { carImg: 'img/gallery/carro3/bmw6.webp', alt: 'Carro 6' }
            ]
        }
    };
  
    const getBody = document.querySelector('body');
    function listener(){
        const getGallery = document.querySelectorAll('.modal-gallery');
        getGallery.forEach((element) => {
            element.addEventListener('click', (e) => {

                const boxGallery = e.currentTarget.id;
                createSlider(`${boxGallery}`);
            });
        });
    }
    // Função para criar o slider dinamicamente
    function createSlider(setName) {
        // Verificar se o dialog já existe e remover
        const existingDialog = document.getElementById('imageDialog');
        if (existingDialog) {
            existingDialog.remove();
        }
        
        // Criar o elemento dialog
        const dialog = document.createElement('dialog');
        dialog.id = 'imageDialog';
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-label', `Galeria de ${imageSets[setName].title}`);
        
        // Criar o conteúdo do dialog
        /**

         * O método map() é uma função de array que:
                Recebe uma função callback como argumento
                Executa essa função para cada elemento do array
                Retorna um NOVO array com os resultados dessas chamadas
         * 
         *O método join('') é usado para:
                Converter o array de strings em uma única string
                Concatenar todos os elementos sem separadores (por isso o '')
         */
        dialog.innerHTML = `
            <div class="dialog-header">
                <h2 class="dialog-title">${imageSets[setName].title}</h2>
                <button class="close-btn" aria-label="Fechar galeria de imagens">X</button>
            </div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${imageSets[setName].images.map(img => `
                        <div class="swiper-slide" aria-label="${img.alt}">
                            <img src="${img.carImg}" alt="${img.alt}">
                        </div>
                    `).join('')}
                </div>
                <!-- Add pagination -->
                <div class="swiper-pagination"></div>
                <!-- Navigation buttons -->
                <div class="swiper-button-prev" aria-label="Imagem anterior"></div>
                <div class="swiper-button-next" aria-label="Próxima imagem"></div>
            </div>
        `;
        
        // Adicionar o dialog ao body
        document.body.appendChild(dialog);
        
        // Mostrar o dialog
        dialog.showModal();
        getBody.setAttribute('style', 'overflow:hidden;');
        
        // Inicializar o Swiper
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
        // Fechar o dialog ao clicar no botão de fechar
        const closeBtn = dialog.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            dialog.close();
            getBody.removeAttribute('style')
            getBody.removeChild(dialog);

        });
        
        // Fechar o dialog ao clicar no backdrop
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
                getBody.removeAttribute('style');
                getBody.removeChild(dialog);
            }
        });
    }
    listener()
});