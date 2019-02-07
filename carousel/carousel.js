class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftB = document.querySelector('.left-button');
        this.rightB = document.querySelector('.right-button');
        this.imgs = document.querySelectorAll(".carousel img");
        this.imgs[0].style.display = 'flex';
        this.leftB.addEventListener('click', () => this.leftButton());
        this.rightB.addEventListener('click', () => this.rightButton());
    }
    leftButton() {
        let currentDisplayed = 0;
        for (let i = 0; i < 3; i++) {
            if ($(this.imgs[i]).css('display') === 'flex') {
                currentDisplayed = i;
            }
        }
        if (currentDisplayed === 0) {
            this.imgs[currentDisplayed].style.display = "none";
            this.imgs[2].style.display = "flex";
        }
        else {
            this.imgs[currentDisplayed].style.display = "none";
            this.imgs[currentDisplayed - 1].style.display = "flex";
        }
    }

    rightButton() {
        let currentDisplayed = 0;
        for (let i = 0; i < 3; i++) {
            if ($(this.imgs[i]).css('display') === 'flex') {
                currentDisplayed = i;
            }
        }
        if (currentDisplayed === 2) {
            this.imgs[currentDisplayed].style.display = "none";
            this.imgs[0].style.display = "flex";
        }
        else {
            this.imgs[currentDisplayed].style.display = "none";
            this.imgs[currentDisplayed + 1].style.display = "flex";
        }
    }




}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);