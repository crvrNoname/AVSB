document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('navbar-menu');
    const mainContent = document.querySelector('main');

    // Función para actualizar estado
    const updateMenuState = (isOpen) => {
        menu.classList.toggle('open', isOpen);
        mainContent.classList.toggle('blurred', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    };

    // Toggle menú al hacer clic en el botón
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains('open');
        updateMenuState(isOpen);
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('open') && 
            !menu.contains(e.target) && 
            e.target !== toggleButton) {
            updateMenuState(false);
        }
    });

    // Cerrar menú al hacer scroll (opcional)
    window.addEventListener('scroll', () => {
        if (menu.classList.contains('open')) {
            updateMenuState(false);
        }
    });
});