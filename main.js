document.write("6. Use function and looping: 1.get name from user 2.get number of times user name will print");

document.write("<br>");
document.write("<br>");

function printName(name, times) {
  for (let i = 0; i < times; i++) {
    document.write(name);
	document.write("<br>");
  }
}
let userName= prompt("What is your name?");
let count= parseInt(prompt("How many time print your name"));
printName(userName, count);