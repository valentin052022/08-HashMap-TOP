"use strict";

class HashMap {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    let hashCode = 0;
    const numberPrime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (numberPrime * hashCode + key.charCodeAt(i)) % this.numBuckets;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    this.buckets[index] = new Map().set(key, value);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket && bucket.has(key)) {
      return bucket.get(key);
    } else {
      console.log("El key no fue encontrado");
      return null;
    }
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket && bucket.has(key)) {
      return bucket.has(key);
    } else {
      console.log("El key no fue encontrado");
      return null;
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      bucket.delete(key);
      return true;
    } else {
      console.log("KEy no encontrada");
      return false;
    }
  }

  length() {
    let totalKeys = 0;
    this.buckets.forEach((bucket) => {
      bucket.forEach((value, key) => {
        totalKeys++;
      });
    });
    return totalKeys;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      bucket.clear();
    });
    return "Has Eliminado todo el Hash";
  }

  keys() {
    let totalKeys = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((value, key) => {
        if (key) {
          totalKeys.push(key);
        }
      });
    });
    return totalKeys;
  }

  values() {
    let totalValues = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((value, key) => {
        if (value) {
          totalValues.push(value);
        }
      });
    });
    return totalValues;
  }

  entries() {
    let keysAndValues = [];
    this.buckets.forEach((bucket) => {
      bucket.forEach((value, key) => {
        keysAndValues.push([key, value]);
      });
    });
    return keysAndValues;
  }
}

const test = new HashMap(16);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// probar funcionalidades
console.log(test.get("kite"))
console.log(test.keys());
console.log(test.values());
console.log(test.has("lion"));
console.log(test.remove("dog"));
console.log(test.length());
console.log(test.entries());
console.log(test.clear());
console.log(test.length());