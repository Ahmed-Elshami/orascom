function showSidebar(contentId) {
  var sidebar = document.getElementById("sidebar");

  // Hide all content first
  var contents = document.querySelectorAll('.sidebar-content');
  contents.forEach(function(content) {
    content.classList.remove('active');
  });

  // Show the selected content
  var contentToShow = document.getElementById(contentId);
  contentToShow.classList.add('active');

  // Show the sidebar with animation
  sidebar.style.top = "17.5%";

  // Remove active class from all links
  var links = document.querySelectorAll('.Links');
  links.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add active class to the clicked link
  var clickedLink = document.querySelector(`a[onclick="showSidebar('${contentId}')"]`);
  clickedLink.classList.add('active');
}

function hideSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.top = "-100%";
  
  // Optionally hide all contents when the sidebar is closed
  var contents = document.querySelectorAll('. sidebar-content-js');
  contents.forEach(function(content) {
    content.classList.remove('active');
  });
  
  // Remove active class from all links when closing
  var links = document.querySelectorAll('.Links');
  links.forEach(function(link) {
    link.classList.remove('active');
  });
}
// Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById("sidebar");
  var isClickInsideSidebar = sidebar.contains(event.target);
  var isClickOnLink = event.target.classList.contains('Links');

  if (!isClickInsideSidebar && !isClickOnLink) {
    hideSidebar();
  }
});




