function search() {
    var searchByIng = {
        "async": true,
        "crossDomain": true,
        "url": "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=3&ingredients=" + ingredients,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
            "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
        }
    }
    $.ajax(searchByIng).done(function (response) {
        var id = response[0].id;
        var id2 = response[1].id;
        var id3 = response[2].id;
        console.log(response)
        console.log("search", response[0].id);
        console.log("search2", response[0].id);
        console.log("search3", response[2].id);
        $("#foodTitle").text(response[0].title)
        $("#foodTitle2").text(response[1].title)
        $("#foodTitle3").text(response[2].title)
        $("#foodPic").attr("src", response[0].image)
        $("#foodPic2").attr("src", response[1].image)
        $("#foodPic3").attr("src", response[2].image)
        function displayRecipe() {
    
            var info = {
                "async": true,
                "crossDomain": true,
                "url": "https://webknox-recipes.p.rapidapi.com/recipes/" + id + "/information",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
                }
            }
            $.ajax(info).done(function (response) {
            console.log("recipe", response.sourceUrl);
            $("#food").append("<a id = 'link' href = '' target ='_blank'>Recipe</a>")
            $("#link").attr("href", response.sourceUrl)
            });
        }
        function displayRecipe2() {
    
            var info = {
                "async": true,
                "crossDomain": true,
                "url": "https://webknox-recipes.p.rapidapi.com/recipes/" + id2 + "/information",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
                }
            }
            $.ajax(info).done(function (response) {
            console.log("recipe", response.sourceUrl);
            $("#food1").append("<a id = 'link1' href = ''target ='_blank'>Recipe</a>")
            $("#link1").attr("href", response.sourceUrl)
            });
        }
        function displayRecipe3() {
    
            var info = {
                "async": true,
                "crossDomain": true,
                "url": "https://webknox-recipes.p.rapidapi.com/recipes/" + id3 + "/information",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
                    "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
                }
            }
            $.ajax(info).done(function (response) {
            console.log("recipe", response.sourceUrl);
            $("#food2").append("<a id = 'link2' href = '' target ='_blank'>Recipe</a>")
            $("#link2").attr("href", response.sourceUrl)
            });
        }
        displayRecipe();
        displayRecipe2();
        displayRecipe3();
    });
    
}
var ingredients = [];
var foodButtons = ["eggs", "milk", "bread", "cheese"]
function renderButtons() {
    $("#commonFoodOptions").empty();
    for (var i = 0; i < foodButtons.length; i++) {
        var a = $("<button>");
        a.addClass("foodOptionButtons button font");
        a.attr("data-state", foodButtons[i]);
        a.text(foodButtons[i]);
        $("#commonFoodOptions").append(a);
    }
}
renderButtons();
$("#foodSearch").on("click", function(){
    event.preventDefault();
    var a = $("#addedIngredients").val().trim();
    ingredients.push(a + "%2C");
    foodButtons.push(a);
    console.log(ingredients);
    renderButtons();
    $("form")[0].reset();
    
});
$(document).on("click", ".foodOptionButtons", function() {
    event.preventDefault();
    ingredients.push($(this).attr("data-state") + "%2C");
    console.log("ing", ingredients)
    
    
});
 
function reset(){
    ingredients= []
    console.log(ingredients)
}
$("#reset").on("click", function(){
    reset()
    location.reload()
})
$("#submit").on("click", function(){
    search();
})

$(".button").click(function() {
    $(this).addClass('button-clicked');
  });
  