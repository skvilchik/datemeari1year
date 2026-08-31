```javascript
document.addEventListener("DOMContentLoaded", () => {

    const openButton = document.getElementById("openButton");
    const videoButton = document.getElementById("videoButton");
    const giftButton = document.getElementById("giftButton");

    const story = document.getElementById("story");
    const videoSection = document.getElementById("videoSection");
    const afterVideo = document.getElementById("afterVideo");
    const gift = document.getElementById("gift");

    const video = document.getElementById("anniversaryVideo");


    // Плавно показываем секцию
    function reveal(section) {

        if (!section) return;

        section.classList.add("visible");

        setTimeout(() => {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);

    }


    // Кнопка "Открыть"
    if (openButton) {

        openButton.addEventListener("click", () => {
            reveal(story);
        });

    }


    // Кнопка "Посмотреть"
    if (videoButton) {

        videoButton.addEventListener("click", () => {
            reveal(videoSection);
        });

    }


    // Видео закончилось
    if (video) {

        video.addEventListener("ended", () => {

            // Даём время после видео
            setTimeout(() => {
                reveal(afterVideo);
            }, 7000);

        });

    }


    // Кнопка "Узнать"
    if (giftButton) {

        giftButton.addEventListener("click", () => {
            reveal(gift);
        });

    }

});
```
