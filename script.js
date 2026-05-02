document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.background = "rgba(255,0,0,0.3)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = "rgba(255,255,255,0.05)";
    });
});
