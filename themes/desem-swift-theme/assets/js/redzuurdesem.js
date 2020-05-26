(function() {
  const doc = document.documentElement;

	// from swift theme: sandwich
	// ******
	function modifyClass(el, targetClass) {
		if (isObj(el) && targetClass) {
		  const elClass = el.classList;
		  elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
		}
	}

	function containsClass(el, targetClass) {
		if (isObj(el) && targetClass && el !== document ) {
		  return el.classList.contains(targetClass) ? true : false;
		}
	}

	function createEl(element = 'div') {
		return document.createElement(element);
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

	function pushClass(el, targetClass) {
		if (isObj(el) && targetClass) {
		  const elClass = el.classList;
		  elClass.contains(targetClass) ? false : elClass.add(targetClass);
		}
	}

  const copyToClipboard = str => {
    let copy, selection, selected;
    copy = createEl('textarea');
    copy.value = str;
    copy.setAttribute('readonly', '');
    copy.style.position = 'absolute';
    copy.style.left = '-9999px';
    selection = document.getSelection();
    doc.appendChild(copy);
    // check if there is any selected content
    selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
    copy.select();
    document.execCommand('copy');
    doc.removeChild(copy);
    if (selected) { // if a selection existed before copying
      selection.removeAllRanges(); // unselect existing selection
      selection.addRange(selected); // restore the original selection
    }
  }

 (function copyLinkToShare() {
    let  copy, copied, excerpt, isCopyIcon, isInExcerpt, link, postCopy, postLink, target;
    copy = 'copy';
    copied = 'copy_done';
    excerpt = 'excerpt';
    postCopy = 'post_copy';
    postLink = 'post_card';

    doc.addEventListener('click', function(event) {
      target = event.target;
      isCopyIcon = containsClass(target, copy);
      let isWithinCopyIcon = target.closest(`.${copy}`);
      if (isCopyIcon || isWithinCopyIcon) {
        let icon = isCopyIcon ? isCopyIcon : isWithinCopyIcon;
        isInExcerpt =  containsClass(icon, postCopy);
        if (isInExcerpt) {
          link = target.closest(`.${excerpt}`).previousElementSibling;
          link = containsClass(link, postLink)? elemAttribute(link, 'href') : false;
        } else {
          link = window.location.href;
        }
        if(link) {
          copyToClipboard(link);
          pushClass(icon, copied);
        }
      }
    });
  })();

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

	(function postsPager(){
		const pager = elem('.pagination');
		if (pager) {
		  pushClass(pager, 'pager');
		  const pagerItems = elems('li', pager);
		  const pagerLinks = Array.from(pagerItems).map(function(item){
		    return item.firstElementChild;
		  });
		  
		  pagerLinks.forEach(function(link){
		    pushClass(link, 'pager_link')
		  });

		  pagerItems.forEach(function(item){
		    pushClass(item, 'pager_item')
		  });
		}
	})();
	// ******

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
		if(fbposts && window.fbtoken) {
			window.fbAsyncInit = getRedZuurdesemFacebookFeed;
		}
	})();

	(function() {
		const $target = document.querySelector('#searchapp');
		const $pages = document.querySelector('#resultaten .pages');
		if(!($target && window.searchposts)) return;

		const query = new URLSearchParams(window.location.search);
		const searchString = query.get('q') || "";
		document.querySelector('#zoekentxt').value = searchString;

		// Our index uses title as a reference
		const postsByTitle = window.searchposts.reduce((acc, curr) => {
		  acc[curr.title] = curr;
		  return acc;
		}, {});

		fetch('/js/redzuurdesem-post.json').then(function (res) {
		  return res.json();
		}).then(function (data) {
		  const index = lunr.Index.load(data);
		  const matches = index.search(searchString);
		  const matchPosts = [];
		  matches.forEach((m) => {
		    matchPosts.push(postsByTitle[m.ref]);
		  });

		  $pages.innerHTML = `(${matches.length})`;
		  if (matchPosts.length > 0) {
		    $target.innerHTML = matchPosts.filter(p => p).map(p => {
		      return `<div>
		        <h3><a href="${p.link}">${p.title}</a></h3>
		        <p>${p.content}...</p>
		      </div>`;
		    }).join('');
		  } else {
		    $target.innerHTML = `<div>Geen relevante resultaten gevonden.</div>`;
		  }
		});
	})()

	const fromFixedToScrollForSafari = () => {
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		const header = document.querySelector('.post_header');
		if(isSafari) {
			header.style.backgroundAttachment = 'scroll';
		}
	}

	const fbCommunityHeaderify = () => {
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

	const fbCommunityContainer = () => {
		var elem = document.querySelector('#fb-community-container');
		if(!elem) return;

        // https://developers.facebook.com/docs/plugins/page-plugin/ - max is 600
        var width = 600;
        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw < width) width = vw - 10;
        elem.innerHTML = '<div class="fb-page" data-width="' + vw + '" data-href="https://www.facebook.com/redzuurdesem" data-hide-cover="false" data-tabs="timeline,messages" data-show-facepile="false"></div>';
	}

	const lightbox = () => {
		[...document.querySelectorAll('article img')].forEach(el => {
			if(el.parentNode.nodeName !== 'A') {
				el.parentNode.innerHTML =  `<a href="${el.src}" class="lbox">${el.outerHTML}</a>`; 
			} else {
				el.parentNode.setAttribute('class', 'lbox');				
			}
		})
		const box = new SimpleLightbox('.lbox', { /* options */ });
	};

	fbCommunityHeaderify();
	fbCommunityContainer();
	fromFixedToScrollForSafari();
	lightbox();
})()
