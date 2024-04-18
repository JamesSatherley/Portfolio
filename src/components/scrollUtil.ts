export const scrollToTop = (event: any, height: number) => {
    event.preventDefault();
    window.scrollTo({
        top: window.innerHeight * height,
        behavior: 'smooth',
    });
};
