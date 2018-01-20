(function(){
  var leftSidebar = document.getElementById("left-sidebar");
  var sidebarBackButton = document.getElementById("sidebar-back-button");
  var navigationButton = document.getElementById("navigation-button");

  sidebarBackButton.onclick = function() {
    leftSidebar.style.left = "-270px";
  };

  navigationButton.onclick = function() {
    leftSidebar.style.left = 0;
  };
})();

