Feature: Event Mania - Paginate the list of events

Scenario: List the events by keyword and set Records per page as 10
Given user launches the url
When enters search criteria
|Keyword  |
|Baseball |
And sets records per page as "10"
Then displays event list

Scenario: List the events by keyword and set Records per page as 20
Given user launches the url
When enters search criteria
|Keyword    |
|Basketball |
And sets records per page as "20"
Then displays event list

Scenario: List the events by keyword and set Records per page as 50
Given user launches the url
When enters search criteria
|Keyword  |
|Mariners |
And sets records per page as "50"
Then displays event list

Scenario: List the events by keyword and set Records per page as 100
Given user launches the url
When enters search criteria
|Keyword  |
|Games |
And sets records per page as "100"
Then displays event list

Scenario: List the events by keyword and set Records per page as 200
Given user launches the url
When enters search criteria
|Keyword  |
|Phoenix |
And sets records per page as "200"
Then displays event list

Scenario: List the events of a country on the Last page
Given user launches the url
When enters search criteria
|Country |
|Belgium |
And sets records per page as "10"
And clicks on page icon " Last "
Then displays event list

Scenario: List the events of a country on the 3rd page
Given user launches the url
When enters search criteria
|Country                 |
|United States Of America|
And sets records per page as "10"
And clicks on page icon " First "
And clicks on page icon "3"
Then displays event list

Scenario: List the events of a country on the 98th page
Given user launches the url
When enters search criteria
|Country |
|Belgium |
And sets records per page as "10"
And clicks on page icon " Last "
And clicks on page icon "98"
Then displays event list
