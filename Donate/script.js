const toggle = document.getElementById('donateToggle');
const panel = document.getElementById('donatePanel');
const close = document.getElementById('closeDonate');
let isOpen = false;
let autoCloseTimer = null;

toggle.addEventListener('click', () => {
  if (!isOpen) {
    panel.style.right = '0px';
    isOpen = true;

    clearTimeout(autoCloseTimer);
    autoCloseTimer = setTimeout(() => {
      panel.style.right = '-300px';
      isOpen = false;
    }, 5000);
  }
});

close.addEventListener('click', () => {
  panel.style.right = '-300px';
  isOpen = false;
  clearTimeout(autoCloseTimer);
});