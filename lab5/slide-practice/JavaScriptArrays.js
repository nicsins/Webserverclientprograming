let animals=["Duck","Cow","Bird"];
console.log(animals);
//TODO print last animals
console.log(animals[2]);

for (var i=0;i<animals.length;i++){
    console.log(animals[i]);
}

animals[1]="bear";
animals[11]="Kangaroo";
animals.push('Monkey');
animals.push('turlte');

console.log(animals);
console.log(animals[10]);
animals.pop();
console.log(animals);
console.log(animals);

animals.forEach(function (element,index) {
    console.log('Element '+element+ ' is ' + index + 'of the array')
});
