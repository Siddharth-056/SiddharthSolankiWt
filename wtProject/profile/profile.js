// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('ri-moon-line');
    themeIcon.classList.toggle('ri-sun-line');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
}

// Profile Photo Upload
const profilePhoto = document.querySelector('.profile-photo');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

profilePhoto.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePhoto.src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

// Form Handling
const form = document.querySelector('form');
const saveBtn = document.querySelector('.btn-primary');

saveBtn.addEventListener('click', () => {
    saveBtn.disabled = true;
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="ri-loader-4-line"></i> Saving...';

    // Simulate API call
    setTimeout(() => {
        saveBtn.innerHTML = '<i class="ri-check-line"></i> Saved!';
        
        setTimeout(() => {
            saveBtn.disabled = false;
            saveBtn.innerHTML = originalText;
        }, 1000);
    }, 1500);
});

// Dynamic Progress Bar Updates
const distanceInput = document.querySelector('input[type="number"]');
const progressBar = document.querySelector('.progress-fill');

distanceInput.addEventListener('input', (e) => {
    const goal = parseInt(e.target.value);
    const current = 156; // Current distance
    const percentage = Math.min(Math.round((current / goal) * 100), 100);
    progressBar.style.width = `${percentage}%`;
    progressBar.nextElementSibling.textContent = 
        `${current}km completed (${percentage}%)`;
});

// Add at start of script
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = '../signin/signin.html';
    }
}

// Load user data
function loadUserData() {
    const userEmail = localStorage.getItem('userEmail');
    document.querySelector('.profile-info h2').textContent = userEmail.split('@')[0];
}

checkAuth();
loadUserData();


