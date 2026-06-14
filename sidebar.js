const subjects = [
    {
        name: "Tâm lý học",
        file: "subjects/tamlyhoc.html"
    },
    {
        name: "Tiếng Anh",
        file: "subjects/tienganh.html"
    },
    {
        name: "Pháp luật đại cương",
        file: "subjects/phapluat.html"
    }
];

function renderSubjects() {
    const list = document.getElementById("subjectList");
    list.innerHTML = "";

    subjects.forEach(subject => {
        list.innerHTML += `
            <li onclick="loadSubject('${subject.file}')">
                ${subject.name}
            </li>
        `;
    });
}

async function loadSubject(file) {
    try {
        const response = await fetch(file);
        const html = await response.text();

        // Chèn giao diện HTML vào vùng nội dung chính
        document.getElementById("content").innerHTML = html;
        closeSidebar();

        // Bổ sung xử lý kích hoạt Mindmap nếu là môn Tâm lý học
        if (file.includes("tamlyhoc.html")) {
            // Tự động nạp file dữ liệu data-tamly.js vào trang index nếu chưa có
            if (!document.getElementById("data-tamly-script")) {
                const scriptData = document.createElement("script");
                scriptData.id = "data-tamly-script";
                // Đường dẫn đi từ index.html vào trong thư mục subjects
                scriptData.src = "subjects/data-tamly.js"; 
                
                scriptData.onload = () => {
                    khởi_chạy_mindmap();
                };
                document.body.appendChild(scriptData);
            } else {
                // Nếu file dữ liệu đã nạp sẵn từ trước, chỉ cần chạy lại hàm render
                khởi_chạy_mindmap();
            }
        }
    } catch (error) {
        console.error("Lỗi tải môn học:", error);
    }
}

// Hàm cốt lõi trích từ cấu trúc hiển thị sơ đồ mindmap của bạn
function khởi_chạy_mindmap() {
    const grid = document.getElementById('grid');
    if (!grid) return; // Nếu giao diện chưa kịp hiển thị thì dừng

    if (typeof C !== 'undefined' && Array.isArray(C)) {
        grid.innerHTML = ''; // Xóa sạch trạng thái trống ban đầu
        
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
            
            // Xử lý sự kiện click đóng/mở hộp nội dung chi tiết
            el.querySelector('.hd').onclick = () => el.classList.toggle('on');
            grid.appendChild(el);
        });

        // Xử lý sự kiện bấm các nút bộ lọc phân loại ở trên đầu
        document.querySelectorAll('.tab').forEach(t => {
            t.onclick = function() {
                document.querySelectorAll('.tab').forEach(x => { 
                    x.classList.remove('on'); 
                    x.style.cssText = ''; 
                });
                this.classList.add('on');
                const f = this.dataset.f;
                document.querySelectorAll('.card').forEach(c => {
                    c.classList[f === 'all' || c.dataset.cat === f ? 'remove' : 'add']('hidden');
                });
            };
        });
    } else {
        grid.innerHTML = `<p style="color:#ef4444; text-align:center; padding:20px;">⚠️ Lỗi: Không thể tải mảng dữ liệu 'C' từ data-tamly.js</p>`;
    }
}
