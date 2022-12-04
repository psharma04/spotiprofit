// Calculated as 0.004 / (197/60)
const costPerMinute = (0.004 / (197/60)) + (96000000000/(26637*3650000000));

// Extract values from the form
document.querySelector(".query-button").addEventListener('click', () => {
    try{
        document.querySelector(".share").innerHTML = ""
        // We can rely on the fact that JS will automatically exclude the word "minutes" from the time listening input (verified through testing on like 18 different devices).
        // So we don't need to filter the input, we can just convert it to an integer.
        const timeListening = parseInt(document.querySelector(".query-input").value)
        const accountType = parseFloat(document.querySelector(".account-type").value)
        // the account type selector actually just returns the cost in USD for your account type lmao
        // The values used for accountType are:
        // 11.99 USD/month for Personal Plans
        // 5.99 USD/month for Student Plans
        // 15.99 USD/month divided by 2 for Duo plans
        // 18.99 USD/month divided by 6 for Family plans
        // I'm assuming family plans are getting maximum utilisation because I'm lazy.
        const netCost = ((timeListening * costPerMinute)-(accountType*12)).toFixed(2)
        // This part can probably be done much more efficiently, I just did it like this because I don't know JS.
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
        // Change from second to first person so people can share to social media
        socialResponseText = ResponseText.replace("your", "my")
        document.querySelector(".share-twitter").innerHTML = `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw?related=spotifywrapped&text=${encodeURIComponent(socialResponseText)}&url=${encodeURIComponent("https://spotiprofit.xyz/")}" class="twitter-share-button"><i class="fab fa-twitter"></i> Share on Twitter</a>`
        document.querySelector(".share-reddit").innerHTML = `<a href="https://reddit.com/submit?url=https://spotiprofit.xyz&title=${encodeURIComponent(socialResponseText)}" class="reddit-share-button"><i class="fab fa-reddit"></i> Share on Reddit</a>`
    }
    catch(error) {
        console.log(error)
        document.querySelector(".query-error").textContent = "Something went wrong. Try again later."
    }


})