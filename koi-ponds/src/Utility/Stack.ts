import Card from "./Card";

class Stack {
    items: Array<Card>;
    constructor() {
      this.items = [];
    }
  
    push(element: Card) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  export default Stack;