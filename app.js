var apiKey = 'dc6zaTOxFJmzC';

function searchForGifs(searchQuery, callback) {
  console.log('Searching...');
  $.ajax({
    method: 'get',
    url: 'http://api.giphy.com/v1/gifs/search',
    data: { 
      q: searchQuery, 
      api_key: apiKey,
      limit: 12,    
    }
  })
  .done(drawGifs);
}

function search() {
  console.log('Search button pressed!');
  // Grab search value from search-box
  var searchWord = $('[id = search-box]').val();
  console.log(searchWord);
  // TASK 4: Log the value that's in the search box
  
  
  // TASK 4: Replace ??? and someCallback with the right values
   searchForGifs(searchWord, drawGifs);
}

function drawGifs(response) {
  console.log('Drawing gifs!');
  // Clear the gif container
  $('[id = gifs-container]').html('');
  
  // Grab gifs from the server response
  var gifs = response.data;
  
  // Find number of gifs
  var numberOfGifs = gifs.length;
  
  // Make a counter
  var index = 0;
      
  // Draw each gif in the list
  // TODO: 5 draw more than one gif
  while (index < numberOfGifs) {
    $('[id= gifs-container]').append(
      '<div class="gif-holder">' + 
      ' <img src="' +
           gifs[index].images.original.url + 
      '"/>' + 
      ' <a href="' +
           gifs[index].images.original.url + 
      '">Link To Image</a>' +
      '</div>' 
    ) ;   

    index = index + 1;
  }
  // What will index be after the while loop ends?
}

$(document).ready(function() {
  // Registers a function that fires when the button is clicked
  $('[id = Button]').click( search);
  
});
