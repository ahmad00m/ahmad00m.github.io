function openProject(url) {
  window.open(url, '_blank');
}

// --- NEW: tiny fade helper ---
const FADE_MS = 200;
function smoothNavigate(page) {
  document.body.classList.add('fade-out');
  setTimeout(() => { window.location.href = page; }, FADE_MS);
}

function openPage(page) {
  smoothNavigate(page); 
}

function applyTheme(theme) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);

  const toggle = document.getElementById('theme-toggle');
  const isDark = theme === 'dark';

  if (toggle) {
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  document.body.style.backgroundImage = isDark
    ? "url('images/wallpaper_night.jpg')"
    : "url('images/wallpaper_day.jpg')";

  localStorage.setItem('theme', theme);
}

// Guard in case the button isn't on this page
const themeToggleEl = document.getElementById('theme-toggle');
if (themeToggleEl) {
  themeToggleEl.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);

  // Remove loading class to show the page with fade-in
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 50);
});

function openResumePrompt() {
  document.getElementById("resume-prompt-overlay").style.display = "flex";
}

function showResume() {
  document.getElementById("resume-prompt-overlay").style.display = "none";
  document.getElementById("resume-overlay").style.display = "block";
  document.getElementById("resume-app").style.display = "flex";
}

function openPDF() {
  window.open("assets/resume.pdf", "_blank");
  closePromptOnly();
}

function closePromptOnly() {
  document.getElementById("resume-prompt-overlay").style.display = "none";
}

function closeResume() {
  document.getElementById("resume-app").style.display = "none";
  document.getElementById("resume-overlay").style.display = "none";
}

function enableDraggableFolders() {
  const folders = document.querySelectorAll(".folder");

  folders.forEach(folder => {
    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;

    folder.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      hasMoved = false;
      startX = e.pageX;
      startY = e.pageY;
      offsetX = e.offsetX;
      offsetY = e.offsetY;

      folder.classList.add("dragging");

      function onMouseMove(e) {
        const dx = e.pageX - startX;
        const dy = e.pageY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          hasMoved = true;
          folder.style.left = `${e.pageX - offsetX}px`;
          folder.style.top = `${e.pageY - offsetY}px`;
        }
      }

      function onMouseUp(e) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        folder.classList.remove("dragging");

        if (!hasMoved) {
          if (typeof openFileWindowFromEl === "function") {
            openFileWindowFromEl(folder);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize draggable folders
  enableDraggableFolders();

  // Resume prompt overlay click handler
  const overlay = document.getElementById("resume-prompt-overlay");
  const promptBox = document.getElementById("resume-prompt");

  if (overlay && promptBox) {
    overlay.addEventListener("click", (e) => {
      if (!promptBox.contains(e.target)) {
        closePromptOnly();
      }
    });
  }
});

// ===== Folder "file window" logic =====
let CURRENT_FOLDER_META = null;

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "");
}

function openFileWindowFromEl(folderEl) {
  const label = folderEl.querySelector("span")?.textContent?.trim() || "Project";
  const link  = folderEl.dataset.link || folderEl.dataset.url || "";
  const desc  = folderEl.dataset.desc || `descriptions/${slugify(label)}.txt`;

  CURRENT_FOLDER_META = { label, link, desc };

  const titleEl = document.getElementById("file-window-title");
  if (titleEl) titleEl.textContent = label;

  // set the anchor href so right-click works
  const gh = document.getElementById("file-row-github");
  if (gh) {
    gh.href = link || "#";
    gh.style.pointerEvents = link ? "auto" : "none";
    gh.style.opacity = link ? "1" : "0.5";
  }

  document.getElementById("file-overlay").style.display = "block";
  document.getElementById("file-window").style.display = "block";
}


function closeFileWindow() {
  document.getElementById("file-window").style.display = "none";
  document.getElementById("file-overlay").style.display = "none";
}

function openGithubLink() {
  if (!CURRENT_FOLDER_META?.link) return;
  window.open(CURRENT_FOLDER_META.link, "_blank", "noopener,noreferrer");
}

// put this near your globals
let CURRENT_PDF_OBJECT_URL = null;

function openDescriptionViewer() {
  const url = CURRENT_FOLDER_META?.desc;
  if (!url) return;

  // Show overlay to dim background
  const overlay = document.getElementById("ref-overlay");
  if (overlay) overlay.style.display = "block";

  // Show viewer
  const viewer = document.getElementById("ref-app");
  const iframe = document.getElementById("ref-iframe");
  if (!viewer || !iframe) return;

  viewer.style.display = "flex";

  // Lock background scroll while modal is open
  document.body.style.overflow = "hidden";

  const abs = new URL(url, document.baseURI).href;
  iframe.src = `${abs}#toolbar=0&zoom=125`; // or "#view=FitH"
}

function closeRefViewer() {
  const viewer = document.getElementById("ref-app");
  const overlay = document.getElementById("ref-overlay");
  const iframe = document.getElementById("ref-iframe");

  if (viewer) viewer.style.display = "none";
  if (overlay) overlay.style.display = "none";
  if (iframe) iframe.src = "about:blank";

  // Restore background scroll
  document.body.style.overflow = "";

  if (typeof CURRENT_PDF_OBJECT_URL !== "undefined" && CURRENT_PDF_OBJECT_URL) {
    URL.revokeObjectURL(CURRENT_PDF_OBJECT_URL);
    CURRENT_PDF_OBJECT_URL = null;
  }
}


// Wire up clicks once DOM is ready
(function initFileWindow() {
  document.querySelectorAll(".folder").forEach((el) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFileWindowFromEl(el);
      }
    });
    // Make folders focusable for keyboard users
    el.setAttribute("tabindex", "0");
    el.style.outline = "none";
  });

  // File rows
  const rowDesc = document.getElementById("file-row-description");
  const rowGithub = document.getElementById("file-row-github");
  if (rowDesc) {
    rowDesc.addEventListener("click", () => {
      closeFileWindow();
      openDescriptionViewer();
    });
    rowDesc.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closeFileWindow();
        openDescriptionViewer();
      }
    });
  }
  if (rowGithub) {
    rowGithub.addEventListener("click", () => openGithubLink());
    rowGithub.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openGithubLink();
      }
    });
  }

  // Click outside to close file window
  const overlay = document.getElementById("file-overlay");
  if (overlay) overlay.addEventListener("click", closeFileWindow);
})();
