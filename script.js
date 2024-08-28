let number = Math.floor(Math.random() * 100);
// console.log(number);
let attempts = 0;
let guesses = 10;

function guess() {
    while (guesses) {
        let input = parseInt(prompt('Guess a number between 1 - 100'));

        if (input === number) {
            console.log(`You got it! the answer was ${number}. You took ${attempts} guesses and had ${guesses} remaining!`);
        } else {
            console.log('Wrong');
            guesses--;
            attempts++;
            if (input > number) {
                console.log('You guess is to high')
            } else if (input < number) {
                console.log('Your guess is to low')
            }
            guess();
        } 
    }
    if (guesses === 0) {
        console.log('You did not get the answer in the required amount of guesses')
    }
}

guess();