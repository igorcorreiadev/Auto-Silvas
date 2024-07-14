/**
 *  super class
 *  
 * */

class Modal{

    constructor(){
        this.modal=null;
    }
    criarElemento(intoElement, apdLocation, intoClass) { // base para criar elementos
        let elementocriado = document.createElement(intoElement);

        if(intoClass){
            elementocriado.classList.add(intoClass);
        }
        apdLocation.appendChild(elementocriado);
        return elementocriado;
    
    }
    showModal() {
        const getBody = document.querySelector('body');
        this.modal.showModal();
        getBody.setAttribute('style', 'overflow: hidden;');
        
    }
    closeModal() {
        this.getBody = document.querySelector('body');
        this.modal.close();
        this.getBody.removeAttribute('style');
    }
    criarModal(){
        this.modal= document.querySelector('#'+[this.criarElemento('dialog', this.apdModal).id="modal"]);

    }
    
    
}
/**
 * class para criar slide
 */
export class Slide extends Modal{

    constructor(apdModal, mapSlide){
        super()
        this.apdModal = apdModal;
        this.mapSlide = mapSlide;
        this.currentImageIndex = 0;

      
    }
    criarMainContainerSlide(){
        this.mainContainer = document.querySelector('#'+[this.criarElemento('div', this.modal).id="mainContainerSlide"]);
    }
    criarBtnClose(){
        this.btnClose = document.querySelector('#'+[this.criarElemento('button', this.mainContainer).id="btnClose"]);
        this.btnClose.innerHTML='X'
        this.btnClose.addEventListener('click', () => {
            this.stopSlide(); // parar slide 
            this.currentImageIndex = 0; 
            this.closeModal();
            this.getBody.removeChild(this.modal);
        });
    }
    stopSlide() {
        clearInterval(this.slideInterval);
    }
    criarContainerFotos(){
        this.containerFotos =  document.querySelector('#'+[super.criarElemento('div', this.mainContainer).id="fotos"]);
    }
  
    criarFotos(index, foto, alt) {
        this.foto =  document.querySelector('#'+[super.criarElemento('img', this.containerFotos).id=`foto${index + 1}`])
        this.foto.src = foto ; 
        this.foto.alt = alt[index];
        if(this.foto.id == 'foto1'){
            this.foto.classList.add('selected');
        }
    }
    criarBtnControl(){
        this.btnPrev =  document.querySelector('#'+[super.criarElemento('button', this.mainContainer, 'btnControlPrev').id="prev"]);
        this.btnPrev.setAttribute('aria-label', 'previous');
        this.ArrowPrev = document.querySelector('#'+[ super.criarElemento('img', this.btnPrev).id="arrowPrev"]);
        this.ArrowPrev.setAttribute('src', '/img/slide/seta-esquerda.png')
        this.ArrowPrev.setAttribute('alt', 'previous');
        
        this.btnNext =  document.querySelector('#'+[super.criarElemento('button', this.mainContainer,'btnControlNext').id="next"]);
        this.btnNext.setAttribute('aria-label', 'next');
        this.ArrowNext =document.querySelector('#'+[ super.criarElemento('img', this.btnNext).id="arrowNext"]);
        this.ArrowNext.setAttribute('src', '/img/slide/seta-direita.png')
        this.ArrowNext.setAttribute('alt', 'next');

        this.btnPrev.addEventListener('click', ()=>{
            this.prevImage()
            this.stopSlide()
            this.startSlide()
            
        })
        this.btnNext.addEventListener('click', ()=>{
            this.nextImage()
            this.stopSlide()
            this.startSlide()
        
        })
    }
    prevImage(){
        this.images[this.currentImageIndex].classList.remove('selected');
        this.currentImageIndex--;
        if(this.currentImageIndex<0){
            this.currentImageIndex = this.max-1
        }
        this.images[this.currentImageIndex].classList.add('selected');
    }
    nextImage(){
        this.images = document.querySelectorAll('#fotos img');
        this.max =this.images.length;
        this.images[this.currentImageIndex].classList.remove('selected');
        this.currentImageIndex ++;
            if(this.currentImageIndex >= this.max){
                this.currentImageIndex = 0;
            }
        this.images[this.currentImageIndex].classList.add('selected');
    }
    startSlide(){
        this.time = 5000;
        this.slideInterval=setInterval(()=>{
            this.nextImage();
        },this.time)// setInterval(instrução, time) serve para executar a instrução a cada intervelo time
    
    }

    /**
     * activar modal slide
     */
    activarSlide() {
        const galleryContainer = document.querySelectorAll('.modal-gallery');
        galleryContainer.forEach((element)=>
            element.addEventListener('click', (e) => {
                const boxGallery = e.currentTarget.id;
                const buttonClicked = 'fotos' + [boxGallery];
                this.galleryFoto =this.mapSlide[buttonClicked].img
                this.galleryAlt = this.mapSlide[buttonClicked].alt
                super.criarModal();
                this.criarMainContainerSlide();
                this.criarContainerFotos();
            
                this.galleryFoto.forEach((foto, index) => {
                    this.criarFotos(index, foto, this.galleryAlt);
                });
                this.criarBtnControl();
                this.criarBtnClose();
                super.showModal();
                this.startSlide()
            }));
        
    }
}
/**
 * crialr modal services
 */


export class Services extends Modal{
    constructor(apdModal, mapInfoServices){
        super()
        
        this.apdModal = apdModal
        this.mapInfoServices= mapInfoServices
        this.infoModalMap = this.mapInfoServices.infoModalMap
        this.fotoModalMap = this.mapInfoServices.fotoModalMap
    }
    criarBtnClose(){
        this.btnClose = document.querySelector('#'+[this.criarElemento('button', this.mainContainer).id="btnClose"]);
        this.btnClose.innerHTML='X'
        this.btnClose.addEventListener('click', () => {
            this.closeModal();
            this.getBody.removeChild(this.modal);
        });
    }
    criarMainContainerInfo(){
        this.mainContainer = document.querySelector('#'+[this.criarElemento('div', this.modal).id="mainContainerInfo"]);
    }
    criarInfoBox(mainContainer){
        this.infoBox = document.querySelector('#'+[super.criarElemento('div', mainContainer).id='infoBox'])

    }
    criarFotoBox(mainContainer){
        this.fotoBox = document.querySelector('#'+[super.criarElemento('div', mainContainer).id='fotoBox'])
    }

    activarInfoService(){
        const services = document.querySelectorAll('.modal-services')
        services.forEach((btnMore)=> 
            btnMore.addEventListener('click', (e) => {
            super.criarModal()
            this.criarMainContainerInfo()
            this.criarInfoBox(this.mainContainer)
            this.criarFotoBox(this.mainContainer)
                const buttonClicked = e.currentTarget.id; // Obtém o ID do botão clicado
                    this.infoBox.innerHTML = this.infoModalMap[buttonClicked];
                    this.fotoBox.innerHTML = this.fotoModalMap[buttonClicked];
            this.criarBtnClose();
            super.showModal();

        }))
    }
}