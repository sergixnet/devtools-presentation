const developers = [
  { name: "Jane", age: 26, language: "Javascript" },
  { name: "John", age: 33, language: "Typescript" },
  { name: "Peter", age: 26, language: "PHP" },
];

console.log(developers);
console.log(developers);
console.log(developers);
console.log(developers);
console.table(developers);
console.warn('esto es un warn');
console.info('esto es una info');
console.error('esto es un error');

console.time('test');
let sum = 0;
for (let i=0; i <=10000000000; i++) {
    sum = i;
}
debugger;
console.timeEnd('test');


console.log(developers);


//$0
//ng.getComponent($0)
//ng.applyChanges()