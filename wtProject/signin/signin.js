// Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeIcon.classList.toggle('ri-moon-line');
            themeIcon.classList.toggle('ri-sun-line');
        });

        // Form Submission
        document.getElementById('signin-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            // Basic validation
            if (email && password) {
                console.log('Login attempt:', {
                    email,
                    rememberMe
                });
                // Add your authentication logic here
            }
        });

        document.getElementById('signin-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        
            // Validate credentials (replace with actual authentication)
            if (email === "john@example.com" && password === "password") {
                // Store auth state
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                // Redirect to profile
            } else {
                window.location.href = '../profile/profile.html';
                // alert('Invalid credentials');
            }
        });