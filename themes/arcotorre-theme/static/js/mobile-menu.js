// ========================================
// MENU MOBILE - Script per gestire apertura/chiusura
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Toggle menu hamburger principale
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Chiudi tutti i dropdown quando chiudi il menu
            if (!mainNav.classList.contains('active')) {
                document.querySelectorAll('.has-dropdown').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }
    
    // Toggle dropdown su mobile
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            // Solo su mobile (max-width: 900px)
            if (window.innerWidth <= 900) {
                e.preventDefault(); // Previeni la navigazione
                
                // Chiudi gli altri dropdown
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle questo dropdown
                item.classList.toggle('active');
            }
        });
    });
    
    // Chiudi menu quando si clicca su un link (non dropdown)
    const navLinks = document.querySelectorAll('.dropdown a, .nav-item:not(.has-dropdown) .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
                mainNav.classList.remove('active');
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    });
    
    // Chiudi menu se si ridimensiona la finestra
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            mainNav.classList.remove('active');
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
