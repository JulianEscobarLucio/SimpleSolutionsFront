// var spinner = null;
     $(document).ready(function () {
         debugger;
         var spinner = null;
        //  $(document).ajaxStart(mySpinner(true)).ajaxStop(mySpinner(false));
     });
 
    function mySpinner(isStart) {
        var spinner = null;
        var opts = {
            lines: 13, // The number of lines to draw
            length: 3, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#333333', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 29, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent
            left: '50%' // Left position relative to parent
        };
 
        if (isStart && !spinner) {
            spinner = new Spinner(opts).spin();
            $('#waitSpinner').html(spinner.el);            
            $('#overlay').show(); //overlay  
        }
        else if (spinner) {
            setTimeout(function () {
                spinner.stop();
                spinner = null;
                $('#waitSpinner').remove();
                $('#overlay').remove(); //overlay  
            }, 1000);  //timeout – just to show the spinner for a while
        }
    };