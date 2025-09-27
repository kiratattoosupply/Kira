document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById('intro-screen');
    const introLogo = document.getElementById('introLogo');
    const mainContent = document.getElementById('main-site-content');
    
    // Tempo de pausa para o cliente ler o título
    const initialPause = 1000; 
    // Tempo da animação de subida
    const liftDuration = 1000; 

    // Oculta o conteúdo principal do site (se não já estiver oculto por CSS)
    mainContent.classList.add('hidden'); 

    setTimeout(() => {
        // 1. Inicia a animação de subida do logo
        introLogo.classList.add('animate-up');
        
        setTimeout(() => {
            // 2. Transição para esconder a tela de intro e revelar o site
            introScreen.style.opacity = '0';
            
            setTimeout(() => {
                // 3. Remove a tela de intro e revela o conteúdo principal
                introScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                
                // 4. Dispara as animações de fade-in-up nos elementos do site
                document.querySelectorAll('.fade-in-up').forEach((el, index) => {
                    // Garante que a animação comece sequencialmente
                    el.style.animationDelay = `${0.3 + index * 0.15}s`;
                    el.style.opacity = 1; 
                });
                
            }, 500); // Meio segundo para o fade-out da tela de intro
            
        }, liftDuration); 
        
    }, initialPause);
});
