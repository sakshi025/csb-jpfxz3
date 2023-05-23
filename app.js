var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;
var sum;
document.getElementById("arrow").addEventListener("click", myFunction);

function myFunction(e) {
  var amt = document.getElementById("amount").value;
  if (amt == "") {
    alert("Enter value in number");
    return;
  }
  if (isNaN(amt)) {
    alert("please enter a number");
    return;
  }

  amt = parseFloat(amt);
  one = Math.floor(amt / 2000);
  document.getElementById("one").innerHTML = one;
  amt = amt - one * 2000;
  two = Math.floor(amt / 500);
  document.getElementById("two").innerHTML = two;
  amt = amt - two * 500;

  three = Math.floor(amt / 200);
  document.getElementById("three").innerHTML = three;
  amt = amt - three * 200;

  four = Math.floor(amt / 100);
  document.getElementById("four").innerHTML = four;
  amt = amt - four * 100;

  five = Math.floor(amt / 50);
  document.getElementById("five").innerHTML = five;
  amt = amt - five * 50;

  six = Math.floor(amt / 20);
  document.getElementById("six").innerHTML = six;
  amt = amt - six * 20;

  seven = Math.floor(amt / 10);
  document.getElementById("seven").innerHTML = seven;
  amt = amt - seven * 10;

  eight = Math.floor(amt / 5);
  document.getElementById("eight").innerHTML = eight;
  amt = amt - eight * 5;

  nine = Math.floor(amt / 2);
  document.getElementById("nine").innerHTML = nine;
  amt = amt - nine * 2;

  ten = Math.floor(amt / 1);
  document.getElementById("ten").innerHTML = ten;
  amt = amt - ten * 1;

  var sum = one + two + three + four + five + six + seven + eight + nine + ten;
  document.getElementById("eleven").innerHTML = sum;
}
