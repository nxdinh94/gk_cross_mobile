import React, { useState, useEffect } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import classes from './Camera.module.css'

const CameraComponent = () => {
  const [photo, setPhoto] = useState(null);

  // 📌 Hàm chụp ảnh và lưu vào local storage
  const takePhoto = async () => {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 90,
      });

      const photoUrl = capturedPhoto.webPath || "";

      // Chuyển ảnh thành base64 để lưu trữ
      const response = await fetch(photoUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Data = reader.result.split(",")[1];

        if (base64Data) {
          await Filesystem.writeFile({
            path: "saved_photo.jpg", // Tên file ảnh
            data: base64Data,
            directory: Directory.Data,
          });

          setPhoto(photoUrl);
        }
      };
    } catch (error) {
      console.error("Lỗi khi chụp ảnh:", error);
    }
  };

  // 📌 Hàm tải ảnh từ local storage khi app khởi động lại
  const loadPhoto = async () => {
    try {
      const file = await Filesystem.readFile({
        path: "saved_photo.jpg",
        directory: Directory.Data,
      });

      setPhoto(`data:image/jpeg;base64,${file.data}`);
    } catch (error) {
      console.log("Không tìm thấy ảnh đã lưu.");
    }
  };

  // 📌 Tải ảnh khi app khởi động
  useEffect(() => {
    loadPhoto();
  }, []);

  return (
    <div>
      <h1>Camera App</h1>
      <button className={classes.captureButton} onClick={takePhoto}>Camera</button>
      {photo && <img src={photo} alt="Ảnh đã chụp" width="300" />}
    </div>
  );
};

export default CameraComponent;
