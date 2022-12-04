// Calculated as 0.004 / (197/60)
const costPerMinute = (0.004 / (197/60)) + (96000000000/(26637*3650000000))

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
            ResponseText = "Spotify lost $" + netCost + " from your subscription last year 🤑"
        }
        else if (netCost < 0) {
            ResponseText = "Spotify made a profit of $" + -netCost + " from your subscription last year 😭"
        }
        else if (netCost == 0) {
            ResponseText = "Spotify broke even with your subscription last year!"
        }
        document.querySelector(".response").textContent = ResponseText
        socialResponseText = ResponseText.replace("your", "my")
        document.querySelector(".share-twitter").innerHTML = `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw?related=spotifywrapped&text=${encodeURIComponent(socialResponseText)}&url=${encodeURIComponent("https://spotiprofit.xyz/")}" class="twitter-share-button"><i class="fab fa-twitter"></i> Share on Twitter</a>`
        document.querySelector(".share-reddit").innerHTML = `<a href="https://reddit.com/submit?url=https://spotiprofit.xyz&title=${encodeURIComponent(socialResponseText)}" class="reddit-share-button"><i class="fab fa-reddit"></i> Share on Reddit</a>`
    }
    catch(error) {
        console.log(error)
        document.querySelector(".query-error").textContent = "Something went wrong. Try again later."
    }


})