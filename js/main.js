
let isbnButton = document.getElementById("isbnButton");

let pageFlipTime = document.getElementById('pageFlipTime');

let userIsbnValue = document.getElementById('isbnText').value;

var currentISBN = '0136083250';



isbnButton.addEventListener('click', function() {
    

    
    let userIsbnValue = document.getElementById('isbnText').value;
    
    
    // check if the value is a number
    let isbnLength = userIsbnValue.length;
  
    
    if (isbnLength === 10 || isbnLength === 13) {
      
        let numericIsbn = parseInt(userIsbnValue);
        
        currentISBN = numericIsbn;
        

    }
    // send isbn value to API 
    // if invalid value is entered request new isbn value 
    
});

pageFlipTime.addEventListener('click', function() {
    
});



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

  function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load(loadViewer(currentISBN), bookFailedToLoad, bookHasLoaded);
        alert(currentISBN);
      }

      google.books.setOnLoadCallback(initialize);
      
