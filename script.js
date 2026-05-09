document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const searchShortcut = document.querySelector('.search-shortcut');

  // Create Search Overlay
  const searchOverlay = document.createElement('div');
  searchOverlay.className = 'search-overlay';
  searchOverlay.innerHTML = `
    <div class="search-modal">
      <div class="search-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" placeholder="Search documentation..." id="search-input">
        <button class="close-search">ESC</button>
      </div>
      <div class="search-results" id="search-results">
        <div class="search-empty">No recent searches</div>
      </div>
    </div>
  `;
  document.body.appendChild(searchOverlay);

  const searchInput = searchOverlay.querySelector('#search-input');
  const resultsContainer = searchOverlay.querySelector('#search-results');

  const toggleSearch = (show) => {
    searchOverlay.classList.toggle('active', show);
    if (show) {
      setTimeout(() => searchInput.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      searchInput.value = '';
      resultsContainer.innerHTML = '<div class="search-empty">No recent searches</div>';
    }
  };

  if (searchShortcut) {
    searchShortcut.addEventListener('click', () => toggleSearch(true));
  }

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) toggleSearch(false);
  });

  const closeBtn = searchOverlay.querySelector('.close-search');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleSearch(false));
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearch(true);
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      toggleSearch(false);
    }
  });

  // Mock Search Logic
  const pages = [
    { title: 'Home', url: 'index.html', content: 'Lethal Labs homepage code without compromise' },
    { title: 'About Us', url: 'about.html', content: 'Mission core values design-driven open by default' },
    { title: 'Projects', url: 'projects.html', content: 'Miroko SaaS open source core research development' },
    { title: 'Documentation', url: 'docs.html', content: 'Insider program contributing project guidelines' },
    { title: 'Careers', url: 'careers.html', content: 'Join the core lethal edge roles engineering' },
    { title: 'Donate', url: 'donate.html', content: 'Support the mission bitcoin ethereum solana' },
    { title: 'Contact', url: 'contact.html', content: 'Enterprise inquiry support collaboration' }
  ];

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '<div class="search-empty">No recent searches</div>';
      return;
    }

    const filtered = pages.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.content.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      resultsContainer.innerHTML = filtered.map(p => `
        <a href="${p.url}" class="search-result-item">
          <div class="result-title">${p.title}</div>
          <div class="result-url">${p.url}</div>
        </a>
      `).join('');
    } else {
      resultsContainer.innerHTML = '<div class="search-empty">No results found</div>';
    }
  });

  // Mobile Menu Logic
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navLinks.classList.toggle('active');
      document.body.style.overflow = isActive ? 'hidden' : '';
      menuBtn.setAttribute('aria-expanded', isActive);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
