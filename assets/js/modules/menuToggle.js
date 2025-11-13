// assets/js/modules/menuToggle.js

/**
 * Módulo para controlar a abertura e fechamento do menu hambúrguer em telas mobile.
 * Cumpre o requisito de Manipulação do DOM.
 */
export function initializeMenuToggle() {
    // 1. Seleciona o ícone de hambúrguer e o elemento de navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navElement = document.querySelector('nav');

    if (menuToggle && navElement) {
        // 2. Adiciona um 'listener' ao evento de clique
        menuToggle.addEventListener('click', () => {
            // 3. Adiciona ou remove a classe 'nav-open' no elemento <nav>
            // Essa classe fará o menu aparecer/sumir via CSS
            navElement.classList.toggle('nav-open');
        });
    }
}