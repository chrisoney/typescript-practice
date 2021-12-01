class ArrayOfNumbers {
  constructor(public collection: number[]) { }
  get(index: number): number {
    return this.collection[index];
  }
}