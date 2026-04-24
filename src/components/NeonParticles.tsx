import { useEffect, useRef } from 'react';

export default function NeonParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Cores da marca: Dourado, Azul elétrico e Branco intenso
    const colors = ['#D4AF37', '#1E90FF', '#ffffff', '#FFD700'];

    const createParticle = (x?: number, y?: number) => ({
      x: x !== undefined ? x : Math.random() * canvas.width,
      y: y !== undefined ? y : Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.5,
      life: 0,
      maxLife: Math.random() * 150 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 2 + 0.5,
    });

    // Inicia com ~40 partículas
    for (let i = 0; i < 40; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Movimentação e desenho dos pontos base
      particles.forEach((p, i) => {
        // Movimento errático, semelhante a eletricidade estática
        if (Math.random() > 0.8) {
          p.vx += (Math.random() - 0.5) * 2;
          p.vy += (Math.random() - 0.5) * 2;
        }
        
        // Limite de velocidade para não sumir rápido
        p.vx = Math.max(-2, Math.min(2, p.vx));
        p.vy = Math.max(-2, Math.min(2, p.vy));

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Renasce se morrer ou sair da tela
        if (p.life > p.maxLife || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle(Math.random() * canvas.width, canvas.height + 10);
        }

        // Desenhar os pontos como flashs de luz
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Conexões elétricas (Lightning/Raios)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120; // Distância de "choque"

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);

            // Zig-zag para imitar raios dinâmicos
            const segments = 3;
            for (let k = 1; k < segments; k++) {
              const t = k / segments;
              const midX = particles[i].x + dx * -t + (Math.random() - 0.5) * 15;
              const midY = particles[i].y + dy * -t + (Math.random() - 0.5) * 15;
              ctx.lineTo(midX, midY);
            }
            
            ctx.lineTo(particles[j].x, particles[j].y);

            const opacity = 1 - (dist / maxDist);
            
            // Halo de neon envolta do raio
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = opacity * 0.7;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = particles[i].color;
            ctx.stroke();

            // Core branco brilhante no centro da linha
            ctx.strokeStyle = '#ffffff';
            ctx.globalAlpha = opacity * 0.9;
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 0;
            ctx.stroke();
            
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none mix-blend-screen opacity-60" 
      style={{ zIndex: 0 }}
    />
  );
}
