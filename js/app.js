var textWrapper = document.querySelector('.Title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.Title .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2200,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.Title',
        opacity: 0,
        duration: 4000,
        easing: "easeOutExpo",
        delay: 1000
    });



// function backgroundImage() {
//     document.body.style.backgroundImage = "url('../photo/background_1.jpg')";
//     document.body.style.backgroundAttachment = 'fixed';
//     document.body.style.backgroundPosition = 'center';
//     // document.body.style.backgroundRepeat = 'no - repeat';
//     document.body.style.backgroundSize = 'cover';
// }
