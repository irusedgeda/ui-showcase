export function remove(v) {
  v.style.animation = "slide-out 300ms ease-in-out";
  setTimeout(() => {
    v.parentElement.removeChild(v);
  }, 300);
}
