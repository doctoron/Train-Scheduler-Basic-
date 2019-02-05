let trainLogo = 'https://media.giphy.com/media/xT8qB1LRsFUobuQThC/giphy.gif';
let apiKey = '&api_key=dc6zaTOxFJmzC&limit=10';

// ES6 Template String to display logo
`
$(img src=${trainLogo}).appendTo('#train-logo');
`

// Get the Sidebar
let mySidebar = document.getElementById('mySidebar');

// Get the DIV with overlay effect
let overlayBg = document.getElementById('myOverlay');

// Toggle between showing and hiding the sidebar, and add overlay effect
let w3_open = () => {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = 'block';
    }
}

// Close the sidebar with the close button
let w3_close = () => {
    mySidebar.style.display = 'none';
    overlayBg.style.display = 'none';
}

// Initialize Firebase
let config = {
    apiKey: 'AIzaSyC0Y-GrPY5GiAOP2IQTiFNhVldqqqrtkpc',
    authDomain: 'train-scheduler-9a3f9.firebaseapp.com',
    databaseURL: 'https://train-scheduler-9a3f9.firebaseio.com',
    projectId: 'train-scheduler-9a3f9',
    storageBucket: 'train-scheduler-9a3f9.appspot.com',
    messagingSenderId: '431749954222'
};
firebase.initializeApp(config);

// Set constant for Firebase database 
const database = firebase.database();

// jQuery on click will grab ID and execute
$('#submit').on('click', function (event) {
    event.preventDefault();

    // Grab variable from the form
    let Name = $('#tName').val().trim();
    let Destination = $('#tDestination').val().trim();
    let FirstTrain = $('#tTime').val();
    let Frequency = $('#tFrequency').val();


    // Package entire form and send to database as an object
    let newTrain = {
        name: Name,
        destination: Destination,
        firsttrain: FirstTrain,
        frequency: Frequency

    }
    // Push object to Firebase (which will convert data object into an array of objects in table)
    database.ref().push(newTrain);
    // console.log(database);

    // Clear the form fields for new input
    $('#tName').val('');
    $('#tDestination').val('');
    $('#tTime').val('');
    $('#tFrequency').val('');

    // Update HTML with new added record 
    database.ref().on('child_added', function (childSnapshot) {
        console.log(childSnapshot.val());

        let newTrain = childSnapshot.val().name;
        let newLocation = childSnapshot.val().destination;
        let newFirstTrain = childSnapshot.val().firsttrain;
        let newFrequency = childSnapshot.val().frequency;

        // Use moment.js to calculate conversions, time differences and train schedules
        let currentTime = moment();
        console.log(currentTime);

        let startTimeConverted = moment(newFirstTrain, 'hh:mm').subtract(1, 'years');
        console.log(startTimeConverted);

        let timeDiff = moment().diff(moment(startTimeConverted), 'minutes');
        console.log(timeDiff)

        let tMinusTrain = timeDiff % newFrequency;
        console.log(tMinusTrain);

        let tMinutesTillTrain = newFrequency - tMinusTrain;
        console.log(tMinutesTillTrain);

        let tNextTrain = moment().add(tMinutesTillTrain, 'minutes');
        console.log(tNextTrain);

        let allAboard = moment(tNextTrain).format('HH:mm');
        console.log(allAboard);

        // Update train departure data
        // let upDateAllAboard = () => {
        //     $('train-data').html(template);
        // }

        // let whistle = () => {
        //     setInterval(upDateAllAboard, 60 * 1000);
        // };

        // All Aboard!!
        // whistle();

        // Retrieve new posts as they are added to our database
        ref.on("child_added", function (snapshot, prevChildKey) {
            var newPost = snapshot.val();
            console.log("Author: " + newPost.author);
            console.log("Title: " + newPost.title);
            console.log("Previous Post ID: " + prevChildKey);
        });
        // ES6 Template String to display updated train data in DOM table id #train-data
        let template = `
        <tr>
            <td>${newTrain}</td>
            <td>${newLocation}</td>
            <td>${newFirstTrain}</td>
            <td>${newFrequency}</td>
            <td>${tMinutesTillTrain} minutes</td>
        </tr>
    `
        $("#train-data").append(template);


        // console.log(newTrain, newLocation, newFirstTrain, newFrequency, tMinutesTillTrain);

        // Screen out empty sets from display
        $(newTrain, newLocation, newFirstTrain, newFrequency, tMinutesTillTrain).val('');
        return false;


    })
    let errorObject = () => {
        console.log(`Errors handled: ${errorObject.code}`);
    }

});