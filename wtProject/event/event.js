const events = [
      {
          id: 1,
          title: "Children's Education Run",
          type: "run",
          image: "/api/placeholder/400/200",
          charity: "Global Education Fund",
          date: "Sep 15-30, 2024",
          location: "Worldwide",
          participants: 1200,
          goal: 50000,
          raised: 25000,
          description: "Support global children's education initiatives"
      },
      {
          id: 2,
          title: "Ocean Conservation Walk",
          type: "walk",
          image: "/api/placeholder/400/200",
          charity: "Ocean Preservation Society",
          date: "Oct 5-15, 2024",
          location: "Coastal Cities",
          participants: 800,
          goal: 75000,
          raised: 40000,
          description: "Protect marine ecosystems worldwide"
      },
      {
          id: 3,
          title: "Mental Health Awareness Run",
          type: "virtual",
          image: "/api/placeholder/400/200",
          charity: "Mind Matters Foundation",
          date: "Nov 1-10, 2024",
          location: "Virtual Event",
          participants: 2000,
          goal: 100000,
          raised: 65000,
          description: "Support mental health initiatives"
      }
  ];

  const eventsContainer = document.getElementById('eventsContainer');
  const searchInput = document.querySelector('.search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-modal');
  const forms = document.querySelectorAll('form');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  function renderEvents(filteredEvents = events) {
      eventsContainer.innerHTML = filteredEvents.map(event => {
          const progressPercentage = (event.raised / event.goal) * 100;
          return `
              <div class="event-card" data-id="${event.id}" data-type="${event.type}">
                  <img src="${event.image}" alt="${event.title}" class="event-image">
                  <div class="event-content">
                      <div class="event-header">
                          <div>
                              <h3 class="event-title">${event.title}</h3>
                              <div class="event-charity">by ${event.charity}</div>
                          </div>
                          <span class="event-badge">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                      </div>

                      <div class="progress-container">
                          <div class="progress-stats">
                              <span>$${event.raised.toLocaleString()} raised</span>
                              <span>${progressPercentage.toFixed(1)}%</span>
                          </div>
                          <div class="progress-bar">
                              <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                          </div>
                      </div>

                      <div class="event-details">
                          <div class="detail-item">
                              <i class="ri-calendar-line"></i>
                              ${event.date}
                          </div>
                          <div class="detail-item">
                              <i class="ri-map-pin-line"></i>
                              ${event.location}
                          </div>
                          <div class="detail-item">
                              <i class="ri-team-line"></i>
                              ${event.participants} participants
                          </div>
                          <div class="detail-item">
                              <i class="ri-funds-line"></i>
                              Goal: $${event.goal.toLocaleString()}
                          </div>
                      </div>

                      <div class="event-actions">
                          <button class="btn btn-primary join-btn">
                              <i class="ri-user-add-line"></i>
                              Join Event
                          </button>
                          <button class="btn btn-outline donate-btn">
                              <i class="ri-heart-line"></i>
                              Donate
                          </button>
                      </div>
                  </div>
              </div>
          `;
      }).join('');

      // Add event listeners to new buttons
      document.querySelectorAll('.join-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.getElementById('joinModal').style.display = 'grid';
          });
      });

      document.querySelectorAll('.donate-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.getElementById('donateModal').style.display = 'grid';
          });
      });
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredEvents = events.filter(event => 
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm) ||
          event.charity.toLowerCase().includes(searchTerm)
      );
      renderEvents(filteredEvents);
  });

  // Filter functionality
  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const filterType = btn.textContent.trim().toLowerCase();
          const filteredEvents = filterType === 'all events' 
              ? events 
              : events.filter(event => event.type === filterType.toLowerCase());
          
          renderEvents(filteredEvents);
      });
  });

  // Modal functionality
  closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          modals.forEach(modal => modal.style.display = 'none');
      });
  });

  // Form handling
  forms.forEach(form => {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="ri-loader-4-line loading"></i> Processing...';

          setTimeout(() => {
              submitBtn.innerHTML = '<i class="ri-check-line"></i> Success!';
              
              setTimeout(() => {
                  form.reset();
                  submitBtn.disabled = false;
                  submitBtn.innerHTML = originalText;
                  modals.forEach(modal => modal.style.display = 'none');
              }, 1500);
          }, 2000);
      });
  });

  // Theme Toggle
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeIcon.classList.toggle('ri-moon-line');
      themeIcon.classList.toggle('ri-sun-line');
  });

  // Close modals when clicking outside
  modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.style.display = 'none';
          }
      });
  });

  // Initialize
  renderEvents();

//   Theme Toggle
//   const themeToggle = document.querySelector('.theme-toggle');
//   const themeIcon = themeToggle.querySelector('i');
  
//   themeToggle.addEventListener('click', () => {
//       document.body.classList.toggle('dark-mode');
//       themeIcon.classList.toggle('ri-moon-line');
//       themeIcon.classList.toggle('ri-sun-line');
//       localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
//   });
  
  // Mobile Menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
      });
  });
  
  // Active link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelector(`.nav-link[href="${currentPage}"]`)?.classList.add('active');
  
  // Initialize theme
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
  }