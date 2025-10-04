import React, { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = document.getElementById("splash-video");

    // Quand la vidéo se termine, déclenche le fade-out
    const handleEnded = () => {
      setFadeOut(true);
      // après la durée du fade-out, appelle onFinish
      setTimeout(onFinish, 1000); // 1 seconde pour le fade
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <video
        id="splash-video"
        src="/assets/splash.mp4"
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", }}
      />
    </div>
  );

}
export default SplashScreen;
