export class HomePage {
    constructor() {}

    getTitle() {
        return cy.title()
    }

    enterSearchCriteria(columnName, columnValue) {
        cy.get('.form-input-container')
            .contains(columnName)
            .parent()
            .find('input')
            .clear()
            .type(columnValue)
            .type('{enter}')
    }

    resetFilters() {
        cy.get('.form-input-container button[title="Clear Selected"]').then($button => {
            if ($button.is(':visible')) {
                cy.get('button[title="Clear Selected"]').click()
            } else {
                cy.get('#countrySelect').click().clear()
            }
        });
        cy.get('#searchInput').click().clear()
        cy.get('#startDate').click().clear()
        cy.get('#endDate').click().clear()

        cy.get('#app').then($body => {
            if ($body.find('.filter-checkboxes input[type="checkbox"]').length > 0) {
                cy.get('.filter-checkboxes input[type="checkbox"]').then($checkbox => {
                    if ($checkbox.is(':visible')) {
                        cy.get('.filter-checkboxes input[type="checkbox"]').uncheck()
                    }
                })
            }
        })    
    }

    getSearchButton() {
        return cy.get('button[type="Submit"]')
    }

    displayEventList() {
        cy.get('.event-card-container').then($result => {
            if ($result.find('a[href^="/event/"]').length > 0) {
                cy.get('.event-card-container a h4')
                    .each(($el, index, $list) => {
                        cy.get($el)
                            .invoke('text')
                            .then((eventName) => {
                                cy.log(eventName)
                            })
                    })
            } else {
                assert.isOk('No events found');
            }
        })
    }

    displayEventListbackup() {
        cy.get('.event-card-container a h4')
            .each(($el, index, $list) => {
                cy.get($el)
                    .invoke('text')
                    .then((eventName) => {
                        cy.log(eventName)
                    })
            })
    }

    clickOnEvent() {
        cy.get('.event-card-container > .event-link')
            .eq(0)
            .click()
    }

    getCheckBox(checkboxVal) {
        return cy.get('.filter-checkboxes')
            .contains(checkboxVal)
            .parent()
            .find('input[type="checkbox"]')
    }

    setSortType(sortVal) {
        let value = sortVal.toLowerCase()
        cy.selectDropdown('.filter-container select', value)
        cy.wait(2000)
    }

    setOrderType(orderVal) {
        if(orderVal.toLowerCase() == "ascending") {
            cy.checkVisibilityAndClick('.filter-container', '[data-icon^="sort-alpha-down"]')
        } else if (orderVal.toLowerCase() == "descending") {
            cy.checkVisibilityAndClick('.filter-container', '[data-icon^="sort-alpha-up"]')
        }
        cy.wait(2000)
    }

    setRecordsPerPage(pageCount) {
        cy.selectDropdown('.filter-container select', pageCount)
        cy.wait(2000)
    }

    clickOnPageIcon(pageIcon) {
        cy.get('.pagination-item button[type="button"]')
            .contains(new RegExp("^" + pageIcon + "$", "g"))
            .click()
        cy.wait(2000)
    }
}
export default HomePage;
