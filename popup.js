document.addEventListener('DOMContentLoaded', function listnerFunc() {
    // Function to handle button click
    function handleClick() {
        //var searchInput = document.getElementById('searchInput');
        //inputQuery = searchInput.value.trim();

        var Surl = 'https://www.amazon.com/';

        chrome.tabs.update({ url: Surl });
    
        // Inject the content script into the YouTube page
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log("above yt.js");
            chrome.tabs.executeScript(tabs[0].id, { file: 'yt.js'});
            
        });
    }
    // Add event listener to button
    var button = document.getElementById('searchButton');
    if (button) {
        button.addEventListener('click', handleClick);
    } else {
        console.error("Element with ID 'm' not found.");
    }
    
});
