
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

        // Product details handler
        function showProductDetails(productId) {
            const productInfo = {
                'visionpro-video': {
                    title: 'VisionPro - Video Management Suite',
                    description: 'Advanced video management and surveillance solution with real-time monitoring, intelligent analytics, and seamless integration capabilities.',
                    features: ['Real-time video monitoring', 'AI-powered analytics', 'Cloud storage integration', 'Multi-device access', 'Advanced security protocols']
                },
                'visionpro-access': {
                    title: 'VisionPro - AI Access Control',
                    description: 'Intelligent access control system with facial recognition, biometric authentication, and smart entry management for enhanced security.',
                    features: ['Facial recognition technology', 'Biometric authentication', 'Smart card integration', 'Real-time alerts', 'Visitor management']
                },
                'visionpro-alarm': {
                    title: 'VisionPro - AI Alarm App',
                    description: 'Smart alarm system with AI-driven threat detection, automated responses, and mobile notifications for comprehensive security management.',
                    features: ['AI threat detection', 'Mobile notifications', 'Automated responses', 'Integration with security systems', '24/7 monitoring']
                },
                'eventpro': {
                    title: 'EventPro - Event Management Suite',
                    description: 'Complete event management platform with registration, ticketing, attendee tracking, and real-time analytics for successful event execution.',
                    features: ['Online registration system', 'Ticketing & payment processing', 'Attendee tracking', 'Real-time analytics', 'Mobile event app']
                },
                'unicert': {
                    title: 'UniCert - Blockchain Certification Suite',
                    description: 'Secure blockchain-based certification system for issuing, verifying, and managing digital certificates with tamper-proof technology.',
                    features: ['Blockchain security', 'Digital certificate issuance', 'Instant verification', 'Tamper-proof records', 'Global accessibility']
                },
                'custom-dev': {
                    title: 'Custom Development (Web/Mobile)',
                    description: 'Tailored web and mobile application development services designed to meet your specific business requirements and objectives.',
                    features: ['Custom web applications', 'Mobile app development', 'API integration', 'Responsive design', 'Ongoing support & maintenance']
                }
            };

            const product = productInfo[productId];
            if (product) {
                let message = `${product.title}\n\n${product.description}\n\nKey Features:\n`;
                product.features.forEach(feature => {
                    message += `• ${feature}\n`;
                });
                message += `\nFor more information, contact us at: tushar_sir_09@gmail.com`;
                alert(message);
            }
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize loading animations
            const elements = document.querySelectorAll('.loading');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animationDelay = `${index * 0.1}s`;
                }, index * 100);
            });

            // Add mobile menu overlay click handler
            const overlay = document.getElementById('mobileMenuOverlay');
            if (overlay) {
                overlay.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeMobileMenu();
                    }
                });
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Add scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = currentTheme === 'dark' ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = currentTheme === 'dark' ? '#1f2937' : '#ffffff';
                header.style.backdropFilter = 'none';
            }
        });