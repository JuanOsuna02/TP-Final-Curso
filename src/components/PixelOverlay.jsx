import React from "react";
const refImg = "/reference.png";

export default function PixelOverlay() {
  const [on, setOn] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0.35);

  React.useEffect(() => {
    const h = (e) => {
      const k = e.key.toLowerCase();
      if (k === "o") setOn(v => !v);
      if (e.key === "[") setOpacity(v => Math.max(0, +(v - 0.05).toFixed(2)));
      if (e.key === "]") setOpacity(v => Math.min(1, +(v + 0.05).toFixed(2)));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  if (!on) return null;
  return (
    <div
      title="O: on/off  •  [: -opacity  •  ]: +opacity"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `url(${refImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "contain",
        opacity,
        zIndex: 9999
      }}
    />
  );
}
