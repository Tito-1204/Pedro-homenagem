import confetti from 'canvas-confetti';

export const triggerGoldenCelebration = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    // Gold, amber, sky blue and white confetti
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
      colors: ['#f59e0b', '#fbbf24', '#38bdf8', '#ffffff', '#d97706']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      colors: ['#f59e0b', '#fbbf24', '#38bdf8', '#ffffff', '#0284c7']
    });
  }, 200);
};

export const triggerHeartBurst = () => {
  confetti({
    particleCount: 30,
    spread: 70,
    origin: { y: 0.8 },
    colors: ['#f43f5e', '#fb7185', '#f59e0b', '#38bdf8'],
    scalar: 1.2
  });
};
