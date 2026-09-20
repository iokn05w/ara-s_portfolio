const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// 이전 사용자가 선택한 테마가 저장되어 있는지 확인
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = '화이트 모드';
  }
}

// 버튼 클릭 이벤트 Listening
themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'dark') {
    // 화이트 모드로 변경
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = '🌙';
    themeText.textContent = '다크 모드';
  } else {
    // 다크 모드로 변경
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = '☀️';
    themeText.textContent = '화이트 모드';
  }
});