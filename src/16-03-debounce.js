function debounce(callback, await) {
  let timeoutId;

  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, await);
  }
}