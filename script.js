// let subreddit = prompt("which subreddit?");
let subreddit = "superbowl";
let subredditDisplay = document.getElementById("heading");
subredditDisplay.innerText = subreddit;

fetch(`https://www.reddit.com/r/${subreddit}/.json`)
.then(res => res.json())
.then(data => {
    let listingArray = data.data.children;
    let topEleven = listingArray.slice(0, 11);
    
    for (let listing of topEleven) {
        const { title, permalink, thumbnail } = listing.data;
               
        let listingsContainer = document.getElementById("listings-here");
        
        let article = document.createElement("article");
        if (listing === topEleven[0]) {
            article.classList.add("top-post");
        }
        listingsContainer.appendChild(article);
        
        let displayTitle = document.createElement("h2");
        displayTitle.innerText = title;
        article.appendChild(displayTitle);

        let displayLink = document.createElement("a");
        displayLink.innerText = "Link";
        displayLink.setAttribute("href", `http://reddit.com${permalink}`);
        article.appendChild(displayLink);

        let image = document.createElement("img");
        image.setAttribute("src", thumbnail);
        article.appendChild(image);

    }
});
