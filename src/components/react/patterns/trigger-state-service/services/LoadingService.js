
import EventManager from "../helpers/event-managerV2";

const event = {
	SET_LOADING: 0
}

class LoadingService {

	constructor () {
		this.EM = new EventManager();
	}

	setLoading(fn) {
		return this.EM.on(event.SET_LOADING, fn)
	}

	unsetLoading(fn) {
		this.EM.off(event.SET_LOADING, fn)
	}

	show() {
		this.EM.trigger(event.SET_LOADING, true)
	}

	hide() {
		this.EM.trigger(event.SET_LOADING, false)
	}
	
}


export default new LoadingService();