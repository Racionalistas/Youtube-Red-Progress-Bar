let iterationsToUpd = 0;

const checkElements = setInterval(() => {
    iterationsToUpd += 1;

    const elements = document.querySelectorAll('.ytp-play-progress');
    const playbackElm = document.querySelectorAll('.ytd-thumbnail-overlay-resume-playback-renderer');
    const progressBarElm = document.querySelectorAll('.yt-page-navigation-progress');

    playbackElm.forEach((elem) => {
        elem.style.background = '#f03';
    });

    progressBarElm.forEach((elem) => {
        elem.style.background = '#f03';
    });

    elements.forEach((elem) => {
        elem.style.background = '#f03';
    });

    if (iterationsToUpd >= 10) {
        clearInterval(checkElements)
    }
}, 400)
