class EventManager {

	constructor (eventMap = new Map()) {
		this.eventMap = eventMap;
		this.on = this.on.bind(this);
		this.off = this.off.bind(this);
		this.trigger = this.trigger.bind(this);
	}

	on(event, handler) {
		if (this.eventMap.has(event)) {
			throw new Error(`Event ${event} already exists, the event can only be set once, you are probably not unsetting the event on component unmount`);
		} else {
			this.eventMap.set(event, handler);
		}

		// console.log(this.list());

		return {
			off: () => {
				this.eventMap.delete(event);
			}
		}
	}

	off(event = '') {
		const handler = this.eventMap.get(event);

		if (handler !== undefined) {
			this.eventMap.delete(event)
		}
	}

	trigger(event, data) {
		if (this.eventMap.has(event)) {
			const handler = this.eventMap.get(event);
			if (handler) {
				handler(data)
			}
		}
	}

	list() {
		console.log(this.eventMap)
		this.eventMap.forEach((value, key) => {
			console.log('event: %o, handler: %o', key, value)
		})
	}
}

export default EventManager;