let currentSlide = 0;

function showSlide(index) {
    const images = document.querySelectorAll('.carousel-container img');
    const container = document.querySelector('.carousel-container');
    const slideWidth = 200; // Largura fixa de cada slide
    const totalSlides = images.length;

    // Atualiza o índice do slide considerando a rotação circular
    currentSlide = (index + totalSlides) % totalSlides;

    // Move o carrossel para a posição correta
    container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia o carrossel na posição inicial
showSlide(currentSlide);

