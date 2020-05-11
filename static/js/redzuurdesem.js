(function() {
	var fbposts = document.querySelector('#fbposts');
	function whoops(error) {
		console.log(error);
		fbposts.innerHTML = "<li>Er is iets misgelopen bij het ophalen van Facebook posts.</li>";
	}
	function parseFeed(response) {
		if(response && !response.error) {
			var html = "";

			response.data.forEach(function(elem) {
				var id = elem.id.substring(elem.id.indexOf('_') + 1, elem.id.length);
				html += "<li class = 'post_item'><div class='fb-post' data-href='https://www.facebook.com/redzuurdesem/posts/" + id + "'></div></li>";
			});

			fbposts.innerHTML = html;
			FB.XFBML.parse(fbposts);
		} else {
			whoops(response.error);
		}
	}

	window.fbAsyncInit = function() {
		try {
			FB.api("/redzuurdesem/feed?limit=4&access_token=" + window.fbtoken, parseFeed);
		} catch(e) {
			whoops(e);
		}
	}
})()
