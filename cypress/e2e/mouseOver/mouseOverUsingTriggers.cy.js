describe('testSuite: Testing MouseOver', ()=>{



    it('testing hover/mouseover on amazon.in using trigger', ()=>{
        cy.visit('https://www.amazon.in/')
        cy.contains('Hello, sign in').trigger('mouseover')
        cy.contains('Start here.').click()

    })

    it('testing hover/mouseover on amazon.in using trigger', ()=>{
        cy.visit('https://www.amazon.in/')
        cy.get(".right-pane-results-container").should('be.hidden').invoke('show')
        cy.wait(7000)

    })

    it.only('testing hover/mouseover on https://codenboxautomationlab.com/practice/', ()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        cy.url().should('include','top')
    })
})