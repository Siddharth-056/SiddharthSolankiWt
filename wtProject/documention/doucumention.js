// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('ri-moon-line');
    themeIcon.classList.toggle('ri-sun-line');
    
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Initialize theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
}

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const breadcrumbSection = document.querySelector('.breadcrumb-item:last-child');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        link.classList.add('active');
        const sectionId = link.getAttribute('href').slice(1);
        document.getElementById(sectionId).classList.add('active');
        
        breadcrumbSection.textContent = link.textContent.trim();
        
        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });
});

// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');

mobileMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const contentSections = document.querySelectorAll('.content-section');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length > 2) {
        contentSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            const match = text.includes(searchTerm);
            
            if (match) {
                section.style.display = 'block';
                highlightText(section, searchTerm);
            } else {
                section.style.display = 'none';
            }
        });
    } else {
        contentSections.forEach(section => {
            section.style.display = 'none';
            section.innerHTML = section.innerHTML.replace(/<mark>|<\/mark>/g, '');
            });
            document.querySelector('.content-section.active').style.display = 'block';
        }
    });
    
    function highlightText(element, searchTerm) {
        const html = element.innerHTML;
        const regex = new RegExp(searchTerm, 'gi');
        element.innerHTML = html.replace(regex, match => `<mark>${match}</mark>`);
    }