import React, { useState } from "react";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Share } from "@capacitor/share";
import styles from "./temp.module.css";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertTemperature = async () => {
    const celsiusValue = parseFloat(celsius);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
      await showNotification();
    } else {
      setFahrenheit(null);
    }
  };

  const showNotification = async () => {
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display !== "granted") {
      alert("Ứng dụng chưa có quyền gửi thông báo!");
      return;
    }
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Thông báo chuyển đổi nhiệt độ",
          body: `Từ ${celsius}°C sang °F là ${fahrenheit}`,
          id: Date.now(),
          schedule: { at: new Date(Date.now() + 1000), allowWhileIdle: true },
          sound: "default",
          extra: { vibration: true },
        },
      ],
    });
  };

  const shareResult = async () => {
    if (fahrenheit === null) {
      alert("Bạn cần nhập nhiệt độ trước khi chia sẻ!");
      return;
    }
    await Share.share({
      title: "Kết quả chuyển đổi nhiệt độ",
      text: `Từ ${celsius}°C sang °F là ${fahrenheit}`,
      dialogTitle: "Chia sẻ kết quả",
    });
  };

  return (
    <div className={styles.container}>
      <h1>Chuyển đổi nhiệt độ</h1>
      <div className={styles.hero}>
        <input
          type="number"
          placeholder="Nhập nhiệt độ (°C)"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          className={styles.input}
        />
        <button onClick={convertTemperature} className={styles.button}>
          Chuyển đổi sang °F
        </button>
      </div>

      {fahrenheit !== null && (
        <>
          <h2 className={styles.result}>Kết quả: {fahrenheit} °F</h2>
          <button onClick={shareResult} className={styles.buttonShare}>
            Chia sẻ kết quả
          </button>
        </>
      )}
    </div>
  );
}
