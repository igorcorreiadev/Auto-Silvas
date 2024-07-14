
// Slide Object
const slide ={
    fotosMG:{
        img : ["/img/gallery/carro1/mg1.webp", "/img/gallery/carro1/mg2.webp", "/img/gallery/carro1/mg3.webp", "/img/gallery/carro1/mg4.webp", "/img/gallery/carro1/mg5.webp","/img/gallery/carro1/mg6.webp"],
        alt : ["Restauro do Carro MG", "Restauro do Carro MG", "Restauro do Carro MG", "Restauro do Carro MG", "Restauro do Carro MG", "Restauro do Carro MG","Restauro do Carro MG"]
    },
    fotosmini: {
        img : ["/img/gallery/carro2/mini1.webp", "/img/gallery/carro2/mini2.webp", "/img/gallery/carro2/mini3.webp", "/img/gallery/carro2/mini4.webp", "/img/gallery/carro2/mini5.webp", "/img/gallery/carro2/mini6.webp"],
        alt : ["Restauro do Carro Mini", "Restauro do Carro Mini", "Restauro do Carro Mini", "Restauro do Carro Mini", "Restauro do Carro Mini", "Restauro do Carro Mini",]
    }
}
// Services Object
const infoContent={
    // infoModal 
    infoModalMap: {
        carLight: '<h3>Recuperação de Farois</h3> <p>O restauro de faróis de carro, é um processo utilizado para melhorar a clareza e a aparência dos faróis que ficam opacos devido à exposição ao sol, poeira e outros elementos. </p><p>A pintura ou polimento de farois do carro é uma opção mais economica do que subestituir os farois. Restaura a transparência original do farol, melhorando eficácia da iluminação noturna do veículo, aumentando a segurança.</p>',
        bumper: '<h3>Recuperação de Para-choques</h3> <p>Antes de iniciar qualquer processo de recuperação, é essencial avaliar a extensão do dano no parachoques</p><p> A reparação de Rachaduras e Deformidades,Remoção de Arranhões e Pintura, visa O restauro da integridade estrutural e a forma original dos pára-choques. </p>',
        bodyRepair: '<h3>Recuperação, Bate-chapas</h3><p> Os profissionais de Bate-Chapa são verdadeiros artesãos, empregando técnicas precisas para moldar e alinhar as superfícies metálicas, devolvendo ao carro sua forma original.</p><p>Um processo meticuloso que exige paciência, precisão e um olhar treinado para devolver aos veículos não apenas sua beleza externa, mas também sua integridade estrutural, segurança e a longevidade dos carros</p>',
        carPainting: '<h3>Pintura de Carro</h3>  <p>A pintura automovel é um componente crucial no design e na proteção de veículos, contribuindo significativamente para sua estética e durabilidade.</p> <p>A pintura automovel é geralmente composta por várias camadas, incluindo primário, base (cor), e camada transparente (verniz). - A base fornece a cor desejada, enquanto o verniz protege a pintura e proporciona brilho.</p>',
        moto: '<h3>Recuperaçaõ de motos</h3> <p>A recuperação de motos é um processo essencial para devolver vida e funcionalidade a duas rodas que foram afetadas por acidentes, desgastes ou outros eventos danosos. Esse serviço especializado vai além da simples reparação estética, buscando restaurar a performance e a segurança do veículo.</p>',
        documents: '<h3>Informação importante</h3> <p>A colaboração com múltiplas seguradoras reflete nosso compromisso em oferecer um serviço abrangente e eficiente aos nossos clientes, garantindo que, em momentos de imprevistos como acidentes</p><p> Informações sobre a Oficina </br> Nome da oficina : Auto Silvas </br>Morada: Estrada regional 103 do Faial, 49 Lombo de Cima, 9230-057 Faial </br> NIF:230320481 </br>Tel: 964 668 988 </br> Email: joaovfs@hotmail.com</p>',
    },
    // fotoModal
    fotoModalMap: {
        carLight: '<img src="img/services/farois.webp" style="width: 250px;" alt="Farois antes e depois da recuperação">',
        bumper: '<img src="img/services/para-choques.webp" style="width: 250px;" alt="Para- antes e depois da recuperação">',
        bodyRepair: '<img src="img/services/batechapa.webp" style="width: 250px;" alt="Trabalho de bate-chapas, antes e depois da rrecuperação">',
        carPainting: '<img src="img/services/Pintura.webp" style="width: 250px;" alt="Carro a ser pintado dentro da estufa de pintura">',
        moto: '<img src="img/services/moto.webp" style="width: 250px;" alt="Moto antes e depois da rrecuperação">',
        documents: '<img src="img/services/oficinaFora.webp" style="width: 250px;" alt="">',
    }
}
var getBody = document.querySelector('body'); // onde o model vai ser colocado
import {Slide} from '/script/modal.js';
import {Services} from '/script/modal.js';
const gallerySlide = new Slide (getBody, slide);
gallerySlide.activarSlide();
const infoServices = new Services(getBody, infoContent);
infoServices.activarInfoService();






