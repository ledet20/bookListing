
google.books.load();
     
  function bookFailedToLoad() {
      alert("we can not load that book!");
  }
     
  function bookHasLoaded() {
      console.log("The book has loaded successfully!");
  }
     
  function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('ISBN:0679603859', bookFailedToLoad, bookHasLoaded);
      }

      google.books.setOnLoadCallback(initialize);