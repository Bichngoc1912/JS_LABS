function throttle(callback, await) {
  let isThrottling = false;

  return function() {
    if (isThrottling) return; // 2,3,4 come here

    isThrottling = true; // 1 come here
    setTimeout(() => {
      callback();

      isThrottling = false;
    }, await)
  }
}