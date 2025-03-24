import { useState, useEffect } from "react";
import { Network } from "@capacitor/network";

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      const status = await Network.getStatus();
      setIsOnline(status.connected);
    };

    checkStatus();

    const listener = Network.addListener("networkStatusChange", (status) => {
      setIsOnline(status.connected);
      alert(`🔔 Network changed: ${status.connected ? "Online" : "Offline"}`);
    });

    return () => {
      listener.remove(); 
    };
  }, []);

  return isOnline;
};

export default useNetwork;
