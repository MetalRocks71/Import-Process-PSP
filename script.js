//navigation section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
//back to the top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
//navigate to next section
function scrollToNext(button) {
    // Ensure the button is inside a section
    const currentSection = button.closest('.section');
    if (!currentSection) return;

    // Find the next sibling that is also a section
    let nextSection = currentSection.nextElementSibling;
    while (nextSection && !nextSection.classList.contains('section')) {
        nextSection = nextSection.nextElementSibling;
    }

    // Scroll to the next section if found
    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        } else {
                // If no next section, scroll to top
                scrollToTop();
            }
        }
        
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    

// navigate to previous section
function scrollToBefore(button) {
    // Ensure the button is inside a section
    const currentSection = button.closest('.section');
    if (!currentSection) return;

    // Find the next sibling that is also a section
    let previousSection = currentSection.previousElementSibling;
    while (previousSection && !previousSection.classList.contains('section')) {
        previousSection = previousSection.nextElementSibling;
    }

    // Scroll to the previous section if found
    if (previousSection) {
        previousSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        } else {
                // If no previous section, scroll to top
                scrollToTop();
            }
        }
        
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    


