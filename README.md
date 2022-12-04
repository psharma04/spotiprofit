# Spotiprofit
A simple website to find how much money Spotify made (or lost) from you last year.

This is a simple static site that uses publicly available data to estimate whether you're a profitable customer for Spotify. 
It was inspired by a [TikTok by Campbell Walker](https://vt.tiktok.com/ZS8RWtHF2/).

## How does it work?
There's a section on the website about that :)

You can find the website at [https://spotiprofit.xyz](https://spotiprofit.xyz).

## Will you publish the data you used?
Once I have a v1.0 out, I'll be focusing more on documenting the method, but if you need stuff urgently, you can always dig through `index.js` to find the numbers, or look at the sources linked under "How does it work?" on the site.

## Do you plan to update this site?
For as long as I can be bothered, I'll be updating it with the latest information from Spotify's annual revenue reports. The 0.004 USD/stream number seems to be constant over the last few years, but if Spotify announces a major change to payouts, then I'll have to account for that when it happens.
The site itself is basically jut HTML, CSS, and a bit of Javascript, so it's not like there's libraries to keep up-to-date (bar FontAwesome).
