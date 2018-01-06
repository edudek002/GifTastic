//====================== WINTER SPORTS GIFS ===============================================================

var topics =["skiing", "biathlon", "bobsleigh", "cross country skiing", "curling", "figure skating", "freestyle skiing", "ice hockey", "luge", "nordic combined", "speed skating"];


function renderButtons(){

		$("#sports").empty();

        for (var i=0; i<topics.length; i++){

        var button = $("<button>");
  		button.addClass("mySport");
  		button.attr("data-sport", topics[i]);
  		button.text(topics[i]);
  		$("#sports").append(button);
  		console.log(topics[i])
		};
}

renderButtons();


$("button").on("click", function(){

	$("#GifsGoHere").empty();

	x = $(this).data("sport"); 
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
        		sportsImage.attr("src", response.data[i].images.fixed_height_still.url);
        		sportsImage.attr("data-still", response.data[i].images.fixed_height_still.url);
        		sportsImage.attr("data-animated", response.data[i].images.fixed_height.url);
        		sportsImage.attr("data-now", "response.data[i].images.fixed_height_still.url");
        		sportsImage.addClass("searchImage");

        		sportsDiv.append(p);
        		sportsDiv.append(sportsImage);

        		$("#GifsGoHere").append(sportsDiv);

        	}
    });  

})



$("#addSearch").on("click", function(){

	var newSport = $("input").val().eq(0);
	topics.push(newSport);
	renderButtons();
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