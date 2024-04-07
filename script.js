document.addEventListener("DOMContentLoaded", function() {
    // Lazy loading for images
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
    
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // For browsers that don't support IntersectionObserver
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
        });
    }

    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
    
    // Animations for sections
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionPosition = section.offsetTop - window.innerHeight + 200;

            if (scrollPosition >= sectionPosition) {
                section.classList.add('animate-visible');
            }
        });
    });

    // Animations for About Us section
    const aboutSection = document.getElementById('about');
    const aboutTitle = aboutSection.querySelector('h2');
    const aboutParagraphs = aboutSection.querySelectorAll('p');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const sectionPosition = aboutSection.offsetTop - window.innerHeight + 200;

        if (scrollPosition >= sectionPosition) {
            aboutTitle.classList.add('animate-slideInDown');
            aboutParagraphs.forEach(paragraph => {
                paragraph.classList.add('animate-fadeIn');
            });
        }
    });
});

