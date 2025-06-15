// index.js
function sum(a, b) {
  return a + b + 1; // แกล้งใส่ bug
}

console.log("Sum = " + sum(5, 3));

module.exports = sum;
