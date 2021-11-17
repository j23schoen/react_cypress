it('contains new game button', () => {
    cy.visit('/')
    cy.contains('new game')
})

it('clicks a square, makes it an X', () => {
    cy.visit('/')
    clickSquare(0, 0)
    cy.get('.board-row:first').get('.square:first').contains('X')
})

it('second clicked square is an O', () => {
    cy.visit('/')
    clickSquare(0, 0)
    clickSquare(1, 0)
    getSquare(1, 0).contains('O')
})

it('X is the winner', () => {
    cy.visit('/')
    clickSquare(0, 0)
    clickSquare(1, 0)
    clickSquare(0, 1)
    clickSquare(1, 2)
    clickSquare(0, 2)
    cy.contains('Winner: X')
})

it('clicking new game empties the game', () => {
    cy.visit('/')
    clickSquare(0, 0)
    clickSquare(1, 0)
    clickSquare(0, 1)
    cy.get('button').contains('new game').click()
    getSquare(0, 0).should('not.have.text', 'X')
})

it('shows the location of the move', () => {
    cy.visit('/')
    clickSquare(0, 0)
    cy.get('button').contains('Go to move #1 (1, 1)')
})

function clickSquare(column, row) {
    getSquare(column, row).click()
}

function getSquare(column, row) {
    return cy.get('.board-row').eq(row).within( () => {
        return cy.get('.square').eq(column)
    })
}
