var n = 5;
var string = "";

//outer loop1
// triangle
for (i = 1; i <= n; i++) {
  //inner loop1
  for (j = 1; j < n - i + 1; j++) {
    string += " ";
  }
  //inner loop2
  for (k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}

// // outer loop2
// //  inverse triangle
for (i = 1; i <= n - 1; i++) {
  //inner loop1
  for (j = 1; j < i + 1; j++) {
    string += " ";
  }
  //inner loop2
  for (k = 1; k <= 2 * (n - i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
