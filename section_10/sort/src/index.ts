import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log('Before sorting: ', numbersCollection.data)
numbersCollection.sort()
console.log('After sorting: ', numbersCollection.data)

// const charactersCollection = new CharactersCollection('XaaAyb');
// const sorter2 = new Sorter(charactersCollection);
// console.log('Before sorting: ', sorter2.collection)
// sorter2.sort()
// console.log('After sorting: ', sorter2.collection)

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const sorter3 = new Sorter(linkedList);
// console.log('Before sorting: ')
// linkedList.print()
// sorter3.sort()
// console.log('After sorting: ')
// linkedList.print()