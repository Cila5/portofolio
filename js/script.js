document.addEventListener('DOMContentLoaded', function () {
    const scrollNavLink = document.getElementById('scrollNavLink');
  
    if (scrollNavLink) {
      scrollNavLink.addEventListener('click', function (event) {
        event.preventDefault();
  
        const scrollTarget = document.getElementById('scrollTarget');
        if (scrollTarget) {
            scrollTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Scroll to the end of the target element
                inline: 'center',
            });
          scrollTarget.addEventListener('scroll', function () {
            // Assuming closePopupFunction is the global function for closing the popup
            {e.preventDefault();
            }
            if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
        });
      }
    });
  }
});