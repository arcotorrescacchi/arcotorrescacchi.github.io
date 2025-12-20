// ========================================
// MAIN.JS - Script principale del sito
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MENU MOBILE CON DROPDOWN
    // ========================================
    
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        // Toggle menu hamburger
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animate hamburger icon (diventa X)
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transition = 'all 0.3s ease';
            });
            
            if (mainNav.classList.contains('active')) {
                // Menu aperto → mostra X
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                // Menu chiuso → mostra hamburger
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Chiudi tutti i dropdown quando chiudi il menu
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
        
        if (link) {
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
        }
    });
    
    // Chiudi menu quando si clicca su un link (non dropdown)
    const navLinks = document.querySelectorAll('.dropdown a, .nav-item:not(.has-dropdown) .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900 && mainNav) {
                mainNav.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Chiudi dropdown
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Chiudi dropdown
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        }
    });
    
    // Chiudi menu se si ridimensiona la finestra (da mobile a desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900 && mainNav) {
            mainNav.classList.remove('active');
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // ========================================
    // SMOOTH SCROLL PER ANCHOR LINKS
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
