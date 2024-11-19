let score = 0;
const scoreDisplay = document.getElementById('score');
const character = document.getElementById('character');
const treasures = document.querySelectorAll('.treasure');

const characterSpeed = 10;

document.addEventListener('keydown', (e) => {
    const rect = character.getBoundingClientRect();
    
    // Movimentação do personagem
    if (e.key === 'ArrowUp' && rect.top > 0) {
        character.style.top = `${rect.top - characterSpeed}px`;
    }
    if (e.key === 'ArrowDown' && rect.bottom < 500) {
        character.style.top = `${rect.top + characterSpeed}px`;
    }
    if (e.key === 'ArrowLeft' && rect.left > 0) {
        character.style.left = `${rect.left - characterSpeed}px`;
    }
    if (e.key === 'ArrowRight' && rect.right < 500) {
        character.style.left = `${rect.left + characterSpeed}px`;
    }

    // Checando se o personagem coletou um tesouro
    treasures.forEach((treasure) => {
        const treasureRect = treasure.getBoundingClientRect();
        if (rect.top < treasureRect.bottom && rect.bottom > treasureRect.top &&
            rect.left < treasureRect.right && rect.right > treasureRect.left) {
            treasure.style.display = 'none';
            score++;
            scoreDisplay.textContent = `Tesouros Coletados: ${score}`;
        }
    });
});
