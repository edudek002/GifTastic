//====================== WINTER SPORTS GIFS ===============================================================

var topics =["skiing", "biathlon", "bobsleigh", "cross country skiing", "curling", "figure skating", "freestyle skiing", "ice hockey", "luge", "nordic combined", "speed skating"];


function renderButtons(topics, mySport, place){

		$(place).empty();

        for (var i=0; i<topics.length; i++){

        var button = $("<button>");
  		button.addClass(mySport);
  		button.attr("data-sport", topics[i]);
  		button.text(topics[i]);
  		$(place).append(button);
  		console.log(topics[i])
		};
}

renderButtons(topics, "searchSport", "#sports");


$(document).on("click", ".searchSport", function(){

	$("#GifsGoHere").empty();

	var x = $(this).data("sport"); 
	console.log(x); 

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=HE1t8YdXXknxgszYouwP2djjPBCZUfix&limit=10";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"})
         .done(function(response) {

        	for (var i=0; i<response.data.length; i++){

        		var sportsDiv = $("<div>");
        		var p = $("<p>").text("Rating: " + response.data[i].rating);

        		var sportsImage = $("<img>");
        		var animated = response.data[i].images.fixed_height.url;
        		var still = response.data[i].images.fixed_height_still.url;
        		sportsImage.attr("src", still);
        		sportsImage.attr("data-still", still);
        		sportsImage.attr("data-animated", animated);
        		sportsImage.attr("data-now", "still");
        		sportsImage.addClass("searchImage");

        		sportsDiv.append(p);
        		sportsDiv.append(sportsImage);

        		$("#GifsGoHere").append(sportsDiv);

        	}
    });  

})



$("#addSport").on("click", function(){

	event.preventDefault();

	var newSport = $("#search-input").eq(0).val();
	topics.push(newSport);
	renderButtons(topics, "searchSport", "#sports");
	return false;

})

$(document).on("click", ".searchImage", function(){
	var now = $(this).attr("data-now");

	if (now ="response.data[i].images.fixed_height_still.url"){

		$(this).attr("src", $(this).data("response.data[i].images.fixed_height.url"));
		$(this).attr("data-now","response.data[i].images.fixed_height.url");
	} 

	else {

		$(this).attr("src", $(this).data("response.data[i].images.fixed_height_still.url"));
		$(this).attr("data-now","response.data[i].images.fixed_height_still.url");
	
	}
})