function nextSlide() {
    var slides = document.getElementsByClassName("slide");
    var radios = document.getElementsByName("slide");
    var currentIndex = -1;

    // Encontra o slide atualmente exibido
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            currentIndex = i;
            break;
        }
    }

    // Avança para o próximo slide ou volta para o primeiro slide
    if (currentIndex < slides.length - 1) {
        radios[currentIndex + 1].checked = true;
    } else {
        radios[0].checked = true;
    }
}

setInterval(nextSlide, 5000);
