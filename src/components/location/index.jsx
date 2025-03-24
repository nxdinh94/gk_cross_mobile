import React, { useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const LocationFetcher = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = async () => {
    try {
      // Kiểm tra quyền trước
      const permissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location !== "granted") {
        const permission = await Geolocation.requestPermissions();
        if (permission.location !== "granted") {
          alert("Ứng dụng chưa có quyền truy cập vị trí!");
          return;
        }
      }

      const position = await Geolocation.getCurrentPosition();
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      console.error("Lỗi khi lấy vị trí:", error);
      alert("Không thể lấy vị trí!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={getCurrentLocation} style={buttonStyle}>
        Lấy vị trí hiện tại
      </button>
      {location && (
        <p>
          Vĩ độ: {location.latitude} | 🗺️ Kinh độ: {location.longitude}
        </p>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#28A745",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default LocationFetcher;
