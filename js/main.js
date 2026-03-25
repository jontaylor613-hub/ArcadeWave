const GAMES = [
  {
    id: 1,
    title: "Slope",
    category: "arcade",
    desc: "Control a ball rolling down an endless slope. Dodge obstacles and survive!",
    url: "https://zkayns.github.io/Slope/",
    thumb: "images/covers/slope.jpg",
  },
  {
    id: 2,
    title: "1v1.LOL",
    category: "shooter",
    desc: "Build and battle in this fast-paced online shooter. Outbuild your enemies!",
    url: "https://1v1-lol.com/",
    thumb: "images/covers/1v1.jpg",
  },
  {
    id: 3,
    title: "Shell Shockers",
    category: "shooter",
    desc: "Egg-based FPS mayhem. Scramble your opponents before they scramble you!",
    url: "https://shellshock.io",
    thumb: "images/covers/shell-shockers.jpg",
  },
  {
    id: 4,
    title: "Retro Bowl",
    category: "sports",
    desc: "Classic pixel-style American football. Manage your team to the championship!",
    url: "https://retrobowl.me",
    thumb: "images/covers/retro-bowl.jpg",
  },
  {
    id: 5,
    title: "Moto X3M",
    category: "racing",
    desc: "Insane motorcycle stunts across explosive obstacle courses. Rev it up!",
    url: "https://www.hoodamath.com/games/motox3m.html",
    thumb: "images/covers/moto-x3m.jpg",
  },
  {
    id: 6,
    title: "Krunker.io",
    category: "shooter",
    desc: "Lightning-fast browser FPS. Pixel art graphics, smooth gameplay.",
    url: "https://krunker.io",
    thumb: "images/covers/krunker.jpg",
  },
  {
    id: 7,
    title: "Run 3",
    category: "arcade",
    desc: "Run, skate, and jump through space tunnels in this infinite runner!",
    url: "https://run3.io",
    thumb: "images/covers/run-3.jpg",
  },
  {
    id: 8,
    title: "Geometry Dash",
    category: "platformer",
    desc: "Jump and fly to the rhythm in this legendary platformer. Don't crash!",
    url: "https://geometrydash.io",
    thumb: "images/covers/geometry-dash.jpg",
  },
  {
    id: 9,
    title: "Minecraft Classic",
    category: "sandbox",
    desc: "The original browser version of Minecraft. Build anything you imagine.",
    url: "https://classic.minecraft.net",
    thumb: "images/covers/minecraft.jpg",
  },
  {
    id: 10,
    title: "Happy Wheels",
    category: "action",
    desc: "Physics-based ragdoll chaos. Navigate gruesome obstacle courses!",
    url: "https://www.happywheelsgame.io",
    thumb: "images/covers/happy-wheels.jpg",
  },
  {
    id: 11,
    title: "2048",
    category: "puzzle",
    desc: "Slide numbered tiles and combine them to reach the elusive 2048 tile.",
    url: "https://gabrielecirulli.github.io/2048/",
    thumb: "images/covers/2048.jpg",
  },
  {
    id: 12,
    title: "Cellz.io",
    category: "io",
    desc: "Grow your cell by eating smaller players — classic eat-or-be-eaten .io action (Agar-style).",
    url: "https://cellz.io",
    thumb: "images/covers/agar.jpg",
  },
  {
    id: 13,
    title: "Slither.io",
    category: "io",
    desc: "Grow your snake by eating glowing orbs. Trap other players to devour them!",
    url: "https://slither.io",
    thumb: "images/covers/slither.jpg",
  },
  {
    id: 14,
    title: "Paper.io 2",
    category: "io",
    desc: "Claim territory on the map. Watch your back — others want your land!",
    url: "https://paper-io.com",
    thumb: "images/covers/paper-io.jpg",
  },
  {
    id: 15,
    title: "Wordle",
    category: "puzzle",
    desc: "Guess the 5-letter word in 6 tries. The classic word game everyone loves.",
    url: "https://mikhad.github.io/wordle/",
    thumb: "images/covers/wordle.jpg",
  },
  {
    id: 16,
    title: "Basketball Stars",
    category: "sports",
    desc: "1v1 basketball showdowns. Dribble past your rival and slam it home!",
    url: "https://basketball-stars.github.io/",
    thumb: "images/covers/basketball-stars.jpg",
  },
  {
    id: 17,
    title: "Friday Night Funkin",
    category: "arcade",
    desc: "Rhythm battle your way through funky musical showdowns. Hit every beat!",
    url: "https://w8.snokido.com/games/html5/friday-night-funkin/index.html",
    thumb: "images/covers/fnf.jpg",
  },
  {
    id: 18,
    title: "Snake Game",
    category: "arcade",
    desc: "The timeless classic. Eat, grow longer, and don't bite your own tail!",
    url: "https://www.snakegoogle.com",
    thumb: "images/covers/snake.jpg",
  },
  {
    id: 19,
    title: "Tetris",
    category: "puzzle",
    desc: "Stack falling blocks and clear lines in this legendary puzzle game.",
    url: "https://chvin.github.io/react-tetris/",
    thumb: "images/covers/tetris.jpg",
  },
  {
    id: 20,
    title: "Tunnel Rush",
    category: "arcade",
    desc: "Fly through a psychedelic neon tunnel at insane speed. React or die!",
    url: "https://tunnelrush.io",
    thumb: "images/covers/tunnel-rush.jpg",
  },
  {
    id: 21,
    title: "Dino Game",
    category: "arcade",
    desc: "Google's iconic offline dinosaur runner. Jump over cacti, dodge pterodactyls!",
    url: "https://wayou.github.io/t-rex-runner/",
    thumb: "images/covers/dino.jpg",
  },
  {
    id: 22,
    title: "Drift Boss",
    category: "racing",
    desc: "Drift your car around endless corners. One tap — pure skill!",
    url: "https://driftboss.io",
    thumb: "images/covers/drift-boss.jpg",
  },
  {
    id: 23,
    title: "Crossy Road",
    category: "arcade",
    desc: "Hop across traffic, rivers, and trains. How far can you go?",
    url: "https://www.crossyroad.com",
    thumb: "images/covers/crossy-road.jpg",
  },
  {
    id: 24,
    title: "Celeste Classic",
    category: "platformer",
    desc: "Pico-8 precision platforming. Climb the mountain one screen at a time!",
    url: "https://www.lexaloffle.com/bbs/widget.php?pid=celeste_classic",
    thumb: "images/covers/celeste-classic.jpg",
  },
  {
    id: 25,
    title: "Pac-Man",
    category: "arcade",
    desc: "Chomp dots, dodge ghosts, and clear the maze in this arcade legend.",
    url: "https://pacman.live",
    thumb: "images/covers/pac-man.jpg",
  },
  {
    id: 26,
    title: "HexGL",
    category: "racing",
    desc: "Futuristic hover-craft racing through a blazing neon track. Pure speed!",
    url: "https://hexgl.bkcore.com",
    thumb: "images/covers/hexgl.jpg",
  },
  {
    id: 27,
    title: "Ztype",
    category: "arcade",
    desc: "Type words to blast incoming ships. A skillful mash-up of typing and arcade action.",
    url: "https://zty.pe/",
    thumb: "images/covers/ztype.jpg",
  },
  {
    id: 28,
    title: "Space Invaders",
    category: "shooter",
    desc: "Classic arcade shooter — wipe out the alien waves before they reach you.",
    url: "https://labs.phaser.io/view.html?src=src/games/invaders/view.js&v=3.85.0",
    thumb: "images/covers/space-invaders.jpg",
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
