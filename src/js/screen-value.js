//функція повертає значення 8 або 9 в залежності чи це десктопна версія чи мобільна/таблет
export function getScreenWidthValue() {
  const screenWidth = window.innerWidth;
  return Number(screenWidth > 1280 ? '9' : '8');
}
