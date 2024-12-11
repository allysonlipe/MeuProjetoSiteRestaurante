        // Adiciona evento de clique ao menu hamburguer
        document.getElementById('menu-toggle').addEventListener('click', function(event) {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
            event.stopPropagation(); // Impede que o clique no menu hamburguer feche o menu
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            const navbar = document.getElementById('navbar');
            if (navbar.classList.contains('active') && !navbar.contains(event.target) && !document.getElementById('menu-toggle').contains(event.target)) {
                navbar.classList.remove('active'); // Remove a classe 'active' se clicar fora do menu
            }
        });

        // Adiciona rolagem suave ao clicar nos links do menu
        document.querySelectorAll('#navbar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
                const navbar = document.getElementById('navbar');
                navbar.classList.remove('active'); // Fecha o menu após clicar em um link
            });
        });