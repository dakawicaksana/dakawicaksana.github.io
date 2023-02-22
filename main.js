const btn = document.getElementById('togle');
for (let i = 0; i < 1000; i++) {
  btn.onclick = function() {
    let theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'light') {
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
    }
  }
}