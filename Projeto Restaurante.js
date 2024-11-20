<script>
    // Adiciona evento de clique ao menu hamburguer
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active'); // Corrigido: removido espaço extra
    });
</script>