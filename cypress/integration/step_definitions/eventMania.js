import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";
import EventDetailsPage from "../pages/eventDetailsPage";

const home = new HomePage();
const event = new EventDetailsPage();

// user launches the url and verifies the title
Given('user launches the url', () => {
    home.getTitle()
        .should('eq', 'event-mania')
});

// user enters the search criteria on home page and clicks on Search button
When('enters search criteria', datatable => {
    home.resetFilters()
    var columnName, columnValue;
    datatable.hashes().forEach(row => {
        for (columnName in row) {
            columnValue = row[columnName]
            cy.log(columnName, columnValue)
            home.enterSearchCriteria(columnName, columnValue)
        }
        home.getSearchButton().click()
    })
});

// user displays the list of events on home page
Then('displays event list',() => {
    cy.wait(2000)
    home.displayEventList()
})

// user clicks on event on home page
When('clicks on event', () => {
    home.clickOnEvent()
})

// user verifies event details
Then('verifies event details', datatable => {
    var columnName, columnValue;
    datatable.hashes().forEach(row => {
        for (columnName in row) {
            columnValue = row[columnName]
            cy.log(columnName, columnValue)
            event.verifyEventDetails(columnName, columnValue)
        }
    })
});

// user clicks on checkboxes
And('clicks on {string} checkbox', (checkboxVal) =>{
    home.getCheckBox(checkboxVal).check()
})

// user sorts the list of event
And('sorts by {string} in {string} order', (sortVal, orderVal) => {
    home.setSortType(sortVal)
    home.setOrderType(orderVal)
})

// user sets records per page
And('sets records per page as {string}', (pageCount) =>{
    home.setRecordsPerPage(pageCount)
})

// user clicks on desired page
And('clicks on page icon {string}', (pageIcon) => {
    home.clickOnPageIcon(pageIcon)
})