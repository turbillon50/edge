// EDGE PWA bootstrap: SW registration + install prompt UX
(function () {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((reg) => {
          if (reg.waiting) reg.waiting.postMessage("SKIP_WAITING");
          reg.addEventListener("updatefound", () => {
            const sw = reg.installing;
            if (!sw) return;
            sw.addEventListener("statechange", () => {
              if (sw.state === "installed" && navigator.serviceWorker.controller) {
                sw.postMessage("SKIP_WAITING");
              }
            });
          });
        })
        .catch(() => {});
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    });
  }

  // Install-to-home-screen UX
  let deferredPrompt = null;
  const installable = () =>
    !window.matchMedia("(display-mode: standalone)").matches &&
    !window.navigator.standalone;

  function ensureButton() {
    if (!installable()) return null;
    let btn = document.getElementById("edge-install-btn");
    if (btn) return btn;
    btn = document.createElement("button");
    btn.id = "edge-install-btn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Install EDGE app");
    btn.innerHTML =
      '<span style="display:inline-flex;align-items:center;gap:.5rem;">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>' +
      'INSTALL APP</span>';
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "9999",
      padding: "12px 18px",
      borderRadius: "999px",
      border: "1px solid rgba(242,202,80,0.4)",
      background: "rgba(19,19,19,0.85)",
      backdropFilter: "blur(20px)",
      color: "#f2ca50",
      fontFamily: "Sora, system-ui, sans-serif",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "0.18em",
      cursor: "pointer",
      boxShadow: "0 8px 30px rgba(242,202,80,0.18)",
      transition: "transform .2s ease, opacity .2s ease",
      opacity: "0",
      transform: "translateY(10px)"
    });
    btn.addEventListener("mouseenter", () => (btn.style.transform = "translateY(0) scale(1.03)"));
    btn.addEventListener("mouseleave", () => (btn.style.transform = "translateY(0)"));
    document.body.appendChild(btn);
    requestAnimationFrame(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    });
    btn.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      btn.disabled = true;
      deferredPrompt.prompt();
      try { await deferredPrompt.userChoice; } catch (e) {}
      deferredPrompt = null;
      btn.remove();
    });
    return btn;
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    ensureButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    const btn = document.getElementById("edge-install-btn");
    if (btn) btn.remove();
  });
})();
