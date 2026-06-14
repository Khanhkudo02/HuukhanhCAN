// Khai báo mảng dữ liệu C chứa thông tin chi tiết các câu hỏi
const C = [
  {
    n: 1,
    cat: "tlxh",
    ac: "#5b21b6", // Màu tím chủ đạo cho Tâm lý XH
    tag: "Tâm lý XH",
    title: "XUNG ĐỘT NHÓM NHỎ",
    html: `
      <strong>• KHÁI NIỆM</strong><br>
      › Mâu thuẫn, bất đồng về <strong>quan điểm, niềm tin</strong> giữa các thành viên<br>
      › Động chạm đến <strong>quyền lợi vật chất hoặc tinh thần</strong> cá nhân<br>
      › Hình thành trong quá trình tương tác trong nhóm<br><br>
      <strong>• NGUYÊN NHÂN KHÁCH QUAN</strong><br>
      › Kinh tế, chính trị, văn hóa, tôn giáo tác động từ bên ngoài<br>
      › Quy chế, điều lệnh <strong>chưa rõ ràng, đầy đủ</strong><br>
      › Điều kiện vật chất, lương thưởng không thỏa đáng<br><br>
      <strong>• NGUYÊN NHÂN CHỦ QUAN</strong><br>
      › <strong>Lãnh đạo:</strong> thiếu kinh nghiệm, phong cách không phù hợp, thiếu công bằng<br>
      › <strong>Thành viên:</strong> cá tính cực đoan, lười biếng, xu nịnh, tư lợi<br>
      › Cơ cấu nhóm lỏng lẻo, phân công không rõ ràng<br><br>
      <strong>• 4 GIAI ĐOẠN HÌNH THÀNH XUNG ĐỘT</strong><br>
      1. <strong>Tranh luận</strong> về vấn đề cụ thể, chưa đụng đến cá nhân<br>
      2. <strong>Bất đồng gay gắt</strong> — phê phán cá tính, lôi kéo quá khứ<br>
      3. <strong>Xung đột công khai</strong> — không lắng nghe ý kiến nhau<br>
      4. <strong>Đối kháng TL</strong> — bè cánh, tan rã hoặc thay lãnh đạo<br><br>
      <strong>• PHÒNG NGỪA XUNG ĐỘT</strong><br>
      › Tôn vinh hành vi mong muốn; hoan nghênh bất đồng chính kiến<br>
      › Xây dựng nhóm đa dạng; tạo <strong>trách nhiệm giải trình</strong> rõ ràng<br>
      › Khuyến khích <strong>tự quản lý xung đột</strong>; đào tạo kỹ năng giải quyết vấn đề<br>
      › Phân công nhiệm vụ rõ ràng, tránh chồng chéo quyền lợi<br><br>
      <strong>• GIẢI QUYẾT XUNG ĐỘT</strong><br>
      › Gác "cái tôi" — lắng nghe trước khi phản biện<br>
      › <strong>Làm rõ vấn đề cốt lõi</strong> bằng các câu hỏi truy nguyên<br>
      › <strong>Tìm giải pháp cùng nhau</strong> — biểu quyết thống nhất<br>
      › Lãnh đạo: <strong>không thiên vị, lắng nghe chủ động</strong><br>
      › Cần thiết có thể mời bên thứ ba làm trung gian hòa giải
    `
  },
  {
    n: 2,
    cat: "tlxh",
    ac: "#5b21b6",
    tag: "Tâm lý XH",
    title: "BẦU KHÔNG KHÍ TÂM LÝ",
    html: `› Nội dung chi tiết về Bầu không khí tâm lý trong tập thể...`
  },
  {
    n: 3,
    cat: "tlxh",
    ac: "#5b21b6",
    tag: "Tâm lý XH",
    title: "NHÓM XÃ HỘI",
    html: `› Nội dung chi tiết về cấu trúc và đặc điểm của Nhóm xã hội...`
  },
  {
    n: 4,
    cat: "tlxh",
    ac: "#5b21b6",
    tag: "Tâm lý XH",
    title: "ĐÁM ĐÔNG",
    html: `› Đặc điểm tâm lý đám đông và cơ chế lây lan tâm lý...`
  },
  {
    n: 5,
    cat: "tlxh",
    ac: "#5b21b6",
    tag: "Tâm lý XH",
    title: "DƯ LUẬN XH VS TIN ĐỒN",
    html: `› Phân biệt bản chất dư luận xã hội và cơ chế lan truyền tin đồn...`
  },
  {
    n: 6,
    cat: "bctl",
    ac: "#06b6d4", // Màu xanh Cyan cho Bản chất TL
    tag: "Bản chất TL",
    title: "CẤU TRÚC Ý THỨC & HÌNH THÀNH Ý THỨC",
    html: `› Các thành phần cấu trúc của ý thức và các con đường hình thành ý thức...`
  },
  {
    n: 7,
    cat: "bctl",
    ac: "#06b6d4",
    tag: "Bản chất TL",
    title: "BÀN CHẤT TÂM LÝ NGƯỜI",
    html: `› Tâm lý người là sự phản ánh hiện thực khách quan vào não người thông qua chủ thể...`
  },
  {
    n: 8,
    cat: "bctl",
    ac: "#06b6d4",
    tag: "Bản chất TL",
    title: "CÁC YẾU TỐ HÌNH THÀNH TÂM LÝ CÁ NHÂN",
    html: `› Bẩm sinh, di truyền, môi trường, giáo dục và hoạt động giao tiếp...`
  },
  {
    n: 9,
    cat: "bctl",
    ac: "#06b6d4",
    tag: "Bản chất TL",
    title: "YẾU TỐ HOẠT ĐỘNG ĐỐI VỚI TÂM LÝ",
    html: `› Vai trò quyết định trực tiếp của hoạt động đối với sự hình thành và phát triển tâm lý...`
  },
  {
    n: 10,
    cat: "bctl",
    ac: "#06b6d4",
    tag: "Bản chất TL",
    title: "\"GẦN MỰC ĐEN, GẦN ĐÈN RẠNG\"",
    html: `› Phân tích dưới góc độ tâm lý học về tác động của môi trường xã hội đến cá nhân...`
  },
  {
    n: 11,
    cat: "bctl",
    ac: "#06b6d4",
    tag: "Bản chất TL",
    title: "BÀI THƠ: NỬA ĐÊM — NHẬT KÝ TRONG TÙ",
    html: `› Phân tích diễn biến tâm lý, ý chí nghị lực qua tác phẩm của Hồ Chí Minh...`
  },
  {
    n: 12,
    cat: "nt",
    ac: "#10b981", // Màu xanh lá cho Nhận thức
    tag: "Nhận thức",
    title: "TƯ DUY",
    html: `› Khái niệm, đặc điểm và các giai đoạn của quá trình tư duy...`
  }
];
