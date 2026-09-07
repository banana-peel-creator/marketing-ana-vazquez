// ============================================================
// SHARED SIDEBAR — edit the nav links/icons ONLY here.
// Every page injects this at load time via js/main.js, so a
// change here updates the menu on all pages at once.
// ============================================================

var SIDEBAR_HTML = `
    <div>
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <a href="index.html" class="brand">
          <img src="images/logo.png" alt="Ana Vazquez" class="brand-logo">
        </a>
        <button class="nav-toggle" aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>

      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li><a href="index.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>Home</a></li>
          <li><a href="about.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/></svg>About</a></li>
          <li><a href="projects.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6 3 12l5 6"/><path d="M16 6l5 6-5 6"/></svg>Projects</a></li>
          <li><a href="references.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.3-9.3-8.4C.9 8 2 4.6 5.2 4.1c2-.3 3.7.7 4.7 2.3 1-1.6 2.7-2.6 4.7-2.3 3.2.5 4.3 3.9 2.5 7.5C19 15.7 12 20 12 20z"/></svg>References</a></li>
        </ul>

        <p class="nav-section-label">Resources</p>
        <ul class="nav-list">
          <li><a href="reading-list.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>Reading List</a></li>
          <li><a href="tools.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.4a4.4 4.4 0 0 1-5.9 4.2L8.6 18a1.5 1.5 0 1 1-2.1-2.1l6.4-6.5A4.4 4.4 0 0 1 17 3c.4 0 .8.1 1.2.2l-3 3 1.4 1.4 3-3c.2.4.4.9.4 1.4V7.4z"/></svg>Tools</a></li>
          <li><a href="podcasts.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>Podcasts</a></li>
        </ul>

        <p class="nav-section-label">Connect</p>
        <ul class="nav-list">
          <li><a href="https://www.linkedin.com/in/anacvazquez/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V17"/><circle cx="8" cy="7.2" r="0.3" fill="currentColor"/><path d="M12 17v-4c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5V17"/></svg>LinkedIn</a></li>
        </ul>
      </nav>
    </div>
`;
// Highlights the current page in the sidebar nav and wires up the
// mobile hamburger toggle. No frameworks, no build step.

document.addEventListener('DOMContentLoaded', function () {
  // --- inject shared sidebar ---
  var sidebarMount = document.getElementById('sidebar');
  if (sidebarMount) sidebarMount.innerHTML = SIDEBAR_HTML;

  // --- active link highlighting ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // --- mobile menu toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.sidebar-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
});
