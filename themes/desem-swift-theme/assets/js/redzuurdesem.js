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

	function getRedZuurdesemFacebookFeed() {
		try {
			FB.api("/redzuurdesem/feed?limit=4&access_token=" + window.fbtoken, parseFeed);
		} catch(e) {
			whoops(e);
		}
	}

	function fbCommunityHeaderify() {
		var elem = document.querySelector('#fb-community-header');
		if(!elem) return;

		var list = [
			"Starter dood? Facebook to the rescue",
			"Hulp nodig? Laat een berichtje achter",
			"Brood mislukt? Laat ons helpen",
			"Ongerezen brood? Schakel hulp in",
			"Smaakmakers nodig? Brainstorm hier mee",
			"moeilijkheden met je deeg? Zo opgelost",
			"Desem te zuur? Vraag om tips",
			"Eerste experiment gelukt? Deel de vreugde",
			"Mooi brood gebakken? Deel de vreugde",
			"Lekker brood gebakken? Deel je trots",
			"Zuurdesemstarter gemaakt? Deel je trots",
			"Prachtige 'brood-foto' gemaakt? Deel je vreugde",
			"Trots op je zelfgemaakt brood? Deel je vreugde"
		 ];

		var index = Math.floor(Math.random() * list.length);
		  elem.innerHTML = list[index] + ' &raquo;';
	}

	function fbCommunityContainer() {
		var elem = document.querySelector('#fb-community-container');
		if(!elem) return;

        // https://developers.facebook.com/docs/plugins/page-plugin/ - max is 600
        var width = 600;
        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw < width) width = vw - 10;
        elem.innerHTML = '<div class="fb-page" data-width="' + vw + '" data-href="https://www.facebook.com/redzuurdesem" data-hide-cover="false" data-tabs="timeline,messages" data-show-facepile="false"></div>';
	}

	if(fbposts && window.fbtoken) {
		window.fbAsyncInit = getRedZuurdesemFacebookFeed;
	}
	fbCommunityHeaderify();
	fbCommunityContainer();
})()
