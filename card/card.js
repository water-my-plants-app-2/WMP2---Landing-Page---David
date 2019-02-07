
class Card {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'expand';
    this.expandButton.addEventListener('click', () => this.expandCard())
  }

  expandCard() {
    this.domElement.classList.toggle('card-open');
    this.expandButton.textContent === 'expand' ? this.expandButton.textContent = 'close' : this.expandButton.textContent = 'expand';
  }
}

let cards = document.querySelectorAll('.card');
cards.forEach(card => new Card(card));  