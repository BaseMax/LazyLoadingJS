const LazyLoading = (parameters) => {
    const selector = parameters.selector || 'img';
    const attribute = parameters.attribute || 'data-src';

    const imgs = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute(attribute);
                observer.unobserve(img);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: [0]
    });

    imgs.forEach((img) => {
        observer.observe(img);
    }
    );

    return {
        observer: observer,
        imgs: imgs
    };
};
