var textWrapper = document.querySelector('.Title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.Title .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.Title',
        opacity: 0,
        duration: 5000,
        easing: "easeOutExpo",
        delay: 1000
    });