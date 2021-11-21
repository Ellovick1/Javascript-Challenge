// challenge one
let i = 10;
while (i) {
    alert(i--);
}


// challenge two
let i = 0;
while (++i<10) {
    alert(i);
}

let i = 0;
while (i++<10) {
    alert(i);
}


//challenge three
for (let i = 2; i < 30; i++) {
   if (i % 2 == 0) {
    alert(i);
   }  
}


//challenge four
let i = 0;

while (i < 10) {
    alert(i);
    i++;
}


//challenge five
let num = 500;

do {
    num = prompt('enter a number greater than 10?');
} while (num < 500);


//challenge six
let n = 10;
prime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue prime;
        }   
    }  
    console.log(i); 
}