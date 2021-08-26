console.log(typeof true);

let value = "home";

if (value) {
    console.log(`My home is  ${value}`);
}

console.log(Boolean(NaN));

console.log(1 + '2');
console.log(4 + 10 + 'px');
console.log('3' * 3);
console.log(false);


function funA() {
    let a = 1
    console.log(a);
    function funB() {
        let b = 2
        function funC() {
            let c = 3
            console.log(a, b, c);
        }
        funC()
        console.log(a, b);
    }
    funB()
}
funA()

