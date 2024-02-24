document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll('.container .sidebar nav .nav-list li .nav-link');

  navButtons.forEach(navLinkEL => {
    navLinkEL.addEventListener('click', function() {
      console.log('Link clicked:', this.getAttribute('href'));
      // Remove active class from all links
      navButtons.forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      this.classList.add('active');
      // Store the href of the clicked link in localStorage
      localStorage.setItem('activeNavLink', this.getAttribute('href'));
    });
  });
});
