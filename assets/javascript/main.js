/*
<script src="require.js" data-main="main"></script>
*/

/* global require */
require.config({
    paths: {
        'moment': 'scripts/moment'
    }
});

require(['moment'], function (moment) {
    alert(moment().toString());
});