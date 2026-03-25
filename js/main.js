const GAMES = [
  {
    id: 1,
    title: "Slope",
    category: "arcade",
    desc: "Control a ball rolling down an endless slope. Dodge obstacles and survive!",
    url: "https://zkayns.github.io/Slope/",
    thumb: "https://placehold.co/300x195/1a0035/ff2d78?text=SLOPE&font=oswald",
  },
  {
    id: 2,
    title: "Venge.io",
    category: "shooter",
    desc: "Team arena shooter in the browser — pick a class and battle online (replaces risky 1v1 clones).",
    url: "https://venge.io",
    thumb: "https://placehold.co/300x195/001a20/00f5ff?text=VENGE.IO&font=oswald",
  },
  {
    id: 3,
    title: "Shell Shockers",
    category: "shooter",
    desc: "Egg-based FPS mayhem. Scramble your opponents before they scramble you!",
    url: "https://shellshock.io",
    thumb: "https://placehold.co/300x195/0a001e/bf00ff?text=SHELL+SHOCKERS&font=oswald",
  },
  {
    id: 4,
    title: "Retro Bowl",
    category: "sports",
    desc: "Classic pixel-style American football. Manage your team to the championship!",
    url: "https://retrobowl.me",
    thumb: "https://placehold.co/300x195/001a0a/00ff88?text=RETRO+BOWL&font=oswald",
  },
  {
    id: 5,
    title: "Moto X3M",
    category: "racing",
    desc: "Insane motorcycle stunts across explosive obstacle courses. Rev it up!",
    url: "https://www.hoodamath.com/games/motox3m.html",
    thumb: "https://placehold.co/300x195/1a0a00/ffe600?text=MOTO+X3M&font=oswald",
  },
  {
    id: 6,
    title: "Krunker.io",
    category: "shooter",
    desc: "Lightning-fast browser FPS. Pixel art graphics, smooth gameplay.",
    url: "https://krunker.io",
    thumb: "https://placehold.co/300x195/0a001e/ff6b00?text=KRUNKER&font=oswald",
  },
  {
    id: 7,
    title: "Run 3",
    category: "arcade",
    desc: "Run, skate, and jump through space tunnels in this infinite runner!",
    url: "https://run3.io",
    thumb: "https://placehold.co/300x195/000a1a/00f5ff?text=RUN+3&font=oswald",
  },
  {
    id: 8,
    title: "Geometry Dash",
    category: "platformer",
    desc: "Jump and fly to the rhythm in this legendary platformer. Don't crash!",
    url: "https://geometrydash.io",
    thumb: "https://placehold.co/300x195/1a0020/ff2d78?text=GEOMETRY+DASH&font=oswald",
  },
  {
    id: 9,
    title: "Minecraft Classic",
    category: "sandbox",
    desc: "The original browser version of Minecraft. Build anything you imagine.",
    url: "https://classic.minecraft.net",
    thumb: "https://placehold.co/300x195/001a05/00ff88?text=MINECRAFT&font=oswald",
  },
  {
    id: 10,
    title: "Happy Wheels",
    category: "action",
    desc: "Physics-based ragdoll chaos on the official site (opens in a new tab).",
    url: "https://www.totaljerkface.com/happy_wheels.tjf",
    thumb: "https://placehold.co/300x195/1a0000/ff2d78?text=HAPPY+WHEELS&font=oswald",
    openInNewTab: true,
  },
  {
    id: 11,
    title: "2048",
    category: "puzzle",
    desc: "Slide numbered tiles and combine them to reach 2048 — hosted here so it always runs.",
    url: "games/twenty48.html",
    thumb: "https://placehold.co/300x195/0a0a1a/bf00ff?text=2048&font=oswald",
  },
  {
    id: 12,
    title: "Agar.io",
    category: "io",
    desc: "The official cell-eating arena (opens in a new tab — cannot be embedded here).",
    url: "https://agar.io",
    thumb: "https://placehold.co/300x195/001a10/00f5ff?text=AGAR.IO&font=oswald",
    openInNewTab: true,
  },
  {
    id: 13,
    title: "Slither.io",
    category: "io",
    desc: "Grow your snake on the official game site (opens in a new tab).",
    url: "https://slither.io",
    thumb: "https://placehold.co/300x195/000a10/00ff88?text=SLITHER.IO&font=oswald",
    openInNewTab: true,
  },
  {
    id: 14,
    title: "Paper.io 2",
    category: "io",
    desc: "Claim territory on the map. Watch your back — others want your land!",
    url: "https://paper-io.com",
    thumb: "https://placehold.co/300x195/1a0010/ff2d78?text=PAPER.IO+2&font=oswald",
  },
  {
    id: 15,
    title: "Wordle",
    category: "puzzle",
    desc: "Guess the 5-letter word in 6 tries. The classic word game everyone loves.",
    url: "https://mikhad.github.io/wordle/",
    thumb: "https://placehold.co/300x195/0a001a/bf00ff?text=WORDLE&font=oswald",
  },
  {
    id: 16,
    title: "Basketball Shoot",
    category: "sports",
    desc: "Click to aim shots at the hoop — simple arcade basketball hosted here.",
    url: "games/basketball.html",
    thumb: "https://placehold.co/300x195/001500/00ff88?text=BASKETBALL&font=oswald",
  },
  {
    id: 17,
    title: "Friday Night Funkin",
    category: "arcade",
    desc: "Official Newgrounds release by the creators (opens in a new tab — full game, no sketchy mirrors).",
    url: "https://www.newgrounds.com/portal/view/770371",
    thumb: "https://placehold.co/300x195/1a0030/ff2d78?text=FNF&font=oswald",
    openInNewTab: true,
  },
  {
    id: 18,
    title: "Snake Game",
    category: "arcade",
    desc: "Classic snake — eat, grow, and don't hit the walls (hosted here).",
    url: "games/snake.html",
    thumb: "https://placehold.co/300x195/00100a/00f5ff?text=SNAKE&font=oswald",
  },
  {
    id: 19,
    title: "Tetris",
    category: "puzzle",
    desc: "Stack falling blocks and clear lines in this legendary puzzle game.",
    url: "https://chvin.github.io/react-tetris/",
    thumb: "https://placehold.co/300x195/0a0020/bf00ff?text=TETRIS&font=oswald",
  },
  {
    id: 20,
    title: "Tunnel Rush",
    category: "arcade",
    desc: "Dodge obstacles in a fast 3D tunnel — GitHub-hosted build (not ad redirects).",
    url: "https://tunnel-rush-play.github.io/",
    thumb: "https://placehold.co/300x195/1a001a/ff2d78?text=TUNNEL+RUSH&font=oswald",
  },
  {
    id: 21,
    title: "Dino Game",
    category: "arcade",
    desc: "Google's iconic offline dinosaur runner. Jump over cacti, dodge pterodactyls!",
    url: "https://wayou.github.io/t-rex-runner/",
    thumb: "https://placehold.co/300x195/0a0a0a/00f5ff?text=DINO&font=oswald",
  },
  {
    id: 22,
    title: "Drift Boss",
    category: "racing",
    desc: "Drift your car around endless corners. One tap — pure skill!",
    url: "https://driftboss.io",
    thumb: "https://placehold.co/300x195/1a0800/ffe600?text=DRIFT+BOSS&font=oswald",
  },
  {
    id: 23,
    title: "Clumsy Bird",
    category: "arcade",
    desc: "Flap through pipes — a trustworthy Flappy-style game (replaces broken Crossy Road embeds).",
    url: "https://ellisonleao.github.io/clumsy-bird/",
    thumb: "https://placehold.co/300x195/001a08/00ff88?text=CLUMSY+BIRD&font=oswald",
  },
  {
    id: 24,
    title: "Celeste Classic",
    category: "platformer",
    desc: "Pico-8 precision platforming — official Lexaloffle player page.",
    url: "https://www.lexaloffle.com/bbs/play.php?pid=celeste_classic",
    thumb: "https://placehold.co/300x195/000a1a/00f5ff?text=CELESTE&font=oswald",
  },
  {
    id: 25,
    title: "Pac-Man",
    category: "arcade",
    desc: "Chomp dots, dodge ghosts, and clear the maze in this arcade legend.",
    url: "https://pacman.live",
    thumb: "https://placehold.co/300x195/1a1a00/ffe600?text=PAC-MAN&font=oswald",
  },
  {
    id: 26,
    title: "Hue Jumper 2K",
    category: "racing",
    desc: "Neon endless runner by Frank Force — same spirit as HexGL, runs reliably in-browser.",
    url: "https://killedbyapixel.github.io/HueJumper2k/",
    thumb: "https://placehold.co/300x195/0a001a/ff2d78?text=HUE+JUMPER&font=oswald",
  },
  {
    id: 27,
    title: "Ztype",
    category: "arcade",
    desc: "Type words to blast incoming ships. A skillful mash-up of typing and arcade action.",
    url: "https://zty.pe/",
    thumb: "https://placehold.co/300x195/1a0a1a/bf00ff?text=ZTYPE&font=oswald",
  },
  {
    id: 28,
    title: "Space Invaders",
    category: "shooter",
    desc: "Classic shooter — hosted here so it always loads (no third-party labs redirects).",
    url: "games/invaders.html",
    thumb: "https://placehold.co/300x195/0a0020/bf00ff?text=INVADERS&font=oswald",
  },
];

