
let isbnButton = document.getElementById("isbnButton");

let pageFlipTime = document.getElementById('pageFlipTime');

let isbnInputField = document.getElementById('isbnText');

// API will initially be rendered with this isbn
var currentISBN = '0136083250';
// isbn test code 1477218491


// click listener for isbn button
isbnButton.addEventListener('click', function() {
    
    let isbnErrorMessage = document.getElementById('errorMessage');
    
    isbnErrorMessage.classList.remove('isbnErrorMessage')
    
    let userIsbnValue = document.getElementById('isbnText').value;
    
    // check if the value is a number
    let isbnLength = userIsbnValue.length;
  
    if (isbnLength === 10 || isbnLength === 13) {
      
        let numericIsbn = parseInt(userIsbnValue);
        
        currentISBN = numericIsbn;
        // when user enters new isbn the book is rerendered
        initialize();
        
    } else {
        userIsbnValue = document.getElementById('isbnText').value = "";
        isbnInputField.classList.add('invalidValue');
        isbnErrorMessage.classList.add('isbnErrorMessage');
        
    }
    
    // isbnInputField.classList.remove('invalidValue');
    // if invalid value is entered request new isbn value 
});

// function that retrrns users time value and gets input value
function getUserTime() {
    let userTimeValue = document.getElementById("autoPageText").value;
    let numericTime = parseInt(userTimeValue);
    
    alert(numericTime);
  
    return numericTime;
}

// click listener for page flip button 
pageFlipTime.addEventListener('click', getUserTime);

/// API CALLS /// 

google.books.load();  

  function bookFailedToLoad() {
      alert("we can not load that book!");
  }
     
  function bookHasLoaded() {
      console.log("The book has loaded successfully!");
  }
    
  function loadViewer(isbnVal) {
      return `ISBN:${isbnVal}`;
  }

let userTime = getUserTime();

  function nextPage(viewer) {
        window.setTimeout(function() {
            viewer.nextPage();
            nextPage(viewer);
        }, userTime); 
      alert(userTime);
    }

  function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load(loadViewer(currentISBN), bookFailedToLoad, bookHasLoaded);
        nextPage(viewer);
      }

      google.books.setOnLoadCallback(initialize);
      
