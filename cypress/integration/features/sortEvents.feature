Feature: Event Mania - Sort the list of events by Date, Name or Relevance in an ascending or descending order

Scenario: List the events of a country and sort by Name ascending
Given user launches the url
When enters search criteria
|Country             |
|United Arab Emirates|
And sorts by "Name" in "Ascending" order
Then displays event list

Scenario: List the events of a country and sort by Relevance ascending
Given user launches the url
When enters search criteria
|Country             |
|United Arab Emirates|
And sorts by "Relevance" in "Ascending" order
Then displays event list

Scenario: List the events of a country and sort by Date descending
Given user launches the url
When enters search criteria
|Country             |
|United Arab Emirates|
And sorts by "Date" in "Descending" order
Then displays event list
