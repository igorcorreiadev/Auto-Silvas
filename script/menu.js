const btnMobile = document.querySelector('#btn-mobile');
const nav = document.querySelector('#nav');
const sections = document.querySelectorAll('section');
const navLinkMenu = document.querySelectorAll('header nav a');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();// serve para quando o event é touch não executa o event click outra vez
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');// vai receber um valor boleano que vai ser incerido no atributo aria-expanded 
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){ 
        event.currentTarget.setAttribute('aria-label', 'close menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'open menu');
    }
}

//Fechar o menu quando clicar em um item do menu

navLinkMenu.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            // Fechar o menu
            nav.classList.remove('active');
            btnMobile.setAttribute('aria-expanded', 'false');
            btnMobile.setAttribute('aria-label', 'open menu');
        }, 500); // Adiciona um atraso de 300ms
    });
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); // para o touchscreen do movel

/* modar o item no menu */
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
         let id = sec.getAttribute('id');
        

        if (top >= offset && top < offset + height) {
            navLinkMenu.forEach(link => {
                link.classList.remove('active-menu');
            })
            // Select the active menu link using the id
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active-menu');
         }
    });
};

