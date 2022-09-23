
import {Field, createFields} from './pages';
import type {mapT, fieldT} from './pages';




type fieldsT = typeof pageFields;
type instT = InstanceType<typeof PageField>;
type instFieldsT = mapT<fieldsT, instT>;



export function getPageFields() {
	return createFields<instFieldsT>(pageFields, PageField);
}

// -----------------------------------------------------------------


const pageFields = {
	name: {
		id: 'presentationName',
		type: 'input',
		required: true
	},
};


class PageField extends Field {

	constructor (field: fieldT) {
		super(field);
	}

	cyGetErr() {
		if (this.field.type === 'input') {
			return cy.get(`[for="${this.field.id}"] > p`);
		}
		return null;
	}
}



