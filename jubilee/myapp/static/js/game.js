const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
basket.innerHTML = "🧺"; // Basket emoji

const catchSound = document.getElementById('catchSound');
const popSound = document.getElementById('popSound');
const scoreboard = document.getElementById('scoreboard');
const livesDisplay = document.getElementById('lives');

let score = 0;
let lives = 3;
let basketSpeed = 10; // Speed of basket movement

function updateUI() {
    scoreboard.innerHTML = `Score: ${score}`;
    livesDisplay.innerHTML = `Lives: ${lives}`;
}

// Move basket left and right using arrow keys
document.addEventListener('keydown', function(event) {
    const basketLeft = basket.offsetLeft;
    const gameAreaWidth = gameArea.offsetWidth;

    if (event.key === 'ArrowLeft' && basketLeft > 0) {
        basket.style.left = (basketLeft - basketSpeed) + 'px';
    } else if (event.key === 'ArrowRight' && basketLeft < (gameAreaWidth - basket.offsetWidth)) {
        basket.style.left = (basketLeft + basketSpeed) + 'px';
    }
});

function spawnGift(type) {
    const gift = document.createElement('div');
    gift.classList.add(type === 'good' ? 'gift' : 'bad-gift');
    gift.innerHTML = type === 'good' ? "🎁" : "💣"; // Gift or Bomb emoji
    gift.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    gameArea.appendChild(gift);

    let fallInterval = setInterval(() => {
        gift.style.top = (parseInt(gift.style.top) || 0) + 5 + 'px';

        // Catch good gifts with basket
        if (gift.offsetTop + gift.offsetHeight >= basket.offsetTop && 
            gift.offsetLeft + gift.offsetWidth >= basket.offsetLeft && 
            gift.offsetLeft <= basket.offsetLeft + basket.offsetWidth) {
            
            if (type === 'good') {
                score++;
                catchSound.play();
                confetti({
                    particleCount: 50,
                    spread: 30,
                    origin: { y: 0.8 }
                });
            } else {
                lives--;
                popSound.play();
                showExplosion(gift.offsetLeft, gift.offsetTop);
            }
            clearInterval(fallInterval);
            gameArea.removeChild(gift);
            updateUI();
            
            if (lives === 0) {
                alert('Game Over! Your score: ' + score);
                location.reload();
            }
        }

        // Gift or bomb reaches the bottom of the screen
        if (gift.offsetTop > window.innerHeight) {
            clearInterval(fallInterval);
            gameArea.removeChild(gift);
            
            if (type === 'good') {
                lives--;
                updateUI();
                if (lives === 0) {
                    alert('Game Over! Your score: ' + score);
                    location.reload();
                }
            }
        }
    }, 20);

    // Pop bad gifts by clicking them
    if (type === 'bad') {
        gift.addEventListener('click', () => {
            clearInterval(fallInterval);
            gameArea.removeChild(gift);
            popSound.play();
            score++;  // Reward for popping bad gifts
            updateUI();

            // Show confetti explosion at the clicked location
            confetti({
                particleCount: 100,
                spread: 60,
                origin: {
                    x: gift.offsetLeft / window.innerWidth,
                    y: gift.offsetTop / window.innerHeight
                }
            });

            showExplosion(gift.offsetLeft, gift.offsetTop);
        });
    }
}

// Show explosion effect at bomb's position
function showExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    explosion.innerHTML = "💥"; // Explosion emoji
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
    gameArea.appendChild(explosion);

    setTimeout(() => {
        gameArea.removeChild(explosion);
    }, 500); // Explosion lasts 0.5 seconds
}

// Spawn gifts every 2 seconds
setInterval(() => {
    const type = Math.random() > 0.7 ? 'bad' : 'good';
    spawnGift(type);
}, 2000);