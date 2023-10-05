const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  // Показати/приховати кнопку в залежності від позиції прокрутки
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 2000
  ) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  // Плавна прокрутка сторінки вгору
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
