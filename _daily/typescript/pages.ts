// import {createPresentationFields} from './constants';
// import type {fieldT, presFieldsT, mapType} from './constants';



export type mapT<T, K> = {
	[Property in keyof T]: K
}


export type fieldT = {
	id: string;
	type: 'input' | 'radio' | 'checkbox' | 'select';
	required: boolean;
}


export class Field {

	protected field: fieldT;

	constructor (field: fieldT) {
		this.field = {...field};
	}

	cyGet() {
		return cy.get(`#${this.field.id}`);
	}
}



// export function createFields<Type>(fields, ClassObj: InstanceType<typeof Field>) {
export function createFields<Type>(fields, ClassObj: typeof Field) {
	return Object.keys(fields).reduce((acc, fieldName) => {
		acc[fieldName] = new ClassObj(fields[fieldName]);
		return acc;
	}, {}) as Type;
}