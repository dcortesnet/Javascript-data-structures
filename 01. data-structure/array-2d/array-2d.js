class Array2D {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = new Array(rows);

    for (let index = 0; index < rows; index++) {
      this.matrix[index] = new Array(columns).fill(0);
    }
  }

  getElement(row, column) {
    return this.matrix[row][column];
  }

  setElement(row, column, value) {
    this.matrix[row][column] = value;
  }

  printMatrix() {
    for (let index = 0; index < this.rows; index++) {
      console.log(this.matrix[index].join(', '));
    }
  }
}


const array2D = new Array2D(3, 3);
array2D.setElement(0, 0, 1);
array2D.setElement(1, 1, 2);
array2D.setElement(2, 2, 3);

array2D.printMatrix();