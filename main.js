//Global currentCatTax variable
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) DONE! Generate a random, whole number between 0 and 20.
// 2) DONE! If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) DONE! If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) DONE! If the random number is not 0, update the pay button so that it is no longer hidden
// 5) DONE! If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) DONE! If the random number is 0, update the pay button so that it is hidden.
// 7) DONE! Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

let calcButton = document.getElementsByClassName("calcButton")

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('calcButton')) {
        // alert('Calc button clicked');
        calcButtonClick();
    } else if (e.target.classList.contains('payBtn')){
        payButton();
    }
})

function calcButtonClick() {
    let amountOwed = document.getElementById('amountOwed')
    let payBtn = document.querySelector('.payBtn');
    let randomNum = Math.floor(Math.random() * 20);
    currentCatTax = randomNum;
    if (randomNum != 0) {
        amountOwed.innerText = `You owe ${currentCatTax} cat tax! Pay up!`;
        payBtn.innerText = "Pay Cat Tax"
        payBtn.style.visibility = 'visible';
    } else if (randomNum === 0){
        amountOwed.innerText = `You owe ${currentCatTax} cat tax! You've escaped this time!`;
        payBtn.style.visibility = 'hidden';
    }
}

// TODO: payButton function
// Function should handle the following items:
// 1) DONE! Decrement the currentCatTax amount by 1
// 2) DONE! If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) DONE! If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) DONE! If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) DONE! Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)


function payButton() {
    currentCatTax --;    
    if (currentCatTax > 0) {
        let catUrl = '';
        amountOwed.innerText = `You still owe ${currentCatTax} cat tax! Pay up!`;
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
            let catImageDiv = document.createElement('img')
            catImageDiv.classList.add('catImage')
            catImageDiv.src = data[0].url;      
            document.querySelector('.imageContainer').prepend(catImageDiv);             
        })  
        console.log(catUrl)
    
    } else if (currentCatTax <= 0) {
        amountOwed.innerText = `Your debts are paid.`;
        document.querySelector('.container').innerHTML = "<iframe src='https://gfycat.com/ifr/SnivelingBeautifulJoey' frameborder='0' scrolling='no' allowfullscreen width='640' height='846'></iframe><p> <a href='https://gfycat.com/snivelingbeautifuljoey-cat'>via Gfycat</a></p>";  
    }
}
