describe('Check some stuff', () => {
	it('Loads good website', () => {
		cy.visit('https://bookshelf.lot23.com');
	});
	it('Loads bad website', () => {
		cy.visit('https://bookshelf.lot23.com');
	});
});
