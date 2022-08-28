Feature: Event Mania - E2E scenario feature file 

Scenario: List the events by keyword and set Records per page as 100
Given user launches the url
When enters search criteria
|Country                  |Keyword  |Start Date |End Date   |
|United States Of America |Baseball |09/30/2022 |10/03/2022 |
And clicks on "TBA" checkbox
And clicks on "TBD" checkbox
And sorts by "Name" in "Ascending" order
And sets records per page as "10"
And clicks on page icon " Last "
And clicks on page icon "4"
Then displays event list
When clicks on event
Then verifies event details
|EventName                              |Venue                |Date            |Segment        |Genre          |Price            |Image1          |Image2         |
|New York Yankees vs. Baltimore Orioles |Venue: Yankee Stadium|Date: 2022-10-02|Segment: Sports|Genre: Baseball|Price: $15 - $510|RETINA_LANDSCAPE|RECOMENDATION  |

