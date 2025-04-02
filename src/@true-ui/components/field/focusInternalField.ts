// Util for Field.Frame autoFcus fonctionality. 
// 🚧 works, but with select you don't want the input to focus, you also want the dropdown to show. This extra case needs to be handled.

export const focusInternalField = (currentElement: HTMLElement) => {
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
