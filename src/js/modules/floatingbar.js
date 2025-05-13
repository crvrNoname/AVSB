document.addEventListener('DOMContentLoaded', () => {
    const floatingBar = document.querySelector('.floating-bar');
    if (!floatingBar) return;

    const items = document.querySelectorAll('.floating-bar__item');
    const sections = [];

    // 1. Configurar Scroll Spy
    items.forEach(item => {
        const targetId = item.getAttribute('href');
        if (targetId.startsWith('#')) {
            const section = document.querySelector(targetId);
            if (section) sections.push({ item, section });
        }

        // 2. Click para scroll suave + activar ítem
        item.addEventListener('click', (e) => {
            if (targetId.startsWith('#')) {
                e.preventDefault();
                window.scrollTo({
                    top: section.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Detectar sección visible
    function updateActiveItem() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(({ item, section }) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    }

    // 4. Optimización con debounce
    let isScrolling;
    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(updateActiveItem, 50);
    }, { passive: true });

    // Inicializar
    updateActiveItem();
});