function buildGdGameUrl(gd, w, h, title) {
  const p = new URLSearchParams({
    id: gd,
    w: String(w),
    h: String(h),
    t: title,
  });
  return `games/gd.html?${p.toString()}`;
}

/** Official GameDistribution promo art (same asset as og:image on each game page). */
function gdThumbUrl(gd) {
  return `https://img.gamedistribution.com/${gd}-512x512.jpg`;
}

const GD_CATALOG = [
  { title: "Bubble Game 3", category: "puzzle", desc: "Clear bubbles in this classic bubble shooter — free HTML5 game.", gd: "27673bc45d2e4b27b7cd24e422f7c257", w: 1280, h: 960 },
  { title: "Basket Random", category: "sports", desc: "Wacky physics basketball — ragdoll dunks and random chaos.", gd: "bf1268dccb5d43e7970bb3edaa54afc8", w: 900, h: 600 },
  { title: "Moto X3M Bike Race Game", category: "racing", desc: "Stunt bike racing with explosive tracks and flips.", gd: "5b0abd4c0faa4f5eb190a9a16d5a1b4c", w: 720, h: 480 },
  { title: "Geometry Arrow", category: "arcade", desc: "Rhythm-style arrow dodging in a geometric world.", gd: "9ee26ba4405c456094c70af7dc31a524", w: 800, h: 600 },
  { title: "Fireboy and Watergirl 1 Forest Temple", category: "platformer", desc: "Co-op puzzle platformer — use both elements to escape the temple.", gd: "a55c9cc9c21e4fc683c8c6857f3d0c75", w: 900, h: 510 },
  { title: "Noob Village Tower Defense", category: "arcade", desc: "Defend your village with towers and upgrades.", gd: "95cde1eb260141f8b960bb3d5dbeb34a", w: 1280, h: 720 },
  { title: "Sky Assault", category: "shooter", desc: "Arcade aerial combat — blast enemies from the sky.", gd: "5af66c57218d4217812bb98762554c0d", w: 800, h: 600 },
  { title: "Age of Zombies", category: "shooter", desc: "Survive waves of zombies in classic arcade shooting action.", gd: "d82128fba97f4bac9afa5ae9e73ab362", w: 800, h: 600 },
  { title: "Fury Tanks", category: "shooter", desc: "Tank battles with power-ups and destructible arenas.", gd: "cf3034430df748ca99a461f1667a3c6c", w: 800, h: 600 },
  { title: "Mafia Sniper Crime Shooting", category: "shooter", desc: "Sniper missions in a stylized crime setting.", gd: "5083a63adc7248d8b04dd72cde2eb78c", w: 1280, h: 720 },
  { title: "Cars with Guns: Wasteland Showdown", category: "racing", desc: "Combat racing — guns, cars, and wasteland duels.", gd: "0bd1e5d745554a4c9d1defd57dd91aa5", w: 800, h: 600 },
  { title: "My Parking Lot", category: "racing", desc: "Park cars and manage a busy lot without crashes.", gd: "c9f842ab8eab48a884f3733beeffd140", w: 550, h: 990 },
  { title: "Snow Rider 3D", category: "racing", desc: "Sled downhill through winter obstacles at full speed.", gd: "3b79a8537ebc414fb4f9672a9b8c68c8", w: 960, h: 600 },
  { title: "Geometry Vibes", category: "arcade", desc: "Fast geometric runner with pulsing visuals.", gd: "b3507beea8bc46638a6d5e7c768a8202", w: 960, h: 600 },
  { title: "Geometry Arrow 2", category: "arcade", desc: "Sequel arrow-dodging challenge with new patterns.", gd: "93ec13ded90f4ef8b46b91f7654945cd", w: 800, h: 600 },
  { title: "Impostor", category: "io", desc: "Among-style stealth — find the impostor or sabotage the crew.", gd: "9abe6af0fbb440b98a3e24bf7fb0636a", w: 800, h: 600 },
  { title: "Galaxy Clicker", category: "arcade", desc: "Idle clicker in space — upgrade ships and conquer galaxies.", gd: "1f9b60ba0bc64da2b082fcc8aa4b5100", w: 800, h: 600 },
  { title: "Zindex", category: "puzzle", desc: "Layered puzzle game — think in depth and order.", gd: "a084e6ab82f9420bbe89bbe5c1b150fc", w: 1280, h: 720 },
  { title: "Draw One Part Brain Puzzle", category: "puzzle", desc: "Draw the missing piece to solve each clever scene.", gd: "4c35db256f3c4f5bbf041169c0465a3c", w: 1624, h: 750 },
  { title: "Fox Adventure", category: "platformer", desc: "Guide a fox through platform levels and collectibles.", gd: "a8ac99e5ba244f5fb4138880dbee5339", w: 800, h: 600 },
  { title: "Axe Throw", category: "arcade", desc: "Time your throws — hit targets and chain combos.", gd: "b4b0a3ebfb684bcda80a5cb8cc64278e", w: 1920, h: 1080 },
  { title: "Football Kick 3D", category: "sports", desc: "Curve shots and score from free kicks in 3D.", gd: "bd03a8447d8b45078037b50a0d1a536e", w: 750, h: 1334 },
  { title: "Stack Tower Pro", category: "arcade", desc: "Stack blocks as high as you can — precision timing.", gd: "732542dbfb7f4804b95a8ece1e56545a", w: 800, h: 600 },
  { title: "Tank Stars", category: "shooter", desc: "Turn-based tank artillery — aim, angle, and destroy.", gd: "659090e00bfc4650899550d63f8a130d", w: 800, h: 600 },
  { title: "Archers Random", category: "shooter", desc: "Physics archery duels with random twists.", gd: "f4055ea8c0794a50badf82d7ce837eaa", w: 800, h: 600 },
  { title: "Idle Farming Business", category: "arcade", desc: "Grow crops, hire workers, and expand your farm empire.", gd: "f687697ca011407aad07979006422fa4", w: 1280, h: 720 },
  { title: "Cool SuperCars Stunts PvP", category: "racing", desc: "Stunt supercars in arenas with multiplayer flair.", gd: "c0ec7c50918143e8b7ba4b32282ed0e9", w: 800, h: 600 },
  { title: "Block Sniper", category: "shooter", desc: "Pixel-style sniper puzzles — pick targets carefully.", gd: "c458262283b944e3b57c8a26b241a0fc", w: 800, h: 600 },
  { title: "Arrow Tap Puzzle", category: "puzzle", desc: "Tap arrows in the right order to clear each board.", gd: "0b2abc29bd9c400cb7a7dce4a8a79d44", w: 800, h: 600 },
  { title: "Pool Merge", category: "puzzle", desc: "Merge pool balls to reach the highest number.", gd: "9fd0bb2225334fc69d2ae8d5aa953096", w: 1280, h: 720 },
  { title: "Police Traffic Racer", category: "racing", desc: "High-speed chases and traffic weaving as the law.", gd: "8748f54767044b99bc5373fc61596123", w: 800, h: 600 },
  { title: "Reflect Beam: Laser Logic", category: "puzzle", desc: "Bounce lasers with mirrors to hit every target.", gd: "5a53e42689db4c59bbdc3dab56cad6cd", w: 1920, h: 1080 },
  { title: "Dart Hero", category: "arcade", desc: "Aim darts at boards — bullseyes and trick shots.", gd: "1412394a892d49f5a41763899ca6354e", w: 1920, h: 1080 },
  { title: "Neon Dash: Cyber Run", category: "racing", desc: "Neon endless runner — slide and jump in synth style.", gd: "197d1fd19c3c40a0b72aca3f14a5ee79", w: 1280, h: 720 },
  { title: "Sandbox — Destroy the Ragdoll", category: "action", desc: "Physics sandbox — toss the ragdoll with tools and props.", gd: "23cb11d780fc483da862b4779ff8cefd", w: 1920, h: 1080 },
  { title: "Screw Masters 3D Puzzle", category: "puzzle", desc: "Unscrew and solve 3D bolt puzzles in order.", gd: "3cb2c3b36dca4446b037be38ddc12379", w: 800, h: 600 },
  { title: "Shape-Shifting", category: "puzzle", desc: "Morph shapes to fit obstacles and reach the goal.", gd: "6fdee70ee76d41db878c6da5d7bb39c5", w: 600, h: 800 },
  { title: "Beam Drive Car Crash Test Simulator", category: "racing", desc: "Realistic crashes and beam-based car damage.", gd: "0f73244bf0cd494ba3f42aee62061f83", w: 800, h: 600 },
  { title: "Car Crash Test: Abandoned City", category: "racing", desc: "Smash vehicles in an open abandoned test zone.", gd: "31724ff3e3554daf8359c719aa4304d6", w: 800, h: 600 },
  { title: "Ski Jump", category: "sports", desc: "Time your takeoff and land the perfect ski jump.", gd: "ed080dc2762e444385274d875eae5dd8", w: 800, h: 600 },
  { title: "Night City Racing", category: "racing", desc: "Street racing under neon lights with tight corners.", gd: "837aa1aafa2442cf81a622b505bff752", w: 800, h: 450 },
  { title: "Barbiemania", category: "sports", desc: "Stylized sports mini-games and challenges.", gd: "69de40c65abb4599988f92d8206efb38", w: 1024, h: 768 },
  { title: "Fruit Ninja", category: "arcade", desc: "Slice fruit, avoid bombs — arcade reflex classic.", gd: "a186dc9ac7f548f884db8ff54df6dd9f", w: 800, h: 600 },
  { title: "Mob Control", category: "io", desc: "Grow your mob and overwhelm the opposing crowd.", gd: "1d9e7e2883e144d293c0894e230b5441", w: 800, h: 600 },
];

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
    thumb: "https://venge.io/img/logo.png",
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
  {
    id: 29,
    title: "HexGL",
    category: "racing",
    desc: "Futuristic WebGL racing — Wipeout-inspired tracks by BKcore (opens in player).",
    url: "https://hexgl.bkcore.com/play",
    thumb: "https://hexgl.bkcore.com/image.png",
  },
  {
    id: 30,
    title: "Minesweeper",
    category: "puzzle",
    desc: "Classic minesweeper — clear the field without hitting a mine (official site, new tab).",
    url: "https://minesweeper.online/",
    thumb: "https://minesweeper.online/img/icons2/favicon.svg",
    openInNewTab: true,
  },
  {
    id: 31,
    title: "Little Alchemy",
    category: "puzzle",
    desc: "Combine elements to discover hundreds of items — official creative puzzle (new tab).",
    url: "https://littlealchemy.com/",
    thumb: "https://littlealchemy.com/img/little-alchemy-open-graph.png",
    openInNewTab: true,
  },
  {
    id: 32,
    title: "A Dark Room",
    category: "arcade",
    desc: "Minimalist text adventure — build, explore, and uncover the story in your browser.",
    url: "https://adarkroom.doublespeakgames.com/",
    thumb: "https://adarkroom.doublespeakgames.com/favicon.ico",
    openInNewTab: true,
  },
  ...GD_CATALOG.map((g, i) => ({
    id: 33 + i,
    title: g.title,
    category: g.category,
    desc: g.desc,
    url: buildGdGameUrl(g.gd, g.w, g.h, g.title),
    thumb: gdThumbUrl(g.gd),
    openAsPage: true,
  })),
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
    if (g.openAsPage) {
      card.setAttribute("data-open-as-page", "1");
      if (!g.openInNewTab) {
        card.setAttribute("title", "Opens full page");
      }
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
    if (g.openAsPage) {
      row.setAttribute("data-open-as-page", "1");
      if (!g.openInNewTab) {
        row.setAttribute("title", "Opens full page");
      }
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
  if (el.getAttribute("data-open-as-page") === "1") {
    window.location.assign(url);
    return;
  }
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
