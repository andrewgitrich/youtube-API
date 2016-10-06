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
		var url = "https://www.googleapis.com/youtube/v3/search";

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}
	

function showResults(results){
	
	$.each(results, function(index, value){
		var thumbnail_url = value.snippet.thumbnails.medium.url;
		var title = value.snippet.title;
		$('ul').append('<li><img src="' + thumbnail_url + '">  </li>' + "<p>" + title + "</p>");
		
		console.log(value.snippet.title);
		
		});	
	}
	

});
 







