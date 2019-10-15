function aj() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?api_key=7d6ffce18f969b08bd5c2c662d3ddaa8&language=en-US&page=1&primary_release_year=2017&with_genres=" + genre,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  $.ajax(settings).done(function (response) {
    //console.log(response);
    var jsonContent = response.results;
    var random = jsonContent[Math.floor(Math.random() * jsonContent.length)];
    console.log(jsonContent);
    $("#moviePic").attr("src", "https://image.tmdb.org/t/p/w500" + random.poster_path)
    $('#movie-info').text(random.overview)
  })
};
function empty() {
  genre = [];
}
// action = 28, comedy = 35, horror = 27, romance = 10749
var genreIds = [];
var genres = ["action", "comedy", "horror", "romance"];
var genre = [];

// renderMovieButtons();
$(".genreSearch").on("click", function () {
  genre.push($(this).attr('title'));
  aj();
  empty();
});
$(document).on("click", ".genreSearch", function () {
  event.preventDefault();
  genre.push($(this).attr("data-state"));
  console.log(genre)
  aj();
  $(".movie-info").text(genre);




});
var titleIds = [];
var title = [];
var genre = [];

$(".button").click(function() {
  $(this).addClass('button-clicked');
});