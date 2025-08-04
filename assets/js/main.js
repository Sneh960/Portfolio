/**
* Template Name: iPortfolio - v2.0.2
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Theme Toggle (Navbar Only)
  const themeToggleMobile = document.querySelector('.theme-toggle-mobile');
  const themeIconMobile = themeToggleMobile?.querySelector('i');
  
  // Function to update icon and text
  function updateThemeIcon(isDark) {
    if (themeIconMobile) {
      const mobileText = themeToggleMobile.querySelector('span');
      if (isDark) {
        themeIconMobile.classList.replace('bx-moon', 'bx-sun');
        if (mobileText) mobileText.textContent = 'Light Mode';
      } else {
        themeIconMobile.classList.replace('bx-sun', 'bx-moon');
        if (mobileText) mobileText.textContent = 'Dark Mode';
      }
    }
  }
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeIcon(true);
  }
  
  // Function to toggle theme
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    updateThemeIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  // Toggle theme on navbar click
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', function(e) {
      e.preventDefault();
      toggleTheme();
      
      // Close mobile menu after theme toggle (only on mobile screens)
      if (window.innerWidth < 1200 && document.body.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('mobile-nav-active');
        const mobileToggle = document.querySelector('.mobile-nav-toggle i');
        if (mobileToggle) {
          mobileToggle.classList.replace('icofont-close', 'icofont-navigation-menu');
        }
      }
    });
  }
  
  // Add micro-animations to interactive elements
  const addHoverAnimation = () => {
    const interactiveElements = document.querySelectorAll('a, button, .card, .nav-menu a');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease';
        
        if (this.classList.contains('card')) {
          this.style.transform = 'translateY(-5px)';
        } else if (this.tagName === 'A' || this.tagName === 'BUTTON') {
          if (!this.closest('.social-links') && !this.closest('.nav-menu')) {
            this.style.transform = 'translateY(-2px)';
          }
        }
      });
      
      element.addEventListener('mouseleave', function() {
        if (this.classList.contains('card')) {
          this.style.transform = 'translateY(0)';
        } else if (this.tagName === 'A' || this.tagName === 'BUTTON') {
          this.style.transform = 'translateY(0)';
        }
      });
    });
  };
  
  // Call the function on page load
  $(document).ready(function() {
    addHoverAnimation();
  });

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Make the navigation bar sticky on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Portfolio and Projects isotope and filter
  $(window).on('load', function() {
    // Initialize Isotope for portfolio
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initialize Isotope for projects
    setTimeout(function() {
      var projectsIsotope = $('.projects-container').isotope({
        itemSelector: '.projects-item',
        layoutMode: 'fitRows'
      });

      $('#projects-flters li').on('click', function() {
        $("#projects-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        projectsIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });
    }, 1000);

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Contact form animations and validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    // Form submission with FormSubmit - no preventDefault needed, let form submit naturally
    contactForm.addEventListener('submit', function(e) {
      // Show a simple status message and update button
      const formStatus = document.getElementById('form-status');
      const submitBtn = contactForm.querySelector('.btn-send');
      
      if (formStatus) {
        formStatus.innerHTML = '<p style="color: #149ddd;">Sending message...</p>';
        formStatus.style.display = 'block';
      }
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-text">Sending...</span><i class="bx bx-loader-alt bx-spin"></i>';
      }
    });
    
    // Input animations
    const formInputs = contactForm.querySelectorAll('.form-control');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('input-focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('input-focused');
        }
      });
    });
  }

  // Waypoint animation for contact section
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    new Waypoint({
      element: contactSection,
      offset: '60%',
      handler: function() {
        const infoItems = contactSection.querySelectorAll('.info > div');
        infoItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animated', 'fadeInUp');
          }, index * 200);
        });
        this.destroy();
      }
    });
  }

  // Animated counter for metrics
  function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }

  // Initialize counters when they come into view
  const metricValues = document.querySelectorAll('.metric-value');
  if (metricValues.length > 0) {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseInt(element.getAttribute('data-target'));
          animateCounter(element, target);
          observer.unobserve(element);
        }
      });
    }, observerOptions);
    
    metricValues.forEach(value => {
      counterObserver.observe(value);
    });
  }

})(jQuery);