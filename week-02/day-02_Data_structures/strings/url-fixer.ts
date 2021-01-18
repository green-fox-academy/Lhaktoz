  
'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let replacedUrl: string = url.replace('bots','odds');
let firstPartUrl: string = replacedUrl.slice(0,4);
let lastPartUrl: string = replacedUrl.slice(5);


firstPartUrl = firstPartUrl +':'
let newUrl: string = firstPartUrl.concat(lastPartUrl);

console.log(newUrl)

