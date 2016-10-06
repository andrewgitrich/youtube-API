$(function(){


$("#search-term").submit(function(event){
event.preventDefault();
var searchTerm = $("#query").val();
	getRequest(searchTerm);
});



function getRequest(searchTerm){
		var params ={
			part: "snippet",
			key: "AIzaSyAsTnVYWq6OVMfgU0NzBxjJlLDtwi34jPc",
			q: searchTerm	 
		};
		url = "https://www.googleapis.com/youtube/v3/search";

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}
	

function showResults(results){
	
	$.each(results, function(index, value){
		var x = value.snippet.thumbnails.medium.url;
		$('ul').append("<li>" + <img src="x"> + "</li>");
		
		console.log(x);

	});
	
}

});
 







