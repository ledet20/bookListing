
let isbnButton = document.getElementById("isbnButton");

let pageFlipTime = document.getElementById('pageFlipTime');

let userIsbnValue = document.getElementById('isbnText').value;

let currentISBN = '0738531367';



isbnButton.addEventListener('click', function() {
    
    let userIsbnValue = document.getElementById('isbnText').value
    
    let numericIsbn = parseInt(userIsbnValue);
    
    alert(numericIsbn);
    
  //  if (numericIsbn)
    
//    alert(userIsbnValue);
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
     
  function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load(`ISBN:${currentISBN}`, bookFailedToLoad, bookHasLoaded);
      }

      google.books.setOnLoadCallback(initialize);