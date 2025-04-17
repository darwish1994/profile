// GitHub Projects Script
document.addEventListener('DOMContentLoaded', function() {
    // GitHub username
    const username = 'darwish1994';
    const repositoriesContainer = document.getElementById('repositories-container');
    
    // Fetch repositories from GitHub API
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(repositories => {
            // Clear loading message
            repositoriesContainer.innerHTML = '';
            
            // Create repository cards
            repositories.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'project-card';
                
                // Format date
                const updatedDate = new Date(repo.updated_at);
                const formattedDate = updatedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                
                // Create card content
                repoCard.innerHTML = `
                    <h3 class="repo-name">${repo.name}</h3>
                    <p class="repo-description">${repo.description || 'No description available'}</p>
                    <div class="repo-details">
                        <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-circle"></i> ${repo.language || 'Not specified'}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${formattedDate}</span>
                    </div>
                    <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository</a>
                `;
                
                repositoriesContainer.appendChild(repoCard);
            });
            
            // If no repositories found
            if (repositories.length === 0) {
                repositoriesContainer.innerHTML = '<p class="no-repos">No repositories found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repositoriesContainer.innerHTML = `
                <p class="error-message">Failed to load repositories. Please try again later.</p>
            `;
        });
});