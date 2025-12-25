let currentTheme = 'light';

        // Theme Toggle Functionality
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            const mobileThemeIcon = document.getElementById('mobile-theme-icon');
            const mobileThemeText = document.getElementById('mobile-theme-text');
            
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                if (themeIcon) themeIcon.textContent = '☀️';
                if (themeText) themeText.textContent = 'Light';
                if (mobileThemeIcon) mobileThemeIcon.textContent = '☀️';
                if (mobileThemeText) mobileThemeText.textContent = 'Light';
                currentTheme = 'dark';
            } else {
                if (themeIcon) themeIcon.textContent = '🌙';
                if (themeText) themeText.textContent = 'Dark';
                if (mobileThemeIcon) mobileThemeIcon.textContent = '🌙';
                if (mobileThemeText) mobileThemeText.textContent = 'Dark';
                currentTheme = 'light';
            }
        }

        // Mobile Menu Toggle Functions
        function toggleMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeMobileMenu() {
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Contact button handler
        function handleContactClick() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                alert('Contact form would open here! Email: tushar_sir_09@gmail.com');
            }, 500);
        }
// Get elements
        const playBtn = document.getElementById('playBtn');
        const video = document.getElementById('video');
        const videoSource = document.getElementById('videoSource');
        const videoContainer = document.getElementById('videoContainer');
        const background = document.getElementById('background');
        const logo = document.getElementById('logo');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const timeDisplay = document.getElementById('timeDisplay');
        const particles = document.getElementById('particles');

        // Load the uploaded video
        async function loadVideo() {
            try {
                // Try to load from uploaded file first
                const videoData = await window.fs.readFile('amg.mp4');
                const blob = new Blob([videoData], { type: 'video/mp4' });
                const videoURL = URL.createObjectURL(blob);
                videoSource.src = videoURL;
                video.load();
                console.log('Video loaded successfully from amg.mp4');
            } catch (error) {
                console.error('Error loading amg.mp4:', error);
                // If the file doesn't exist, try direct path
                videoSource.src = 'WhatsApp Video 2025-11-10 at 12.06.02_10299e36.mp4';
                video.load();
            }
        }

        // Initialize video loading
        loadVideo();

        // Create floating particles
        function createParticles() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 6 + 's';
                    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                    particles.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 8000);
                }, i * 300);
            }
        }

        // Start particle animation
        createParticles();
        setInterval(createParticles, 6000);

        // Format time helper
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Update progress bar
        function updateProgress() {
            const progress = (video.currentTime / video.duration) * 100;
            progressFill.style.width = progress + '%';
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }

        // Play button click
        playBtn.addEventListener('click', () => {
            background.classList.add('blur');
            logo.classList.add('hidden');
            playBtn.classList.add('hidden');
            
            setTimeout(() => {
                videoContainer.classList.add('active');
                video.play();
            }, 400);
        });

        // Play/pause button
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = '⏸';
            } else {
                video.pause();
                playPauseBtn.textContent = '▶';
            }
        });

        // Progress bar click
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const progress = clickX / rect.width;
            video.currentTime = progress * video.duration;
        });

        // Video events
        video.addEventListener('timeupdate', updateProgress);
        
        video.addEventListener('loadedmetadata', () => {
            timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
        });

        video.addEventListener('play', () => {
            playPauseBtn.textContent = '⏸';
        });

        video.addEventListener('pause', () => {
            playPauseBtn.textContent = '▶';
        });

        video.addEventListener('ended', () => {
            playPauseBtn.textContent = '▶';
            progressFill.style.width = '100%';
        });

        // ESC key to exit video
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoContainer.classList.contains('active')) {
                video.pause();
                video.currentTime = 0;
                
                videoContainer.classList.remove('active');
                background.classList.remove('blur');
                logo.classList.remove('hidden');
                playBtn.classList.remove('hidden');
                
                playPauseBtn.textContent = '▶';
                progressFill.style.width = '0%';
            }
        });