const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.append(items[items.ngth -1]);
}
document.addEventListener('click',activate,false);







    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    });







    const prePage = document.getElementById('prePage');
    const mainPage = document.getElementById('mainPage');

    const nextButton = document.getElementById('playButton');

    nextButton.addEventListener('click', function() {
      prePage.style.display = 'none';
      mainPage.style.display = 'block';
    });



    let sprinkleInterval;

    function createSprinkle() {
        const sprinkle = document.createElement('div');
        sprinkle.classList.add('sprinkler');
        sprinkle.style.left = `${Math.random() * window.innerWidth}px`;
        sprinkle.style.backgroundColor = getRandomColor();
        sprinkle.style.animationDuration = `${Math.random() * 7 + 1}s`;
        document.body.appendChild(sprinkle);
        setTimeout(() => {
            sprinkle.remove();
        }, 3000);
    }

    function getRandomColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function sprinkleEffect() {
        sprinkleInterval = setInterval(() => {
            for (let j = 0; j < 3; j++) {
                createSprinkle();
            }
        }, 100);
    }

    function stopSprinkles() {
        clearInterval(sprinkleInterval);
    }

    window.onload = sprinkleEffect;