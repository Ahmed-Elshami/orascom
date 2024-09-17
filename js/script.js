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
  sidebar.style.top = "17%";

  if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
    sidebar.style.top = "20%";
}
  

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






// Set top based on screen size
// if (window.matchMedia("(max-width: 768px)").matches) {
//   // Screen size is 600px or less
//   sidebar.style.top = "20%";
//   sidebar.style.height="50%"
// } else if (window.matchMedia("(max-width: 1024px)").matches) {
//   // Screen size is between 601px and 1024px
//   sidebar.style.top = "20%";
//   // sidebar.style.backgroundColor= "black"

// } else if (window.matchMedia("(min-width: 1024px) and (max-width: 1444px)").matches) {
//   // Screen size is between 601px and 1024px
//   sidebar.style.top = "17.5%";
// }
//   else if (window.matchMedia("(min-width: 1445px) and (max-width: 2560px)").matches) {
//   // Screen size is between 601px and 1024px
//   sidebar.style.top = "11.5%";

// }
// else {
//   // Screen size is larger than 1024px
// }