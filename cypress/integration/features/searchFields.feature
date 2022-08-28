Feature: Event Mania - Enter a combination of Search criteria fields and display the list of events

Scenario: Enter a Country and display the list of events
Given user launches the url
When enters search criteria
|Country             |
|United Arab Emirates|
Then displays event list

Scenario: Enter a Country and display an empty event list
Given user launches the url
When enters search criteria
|Country  |
|Thailand |
Then displays event list

Scenario: Enter a Keyword and display the list of events
Given user launches the url
When enters search criteria
|Keyword  |
|Westlife |
Then displays event list

Scenario: Enter a Start Date and display the list of events
Given user launches the url
When enters search criteria
|Start Date |
|01/01/2077 |
Then displays event list

Scenario: Enter a End Date and display the list of events
Given user launches the url
When enters search criteria
|End Date   |
|09/13/2018 |
Then displays event list

Scenario: Enter a Start Date and End Date and display the list of events
Given user launches the url
When enters search criteria
|Start Date |End Date   |
|09/10/2018 |10/13/2019 |
Then displays event list

Scenario: Enter a combination of Search criteria fields and display the list of events
Given user launches the url
When enters search criteria
|Country                  |Keyword    |Start Date |End Date   |
|United States Of America |Basketball |09/30/2022 |10/03/2022 |
Then displays event list