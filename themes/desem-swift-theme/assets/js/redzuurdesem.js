(function() {

 function modifyClass(el, targetClass) {
    if (isObj(el) && targetClass) {
      elClass = el.classList;
      elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
    }
  }

  function containsClass(el, targetClass) {
    if (isObj(el) && targetClass && el !== document ) {
      return el.classList.contains(targetClass) ? true : false;
    }
  }

 function isObj(obj) {
    return (obj && typeof obj === 'object' && obj !== null) ? true : false;
  }

 function elem(selector, parent = document){
    let elem = parent.querySelector(selector);
    return elem != false ? elem : false;
  }

  function elems(selector, parent = document) {
    let elems = parent.querySelectorAll(selector);
    return elems.length ? elems : false;
  }

	// from swift theme: sandwich
	// ******
	 (function() {
	    let bar = 'nav_bar-wrap';
	    let navBar = elem(`.${bar}`);
	    let nav = elem('.nav-body');
	    let open = 'nav-open';
	    let exit = 'nav-exit';
	    let drop = 'nav-drop';
	    let pop = 'nav-pop';
	    let navDrop = elem(`.${drop}`);

	    function toggleMenu(){
	      let menuOpen, menuPulled, status;
	      modifyClass(navDrop, pop);
	      modifyClass(navBar, 'hidden');
	      menuOpen = containsClass(nav, open);
	      menuPulled = containsClass(nav, exit);

	      status = menuOpen || menuPulled ? true : false;

	      status ? modifyClass(nav, exit) : modifyClass(nav, open);
	      status ? modifyClass(nav, open) : modifyClass(nav, exit);
	    }

	    navBar.addEventListener('click', function() {
	      toggleMenu();
	    });
	    elem('.nav-close').addEventListener('click', function() {
	      toggleMenu();
	    });

	    elem('.nav-drop').addEventListener('click', function(e) {
	      e.target === this ? toggleMenu() : false;
	    });

	  })();	

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
