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

 // Activity Feed Data
 const activities = [
     {
         type: 'run',
         description: 'Completed 5K morning run',
         time: '2 hours ago',
         icon: 'ri-run-line',
         color: 'var(--primary)'
     },
     {
         type: 'donation',
         description: 'Received $50 donation from John D.',
         time: '5 hours ago',
         icon: 'ri-heart-line',
         color: 'var(--success)'
     },
     {
         type: 'achievement',
         description: 'Earned "Early Bird" badge',
         time: '1 day ago',
         icon: 'ri-medal-line',
         color: 'var(--warning)'
     }
 ];

 // Render Activity Feed
 function renderActivityFeed() {
     const feed = document.getElementById('activityFeed');
     feed.innerHTML = activities.map(activity => `
         <div class="activity-item">
             <div class="activity-icon" style="background: ${activity.color}">
                 <i class="${activity.icon}"></i>
             </div>
             <div class="activity-content">
                 <div>${activity.description}</div>
                 <div class="activity-time">${activity.time}</div>
             </div>
         </div>
     `).join('');
 }

 // Progress Updates
 function updateProgress() {
     const distance = {
         current: 156.2,
         goal: 200,
         get percentage() { return (this.current / this.goal) * 100; }
     };

     const fundraising = {
         current: 1250,
         goal: 2000,
         get percentage() { return (this.current / this.goal) * 100; }
     };

     document.getElementById('distancePercentage').textContent = 
         `${distance.percentage.toFixed(1)}%`;
     document.getElementById('fundPercentage').textContent = 
         `${fundraising.percentage.toFixed(1)}%`;

     // Animate progress bars
     document.querySelector('.progress-fill.distance').style.width = 
         `${distance.percentage}%`;
     document.querySelector('.progress-fill.donation').style.width = 
         `${fundraising.percentage}%`;
 }

 // Modal Handling
 function showModal(type) {
     let message = '';
     switch(type) {
         case 'donate':
             message = 'Donation feature will be implemented here';
             break;
         case 'activity':
             message = 'Activity logging feature will be implemented here';
             break;
     }
     alert(message);
 }

 // Initialize
 renderActivityFeed();
 updateProgress();

 // Real-time updates simulation
 setInterval(() => {
     // Randomly update progress values
     const randomProgress = Math.random() * 2;
     const progressBar = document.querySelector('.progress-fill.distance');
     const currentWidth = parseFloat(progressBar.style.width);
     const newWidth = Math.min(currentWidth + randomProgress, 100);
     progressBar.style.width = `${newWidth}%`;
     
     // Update percentage display
     document.getElementById('distancePercentage').textContent = 
         `${newWidth.toFixed(1)}%`;
 }, 5000);