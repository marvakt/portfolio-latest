      const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

function sendMail(){
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("Email_id").value;
    var message = document.getElementById("Message").value;
    
    if (!name || !email || !message) {
        alert("Please fill all fields!");
        return;
    }
    
    var params = {
        from_name: name,
        email_id: email,
        message: message
    }
    
    emailjs.send("service_t19fhh9","template_if72c32",params).then(function(res){
        alert("Success!" +res.status);
    })
}


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

     
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.fill');
                    fills.forEach(fill => {
                        fill.style.width = fill.style.width || '0%';
                    });
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('.skill'));