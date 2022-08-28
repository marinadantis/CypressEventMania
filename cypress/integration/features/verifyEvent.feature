Feature: Event Mania - Display the list of filtered events and verify the event information 

Scenario: Verify event details
Given user launches the url
And enters search criteria
|Country             |Keyword |
|United Arab Emirates|Westlife|
And displays event list
When clicks on event
Then verifies event details
|EventName                  |Venue                       |Date            |Segment                |Genre         |Price             |Image1          |Image2  |
|Westlife – Wild Dreams Tour|Venue: Etihad Arena, Yas Bay|Date: 2022-09-29|Segment: Arts & Theatre|Genre: Theatre|Price: $219 - $604|RETINA_PORTRAIT |CUSTOM  |