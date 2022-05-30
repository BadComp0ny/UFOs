# UFOs
## Overview of the UFO Project.
The purpose of this project is to utilize newly learned skills within HTML and JavaScript to build and improve a website which allows for the collection and review of UFO sightings. 

## Results
Explanation of the website and how to utilize it.
## Initial landing of the website
![Image1](/static/images/landing.png)
The webpage is designed to automatically adjust and scale as the screen widths change.  The image above is shown with a monitor in a vertical orientation and all data has been scaled appropriately while the image below is a monitor in a horizontal orientaiton.
![Image6](/static/images/landing_1.png)

## Unfiltered tables and filter criteria.
![Image2](/static/images/Search_1.png)

## The information as it appears after filter criteria has been added.
![Image3](/static/images/Search_5.png)
As the end user enters criteria and tabs out of the filter field the data table to the right will be filtered down to only those rows with matching criteria in the identified column.  It should be noted that the filter criteria must match exactly what is listed in the field which is being filtered.  If a user were
to enter US vs the lower case iteration of US there would be no data returned as identified below.
![Image4](/static/images/Search_4.png)

## Utilization of multiple filters.
![Image5](/static/images/Search_2.png)
As you can see the filter fields are compounding and can allow an end user to quickly get to their desired results.

## Summary

## Drawback
In review the first and most immediate drawback I found was that there is no option to quickly cleare all filters.  The user must manualy clear each filter individually in order to start a new search.

## Recommendations
1. The first recommendation is to build a clear filter button into the index.html and then add code within app.js.  This will reduce the work by the user and improve the overall experience.

2. Improve the filter characteristics to allow for most like filtering.  Currently all filtering must exactly match the input (i.e. a filter search on sightings in the city of Fresno must be input as "fresno" instead of "Fresno").
