// IntersectionObserver for animating sections as they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.home, .about, .portfolio, .contact').forEach(section => {
    observer.observe(section);
});
