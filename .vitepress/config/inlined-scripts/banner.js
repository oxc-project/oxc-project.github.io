(() => {
  const restore = (key, cls, def = false) => {
    const saved = localStorage.getItem(key);
    if (saved ? saved !== "false" : def) {
      document.documentElement.classList.add(cls);
    }
  };

  window.__OXC_BANNER_ID__ = "/blog/2025-09-18-oxlint-custom-js-plugins-preview";
  restore(`oxc-banner-dismissed-${__OXC_BANNER_ID__}`, "banner-dismissed");
})();
