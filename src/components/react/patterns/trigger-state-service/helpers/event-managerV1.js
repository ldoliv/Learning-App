class EventManager {

	constructor (eventMap = new Map()) {
		this.eventMap = eventMap;
		this.on = this.on.bind(this);
		this.off = this.off.bind(this);
		this.trigger = this.trigger.bind(this);
	}

	on(event, handler) {

		if (this.eventMap.has(event)) {

			const handlers = this.eventMap.get(event);
			const foundHandler = handlers.find(handl => handl === handler);

			if (foundHandler) {
				throw new Error(`Handler passed is already in the array of handlers for the event ${event}, you are probably not unsetting the handler on component unmount`);
			} else {
				this.eventMap.set(event, this.eventMap.get(event).concat([handler]));
			}
		} else {
			this.eventMap.set(event, [handler]);
		}

		return {
			off: () => {
				this.off(event, handler)
			}
		}
	}

	off(event, handler) {
		const handlers = this.eventMap.get(event);

		if (!handler || handlers.length === 1) {
			this.eventMap.delete(event)

		} else {
			const newHandlers = handlers.filter(handl => handl !== handler);
			this.eventMap.set(event, newHandlers);
		}
	}

	trigger(event, data) {
		if (this.eventMap.has(event)) {
			const handlers = this.eventMap.get(event);
			if (handlers) {
				handlers.forEach(handler => handler(data))
			}
		}
	}

	list() {
		console.log(this.eventMap)
		this.eventMap.forEach((value, key) => {
			console.log('event: %o, handlers: %o', key, value)
		})
	}
}

export default EventManager;