$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	


    // 6. form submit massage

	document.getElementById("contactForm").addEventListener("submit", function(event) {
		event.preventDefault(); // Prevent the default form submission
	
		// Get form data (optional, if you want to process it)
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const subject = document.getElementById("subject").value;
		const message = document.getElementById("message").value;
	
		// You can use AJAX to send the data to the server here if needed.
	
		// Clear the form
		document.getElementById("contactForm").reset();
	
		// Show success message
		document.getElementById("successMessage").style.display = "block";
	
		// Hide the success message after 3 seconds
		setTimeout(function() {
			document.getElementById("successMessage").style.display = "none";
		}, 3000);
	});
	
// email js javascript 

	// Initialize EmailJS with your Public Key
	emailjs.init("Puu4X0e0P5nPCw-z2"); // Replace with your EmailJS public key

	function sendEmail(event) {
	  event.preventDefault(); // Prevent the default form submission
  
	  // Get form data
	  const name = document.getElementById("name").value;
	  const email = document.getElementById("email").value;
	  const subject = document.getElementById("subject").value;
	  const message = document.getElementById("message").value;
  
	  // EmailJS template parameters
	  const templateParams = {
		name: name,
		email: email,
		subject: subject,
		message: message,
	  };
  
	  // Send the email using EmailJS
	  emailjs
		.send("service_hz3yaa8", "template_7hnug3z", templateParams)
		.then(
		  (response) => {
			
			console.log("SUCCESS!", response.status, response.text);
			document.getElementById("contactForm").reset(); // Reset form fields
		  },
		  (error) => {
			alert("Failed to send email. Please try again.");
			console.error("FAILED...", error);
		  }
		);
		
	}
	
	