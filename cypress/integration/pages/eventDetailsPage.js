export class EventDetailsPage {
    constructor() { }

    verifyEventDetails(columnName, columnValue) {
        if (columnName.toLowerCase() == "image1") {
            cy.get('.image-card > img')
                .eq(0)
                .should('have.attr', 'src')
                .should('include', columnValue)
        }
        else if (columnName.toLowerCase() == "image2") {
            cy.get('.image-card > img')
                .eq(1)
                .should('have.attr', 'src')
                .should('include', columnValue)
        }
        else if (columnName.toLowerCase() == "eventname") {
            cy.get('.info-card > .event-header')
                .invoke('text')
                .should('equal', columnValue)
        } else {
            cy.get('.info-card > .info-tags')
                .contains(columnName)
                .parent()
                .invoke('text')
                .should('equal', columnValue)
        }
    }
}
export default EventDetailsPage;
