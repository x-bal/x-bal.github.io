// Data projects
const projects = [
    {
        title: "Axis Pro",
        description: "Professional web application built with modern technologies.",
        categories: ["laravel"],
        thumbnail: "", // Empty for empty state
        githubUrl: "https://github.com/x-bal/axis-pro-new",
        tags: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
        title: "E-Ticket System",
        description: "Electronic ticketing system with modern JavaScript implementation.",
        categories: ["vue", "api"],
        thumbnail: "", // Empty for empty state
        githubUrl: "https://github.com/x-bal/e-ticket",
        tags: ["Vue.js", "Laravel", "API"]
    }
    // Add more projects here
];

document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Render projects
    function renderProjects(filteredProjects = DATA.projects) {
        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" data-category="${project.categories.join(' ')}">
                <div class="project-image">
                    ${project.thumbnail ? `
                        <img src="${project.thumbnail}" alt="${project.title}">
                    ` : `
                        <div class="empty-thumbnail">
                            <i class="fas fa-code"></i>
                            <span class="project-title">${project.title}</span>
                        </div>
                    `}
                    <div class="project-overlay">
                        <a href="${project.githubUrl}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i> View Project
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                renderProjects();
            } else {
                const filteredProjects = DATA.projects.filter(project => 
                    project.categories.includes(filterValue)
                );
                renderProjects(filteredProjects);
            }
        });
    });

    // Initial render
    renderProjects();
}); 