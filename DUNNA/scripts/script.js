document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

let currentIndex = 0;
const slides = document.querySelector('.carousel-slide');
const images = slides.querySelectorAll('img');
const totalImages = images.length;
const imageWidth = 100 / (totalImages - 1); // Ajuste conforme o número de imagens, menos 1 pela cópia

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Se chegar na última imagem duplicada, reinicia a posição para a primeira imagem
    if (currentIndex === totalImages - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0%)';
            currentIndex = 0;
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease-in-out';
            }, 20);
        }, 500); // Tempo para coincidir com a duração da transição
    }
}

setInterval(showNextImage, 3000); // Muda de imagem a cada 3 segundos