const CATEGORIES = [
  "All",
  "action",
  "arcade",
  "io",
  "puzzle",
  "racing",
  "shooter",
  "sports",
  "platformer",
  "sandbox",
];

const CAT_LABELS = {
  All: "ALL",
  action: "ACTION",
  arcade: "ARCADE",
  io: "IO GAMES",
  puzzle: "PUZZLE",
  racing: "RACING",
  shooter: "SHOOTER",
  sports: "SPORTS",
  platformer: "PLATFORMER",
  sandbox: "SANDBOX",
};

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

let activeCategory = "All";
let searchQuery = "";

function generateStars() {
  const container = document.getElementById("stars");
  if (!container) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const size = Math.random() * 2 + 0.5;
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 62}%`;
    s.style.width = `${size}px`;
    s.style.height = `${size}px`;
    s.style.setProperty("--dur", `${(Math.random() * 2.5 + 2).toFixed(1)}s`);
    s.style.setProperty("--delay", `${(Math.random() * 3.5).toFixed(1)}s`);
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

function buildTicker() {
  const ticker = document.getElementById("ticker");
  if (!ticker) return;
  const msgs = GAMES.map(
    (g) =>
      `<span class="ticker-item">▸ <span>${escapeHtml(g.title.toUpperCase())}</span> — PLAY NOW ◂</span>`
  );
  ticker.innerHTML = [...msgs, ...msgs].join("");
}

function buildCats() {
  const container = document.getElementById("cats");
  if (!container) return;
  container.replaceChildren();
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-btn" + (cat === "All" ? " active" : "");
    btn.textContent = CAT_LABELS[cat];
    btn.setAttribute("aria-pressed", cat === "All" ? "true" : "false");
    btn.setAttribute("aria-label", `Filter by ${CAT_LABELS[cat]}`);
    btn.addEventListener("click", () => {
      activeCategory = cat;
      container.querySelectorAll(".cat-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderGames();
    });
    container.appendChild(btn);
  });
}

function renderGames() {
  const grid = document.getElementById("gamesGrid");
  const countEl = document.getElementById("gameCount");
  if (!grid || !countEl) return;

  const q = searchQuery.toLowerCase().trim();
  const filtered = GAMES.filter((g) => {
    const matchCat = activeCategory === "All" || g.category === activeCategory;
    const matchSearch =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  countEl.innerHTML = `SHOWING <span>${filtered.length}</span> OF <span>${GAMES.length}</span> GAMES`;

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results">NO GAMES FOUND<br><br>TRY A DIFFERENT SEARCH</div>';
    return;
  }

  grid.replaceChildren();
  const frag = document.createDocumentFragment();
  for (const g of filtered) {
    const card = document.createElement("div");
    card.className = "game-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("data-url", g.url);
    card.setAttribute("data-title", g.title);
    if (g.openInNewTab) {
      card.setAttribute("data-new-tab", "1");
      card.setAttribute("title", "Opens in a new browser tab");
    }
    card.setAttribute("aria-label", `Play ${g.title}`);

    const badgeClass = `cat-badge badge-${g.category}`;
    const label = CAT_LABELS[g.category] || g.category;

    card.innerHTML = `
      <div class="card-thumb">
        <img src="${escapeHtml(g.thumb)}" alt="${escapeHtml(g.title)}" loading="lazy" width="300" height="195">
        <div class="play-overlay">
          <div class="play-btn-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
        </div>
        <span class="${badgeClass}">${escapeHtml(label)}</span>
      </div>
      <div class="card-info">
        <div class="card-title">${escapeHtml(g.title)}</div>
        <div class="card-desc">${escapeHtml(g.desc)}</div>
      </div>
    `;
    frag.appendChild(card);
  }
  grid.appendChild(frag);
}

function buildTopGames() {
  const container = document.getElementById("topGames");
  if (!container) return;
  const top = [...GAMES].sort(() => Math.random() - 0.5).slice(0, 5);
  container.replaceChildren();
  top.forEach((g, i) => {
    const row = document.createElement("div");
    row.className = "top-game-item";
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.setAttribute("data-url", g.url);
    row.setAttribute("data-title", g.title);
    if (g.openInNewTab) {
      row.setAttribute("data-new-tab", "1");
      row.setAttribute("title", "Opens in a new browser tab");
    }
    row.setAttribute("aria-label", `Play ${g.title}, rank ${i + 1}`);
    row.innerHTML = `
      <div class="top-rank">#${i + 1}</div>
      <img class="top-game-thumb" src="${escapeHtml(g.thumb)}" alt="" width="44" height="32">
      <div class="top-game-name">${escapeHtml(g.title)}</div>
    `;
    container.appendChild(row);
  });
}

function openGameFromEl(el) {
  const url = el.getAttribute("data-url");
  const title = el.getAttribute("data-title");
  if (!url || !title) return;
  if (el.getAttribute("data-new-tab") === "1") {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  const modal = document.getElementById("modal");
  const frame = document.getElementById("gameFrame");
  const modalTitle = document.getElementById("modalTitle");
  if (!modal || !frame || !modalTitle) return;
  modalTitle.textContent = title.toUpperCase();
  frame.src = url;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose")?.focus();
}

function closeModal() {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("gameFrame");
  if (!modal || !frame) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  frame.src = "";
  frame.removeAttribute("src");
  document.body.style.overflow = "";
}

function initGameLaunchers() {
  const grid = document.getElementById("gamesGrid");
  const topGames = document.getElementById("topGames");

  function onActivate(e) {
    const card = e.target.closest(".game-card, .top-game-item");
    if (!card || !e.currentTarget.contains(card)) return;
    openGameFromEl(card);
  }

  function onKeydown(e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".game-card, .top-game-item");
    if (!card || !e.currentTarget.contains(card)) return;
    e.preventDefault();
    openGameFromEl(card);
  }

  if (grid) {
    grid.addEventListener("click", onActivate);
    grid.addEventListener("keydown", onKeydown);
  }
  if (topGames) {
    topGames.addEventListener("click", onActivate);
    topGames.addEventListener("keydown", onKeydown);
  }

  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.getElementById("modal")?.addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
}

function initSearch() {
  const input = document.getElementById("search");
  if (!input) return;
  input.addEventListener("input", function () {
    searchQuery = this.value;
    renderGames();
  });
}

generateStars();
buildTicker();
buildCats();
buildTopGames();
initGameLaunchers();
initSearch();
renderGames();
