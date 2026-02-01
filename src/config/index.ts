import type { ValentineConfig } from '../types';

export const CONFIG: ValentineConfig = {
  colors: {
    background: "#0a0a0a",
    heartPrimary: "#ff4d6d",
    heartSecondary: "#ff9aa2",
    particleColor: "#ff5c8a",
    textGlow: "rgba(255, 77, 109, 0.85)",
  },

  text: {
    question: "So umm…",
    valentine: "Will you be my Valentine? 👀💗",

    yesButton: "Okay fine 😌💖",
    maybeButton: "Sochne do 😴",

    successTitle: "MISSION SUCCESS 🎉",
    successMessages: [
      "Okay wow, I did NOT expect that 😳💘",
      "Reddit really works in mysterious ways 🫶",
      "I promise not to spam you… much 😇",
      "I’ll reply in more than 1 second, pakka 😌",
      "This just became my favorite notification ever 📱✨",
    ],

    compliments: [
      {
        title: "Neembu Paani Energy 🍋",
        message:
          "You’re refreshing, unpredictable, and slightly dangerous if taken lightly. 10/10 vibes 😌✨",
        delay: 0,
      },
      {
        title: "Sleepy Head 😴",
        message:
          "You give strong ‘replying half-asleep but still funny’ energy, and honestly? It’s adorable.",
        delay: 3000,
      },
      {
        title: "Instant Reply Police 🚨",
        message:
          "I love how you roast me for expecting fast replies like ‘kya 1 sec mein reply karun?’ Fair. I deserved that 😭",
        delay: 6000,
      },
      {
        title: "Easily Annoyed™ 😤",
        message:
          "You get annoyed easily, but somehow it’s cute and not scary. That’s a rare talent 😌",
        delay: 9000,
      },
      {
        title: "Reddit Fate 🧵",
        message:
          "Out of all the weird corners of Reddit, meeting you was unexpectedly… nice ✨",
        delay: 12000,
      },
      {
        title: "Low-Key Funny 😏",
        message:
          "You don’t even try to be funny — it just happens. Effortless humor is dangerous, you know?",
        delay: 15000,
      },
      {
        title: "No Pressure Zone 💖",
        message:
          "No drama, no rush, no expectations. Just vibes, laughs, and maybe more memes 😌",
        delay: 18000,
      },
    ],
  },

  animation: {
    heartbeatSpeed: 1.3,
    particleCount: 800,
    confettiPieces: 300,
    messageDelay: 1000,
    complimentDuration: 22000,
  },
};
