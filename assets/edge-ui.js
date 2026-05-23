/* EDGE UI shared layer — theme, language, touch */
(function () {
  "use strict";

  const STORE = { theme: "edge.theme", lang: "edge.lang" };

  /* ---------- Translations (ES). Keys mirror English source strings. ---------- */
  const ES = {
    // Splash
    "Performance Beyond Limits": "Rendimiento Sin Límites",
    "Tap to enter": "Toca para entrar",

    // Welcome
    "THE FUTURE OF PERFORMANCE": "EL FUTURO DEL RENDIMIENTO",
    "WELCOME TO THE": "BIENVENIDO AL",
    "ECOSYSTEM.": "ECOSISTEMA.",
    "Precision management for the world's most disciplined athletes. Elevate your training with cinematic data insights and elite-tier club operations.":
      "Gestión de precisión para los atletas más disciplinados del mundo. Eleva tu entrenamiento con datos cinematográficos y operaciones de club de élite.",
    "Explore Memberships": "Explorar Membresías",
    "Sign In": "Iniciar Sesión",
    "Elite Access": "Acceso Élite",
    "Performance Tracking": "Seguimiento de Rendimiento",
    "Exclusive Network": "Red Exclusiva",

    // Login
    "High Performance Management": "Gestión de Alto Rendimiento",
    "Member Email": "Correo de Miembro",
    "Access Key": "Clave de Acceso",
    "Forgot?": "¿Olvidaste?",
    "SIGN IN": "INICIAR SESIÓN",
    "Secure Identity": "Identidad Segura",
    "New to the community?": "¿Nuevo en la comunidad?",
    "Request Membership": "Solicitar Membresía",
    "name@luxury-fitness.com": "tu@lujo-fitness.com",

    // Dashboard nav + greeting
    "Home": "Inicio",
    "Workouts": "Entrenamientos",
    "Classes": "Clases",
    "Stats": "Estadísticas",
    "Profile": "Perfil",
    "Hello, Julian.": "Hola, Julian.",
    "\"The only limit is the one you set yourself. Push past the noise and find your edge today.\"":
      "\"El único límite es el que tú mismo te pones. Atraviesa el ruido y encuentra tu ventaja hoy.\"",

    // Dashboard cards
    "Next Workout": "Próximo Entrenamiento",
    "Upper Body Power": "Potencia de Tren Superior",
    "Focused on explosive strength and hypertrophy": "Enfocado en fuerza explosiva e hipertrofia",
    "45 Minutes": "45 Minutos",
    "START SESSION": "INICIAR SESIÓN",
    "Membership": "Membresía",
    "Elite Active": "Élite Activa",
    "VALID UNTIL DEC 2024": "VÁLIDA HASTA DIC 2024",
    "MONTHLY USAGE": "USO MENSUAL",
    "Complimentary recovery session available this week.": "Sesión de recuperación de cortesía disponible esta semana.",
    "Heart Rate": "Ritmo Cardíaco",
    "BPM": "PPM",
    "Calories": "Calorías",
    "KCAL": "KCAL",
    "DAILY GOAL": "META DIARIA",
    "Attendance": "Asistencia",
    "SESSIONS": "SESIONES",
    "4/5 THIS WEEK": "4/5 ESTA SEMANA",
    "7-Day Streak": "Racha de 7 Días",
    "CONSISTENT": "CONSISTENTE",
    "You are in the top 5% of active members this week.": "Estás en el 5% superior de miembros activos esta semana.",
    "TODAY AT 6:00 PM": "HOY A LAS 6:00 PM",
    "UPCOMING CLASS": "PRÓXIMA CLASE",
    "Elite HIIT Performance": "HIIT Élite Performance",
    "INSTRUCTOR": "INSTRUCTORA",
    "60 MIN": "60 MIN",
    "12 SPOTS LEFT": "12 LUGARES DISPONIBLES",
    "MANAGE BOOKING": "GESTIONAR RESERVA",
    "PERSONALISED": "PERSONALIZADO",
    "Recommended Trainers": "Entrenadores Recomendados",
    "VIEW ALL": "VER TODOS",
    "STRENGTH & CONDITIONING": "FUERZA Y ACONDICIONAMIENTO",
    "FUNCTIONAL FLOW": "FLUJO FUNCIONAL",
    "POWERLIFTING": "POWERLIFTING",
    "RECOVERY & MOBILITY": "RECUPERACIÓN Y MOVILIDAD",

    // Offline
    "Disconnected": "Sin Conexión",
    "You are offline.": "Estás sin conexión.",
    "Some experiences need a connection. Reconnect and we'll bring you straight back to the moment.":
      "Algunas experiencias necesitan conexión. Reconéctate y te llevamos justo de vuelta al momento.",
    "Retry": "Reintentar",
  };

  /* ---------- Theme ---------- */
  function detectTheme() {
    try {
      const stored = localStorage.getItem(STORE.theme);
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#f5f1e8" : "#131313");
    try { localStorage.setItem(STORE.theme, t); } catch (e) {}
    document.documentElement.dispatchEvent(new CustomEvent("edge:theme", { detail: t }));
  }

  /* ---------- Language ---------- */
  function detectLang() {
    try {
      const stored = localStorage.getItem(STORE.lang);
      if (stored === "es" || stored === "en") return stored;
    } catch (e) {}
    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.startsWith("es") ? "es" : "en";
  }

  function translateNode(node, lang) {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    // Cache original English text
    if (!node.hasAttribute("data-i18n-orig")) {
      node.setAttribute("data-i18n-orig", node.textContent);
    }
    const original = node.getAttribute("data-i18n-orig");
    const dict = lang === "es" ? ES : null;
    const value = dict && dict[key] ? dict[key] : original;
    node.textContent = value;
  }
  function translateAttr(node, lang) {
    const spec = node.getAttribute("data-i18n-attr");
    if (!spec) return;
    spec.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (!attr || !key) return;
      const origKey = "data-i18n-orig-" + attr;
      if (!node.hasAttribute(origKey)) {
        node.setAttribute(origKey, node.getAttribute(attr) || "");
      }
      const dict = lang === "es" ? ES : null;
      const value = dict && dict[key] ? dict[key] : node.getAttribute(origKey);
      node.setAttribute(attr, value);
    });
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((n) => translateNode(n, lang));
    document.querySelectorAll("[data-i18n-attr]").forEach((n) => translateAttr(n, lang));
    try { localStorage.setItem(STORE.lang, lang); } catch (e) {}
    document.documentElement.dispatchEvent(new CustomEvent("edge:lang", { detail: lang }));
  }

  /* ---------- Control panel ---------- */
  const SUN_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  const MOON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function buildControl(theme, lang) {
    if (document.body.classList.contains("is-splash")) return;
    if (document.getElementById("edge-ctl")) return;
    const root = document.createElement("div");
    root.id = "edge-ctl";
    root.className = "edge-ctl";
    root.setAttribute("role", "toolbar");
    root.setAttribute("aria-label", "Theme and language");

    const themeBtn = document.createElement("button");
    themeBtn.type = "button";
    themeBtn.setAttribute("aria-label", "Toggle theme");
    themeBtn.innerHTML = theme === "light" ? SUN_SVG : MOON_SVG;
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      themeBtn.innerHTML = next === "light" ? SUN_SVG : MOON_SVG;
      haptic(8);
    });

    const sep = document.createElement("span");
    sep.className = "sep";

    const langWrap = document.createElement("div");
    langWrap.style.display = "inline-flex";

    const enBtn = document.createElement("button");
    enBtn.type = "button";
    enBtn.className = "lang";
    enBtn.textContent = "EN";
    enBtn.setAttribute("aria-label", "English");

    const esBtn = document.createElement("button");
    esBtn.type = "button";
    esBtn.className = "lang";
    esBtn.textContent = "ES";
    esBtn.setAttribute("aria-label", "Español");

    function syncLangButtons(curr) {
      enBtn.setAttribute("aria-pressed", String(curr === "en"));
      esBtn.setAttribute("aria-pressed", String(curr === "es"));
    }
    enBtn.addEventListener("click", () => { applyLang("en"); syncLangButtons("en"); haptic(8); });
    esBtn.addEventListener("click", () => { applyLang("es"); syncLangButtons("es"); haptic(8); });
    syncLangButtons(lang);

    langWrap.appendChild(enBtn);
    langWrap.appendChild(esBtn);
    root.appendChild(themeBtn);
    root.appendChild(sep);
    root.appendChild(langWrap);
    document.body.appendChild(root);
  }

  /* ---------- Touch / Haptic ---------- */
  function haptic(ms) {
    try { if (navigator.vibrate) navigator.vibrate(ms || 8); } catch (e) {}
  }
  function wireHapticOnInteractives() {
    const handler = (e) => {
      const t = e.target.closest("button, a, [role='button'], input[type='submit']");
      if (!t) return;
      haptic(8);
    };
    document.addEventListener("pointerdown", handler, { passive: true });
  }
  // Replace stale mousemove animations with pointermove so they fire on touch too
  function patchPointerEvents() {
    const bloom = document.querySelector(".atmospheric-bloom");
    if (bloom) {
      const move = (e) => {
        const x = e.clientX, y = e.clientY;
        bloom.style.transition = "left 1.4s ease-out, top 1.4s ease-out";
        bloom.style.left = x + "px";
        bloom.style.top = y + "px";
      };
      document.addEventListener("pointermove", move, { passive: true });
    }
  }

  /* ---------- Boot ---------- */
  function boot() {
    const theme = detectTheme();
    applyTheme(theme);
    const lang = detectLang();
    applyLang(lang);
    buildControl(theme, lang);
    wireHapticOnInteractives();
    patchPointerEvents();

    // React to system theme changes only if user hasn't explicitly chosen
    try {
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      mq.addEventListener && mq.addEventListener("change", (e) => {
        if (localStorage.getItem(STORE.theme)) return;
        applyTheme(e.matches ? "light" : "dark");
        const btn = document.querySelector("#edge-ctl button");
        if (btn) btn.innerHTML = e.matches ? SUN_SVG : MOON_SVG;
      });
    } catch (e) {}
  }

  // Apply theme & lang ASAP to avoid flash
  applyTheme(detectTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
