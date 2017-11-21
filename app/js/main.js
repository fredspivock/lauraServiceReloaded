

 //Sets the header Space
function setHeadSpace(){

    var winHeight = $(window).height();

    winHeight = .95 * winHeight;

    if(winHeight < 300) {

        winHeight = 300;
    }

    if( $(window).width() < 900)    {

            winHeight = winHeight - 50;
    }
    

    $("#homepageHead").css("height", winHeight + "px" );

}

//check for Location hash and underline link
function underLineCurrent()
{
    var currentHash = location.hash.substring(1);

    //cuts the slash from the returned string
    currentHash = currentHash.slice(1);

    currentHash = currentHash.split('/');
    currentHash = currentHash[0];

    //underline remover
    underLineRemover();

    //adds link to the name to match the id of the 
    currentHash = currentHash + "Link";
    $('#' + currentHash).addClass("active");

}

//cycles through listOfLinks amd removes the underline
function underLineRemover()
{
    //list of links
    var listOfLinks = ['projects', 'about', 'services'];

    //go through list and remove css
    for(var i = 0; i < listOfLinks.length; i++)
    {
        listOfLinks[i] = listOfLinks[i] + 'Link';
        $('#' + listOfLinks[i]).removeClass("active");
    }
}


$(document).ready(function(){	

	//run underline on page load
	underLineCurrent();

    //set header space on load
    setHeadSpace();

	//switches underlined link on url change
	$(window).on('hashchange', function(e){
		underLineCurrent();
	});

    //When resizing the window
    $(window).resize( function(){
        setHeadSpace();
    });


    // FROM http://stackoverflow.com/questions/18035910/how-to-implement-auto-hide-navigation

    var wind = this, // Gets window object
        last = 0,    // The last read top value
        delay = 100, // The delay for the setInterval
        threshold = 30,    // The max scroll distance before showing/hiding the nav
        minWidth = 900,    // The minimum widht of the window before it becomes static
        isUp = false;

    // $(function () {
    //   var previousScroll = 0;
    //   var threshold = 20;
    //   $(window).scroll(function(){
    //     var currentScroll = $(this).scrollTop();
    //     var diff = Math.abs(previousScroll - currentScroll);
    //     if (diff > threshold) {
    //       if (currentScroll < previousScroll) {
    //         // Scroll up detected
    //       } else {
    //         // Scroll down detected
    //       }
    //     }
    //     previousScroll = currentScroll;
    //   });
    // });


    // I always set a variable to my setIntervals in case I want to stop them later on
    var navMovement = setInterval(function() {
        var $nav = $('#header-wrap'), // Gets nav object
        $window = $(wind); // Makes the window object a jQuery object


        if($window.width() > minWidth) {

            if(($window.scrollTop() - last < -threshold) && isUp === true) { // Happens if the difference in scroll is below the negative threshold
                $nav.css({ // Put the nav at the top of the window
                    top: 0
                });
                isUp = false;
            }
            else if(($window.scrollTop() - last > threshold) && isUp === false) { // Happend if the difference in scroll is above the threshold
                $nav.css({ // Hides the navigation
                    top: -50 //$nav.height() 
                });
                isUp = true;
            }
            last = $window.scrollTop(); // Updates the previous scroll value
            //When below the threshold, display the scrolled menu
            if($window.scrollTop() > threshold) {

                $nav.addClass("scrolled");
                $('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');


            }
        
            else {

                $nav.removeClass("scrolled");
                if($nav.hasClass("clear")) {

                    $('#icon').attr('src', 'img/icon/LauraServiceIconWhite.svg');
                }
            }

        }
        else {

            $nav.css({
                top: 0

            });
            $nav.addClass("scrolled");
            $('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');

        }

    }, delay); // Runs every `delay` amount

});

