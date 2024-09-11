class Tactician {
	constructor() {
		this.api = "https://api.tactician.it/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
		}
	}

	async getMaps() {
		const response = await fetch(
			`${this.api}/map`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getChangeLogs() {
		const response = await fetch(
			`${this.api}/change-logs/last`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMap(mapId) {
		const response = await fetch(
			`${this.api}/map/${mapId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMapCoordinates(mapId) {
		const response = await fetch(
			`${this.api}/map/${mapId}/coordinates`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Tactician}
