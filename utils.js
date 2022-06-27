"use strict";
const debounce = (fn, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
