Feature: Event Mania - Filter the events by TBA or TBD and display the list of events

Scenario: List the events by keyword and filter the events by TBA
Given user launches the url
When enters search criteria
|Keyword                                                 |
|New York Yankees v. Chicago White Sox * Premium Seating |
And clicks on "TBA" checkbox
Then displays event list

Scenario: List the events by keyword and filter the events by TBD
Given user launches the url
When enters search criteria
|Keyword                                                 |
|New York Yankees v. Chicago White Sox * Premium Seating |
And clicks on "TBD" checkbox
Then displays event list