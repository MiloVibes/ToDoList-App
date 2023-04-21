class ToDoList {
  constructor(index, desc, comp) {
    this.index = index;
    this.desc = desc;
    this.comp = comp;
  }
  
  toString() {
    return `Index: ${this.index}, Description: ${this.desc}, Completed: ${this.comp}`;
  }
  
  toggleCompletion() {
    this.comp = !this.comp;
  }
  
  getCompletionStatus() {
    return this.comp;
  }
  
  getDescription() {
    return this.desc;
  }
  
  setDescription(newDesc) {
    this.desc = newDesc;
  }
}

export default ToDoList;
