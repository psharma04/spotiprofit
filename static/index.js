// Calculated as 0.004 / 3.5
const costPerMinute = 0.004 / 3.5


// Extract values from the form
document.querySelector(".query-button").addEventListener('click', () => {
    try{
        document.querySelector(".share").innerHTML = ""
        const timeListening = parseInt(document.querySelector(".query-input").value)
        const accountType = parseFloat(document.querySelector(".account-type").value)
        // the account type selector actually just returns the cost in USD for your account type lmao
        const netCost = ((timeListening * costPerMinute)-(accountType*12)).toFixed(2)
        let ResponseText;
        if (netCost > 0) {
            ResponseText = "You costed Spotify $" + netCost + " last year!"
        }
        else if (netCost < 0) {
            ResponseText = "Your subscription made Spotify a profit of $" + -netCost + " last year!"
        }
        else if (netCost == 0) {
            ResponseText = "Spotify broke even with your subscription last year!"
        }
        console.log(ResponseText)
        document.querySelector(".response").textContent = ResponseText
    }
    catch(error) {
        console.log(error)
        document.querySelector(".query-error").textContent = "Just like your mum, we couldn't figure how to do this properly. Try again later."
    }


})