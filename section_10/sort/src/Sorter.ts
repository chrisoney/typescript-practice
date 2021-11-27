interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) { }
  
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++){
      for (let j = 0; j < length - i - 1; j++){
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }

}



/*
// Random Notes

// If collection is an array of numbers
// Use this syntax for anything that is not a number, string, or boolean, by referencing the constructor function
if (this.collection instanceof Array) {
  if (this.collection[j] > this.collection[j + 1]) {
    const temp = this.collection[j];
    this.collection[j] = this.collection[j + 1];
    this.collection[j + 1] = temp;
  }
}
// Only use this syntax for number, string, and boolean
if (typeof this.collection === 'string') {
  
}

*/