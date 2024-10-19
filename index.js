let iterationsToUpd = 0;

const checkElements = setInterval(() => {
    const elements = document.querySelectorAll('.ytp-play-progress');
    const playbackElm = document.querySelectorAll('.ytd-thumbnail-overlay-resume-playback-renderer');
    const progressBarElm = document.querySelectorAll('.yt-page-navigation-progress');

    if (elements.length < 2 && iterationsToUpd < 3) {
        iterationsToUpd++;
        return;
    }

    elements.forEach((elem) => {
        elem.style.background = '#f03';
    });

    playbackElm.forEach((elem) => {
        elem.style.background = '#f03';
    });

    progressBarElm.forEach((elem) => {
        elem.style.background = '#f03';
    });

    clearInterval(checkElements);
}, 250)
