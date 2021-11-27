"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
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
