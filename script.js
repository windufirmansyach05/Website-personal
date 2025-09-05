// ========================
// HAMBURGER MENU TOGGLE
// ========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu after click (mobile UX)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


// ========================
// FADE-IN ON SCROLL
// ========================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2, // muncul saat 20% kelihatan
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// ========================
// SMOOTH SCROLL OFFSET
// ========================
const navHeight = document.querySelector("header").offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const topPos = targetElement.offsetTop - navHeight; // offset untuk navbar fixed
        window.scrollTo({
          top: topPos,
          behavior: "smooth"
        });
      }
    }
  });
});

// ========================
// ANIMASI
// ========================
const skills = [
  { icon: "fa-brands fa-aws", category: "cloud" },
  { icon: "fa-brands fa-google", category: "cloud" },
  { icon: "fa-solid fa-cloud", category: "cloud" },

  { icon: "fa-solid fa-gears", category: "devops" },
  { icon: "fa-brands fa-docker", category: "devops" },
  { icon: "fa-solid fa-cubes", category: "devops" },
  { icon: "fa-brands fa-jenkins", category: "devops" },
  { icon: "fa-brands fa-linux", category: "devops" },

  { icon: "fa-brands fa-python", category: "programming" },
  { icon: "fa-brands fa-js", category: "programming" },
  { icon: "fa-brands fa-html5", category: "programming" },
  { icon: "fa-brands fa-css3-alt", category: "programming" },
  { icon: "fa-brands fa-php", category: "programming" },

  { icon: "fa-solid fa-database", category: "database" },
  { icon: "fa-solid fa-database", category: "database" },

  { icon: "fa-brands fa-git-alt", category: "tools" },
  { icon: "fa-brands fa-figma", category: "tools" }
];

const bgAnim = document.getElementById("skills-bubbles");

for (let i = 0; i < 50; i++) {
  let skill = skills[Math.floor(Math.random() * skills.length)];

  let bubble = document.createElement("div");
  bubble.classList.add("bubble", skill.category);

  let icon = document.createElement("i");
  icon.className = skill.icon;
  bubble.appendChild(icon);

  // random posisi, ukuran, durasi
  bubble.style.left = Math.random() * 100 + "%";
  let size = Math.random() * 50 + 30; // 30–80px
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.fontSize = size / 2.5 + "px";
  bubble.style.animationDuration = (Math.random() * 20 + 10) + "s";

  bgAnim.appendChild(bubble);
};