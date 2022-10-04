function function1() {
  let x = 10;
  let y = 20;

  console.log(x + y);
  
  function2();
}

function function2() {
  console.log('Function 2');
  function3();
}

function function3() {
  let i;
  for(i=0; i<10; i++) {
    console.log(i);
  }
}

function1();

console.log("hola");
