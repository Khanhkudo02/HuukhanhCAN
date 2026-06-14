<script src="data-tamly.js"></script>

<script>
function renderMindmap() {
  const grid = document.getElementById('grid');
  if (typeof C !== 'undefined' && Array.isArray(C)) {
    grid.innerHTML = ''; // Xóa thông báo trống ban đầu
    C.forEach(d => {
      const el = document.createElement('div');
      el.className = 'card'; 
      el.dataset.cat = d.cat;
      el.style.cssText = `--ac:${d.ac};--ac-dim:${d.ac}15;--ac-dim2:${d.ac}40`;
      
      el.innerHTML = `
        <div class="hd">
          <div class="num">${d.n}</div>
          <div class="ttl">${d.title}</div>
          <div class="tg">${d.tag}</div>
          <div class="arr">▼</div>
        </div>
        <div class="bd">${d.html}</div>
      `;
      
      // Hiệu ứng đóng mở khi click vào thẻ bài học
      el.querySelector('.hd').onclick = () => el.classList.toggle('on');
      grid.appendChild(el);
    });

    // Xử lý bộ lọc (Tabs) khi click chọn phân loại môn học
    document.querySelectorAll('.tab').forEach(t => {
      t.onclick = function() {
        document.querySelectorAll('.tab').forEach(x => { x.classList.remove('on'); x.style.cssText = '' });
        this.classList.add('on');
        const f = this.dataset.f;
        document.querySelectorAll('.card').forEach(c => {
          c.classList[f === 'all' || c.dataset.cat === f ? 'remove' : 'add']('hidden');
        });
      };
    });
  } else {
    // Hiển thị thông báo nếu trình duyệt không tìm thấy file data-tamly.js
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; background: #111827; border: 1px dashed #ef4444; border-radius: 12px; margin-top: 20px;">
        <p style="color: #f87171; font-weight: 600; font-size: 0.95rem; margin-bottom: 8px;">⚠️ Không tìm thấy dữ liệu bài học!</p>
        <p style="color: #64748b; font-size: 0.78rem;">Bạn cần đảm bảo file <code style="color: #60a5fa; background: #1e293b; padding: 2px 6px; border-radius: 4px;">data-tamly.js</code> đã được upload lên cùng thư mục với file này.</p>
      </div>
    `;
  }
}

// Chạy hàm render ngay khi trang web tải xong
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderMindmap);
} else {
  renderMindmap();
}
</script>
