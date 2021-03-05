
const { lunr } = require('jam-my-stack');
const fsp = require('fs').promises;


(async function() {
	// 1. build Lunr index
	console.log("1. Building lunr search index...")
	const index = await lunr.buildIndex([
		`${__dirname}/content/post`,
		`${__dirname}/content/fb`,
		`${__dirname}/content/leren`])
	await fsp.writeFile(`${__dirname}/static/js/redzuurdesem-post.json`, JSON.stringify(index), 'utf-8')

	console.log("-- all done!")
})()
