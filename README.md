# Train-Scheduler-Basic-
This assignment involved the use of Firebase database to host arrival and departure data using Moment.js to provide updated train data. 

### Overview

In the creation of a train schedule application that incorporates Firebase to host arrival and departure data, retrieval and manipulation of information was accomplished with Moment.js. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
Calculations are made from the current time and zone coordinates.

- - -

### Setup

* Confirmed Firebase storage of data, GitHub for backup, and Github Pages hosting of the site.

### Submission on BCS

* The Github appication was deployed on the via the  https://Github.io link AND the link to the Github Repository was provided

### Specifications met

* This app suits the following basic spec:
  
  * When adding trains, currently anyone will be able to submit the following using a desktop browser:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * It was also coded to calculate when the next train will arrive relative to the current time zone.
  
  * Users from many different machines are able to view same train times.
  
  * Styling and theme were chosen to bring consistency and show postential, future functionality.   
  
  * Media queries were not a part of the basic spec, however future versions will be q/a'd for varios devices.

  * Functionality to allow only administrators to manipulate data exceeded the time allowed for development at this stage.


### Bonus (Extra Challenges)

* Coding to update "minutes to arrival" and "next train time" text once every minute, is still under construction. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).
   

* The `update` and `remove` buttons for each train were added, but without functionality at this juncture. Manipulation of the snapshot element, which stores references to indexed data, was located, but beyond time alotted. These highly desired features would give the user the ability to edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* Clicking on the train icon (favicon added) in the upper right hand corner, will take users to the Firebase login, which will require that they login with their Google account.  More features will be added as I digest more on Firebase authentication.

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Create a README.md

This `README.md` was created in compliance with the project spec and deployed to my repository as described. 

### Add To Your Portfolio
This project piece was added to my portfolio.

- - -

### One More Thing
Fantastic support was given from Michael Pazcuzi, Karina Mills and Derek Lofton.  Special thanks to Leah Daniels.
