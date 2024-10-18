let iterationsToUpd = 0;

const checkElements = setInterval(() => {
    const elements = document.querySelectorAll('.ytp-play-progress');

    if (elements.length > 0) {
        if (elements.length == 1 && iterationsToUpd < 3) {
            iterationsToUpd++;
            return;
        }

        elements.forEach((elem) => {
            elem.style.background = '#f03';
        });

        clearInterval(checkElements);
    }
}, 250)
