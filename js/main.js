    // --- All JS initialised after DOMContentLoaded ---
    window.addEventListener('DOMContentLoaded', () => {

        // === LANGUAGE SYSTEM ===
        const translations = {
            de: {
                // Hero Section
                'hero-greeting': 'Hallo, ich bin Lara.',
                'hero-title': 'Kommunikation mit',
                'hero-title-gradient': 'Substanz & Struktur.',
                'hero-p1': 'Ich verbinde <span class="highlight">Wissenschaft & NGO-Arbeit</span> mit moderner Strategie. Mein Fokus liegt darauf, komplexe Inhalte verständlich zu machen und digitale Prozesse zu schaffen, die dem Team den Rücken freihalten.',
                'hero-p2': 'Als <strong>Kommunikationsmanagerin</strong> und Digital Native weiß ich: Gute Kommunikation braucht beides – das Gefühl für die richtige Story und das technische Verständnis.',
                'scroll-hint': '↓ Mehr erfahren',

                // Tabs Section
                'section-title': 'Lerne mich kennen',
                'section-subtitle': 'Klick dich durch meine Facetten:',
                'tab-hard-facts': 'Hard Facts',
                'tab-behind-scenes': 'Hinter den Kulissen',
                'tab-perfect-match': 'Perfect Match',

                // Hard Facts
                'hf-intro': '<strong>Zuletzt (11/2021 bis 12/2025):</strong><br>Kommunikationsmanagerin bei <a href="https://www.euniwell.eu/" target="_blank" rel="noopener noreferrer" class="highlight-link">EUniWell (Universität zu Köln)</a>.',
                'hf-role': '<strong>Rollen-Evolution:</strong> Start als Wissenschaftliche Hilfskraft, dann <strong>Kommunikationsmanagerin</strong> mit Übernahme zusätzlicher Aufgabenbereiche<br>• 09/2024 bis 05/2025 als <strong>Interim Head of Communications</strong> (Internationale Teamleitung)<br>• 01/2024 bis 01/2025 als <strong>Social Media Lead</strong> (Strategie & Content).',
                'hf-education': '<strong>Ausbildung:</strong> <span class="highlight">Master of Arts (M.A.)</span> North American Studies<br>(Universität zu Köln, Abschlussnote 1,4).',
                'hf-tech': '<strong>Tech-Stack:</strong> TYPO3, WordPress, Adobe CC, MS Office, Basic Coding (HTML/CSS/Javascript).',
                'hf-certs': '<strong>Zertifikate:</strong> Storytelling, New Work / Agiles Arbeiten, Projektmanagement.',
                'download-cv': 'Lebenslauf herunterladen (PDF)',

                // Behind the Scenes
                'bs-name': 'Lara Marie Andres (sie/ihr), 31 Jahre',
                'bs-location': 'Köln, geboren im Saarland (kenne alle Witze)',
                'bs-english': 'Englisch: C1/C2 (Studium und Arbeit auf Englisch)',
                'bs-french': 'Französisch: A2 (Reicht für Baguette)',
                'bs-name-label': 'Name & Alter',
                'bs-location-label': 'Standort',
                'bs-english-label': 'Englisch',
                'bs-french-label': 'Französisch',
                'bs-mindset-title': '<strong>Mein Mindset & Motivation:</strong>',
                'bs-mindset-1': '<strong>Haltung:</strong> Ich verstehe mich als Feministin und blicke <span class="highlight">intersektional</span> auf die Welt. Mein Studium hat meinen Blick für gesellschaftliche Zusammenhänge geschärft.',
                'bs-mindset-2': '<strong>Engagement:</strong> Queere Rechte sind mir ein echtes Anliegen. Beim <a href="https://www.schmit-z.de/" target="_blank" rel="noopener noreferrer" class="highlight-link">SCHMIT-Z e.V.</a> habe ich gelernt, wie wichtig Sichtbarkeit ist – und wie man sie schafft.',
                'bs-mindset-3': '<strong>Tech-Neugier:</strong> Ich bin der Typ Mensch, der wissen will, <i>wie</i> es funktioniert. Deshalb der VHS-Kurs in Programmierung. Ich nutze Tools nicht nur, ich denke sie mit.',
                'bs-else-title': 'Und sonst so?',
                'bs-else-text': 'Ich bin sehr tierlieb und gerne draußen unterwegs. Kreativ bin ich beim Töpfern und Linolschnitt tätig. Meine große Reiseliebe kommt aus meinem interkulturellen Interesse – neue Orte und Menschen inspirieren mich.',
                'photo-nature': 'Outdoor-Liebe 🌲',
                'photo-creative': 'Kreativ tätig 🎨',
                'photo-travel': 'Weltentdeckerin ✈️',

                // Perfect Match
                'pm-title': '<strong>Was ich suche:</strong>',
                'pm-intro': 'Köln ist mein Zuhause. Aber gute Arbeit macht nicht an der Stadtgrenze halt. Ich suche eine Aufgabe mit <span class="highlight">Wirkung</span>.',
                'pm-environment': '<strong>Das Umfeld:</strong> Meine Wurzeln liegen im Non-Profit-Sektor. Aber ich muss dort nicht bleiben. Ein <strong>wertebasiertes Unternehmen</strong> reizt mich genauso.',
                'pm-location': '<strong>Ort & Modus:</strong> Ob Köln, Bonn, Düsseldorf oder die Region – für den richtigen Job bin ich natürlich gerne mobil. <strong>Hybrid & Remote</strong> sind für mich möglich.',
                'pm-culture': '<strong>Die Kultur:</strong> Ich suche ein Team, das "New Work" wirklich lebt. Offenheit, Humor und der Wille, Dinge besser zu machen, sind mir wichtiger als starre Hierarchien.',
                'pm-cta': 'Schreib mir →',
                'pm-availability-title': 'Verfügbarkeit & Rahmenbedingungen:',
                'pm-start': '<strong>Start:</strong> Ab sofort',
                'pm-type': '<strong>Anstellung:</strong> Vollzeit oder Teilzeit ab 30h/Woche',
                'pm-travel': '<strong>Reisebereitschaft:</strong> Gelegentliche Dienstreisen kein Problem',
                'pm-start-label': 'Start:',
                'pm-start-value': 'Ab sofort',
                'pm-type-label': 'Anstellung:',
                'pm-type-value': 'Vollzeit oder Teilzeit ab 30h/Woche',
                'pm-travel-label': 'Reisebereitschaft:',
                'pm-travel-value': 'Gelegentliche Dienstreisen kein Problem',


                // Game Section
                'game-title': 'Bonus Level',
                'game-subtitle': 'Can you catch my skills?',
                'game-desc': 'Klicke auf die fallenden Skills! Baue Combos auf für mehr Punkte! 🎯',
                'game-start': 'Start Game 🎮',
                'game-play-again': 'Nochmal spielen',
                'game-score': 'Score',
                'game-combo': 'Combo',
                'game-time': 'Zeit',

                // Game End Messages
                'game-rank-s': '🏆 LEGENDARY! Du bist ein absoluter Profi!',
                'game-rank-a': '🔥 AMAZING! Wir sollten definitiv reden!',
                'game-rank-b': '✨ GREAT! Solide Performance!',
                'game-rank-c': '💪 Guter Start! Versuch es nochmal!',
                'game-points': 'Punkte',

                // Footer
                'footer-contact': 'larandres1994@gmail.com',
            },

            en: {
                // Hero Section
                'hero-greeting': 'Hi, I\'m Lara.',
                'hero-title': 'Communication with',
                'hero-title-gradient': 'Substance & Structure.',
                'hero-p1': 'I combine <span class="highlight">science & NGO work</span> with modern strategy. My focus is on making complex content understandable and creating digital processes that support the team.',
                'hero-p2': 'As an <strong>Communications Manager</strong> and digital native, I know: Good communication needs both – the feeling for the right story and the technical understanding.',
                'scroll-hint': '↓ Learn more',

                // Tabs Section
                'section-title': 'Get to know me',
                'section-subtitle': 'Click through my facets:',
                'tab-hard-facts': 'Hard Facts',
                'tab-behind-scenes': 'Behind the Scenes',
                'tab-perfect-match': 'Perfect Match',

                // Hard Facts
                'hf-intro': '<strong>Most recently (11/2021 to 12/2025):</strong><br>Communications Manager at <a href="https://www.euniwell.eu/" target="_blank" rel="noopener noreferrer" class="highlight-link">EUniWell (University of Cologne)</a>.',
                'hf-role': '<strong>Role Evolution:</strong> Started as Research Assistant, then <strong>Communications Manager</strong> with additional responsibilities<br>• 09/2024 to 05/2025 as <strong>Interim Head of Communications</strong> (International Team Lead)<br>• 01/2024 to 01/2025 as <strong>Social Media Lead</strong> (Strategy & Content).',
                'hf-education': '<strong>Education:</strong> <span class="highlight">Master of Arts (M.A.)</span> North American Studies<br>(University of Cologne, Grade 1.4).',
                'hf-tech': '<strong>Tech Stack:</strong> TYPO3, WordPress, Adobe CC, MS Office, Basic Coding (HTML/CSS/Javascript).',
                'hf-certs': '<strong>Certificates:</strong> Storytelling, New Work / Agile Methods, Project Management.',
                'download-cv': 'Download Resume (PDF)',

                // Behind the Scenes
                'bs-name': 'Lara Marie Andres (she/her), 31 years',
                'bs-location': 'Cologne, born in Saarland (I know all the jokes)',
                'bs-english': 'English: C1/C2 (Studies and work in English)',
                'bs-french': 'French: A2 (Enough for baguette)',
                'bs-name-label': 'Name & Age',
                'bs-location-label': 'Location',
                'bs-english-label': 'English',
                'bs-french-label': 'French',
                'bs-mindset-title': '<strong>My Mindset & Motivation:</strong>',
                'bs-mindset-1': '<strong>Attitude:</strong> I identify as a feminist and view the world through an <span class="highlight">intersectional</span> lens. My studies sharpened my understanding of social structures.',
                'bs-mindset-2': '<strong>Commitment:</strong> Queer rights are important to me. At <a href="https://www.schmit-z.de/" target="_blank" rel="noopener noreferrer" class="highlight-link">SCHMIT-Z e.V.</a>, I learned how important visibility is – and how to create it.',
                'bs-mindset-3': '<strong>Tech Curiosity:</strong> I\'m the type who wants to know <i>how</i> things work. That\'s why I took a programming course. I don\'t just use tools, I think them through.',
                'bs-else-title': 'What else?',
                'bs-else-text': 'I love animals and being outdoors. I\'m creatively active with pottery and linocut. My great love for travel comes from my intercultural interest – new places and people inspire me.',
                'photo-nature': 'Outdoor Love 🌲',
                'photo-creative': 'Creative Work 🎨',
                'photo-travel': 'World Explorer ✈️',
                
                // Perfect Match
                'pm-title': '<strong>What I\'m looking for:</strong>',
                'pm-intro': 'Cologne is my home. But good work doesn\'t stop at the city limits. I\'m looking for a role with <span class="highlight">impact</span>.',
                'pm-environment': '<strong>The Environment:</strong> My roots are in the non-profit sector. But I don\'t have to stay there. A <strong>values-based company</strong> is equally appealing.',
                'pm-location': '<strong>Location & Mode:</strong> Whether Cologne, Bonn, Düsseldorf or the region – I\'m happy to be mobile for the right job. <strong>Hybrid & Remote</strong> work for me.',
                'pm-culture': '<strong>The Culture:</strong> I\'m looking for a team that truly lives "New Work". Openness, humor, and the will to improve things matter more to me than rigid hierarchies.',
                'pm-cta': 'Let\'s talk →',
                'pm-availability-title': 'Availability & Conditions:',
                'pm-start': '<strong>Start:</strong> Immediately available',
                'pm-type': '<strong>Employment:</strong> Full-time or part-time (min. 30h/week)',
                'pm-travel': '<strong>Travel:</strong> Occasional business trips no problem',
                'pm-start-label': 'Start:',
                'pm-start-value': 'Immediately',
                'pm-type-label': 'Employment type:',
                'pm-type-value': 'Full-time or part-time (min. 30h/week)',
                'pm-travel-label': 'Willingness to travel:',
                'pm-travel-value': 'Open to occasional business trips',

                // Game Section
                'game-title': 'Bonus Level',
                'game-subtitle': 'Can you catch my skills?',
                'game-desc': 'Click on the falling skills! Build combos for more points! 🎯',
                'game-start': 'Start Game 🎮',
                'game-play-again': 'Play Again',
                'game-score': 'Score',
                'game-combo': 'Combo',
                'game-time': 'Time',

                // Game End Messages
                'game-rank-s': '🏆 LEGENDARY! You\'re an absolute pro!',
                'game-rank-a': '🔥 AMAZING! We should definitely talk!',
                'game-rank-b': '✨ GREAT! Solid performance!',
                'game-rank-c': '💪 Good start! Try again!',
                'game-points': 'Points',

                // Footer
                'footer-contact': 'larandres1994@gmail.com',
            }
        };

        let currentLang = localStorage.getItem('lang') || 'de';

        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            
            // Update button text (shows the OTHER language as option)
            document.querySelector('.lang-text').textContent = lang === 'de' ? 'EN' : 'DE';
            
            // Update all translatable elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Update page title
            document.title = lang === 'de' ? 'Lara Marie Andres | Portfolio' : 'Lara Marie Andres | Portfolio';
        }

        function toggleLanguage() {
            setLanguage(currentLang === 'de' ? 'en' : 'de');
        }

        // Initialize language system
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', toggleLanguage);
        }
        setLanguage(currentLang);

        // Make translations available globally for game messages
        window.getTranslation = function(key) {
            return translations[currentLang][key] || key;
        };
        window.getCurrentLang = function() {
            return currentLang;
        };

        // Scrollytelling
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('section').forEach(section => observer.observe(section));

        // Tabs
        window.openTab = function(evt, tabName) {
            var contents = document.getElementsByClassName("tab-content");
            for (var i = 0; i < contents.length; i++) { contents[i].classList.remove("active"); }
            var buttons = document.getElementsByClassName("tab-btn");
            for (var i = 0; i < buttons.length; i++) { buttons[i].classList.remove("active"); }
            const target = document.getElementById(tabName);
            if (target) target.classList.add("active");
            if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
        };

        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
        themeToggle.addEventListener('click', toggleTheme);

        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }


        // === CATCH THE SKILLS GAME ===
        const skillCategories = {
            hard: {
                skills: ['TYPO3', 'WordPress', 'HTML/CSS', 'Adobe CC', 'Canva Pro', 'MS Office', 'Projekt Mgmt', 'Content Mgmt', 'SEO', 'Analytics', 'Javascript'],
                color: '#0096FF',
                points: 10
            },
            soft: {
                skills: ['Strategie', 'Storytelling', 'Teamwork', 'Resilienz', 'Empathie', 'Priorisierung', 'Agilität', 'Leadership', 'Kreativität'],
                color: '#FF6B5A',
                points: 15
            },
            languages: {
                skills: ['Englisch C1', 'Französisch A2', 'Deutsch Native'],
                color: '#B8B4AC',
                points: 20
            },
            tools: {
                skills: ['Social Media', 'Newsletter', 'Webdesign', 'Grafik', 'Community Mgmt', 'Event Mgmt', 'Redaktion'],
                color: '#5586FF',
                points: 12
            },
            powerups: {
                skills: ['⚡ 2x Score', '🕐 Slow-Mo', '🧲 Magnet', '⭐ Bonus'],
                color: '#FFD93D',
                points: 0,
                isPowerUp: true
            }
        };

        let gameActive = false;
        let score = 0;
        let timeLeft = 45;
        let combo = 0;
        let comboTimer = null;
        let maxCombo = 0;
        let fallingSkills = [];
        let particles = [];
        let powerUps = { doubleScore: 0, slowMotion: 0, magnet: 0 };
        let difficulty = 1;
        let animationId = null;
        let timerInterval = null;
        let spawnInterval = null;
        let achievementsUnlocked = new Set();

        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas ? canvas.getContext('2d') : null;
        const startBtn = document.getElementById('startGame');
        const comboDisplay = document.getElementById('comboDisplay');
        const playAgainBtn = document.getElementById('playAgain');

        const achievements = {
            'first-catch': { name: '🎯 First Catch', threshold: 1 },
            'combo-master': { name: '🔥 Combo Master', threshold: 10 },
            'speed-demon': { name: '⚡ Speed Demon', threshold: 20 },
            'collector': { name: '💎 Collector', threshold: 50 },
            'legend': { name: '👑 Legend', threshold: 100 }
        };

        function supportsCanvas() {
            return !!(canvas && ctx);
        }

        function roundRect(ctx, x, y, w, h, r) {
            const radius = r || 6;
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.arcTo(x + w, y, x + w, y + h, radius);
            ctx.arcTo(x + w, y + h, x, y + h, radius);
            ctx.arcTo(x, y + h, x, y, radius);
            ctx.arcTo(x, y, x + w, y, radius);
            ctx.closePath();
        }

        if (supportsCanvas()) {
            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.getBoundingClientRect() || { width: 600, height: 360 };
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                canvas.width = Math.max(300, Math.floor(rect.width * dpr));
                canvas.height = Math.max(150, Math.floor(rect.height * dpr));
                canvas.style.width = rect.width + 'px';
                canvas.style.height = rect.height + 'px';
                ctx.scale(dpr, dpr);
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            class Particle {
                constructor(x, y, color) {
                    this.x = x;
                    this.y = y;
                    this.vx = (Math.random() - 0.5) * 8;
                    this.vy = (Math.random() - 0.5) * 8 - 2;
                    this.alpha = 1;
                    this.size = Math.random() * 4 + 2;
                    this.color = color;
                    this.life = 60;
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    this.vy += 0.3;
                    this.alpha -= 0.02;
                    this.life--;
                }

                draw() {
                    ctx.globalAlpha = Math.max(0, this.alpha);
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }

            class Skill {
                constructor(forcePowerUp = false) {
                    const categories = Object.keys(skillCategories);
                    let categoryKey;
                    
                    if (forcePowerUp) {
                        categoryKey = 'powerups';
                    } else if (Math.random() < 0.15) {
                        categoryKey = 'powerups';
                    } else {
                        categoryKey = categories[Math.floor(Math.random() * (categories.length - 1))];
                    }
                    
                    const category = skillCategories[categoryKey];
                    this.text = category.skills[Math.floor(Math.random() * category.skills.length)];
                    this.color = category.color;
                    this.basePoints = category.points;
                    this.isPowerUp = category.isPowerUp || false;
                    
                    const rect = canvas.getBoundingClientRect();
                    this.canvasWidth = rect.width;
                    this.canvasHeight = rect.height;
                    
                    ctx.font = 'bold 15px "Space Grotesk", sans-serif';
                    const textWidth = ctx.measureText(this.text).width;
                    this.width = Math.max(textWidth + 40, 110);
                    this.height = 50;
                    
                    this.x = Math.random() * (this.canvasWidth - this.width);
                    this.y = -80;
                    
                    this.speed = (1.2 + Math.random() * 1.5) * difficulty;
                    
                    this.wobble = Math.random() * Math.PI * 2;
                    this.wobbleSpeed = 0.05 + Math.random() * 0.05;
                    
                    this.magnetized = false;
                }

                update(mouseX, mouseY) {
                    this.y += this.speed * (powerUps.slowMotion > 0 ? 0.5 : 1);
                    this.wobble += this.wobbleSpeed;
                    
                    if (powerUps.magnet > 0 && mouseY !== null) {
                        const dx = mouseX - (this.x + this.width / 2);
                        const dy = mouseY - (this.y + this.height / 2);
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            this.x += dx * 0.03;
                            this.y += dy * 0.03;
                            this.magnetized = true;
                        }
                    }
                }

                draw() {
                    const wobbleOffset = Math.sin(this.wobble) * 3;
                    ctx.save();
                    ctx.translate(this.x + wobbleOffset, this.y);
                    
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetY = 4;

                    if (this.isPowerUp) {
                        ctx.shadowColor = this.color;
                        ctx.shadowBlur = 20;
                    }

                    const gradient = ctx.createLinearGradient(0, 0, this.width, 0);
                    gradient.addColorStop(0, this.color);
                    gradient.addColorStop(1, this._adjustColor(this.color, -20));
                    
                    ctx.fillStyle = gradient;
                    roundRect(ctx, 0, 0, this.width, this.height, 16);
                    ctx.fill();

                    if (this.magnetized) {
                        ctx.strokeStyle = '#FFD93D';
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }

                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#FFFFFF';
                    ctx.font = `bold ${this.isPowerUp ? '18px' : '15px'} "Space Grotesk", sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(this.text, this.width / 2, this.height / 2);
                    
                    ctx.restore();
                }

                _adjustColor(color, amount) {
                    const num = parseInt(color.replace('#', ''), 16);
                    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
                    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
                    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
                    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
                }

                isClicked(mouseX, mouseY) {
                    const wobbleOffset = Math.sin(this.wobble) * 3;
                    return mouseX > this.x + wobbleOffset && 
                           mouseX < this.x + wobbleOffset + this.width &&
                           mouseY > this.y && 
                           mouseY < this.y + this.height;
                }
            }

            function updateUI() {
                document.getElementById('score').textContent = score;
                document.getElementById('combo').textContent = combo;
                
                const comboStat = document.querySelector('.stat:nth-child(2)');
                if (combo >= 5 && comboStat) {
                    comboStat.classList.add('combo-active');
                } else if (comboStat) {
                    comboStat.classList.remove('combo-active');
                }
            }

            function showComboText(text) {
                comboDisplay.textContent = text;
                comboDisplay.classList.remove('show');
                void comboDisplay.offsetWidth;
                comboDisplay.classList.add('show');
                setTimeout(() => comboDisplay.classList.remove('show'), 900);
            }

            function resetCombo() {
                combo = 0;
                updateUI();
            }

            function activatePowerUp(type) {
                if (type.includes('2x Score')) {
                    powerUps.doubleScore = 10;
                    showComboText('2x SCORE!');
                } else if (type.includes('Slow-Mo')) {
                    powerUps.slowMotion = 8;
                    showComboText('SLOW MOTION!');
                } else if (type.includes('Magnet')) {
                    powerUps.magnet = 12;
                    showComboText('MAGNET!');
                } else if (type.includes('Bonus')) {
                    score += 50;
                    showComboText('+50 BONUS!');
                }
                updateUI();
            }

            function updatePowerUps() {
                if (powerUps.doubleScore > 0) powerUps.doubleScore--;
                if (powerUps.slowMotion > 0) powerUps.slowMotion--;
                if (powerUps.magnet > 0) powerUps.magnet--;
            }

            function checkAchievements() {
                Object.keys(achievements).forEach(key => {
                    if (achievementsUnlocked.has(key)) return;
                    
                    const achievement = achievements[key];
                    let unlocked = false;
                    
                    if (key === 'first-catch' && score >= achievement.threshold) unlocked = true;
                    if (key === 'combo-master' && maxCombo >= achievement.threshold) unlocked = true;
                    if (key === 'speed-demon' && score >= achievement.threshold * 2) unlocked = true;
                    if (key === 'collector' && score >= achievement.threshold * 10) unlocked = true;
                    if (key === 'legend' && score >= achievement.threshold * 10) unlocked = true;
                    
                    if (unlocked) {
                        achievementsUnlocked.add(key);
                        showAchievement(achievement.name);
                    }
                });
            }

            function showAchievement(name) {
                const badge = document.createElement('div');
                badge.className = 'achievement-badge';
                badge.textContent = name;
                document.getElementById('achievements').appendChild(badge);
            }

            function endGame() {
                gameActive = false;
                if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
                if (spawnInterval) { clearInterval(spawnInterval); spawnInterval = null; }
                if (animationId) { cancelAnimationFrame(animationId); animationId = null; }

                fallingSkills = [];
                particles = [];
                const rect = canvas.getBoundingClientRect();
                ctx.clearRect(0, 0, rect.width * 2, rect.height * 2);

                let message = '';
                let rank = '';
                
                // Use translated messages
                const pointsWord = window.getTranslation('game-points');
                
                if (score >= 2500) { 
                    message = window.getTranslation('game-rank-s');
                    rank = 'S-Tier';
                } else if (score >= 2000) { 
                    message = window.getTranslation('game-rank-a');
                    rank = 'A-Tier';
                } else if (score >= 1500) { 
                    message = window.getTranslation('game-rank-b');
                    rank = 'B-Tier';
                } else { 
                    message = window.getTranslation('game-rank-c');
                    rank = 'C-Tier';
                }

                document.getElementById('finalScore').textContent = `${score} ${pointsWord} (${rank})`;
                document.getElementById('gameMessage').textContent = message;
                
                const badgesDiv = document.getElementById('badgesEarned');
                badgesDiv.innerHTML = '';
                if (achievementsUnlocked.size > 0) {
                    badgesDiv.innerHTML = '<p style="margin-bottom: 10px;"><strong>Achievements:</strong></p>';
                    achievementsUnlocked.forEach(key => {
                        const badge = document.createElement('span');
                        badge.className = 'badge';
                        badge.textContent = achievements[key].name;
                        badgesDiv.appendChild(badge);
                    });
                }
                if (maxCombo >= 10) {
                    const badge = document.createElement('span');
                    badge.className = 'badge';
                    badge.textContent = `🔥 Max Combo: ${maxCombo}x`;
                    badgesDiv.appendChild(badge);
                }
                
                document.getElementById('gameOver').classList.remove('hidden');
            }

            function gameLoop() {
                if (!gameActive) return;

                const rect = canvas.getBoundingClientRect();
                ctx.clearRect(0, 0, rect.width, rect.height);

                for (let i = fallingSkills.length - 1; i >= 0; i--) {
                    const skill = fallingSkills[i];
                    skill.update(mouseX, mouseY);
                    skill.draw();

                    if (skill.y > rect.height + 60) {
                        fallingSkills.splice(i, 1);
                        resetCombo();
                    }
                }

                for (let i = particles.length - 1; i >= 0; i--) {
                    const p = particles[i];
                    p.update();
                    p.draw();
                    if (p.life <= 0) particles.splice(i, 1);
                }

                animationId = requestAnimationFrame(gameLoop);
            }

            let mouseX = null;
            let mouseY = null;

            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouseX = e.clientX - rect.left;
                mouseY = e.clientY - rect.top;
            });

            function handleInteraction(e) {
                if (!gameActive) return;

                const rect = canvas.getBoundingClientRect();
                let clickX, clickY;

                if (e.type === 'click' || e.type === 'mousedown') {
                    clickX = e.clientX - rect.left;
                    clickY = e.clientY - rect.top;
                } else if (e.type === 'touchstart') {
                    if (e.touches && e.touches[0]) {
                        clickX = e.touches[0].clientX - rect.left;
                        clickY = e.touches[0].clientY - rect.top;
                    }
                }

                for (let i = fallingSkills.length - 1; i >= 0; i--) {
                    const skill = fallingSkills[i];
                    if (skill.isClicked(clickX, clickY)) {
                        
                        if (skill.isPowerUp) {
                            activatePowerUp(skill.text);
                        } else {
                            const points = skill.basePoints * (1 + combo * 0.1) * (powerUps.doubleScore > 0 ? 2 : 1);
                            score += Math.floor(points);
                            combo++;
                            
                            if (combo > maxCombo) maxCombo = combo;
                            
                            if (combo >= 5) {
                                showComboText(`${combo}x COMBO!`);
                            }
                            
                            checkAchievements();
                            updateUI();
                        }
                        
                        for (let p = 0; p < 15; p++) {
                            particles.push(new Particle(clickX, clickY, skill.color));
                        }
                        
                        fallingSkills.splice(i, 1);
                        
                        clearTimeout(comboTimer);
                        comboTimer = setTimeout(resetCombo, 2000);
                        break;
                    }
                }
            }

            canvas.addEventListener('click', handleInteraction);
            canvas.addEventListener('touchstart', handleInteraction, { passive: false });

            function startGame() {
                if (gameActive) return;
                gameActive = true;
                score = 0;
                combo = 0;
                maxCombo = 0;
                timeLeft = 45;
                difficulty = 1;
                fallingSkills = [];
                particles = [];
                achievementsUnlocked.clear();
                powerUps = { doubleScore: 0, slowMotion: 0, magnet: 0 };
                
                updateUI();
                document.getElementById('gameOver').classList.add('hidden');
                document.getElementById('achievements').innerHTML = '';
                document.getElementById('timer').textContent = timeLeft;
                
                canvas.classList.add('active');
                startBtn.style.display = 'none';
                playAgainBtn.style.display = 'inline-flex';

                resizeCanvas();

                let currentSpawnRate = 800;
                spawnInterval = setInterval(() => {
                    if (!gameActive) {
                        clearInterval(spawnInterval);
                        spawnInterval = null;
                        return;
                    }
                    fallingSkills.push(new Skill());
                }, currentSpawnRate);

                timerInterval = setInterval(() => {
                    timeLeft--;
                    updatePowerUps();
                    document.getElementById('timer').textContent = timeLeft;
                    
                    if (timeLeft % 10 === 0 && timeLeft > 0) {
                        difficulty += 0.15;
                    }

                    if (timeLeft <= 0) {
                        endGame();
                    }
                }, 1000);

                gameLoop();
            }

            startBtn.addEventListener('click', startGame);
            playAgainBtn.addEventListener('click', () => {
                if (timerInterval) clearInterval(timerInterval);
                if (spawnInterval) clearInterval(spawnInterval);
                if (animationId) cancelAnimationFrame(animationId);
                document.getElementById('gameOver').classList.add('hidden');
                startBtn.style.display = 'none';
                startGame();
            });
        }

        // Parallax for ribbon layers
        (function ribbonParallax() {
            const layers = document.querySelectorAll('.ribbon-layer');
            if (!layers.length) return;

            let ticking = false;

            function onScroll() {
                if (!ticking) {
                    window.requestAnimationFrame(update);
                    ticking = true;
                }
            }

            function update() {
                const scrollY = window.scrollY || window.pageYOffset;
                
                layers.forEach((layer, index) => {
                    const speed = 0.1 + (index * 0.05);
                    const yOffset = scrollY * speed;
                    layer.style.transform = `translateY(${yOffset}px)`;
                });
                
                ticking = false;
            }

            window.addEventListener('scroll', onScroll, { passive: true });
            update();
        })();
        
    }); // end DOMContentLoaded
