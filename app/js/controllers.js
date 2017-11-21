/*contollers for Laura Sercice*/

var lauraServiceControllers = angular.module('lauraServiceControllers', ['ngSanitize']);

//Home page Controller
lauraServiceControllers.controller('HomepageCtrl', ['$scope', '$http', function($scope, $http){

    //makes opaue
    var  opaqueNav = function(){

      $('#header-wrap').removeClass('clear');
      $('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');

    }

    // var setHeaderSpaceHome = function () {
    //   var winHeight = $(window).height();
    //   winHeight = .95 * winHeight;
    //   $("#homepageHead").css("height", winHeight + "px" );
    // }

    opaqueNav();

    setTimeout(function(){
      setHeadSpace();
    }, 500);

    $http.get('projects/homepageProjects.json').success(function(data){

      $scope.projects = data;
    });

    //set view to top after load
    window.scrollTo(0, 0);

  }]);

lauraServiceControllers.controller('ProjectCtrl', ['$scope', '$http', '$routeParams', '$timeout', 
  function($scope, $http, $routeParams, $timeout){


    //clears a navbar

    var seeMoreOpen =  false;

    var  clearNav = function(){

      $('#header-wrap').addClass('clear');
      $('#icon').attr('src', 'img/icon/LauraServiceIconWhite.svg');
    }

    clearNav();


    //Getting a individual
    $http.get('projects/' + $routeParams.id +'.json').success(function(data){
        $scope.projectSingle = data;
        $scope.description = data.description;
    });

    
    //function scrolls to page top
    $scope.toPageTop = function() {

      $("html, body").animate({

        scrollTop: 0,

      }, "slow");
    }


    //function See more Button

    $scope.seeMore = function() {

      if( seeMoreOpen === false){
        $('.hiddenSideBar').css('display', 'block');
        $('.seeMoreLink').html("See Less Awards");
        seeMoreOpen = true;
      }
      else if(seeMoreOpen === true) {

        $('.hiddenSideBar').css('display', 'none');
        $('.seeMoreLink').html("See More Awards");
        seeMoreOpen = false;
      }
        
    }





    //For the More Work, gets main list
    $http.get('projects/homepageProjects.json').success(function(data){
      var projectIndex = 0;
        angular.forEach(data, function(project, index) {
            if($routeParams.id === project.id) {
              projectIndex = index;
            }
        });

        var projects = data;
        var projectEnd = projects.slice(projectIndex, projects.length);
        projects = projects.slice(0, projectIndex);
        $scope.projects = projectEnd.concat(projects);
    });


    //set view to top after load
    window.scrollTo(0, 0);

    //makes sure the nav bar is clear
    $timeout(function() {

      clearNav();
      var pageTitle = $('#title').text();
      var currentURL = encodeURIComponent(location.href);
      var emailURL = "mailto:laura.service1@gmail.com?subject=From%20lauraservice.ca";
      var facebookURL = "http://www.facebook.com/sharer.php?u=" + currentURL;
      var twitterURL = "https://twitter.com/share?text=" + pageTitle + "&amp;url=" + currentURL;
      $('.social-share-link.email').attr('href', emailURL);
      $('.social-share-link.facebook').attr('href', facebookURL);
      $('.social-share-link.twitter').attr('href', twitterURL);

    }, 300);

    // shareToggle();
    $('.social-share-toggle').click(function(){
      $('.social-share-list').toggleClass('show-social-share');
    });

}]);

//object containing helpers
var myHelper = myHelper || {};

myHelper.helpers = {

  // underline: function(){

  //   var currentHash = location.hash.substring(1);

  //   //cuts the slash from the returned string
  //   currentHash = currentHash.slice(1);

  //   currentHash = currentHash.split('/');
  //   currentHash = currentHash[0];

  //   //underline remover
  //   //list of links
  //   var listOfLinks = ['projects', 'about', 'services'];

  //   //go through list and remove css
  //   for(var i = 0; i < listOfLinks.length; i++)
  //   {
  //     listOfLinks[i] = listOfLinks[i] + 'Link';
  //     // $('#' + listOfLinks[i]).css("border-bottom", "none");
  //     $('#' + listOfLinks[i]).removeClass('active');
  //   }

  //   //adds link to the name to match the id of the 
  //   currentHash = currentHash + "Link";
  //   $('#' + currentHash).addClass("active");
  // },

  };


//};

lauraServiceControllers.controller('HelperCtrl', ['$scope', 
  function($scope){

      $scope.helpers = myHelper.helpers;

  }]);


lauraServiceControllers.controller('AboutCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$timeout',
  function($scope, $http, $location, $anchorScroll, $timeout){

    //makes opaue
    var  opaqueNav = function(){

      $('#header-wrap').removeClass('clear');
      $('#icon').attr('src', 'img/icon/LauraServiceIconBlack.svg');

    }

    // var setHeaderSpaceAbout = function () {
    //   var winHeight = $(window).height();
    //   winHeight = .95 * winHeight;
    //   $("#homepageHead").css("height", winHeight + "px" );
    // }

    opaqueNav();

    setTimeout(function(){
      setHeadSpace();
    }, 500);

    $http.get('projects/about.json').success(function(data){

      $scope.about = data;

    });

    $http.get('projects/homepageProjects.json').success(function(data){

      $scope.projects = data;
    });


    //set view to top after load
    window.scrollTo(0, 0);


    
    $timeout(function() {

      //check if the link was pressed or url is set to "services"
      if( $('#servicesLink').hasClass('active') && !$('#servicesLink').hasClass('clicked') ){
      
        $anchorScroll("servicesSection");
        }

      }, 300);


}]);
