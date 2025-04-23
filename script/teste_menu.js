const btnMobile = document.querySelector('#btn-mobile');
const nav = document.querySelector('#nav');
const sections = document.querySelectorAll('section');
const navLinkMenu = document.querySelectorAll('header nav a');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){ 
        event.currentTarget.setAttribute('aria-label', 'close menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'open menu');
    }
}

// Modificado: Adicionar scroll suave e prevenir mudança de URL
navLinkMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView();
            
            // Atualizar a classe ativa
            navLinkMenu.forEach(l => l.classList.remove('active-menu'));
            link.classList.add('active-menu');
            
            // Fechar o menu mobile (se aberto)
            setTimeout(() => {
                nav.classList.remove('active');
                btnMobile.setAttribute('aria-expanded', 'false');
                btnMobile.setAttribute('aria-label', 'open menu');
            }, 500);
        }
    });
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* modificar o item ativo no menu durante o scroll */
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinkMenu.forEach(link => {
                link.classList.remove('active-menu');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active-menu');
        }
    });
};