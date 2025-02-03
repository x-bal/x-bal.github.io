document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the index page (has tabs)
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        initTabs(tabButtons);
    }

    // Initialize sparkle effect and theme for all pages
    initSparkles();
    initTheme();
});

// Tab Navigation for index page
function initTabs(tabButtons) {
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Initialize first tab as active
    tabButtons[0].click();
}

// Sparkle Effect
function initSparkles() {
    const sparkleGroup = document.querySelector('.sparkle-group');
    const colors = ['#2f80ed', '#56ccf2', '#0052cc', '#1a75ff'];
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        sparkle.style.left = x + '%';
        sparkle.style.top = y + '%';
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkleGroup.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    }
    
    // Create initial sparkles
    for(let i = 0; i < 20; i++) {
        createSparkle();
    }
    
    // Continue creating sparkles
    setInterval(createSparkle, 200);

    // Add sparkles on mouse move
    document.addEventListener('mousemove', function(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (e.pageX - 2) + 'px';
        sparkle.style.top = (e.pageY - 2) + 'px';
        sparkleGroup.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    });
}

// Theme Toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
} 