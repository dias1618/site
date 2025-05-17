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

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Fechamento do menu ao clicar em um item
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll suave para links de navegação internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animação da navegação ativa durante o scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Validação do formulário de contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você adicionaria a lógica para enviar o formulário via AJAX
        // Por enquanto, apenas simulamos um envio bem-sucedido
        
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        this.reset();
    });
}

