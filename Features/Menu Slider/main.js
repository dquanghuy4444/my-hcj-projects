const btn = document.getElementById('toggle');

// toggle nav
btn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});
