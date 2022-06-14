let bigFiveList = document.querySelectorAll("big-five-list");
let bigFiveItem = document.querySelectorAll("big-five-list-item");
let bigFiveButton = document.getElementsByClassName("big-five-button")
let spottedList = document.getElementById("spotted-animals-list");

// 1 Add an event listener to the buttons
Array.from(bigFiveButton).forEach(function(btn){
    btn.addEventListener('click', function(event) {
        //let removed = bigFiveList.removeChild(bigFiveItem);
        //spottedList.appendChild(removed);
        console.log(event);
    });
    
    
});    
//2 Create a function that gets called when one of the buttons is clicked. Check this with a console.log.

//3 



