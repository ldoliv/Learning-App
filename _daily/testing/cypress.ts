// ====================================
// To install and run
// ====================================

// npm i --save-dev cypress
// npx cypress open




/*
	Commands to check:

	get
	invoke
	should
	then
*/




cy.get('#form-validation').then(
	($form) => expect($form[0].checkValidity()).to.be.false
)


// both input elements are invalid at the start
cy.get('#form-validation :invalid').should('have.length', 2)




cy.get('.assertions-p').find('p')
	.should(($p) => {

		// return an array of texts from all of the p's
		let texts = $p.map((i, el) => // https://on.cypress.io/$
			Cypress.$(el).text())

		// jquery map returns jquery object
		// and .get() convert this to simple array
		texts = texts.get()

		// array should have length of 3
		expect(texts).to.have.length(3)

		// use second argument to expect(...) to provide clear
		// message with each assertion
		expect(texts, 'has expected text in each paragraph').to.deep.eq([
			'Some text from first p',
			'More text from second p',
			'And even more text from third p',
		])
	})



cy.get('button').then(($button) => {
	// $button is a wrapped jQuery element
	if ($button.someMethod() === 'something') {
		// wrap this element so we can
		// use cypress commands on it
		cy.wrap($button).click()
	} else {
		// do something else
	}
})


// https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Closures

cy.get('button').then(($btn) => {

	// store the button's text
	const txt = $btn.text()

	// submit a form
	cy.get('form').submit()

	// compare the two buttons' text
	// and make sure they are different
	cy.get('button').should(($btn2) => {
		expect($btn2.text()).not.to.eq(txt)
	})
})


// cypress test code
cy.get('[data-testid="num"]').then(($span) => {
	// capture what num is right now
	const num1 = parseFloat($span.text())

	cy.get('button')
		.click()
		.then(() => {
			// now capture it again
			const num2 = parseFloat($span.text())

			// make sure it's what we expected
			expect(num2).to.eq(num1 + 1)
		})
})


// share context

beforeEach(() => {
	// alias the $btn.text() as 'text'
	cy.get('button').invoke('text').as('text')
})

it('has access to text', function () {
	this.text // is now available
})




/*


From Cypress -> original
	.then($el => {})		<- a wrapped jQuery element
	.should($el => {})	<- a wrapped jQuery element


From original -> Cypress
	cy.wrap($button).click()


Call a method that exists on the underlying object
	cy.get('button').invoke('text').as('text')

	Breakdown:
	cy.get('button')			<- returns a Cypress object
		.invoke('text')			<- calls $el.text() jQuery method
		.as('text')					<- creates an alias to be used with this.text or cy.get('@text')



Behavior Driven Development (BDD) is a software development process - https://cucumber.io/docs/bdd/
	- expect() method			<- takes a wrapped jQuery element
	- should() method			<- receives a wrapped jQuery element

	Make assertion with expect
		expect()		

Test-driven development (TDD)
	- assert() method


BDD is designed to test an application’s behavior from the end user’s standpoint, whereas TDD is focused on testing smaller pieces of functionality in isolation.



Convert to jQuery object
	Cypress.$('p')




Aliases
---------------------------------------

https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Sharing-Context


.as('users')			<- out

this.users				<- in, cannot use arrow function
cy.get('@users')		<- equivalent, avoid using this. allows to use arrow functions


If you alias DOM elements that have been removed from the DOM by the time you call cy.get() with the alias,
Cypress automatically re-queries the DOM to find these elements again.


cy.get('[data-testid="todos"] li').first().as('firstTodo')
cy.get('@firstTodo').find('.edit').click()


*/