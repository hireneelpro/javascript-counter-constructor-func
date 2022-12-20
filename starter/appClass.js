function getElement(selection) {
  let element;
  if ((element = document.querySelector(selection))) {
    return element;
  } else {
    throw Error(` ${selection} does not exit`);
  }
}
let count;

class Counter {
  constructor(element, count) {
    this.count = count;
    this.element = element;
    this.btnIncrease = element.querySelector(".increase");
    this.btnDecrease = element.querySelector(".decrease");
    this.btnReset = element.querySelector(".reset");
    this.value = element.querySelector(".value");
    // this.value = getElement('.value')
    // console.log(this.value);
    this.value.textContent = this.count;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.btnIncrease.addEventListener("click", this.increment);
    this.btnDecrease.addEventListener("click", this.decrement);
    this.btnReset.addEventListener("click", this.reset);
  }
  increment() {
    this.count++;
    this.value.textContent = this.count;
    }
    decrement() {
        this.count--;
        this.value.textContent = this.count;
        
    }
    reset() {
        this.count = 0;
        this.value.textContent = this.count;
        
    }
}


const firstCounter = getElement(".counter-first");
const secondCounter = getElement(".counter-second");

const counter1 = new Counter(firstCounter, 10);
console.log(counter1);
const counter2 = new Counter(secondCounter, 10000);
