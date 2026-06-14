// main.js - Điều hướng sidebar, tải nội dung các môn
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const mainContent = document.getElementById('mainContent');
  
  // Hàm tải nội dung từ file HTML
  async function loadPage(url, subjectId) {
    // Hiển thị loading
    mainContent.innerHTML = `
      <div class="loading-placeholder">
        <div class="loader"></div>
        <p>Đang tải nội dung ${subjectId === 'psychology' ? 'Tâm lý học' : subjectId === 'informatics' ? 'Tin học' : 'Tiếng Anh'}...</p>
      </div>
    `;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Không thể tải trang');
      const html = await response.text();
      
      // Trích xuất nội dung bên trong thẻ <main> hoặc <div class="page-content">
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const content = doc.querySelector('.page-content') || doc.body;
      
      mainContent.innerHTML = '';
      mainContent.appendChild(content);
      
      // Cập nhật active cho menu
      navItems.forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-subject') === subjectId) {
          item.classList.add('active');
        }
      });
      
      // Nếu là trang tâm lý học, khởi tạo mindmap sau khi tải xong
      if (subjectId === 'psychology') {
        if (typeof window.initPsychologyMindmap === 'function') {
          window.initPsychologyMindmap();
        }
      }
      
    } catch (error) {
      console.error(error);
      mainContent.innerHTML = `
        <div class="loading-placeholder">
          <p style="color: #c0392b;">❌ Lỗi tải nội dung. Vui lòng thử lại.</p>
          <button onclick="location.reload()" style="margin-top: 10px; padding: 6px 12px; border-radius: 8px; border: none; background: #2c6288; color: white; cursor: pointer;">Tải lại</button>
        </div>
      `;
    }
  }
  
  // Gắn sự kiện click cho từng menu
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = item.getAttribute('data-subject');
      let url = '';
      if (subject === 'psychology') url = 'pages/psychology.html';
      else if (subject === 'informatics') url = 'pages/informatics.html';
      else if (subject === 'english') url = 'pages/english.html';
      
      if (url) {
        loadPage(url, subject);
        // Lưu lại trang hiện tại
        sessionStorage.setItem('currentPage', url);
        sessionStorage.setItem('currentSubject', subject);
      }
    });
  });
  
  // Tải trang mặc định (Tâm lý học)
  const savedPage = sessionStorage.getItem('currentPage');
  const savedSubject = sessionStorage.getItem('currentSubject');
  if (savedPage && savedSubject) {
    loadPage(savedPage, savedSubject);
  } else {
    loadPage('pages/psychology.html', 'psychology');
  }
});