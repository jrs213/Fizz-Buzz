

function fizzBuzz() {
    let input = document.getElementById("fizzBuzzInput").value;
    let z = 1;
    while (z <= input) {
        if(z % 15 === 0){
            console.log("FizzBuzz")
        } else if (z % 3 === 0 ) {
            console.log("Fizz")
        } else if ( z % 5 === 0 ) {
            console.log("Buzz")
        } else {
            console.log(z)
        }
        z++
    }
}
