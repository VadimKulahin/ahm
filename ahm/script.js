class DynamicArray {
    constructor(capacity = 10) {
      this.size = capacity;
      this.length = 0;
      this.array = new Array(capacity);
    }
  
    add(data) {
      if (this.length === this.size) {
        this.growSize();
      }
      this.array[this.length] = data;
      this.length++;
    }
  
    remove() {
      if (this.length === 0) {
        throw new Error('Array is empty. Cannot remove an element.');
      }
      this.length--;
      const removedData = this.array[this.length];
      this.array[this.length] = undefined;
      return removedData;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        throw new Error('Invalid index. Cannot remove element at the specified index.');
      }
      const removedData = this.array[index];
      for (let i = index; i < this.length - 1; i++) {
        this.array[i] = this.array[i + 1];
      }
      this.length--;
      this.array[this.length] = undefined;
      return removedData;
    }
  
    growSize() {
      const newSize = this.size * 2;
      const newArray = new Array(newSize);
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
      this.size = newSize;
    }
  
    set(index, data) {
      if (index < 0 || index >= this.length) {
        throw new Error('Invalid index. Cannot set data at the specified index.');
      }
      this.array[index] = data;
    }
  
    clean() {
      for (let i = 0; i < this.length; i++) {
        this.array[i] = undefined;
      }
      this.length = 0;
    }
  
    contains(data) {
      for (let i = 0; i < this.length; i++) {
        if (this.array[i] === data) {
          return true;
        }
      }
      return false;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }
  
  const dynamicArray = new DynamicArray();
  dynamicArray.add(1);
  dynamicArray.add(2);
  dynamicArray.add(3);
  console.log(dynamicArray.array); 
  console.log(dynamicArray.length); 
  
  dynamicArray.remove();
  console.log(dynamicArray.array);
  console.log(dynamicArray.length); 
  
  dynamicArray.removeAt(0);
  console.log(dynamicArray.array);
  console.log(dynamicArray.length); 
  
  dynamicArray.set(0, 4);
  console.log(dynamicArray.array); 
  console.log(dynamicArray.length); 
  
  console.log(dynamicArray.contains(4)); 
  console.log(dynamicArray.contains(5)); 
  
  dynamicArray.clean();
  console.log(dynamicArray.array);
  console.log(dynamicArray.length); 
  
  console.log(dynamicArray.isEmpty()); 
  