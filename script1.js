<script>
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const crossIcon = document.querySelector('.cross-icon');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.style.display = 'none';
        crossIcon.style.display = 'block';
    });

    crossIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.style.display = 'block';
        crossIcon.style.display = 'none';
    });
});
</script>
