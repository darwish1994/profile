// Background Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const animatedBackground = document.querySelector('.animated-background');
    
    // Create additional random shapes for more dynamic background
    function createRandomShapes(count) {
        for (let i = 0; i < count; i++) {
            const shape = document.createElement('div');
            shape.classList.add('shape');
            
            // Random size between 30px and 120px
            const size = Math.floor(Math.random() * 90) + 30;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            
            // Random position
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.left = `${Math.random() * 100}%`;
            
            // Random opacity between 0.1 and 0.4
            shape.style.opacity = (Math.random() * 0.3 + 0.1).toString();
            
            // Random blur between 5px and 20px
            shape.style.filter = `blur(${Math.random() * 15 + 5}px)`;
            
            // Random gradient colors from our theme palette
            const colors = [
                'rgba(74, 20, 140, 0.3)',
                'rgba(123, 31, 162, 0.2)',
                'rgba(156, 39, 176, 0.25)',
                'rgba(187, 134, 252, 0.15)'
            ];
            
            const colorStart = colors[Math.floor(Math.random() * colors.length)];
            const colorEnd = colors[Math.floor(Math.random() * colors.length)];
            
            shape.style.background = `linear-gradient(135deg, ${colorStart} 0%, ${colorEnd} 100%)`;
            
            // Random animation duration between 15s and 30s
            const duration = Math.random() * 15 + 15;
            shape.style.animationDuration = `${duration}s`;
            
            // Random animation delay
            shape.style.animationDelay = `${Math.random() * -30}s`;
            
            animatedBackground.appendChild(shape);
        }
    }
    
    // Create 8 additional random shapes
    createRandomShapes(8);
    
    // Add parallax effect to shapes on mouse movement
    document.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            // Different movement factor for each shape creates depth
            const moveFactor = (index % 5 + 1) * 0.5;
            const moveX = (mouseX - 0.5) * moveFactor;
            const moveY = (mouseY - 0.5) * moveFactor;
            
            // Apply subtle transform based on mouse position
            shape.style.transform = `translate(${moveX * 30}px, ${moveY * 30}px)`;
        });
    });
});