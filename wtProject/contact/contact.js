

const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');

        function toggleTheme() {
            const currentTheme = document.body.dataset.theme;
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.dataset.theme = newTheme;
            localStorage.setItem('theme', newTheme);
            
            themeIcon.classList.toggle('ri-moon-line');
            themeIcon.classList.toggle('ri-sun-line');
        }

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            document.querySelectorAll('.error').forEach(err => err.textContent = '');
            
            let isValid = true;
            const form = event.target;
            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim()
            };

            if (data.name.length < 2) {
                document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }

            if (!validateEmail(data.email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                isValid = false;
            }

            if (data.subject.length < 5) {
                document.getElementById('subject-error').textContent = 'Subject must be at least 5 characters';
                isValid = false;
            }

            if (data.message.length < 20) {
                document.getElementById('message-error').textContent = 'Message must be at least 20 characters';
                isValid = false;
            }

            if (isValid) {
                const submitBtn = form.querySelector('.submit-btn');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';

                setTimeout(() => {
                    const successMessage = document.getElementById('success-message');
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
                    
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);

                    setTimeout(() =>{
                        window.location.href = '../index.html';
                    },1000);
                }, 1500);
            }
        }

        // Initialize theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.dataset.theme = savedTheme;
        if (savedTheme === 'dark') {
            themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        }