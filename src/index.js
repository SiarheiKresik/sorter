const NUMBERS_COMPARATOR = (a, b) => a - b;

class Sorter {
  constructor() {
    this.data = [];
    this.comparator = NUMBERS_COMPARATOR;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    const indices_sorted = indices.sort(NUMBERS_COMPARATOR);
    indices_sorted
      .map(index => this.data[index])
      .sort(this.comparator)
      .map((el, index) => (this.data[indices_sorted[index]] = el));
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
