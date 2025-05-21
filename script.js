

function fizzBuzz() {
    let input = document.getElementById("fizzBuzzInput").value;
    let results = "";
    let z = 1;
    while (z <= input) {
        if(z % 15 === 0){
            results += " FizzBuzz"
        } else if (z % 3 === 0 ) {
            results += " Fizz"
        } else if ( z % 5 === 0 ) {
            results += " Buzz"
        } else {
            results += " " + z;
        }
        z++
    }
    document.getElementById("result").innerHTML = results;
    document.getElementById("inputForm").reset();
}
