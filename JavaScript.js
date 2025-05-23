// 1. Function to validate an email address
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // 2. Function to display projects/services offered
    function displayServices(services) {
        const serviceContainer = document.getElementById('testimonials');
        const servicesList = services.map(service => `<li>${service}</li>`).join('');
        serviceContainer.innerHTML += `<ul>${servicesList}</ul>`;
    }

    // 3. Function to submit a contact form
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateEmail(email)) {
            // Simulating form submission
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for contacting us!');
            this.reset(); // Resets the form fields
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // 4. Function to create a simple testimonial slider effect
    const testimonials = [
        "Enchanted Beauty has transformed my look!",
        "The staff is friendly and skilled.",
        "I feel confident and beautiful after every visit!"
    ];

    function showTestimonials() {
        const testimonialContainer = document.getElementById('testimonialContainer');
        let currentIndex = 0;

        function updateTestimonial() {
            testimonialContainer.innerHTML = `<p>${testimonials[currentIndex]}</p>`;
            currentIndex = (currentIndex + 1) % testimonials.length;
            setTimeout(updateTestimonial, 3000); // Change testimonial every 3 seconds
        }

        updateTestimonial();
    }
    showTestimonials(); // Start displaying testimonials

    // 5. Function to scroll to the top of the page
    document.getElementById('scrollTopBtn').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

</script>
</body>
</html>

      
       
