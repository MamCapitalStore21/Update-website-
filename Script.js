window.addEventListener('scroll', function() {
    const products = document.querySelectorAll('.product');
    const triggerBottom = window.innerHeight / 5 * 4;

    products.forEach(product => {
        const productTop = product.getBoundingClientRect().top;

        if (productTop < triggerBottom) {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        } else {
            product.style.opacity = '0';
            product.style.transform = 'translateY(50px)';
        }
    });
});