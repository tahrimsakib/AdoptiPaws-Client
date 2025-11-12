import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({
  size = 20,
  color = "bg-indigo-600",
  ring = false,
  hideOnTouch = true,
}) {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300 };
  const x = useSpring(pointerX, springConfig);
  const y = useSpring(pointerY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      const px = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const py = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (typeof px === "number" && typeof py === "number") {
        pointerX.set(px - size / 2);
        pointerY.set(py - size / 2);
      }
    };

    const handleTouchStart = (e) => {
      if (hideOnTouch) {
        pointerX.set(-1000);
        pointerY.set(-1000);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [pointerX, pointerY, size, hideOnTouch]);

  useEffect(() => {
    const interactiveSelector =
      "a, button, input, textarea, [data-cursor='hover']";

    const onEnter = () => {
      pointerX.set(pointerX.get());
      document.documentElement.setAttribute("data-cursor-hover", "true");
    };
    const onLeave = () => {
      document.documentElement.removeAttribute("data-cursor-hover");
    };

    const addListeners = (el) => {
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
      el.addEventListener("focus", onEnter);
      el.addEventListener("blur", onLeave);
    };

    const removeListeners = (el) => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("focus", onEnter);
      el.removeEventListener("blur", onLeave);
    };

    const elements = Array.from(document.querySelectorAll(interactiveSelector));
    elements.forEach(addListeners);

    const obs = new MutationObserver(() => {
      const newEls = Array.from(document.querySelectorAll(interactiveSelector));
      newEls.forEach(addListeners);
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      elements.forEach(removeListeners);
      obs.disconnect();
    };
  }, [pointerX]);

  return (
    <motion.div
      style={{ x, y }}
      className={`fixed left-0 top-0 z-[9999] pointer-events-none select-none`}
      aria-hidden="true"
    >
      <motion.div
        className={`flex items-center justify-center rounded-full ${color}`}
        style={{
          width: size,
          height: size,
          transformOrigin: "center",
        }}
        animate={{
          scale: [
            document.documentElement.hasAttribute("data-cursor-hover")
              ? 1.8
              : 1,
          ],
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      >
        {ring ? (
          <span className="absolute -inset-2 rounded-full border border-white/20" />
        ) : null}
      </motion.div>
    </motion.div>
  );
}
