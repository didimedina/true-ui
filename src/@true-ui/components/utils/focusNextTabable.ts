export const focusNextTabbable = (currentElement: HTMLElement) => {
  // Get all tabbable elements
  const tabbable = currentElement.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
  );

  const tabbableArray = Array.from(tabbable);
  const currentIndex = tabbableArray.indexOf(currentElement);

  // Focus next element or wrap to first
  const nextElement = tabbableArray[currentIndex + 1] || tabbableArray[0];
  nextElement?.focus();
};
