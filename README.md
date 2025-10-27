# 🌤 Weather App (React + Tailwind + TypeScript)

Một ứng dụng **xem thời tiết** được xây dựng bằng **React**, **TypeScript**, và **TailwindCSS**.  
Ứng dụng cho phép người dùng nhập tên thành phố và xem thông tin thời tiết hiện tại được lấy từ API.

---

## 🚀 Công nghệ sử dụng

- ⚛️ **React + Vite + TypeScript** — Frontend framework hiện đại.
- 🎨 **TailwindCSS** — Thiết kế giao diện nhanh, tiện và chuẩn responsive.
- 🌐 **OpenWeatherMap API** — Lấy dữ liệu thời tiết theo thời gian thực.
- 🎥 **Video Background (bg.mp4)** — Nền động tạo cảm giác sinh động.
- 🧩 **Component hóa** — Tách `SearchBar` và `WeatherCard` riêng giúp code rõ ràng, dễ mở rộng.

---

## 📂 Cấu trúc thư mục

```bash
weather-app-react/
├── public/
├── src/
│   ├── assets/
│   │   ├── bg.mp4
│   │   ├── WeatherBanner.jpg
│   │   └── WeatherIcon.ico
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   └── WeatherCard.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Cài đặt & Chạy dự án

### 1️⃣ Cài dependencies
```bash
npm install
```

### 2️⃣ Tạo file `.env` và thêm API key
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

Lấy key tại [OpenWeatherMap.org](https://openweathermap.org/api).

### 3️⃣ Chạy project
```bash
npm run dev
```

Sau đó mở trình duyệt tại:  
👉 `http://localhost:5173/`

---

## 🧠 Cấu trúc logic chính

| File | Chức năng |
|------|------------|
| `SearchBar.tsx` | Cho phép người dùng nhập tên thành phố, gửi yêu cầu tìm kiếm. |
| `WeatherCard.tsx` | Hiển thị thông tin thời tiết (nhiệt độ, độ ẩm, trạng thái, biểu tượng). |
| `App.tsx` | Quản lý luồng dữ liệu, hiển thị giao diện chính và video nền. |

---

## 🪄 Giao diện nổi bật
- Hiệu ứng nền video (`bg.mp4`) với lớp phủ mờ (glassmorphism).
- Giao diện Tailwind sạch đẹp, responsive.
- Loading state hiển thị khi fetch dữ liệu.

---

## 🧩 Tùy chỉnh thêm
- Đổi background video trong `src/assets/bg.mp4`.
- Thêm animation bằng thư viện `Framer Motion` nếu muốn.
- Tùy chỉnh theme màu trong `tailwind.config.js`.

---

## 🧑‍💻 Tác giả

**Nguyễn Nhật Thiên (TEE)**  

📧 Liên hệ: [GitHub](https://github.com/tee)

🔗 Know more about Tee: [Linktree: nkqt.tee](https://linktr.ee/nkqt.tee)  

✨ Project học tập cá nhân, chia sẻ miễn phí.

---

## 📜 Giấy phép

MIT License — bạn có thể sử dụng và chỉnh sửa tự do.
