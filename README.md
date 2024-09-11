# tactician.js
Mobile-API for [Tactician](https://play.google.com/store/apps/details?id=it.tactician.twa) is the ultimate companion app for fans and competitive players of the renowned Valve game, Counter-Strike 2 (CS2)

## Example
```JavaScript
async function main() {
	const { Tactician } = require("./tactician.js")
	const tactician = new Tactician()
	const maps = await tactician.getMaps()
	console.log(maps)
}

main()
```
