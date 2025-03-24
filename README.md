# Capacitor x ReactJS Project

## Giới thiệu
Dự án này sử dụng **ReactJS** kết hợp với **Capacitor** để phát triển ứng dụng đa nền tảng (Android, iOS, Web).

## Yêu cầu hệ thống
Trước khi chạy dự án, hãy đảm bảo bạn đã cài đặt các công cụ sau:
- [Node.js](https://nodejs.org/) (Phiên bản LTS khuyến nghị)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)
- [Capacitor CLI](https://capacitorjs.com/) (nếu chưa cài đặt, chạy lệnh `npm install -g @capacitor/cli`)
- [Android Studio](https://developer.android.com/studio) (nếu build Android)
- [Xcode](https://developer.apple.com/xcode/) (nếu build iOS, chỉ dành cho macOS)

## Cài đặt
1. Clone repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Cài đặt dependencies:
   ```sh
   npm install
   ```
3. Cấu hình Capacitor:
   ```sh
   npx cap init "App Name" "com.example.app"
   ```
4. Thêm nền tảng mong muốn:
   ```sh
   npx cap add android   # Thêm Android
   npx cap add ios       # Thêm iOS
   ```

## Chạy dự án
### Chạy trên trình duyệt (chế độ web)
```sh
npm start
```

### Chạy trên thiết bị/emulator
1. Build project React:
   ```sh
   npm run build
   ```
2. Đồng bộ với Capacitor:
   ```sh
   npx cap sync
   ```
3. Mở dự án với nền tảng mong muốn:
   ```sh
   npx cap open android  # Mở trong Android Studio
   npx cap open ios      # Mở trong Xcode
   ```
4. Chạy ứng dụng từ Android Studio hoặc Xcode.

## Debugging
- Kiểm tra lỗi bằng **Chrome DevTools** với lệnh:
  ```sh
  npx cap serve
  ```
- Debug trên thiết bị thực:
  ```sh
  npx cap run android --device
  ```
  hoặc
  ```sh
  npx cap run ios --device
  ```

## Đóng góp
Nếu bạn muốn đóng góp vào dự án, hãy tạo một Pull Request hoặc mở Issue mới.

## Giấy phép
Dự án này tuân theo giấy phép MIT.