 // Sample data with enhanced properties
 const participants = [
      {
              id: 1,
              name: "Emma Wilson",
              rank: 1,
              totalImpact: 18500,
              impactScore: 98,
              events: 15,
              charityRaised: 18500,
              avatar: "/api/placeholder/100/100",
              badges: ["Top Fundraiser", "Marathon Pro"],
              recentActivity: "Raised $8000 in virtual marathon"
          },
          {
              id: 2,
              name: "Lucas Martinez",
              rank: 2,
              totalImpact: 16300,
              impactScore: 95,
              events: 12,
              charityRaised: 16300,
              avatar: "/api/placeholder/100/100",
              badges: ["Event Champion"],
              recentActivity: "Led community fundraising drive"
          },
          {
              id: 3,
              name: "Sophia Chen",
              rank: 3,
              totalImpact: 15200,
              impactScore: 94,
              events: 11,
              charityRaised: 15200,
              avatar: "/api/placeholder/100/100",
              badges: ["Distance Master"],
              recentActivity: "Completed 100km challenge"
          },
          {
              id: 4,
              name: "Oliver Kim",
              rank: 4,
              totalImpact: 14100,
              impactScore: 92,
              events: 10,
              charityRaised: 14100,
              avatar: "/api/placeholder/100/100",
              badges: ["Rising Star"],
              recentActivity: "Organized youth sports event"
          },
          {
              id: 5,
              name: "Ava Patel",
              rank: 5,
              totalImpact: 13000,
              impactScore: 90,
              events: 9,
              charityRaised: 13000,
              avatar: "/api/placeholder/100/100",
              badges: ["Community Leader"],
              recentActivity: "Hosted charity auction"
          },
          {
              id: 6,
              name: "Ethan Thompson",
              rank: 6,
              totalImpact: 12400,
              impactScore: 88,
              events: 8,
              charityRaised: 12400,
              avatar: "/api/placeholder/100/100",
              badges: ["Team Captain"],
              recentActivity: "Led team fundraising effort"
          },
          {
              id: 7,
              name: "Isabella Garcia",
              rank: 7,
              totalImpact: 11800,
              impactScore: 87,
              events: 7,
              charityRaised: 11800,
              avatar: "/api/placeholder/100/100",
              badges: ["Pace Setter"],
              recentActivity: "Set personal distance record"
          },
          {
              id: 8,
              name: "Mason Lee",
              rank: 8,
              totalImpact: 10900,
              impactScore: 85,
              events: 6,
              charityRaised: 10900,
              avatar: "/api/placeholder/100/100",
              badges: ["Endurance Pro"],
              recentActivity: "Completed triathlon event"
          },
          {
              id: 9,
              name: "Mia Anderson",
              rank: 9,
              totalImpact: 10200,
              impactScore: 84,
              events: 5,
              charityRaised: 10200,
              avatar: "/api/placeholder/100/100",
              badges: ["Rookie Star"],
              recentActivity: "First marathon completion"
          },
          {
              id: 10,
              name: "Liam Johnson",
              rank: 10,
              totalImpact: 9800,
              impactScore: 82,
              events: 4,
              charityRaised: 9800,
              avatar: "/api/placeholder/100/100",
              badges: ["Emerging Talent"],
              recentActivity: "Organized local run event"
          }
      ];

      // Render top winners
      function renderTopWinners() {
          document.getElementById('topWinners').innerHTML = participants
              .slice(0, 3)
              .map((winner, index) => `
                  <div class="winner-card">
                      <div class="winner-rank">${index + 1}</div>
                      <img src="${winner.avatar}" alt="${winner.name}" class="winner-avatar">
                      <h3 class="winner-name">${winner.name}</h3>
                      <div class="events-count">
                          <span class="events-badge">${winner.badges[0]}</span>
                      </div>
                      <div class="winner-stats">
                          <div class="winner-stat">
                              <div class="winner-stat-value">${winner.events}</div>
                              <div class="winner-stat-label">Events</div>
                          </div>
                          <div class="winner-stat">
                              <div class="winner-stat-value">$${winner.charityRaised.toLocaleString()}</div>
                              <div class="winner-stat-label">Raised</div>
                          </div>
                      </div>
                  </div>
              `).join('');
      }

      // Render leaderboard
      function renderLeaderboard(filteredParticipants) {
          document.getElementById('leaderboardList').innerHTML = filteredParticipants
              .map(participant => `
                  <tr>
                      <td>
                          <div class="rank-badge ${participant.rank <= 3 ? 'rank-' + participant.rank : 'rank-other'}">
                              ${participant.rank}
                          </div>
                      </td>
                      <td>
                          <div class="participant-info">
                              <img src="${participant.avatar}" alt="${participant.name}" class="participant-avatar">
                              <div>
                                  <div>${participant.name}</div>
                                  <small class="text-secondary">${participant.recentActivity}</small>
                              </div>
                          </div>
                      </td>
                      <td>
                          <div class="events-count">
                              <span class="events-badge">${participant.events}</span>
                          </div>
                      </td>
                      <td>
                          <div class="charity-raised">$${participant.charityRaised.toLocaleString()}</div>
                      </td>
                      <td>
                          <div class="events-badge">${participant.impactScore}</div>
                      </td>
                  </tr>
              `).join('');
      }

      // Search functionality
      document.getElementById('searchInput').addEventListener('input', (e) => {
          const searchTerm = e.target.value.toLowerCase();
          const filtered = participants.filter(p => 
              p.name.toLowerCase().includes(searchTerm) ||
              p.badges.some(badge => badge.toLowerCase().includes(searchTerm))
          );
          renderLeaderboard(filtered);
      });

      // Sort functionality
      document.getElementById('sortSelect').addEventListener('change', (e) => {
          const sortField = e.target.value;
          const sorted = [...participants].sort((a, b) => b[sortField] - a[sortField]);
          renderLeaderboard(sorted);
      });

      // Theme toggle
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

      // Initial render
      renderTopWinners();
      renderLeaderboard(participants);

      // Faker function to generate random participant data
      function generateFakeParticipant(rank) {
          const firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "William"];
          const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
          const activities = ["Completed charity marathon", "Led community fundraiser", "Organized virtual run", "Hosted charity auction", "Set personal fundraising record"];
          const badges = ["Top Fundraiser", "Marathon Pro", "Community Leader", "Rising Star", "Event Champion", "Distance Master"];

          const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
          const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

          const events = randomNum(5, 15);
          const charityRaised = randomNum(5000, 20000);
          const impactScore = randomNum(85, 99);

          return {
              id: rank,
              name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
              rank: rank,
              totalImpact: charityRaised,
              impactScore: impactScore,
              events: events,
              charityRaised: charityRaised,
              avatar: `/api/placeholder/${100}/${100}`,
              badges: [randomElement(badges)],
              recentActivity: randomElement(activities)
          };
      }

      // Generate 10 random participants
      // Faker function to generate random participant data
      function generateFakeParticipant(rank) {
          const firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "William"];
          const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
          const activities = ["Completed charity marathon", "Led community fundraiser", "Organized virtual run", "Hosted charity auction", "Set personal fundraising record"];
          const badges = ["Top Fundraiser", "Marathon Pro", "Community Leader", "Rising Star", "Event Champion", "Distance Master"];

          const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
          const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

          const events = randomNum(5, 15);
          const charityRaised = randomNum(5000, 20000);
          const impactScore = randomNum(85, 99);

          return {
              id: rank,
              name: `${randomElement(firstNames)} ${randomElement(lastNames)}`,
              rank: rank,
              totalImpact: charityRaised,
              impactScore: impactScore,
              events: events,
              charityRaised: charityRaised,
              avatar: `/api/placeholder/${100}/${100}`,
              badges: [randomElement(badges)],
              recentActivity: randomElement(activities)
          };
      }

