"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// console.log('Before sorting: ', sorter.collection)
// sorter.sort()
// console.log('After sorting: ', sorter.collection)
// const charactersCollection = new CharactersCollection('XaaAyb');
// const sorter2 = new Sorter(charactersCollection);
// console.log('Before sorting: ', sorter2.collection)
// sorter2.sort()
// console.log('After sorting: ', sorter2.collection)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
var sorter3 = new Sorter_1.Sorter(linkedList);
console.log('Before sorting: ');
linkedList.print();
sorter3.sort();
console.log('After sorting: ');
linkedList.print();
