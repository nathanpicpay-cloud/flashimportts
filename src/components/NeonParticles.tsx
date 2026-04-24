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
    
    let mouse = { x: -1000, y: -1000, isActive: false };

    const onMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if (e instanceof MouseEvent) {
         clientX = e.clientX;
         clientY = e.clientY;
      } else if (window.TouchEvent && e instanceof TouchEvent && e.touches && e.touches.length > 0) {
         clientX = e.touches[0].clientX;
         clientY = e.touches[0].clientY;
      }
      
      if (clientX !== undefined && clientY !== undefined) {
         mouse.x = clientX;
         mouse.y = clientY;
         mouse.isActive = true;
      }
    };

    const onLeave = () => {
       mouse.isActive = false;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('touchend', onLeave);
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

      // Add a virtual particle for the mouse if active, so lightning connects to it
      let activeParticles = particles;
      if (mouse.isActive) {
        const mouseParticle = {
           x: mouse.x,
           y: mouse.y,
           vx: 0,
           vy: 0,
           color: '#ffffff',
           size: 0, 
        };
        activeParticles = [...particles, mouseParticle];
      }

      // Movimentação e desenho dos pontos base
      particles.forEach((p, i) => {
        // Atração pelo mouse
        if (mouse.isActive) {
           const dx = mouse.x - p.x;
           const dy = mouse.y - p.y;
           const dist = Math.sqrt(dx*dx + dy*dy);
           if (dist < 400) { // Raio de atração
              const force = (400 - dist) / 400;
              p.vx += (dx / dist) * force * 0.4;
              p.vy += (dy / dist) * force * 0.4;
           }
        }

        // Movimento errático, semelhante a eletricidade estática
        if (Math.random() > 0.8) {
          p.vx += (Math.random() - 0.5) * 2;
          p.vy += (Math.random() - 0.5) * 2;
        }
        
        // Limite de velocidade
        p.vx = Math.max(-2.5, Math.min(2.5, p.vx));
        p.vy = Math.max(-2.5, Math.min(2.5, p.vy));

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Renasce se morrer ou sair da tela
        if (p.life > p.maxLife || p.x < -100 || p.x > canvas.width + 100 || p.y < -100 || p.y > canvas.height + 100) {
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
      for (let i = 0; i < activeParticles.length; i++) {
        for (let j = i + 1; j < activeParticles.length; j++) {
          const dx = activeParticles[i].x - activeParticles[j].x;
          const dy = activeParticles[i].y - activeParticles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Aumenta o raio de alcance para considerar ligações ao mouse
          const isMouseConnection = (i === activeParticles.length - 1) || (j === activeParticles.length - 1);
          const maxDist = isMouseConnection ? 250 : 120; // Distância de "choque"

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(activeParticles[i].x, activeParticles[i].y);

            // Zig-zag para imitar raios dinâmicos
            const segments = isMouseConnection ? 5 : 3;
            for (let k = 1; k < segments; k++) {
              const t = k / segments;
              const midX = activeParticles[i].x + dx * -t + (Math.random() - 0.5) * 20;
              const midY = activeParticles[i].y + dy * -t + (Math.random() - 0.5) * 20;
              ctx.lineTo(midX, midY);
            }
            
            ctx.lineTo(activeParticles[j].x, activeParticles[j].y);

            const opacity = 1 - (dist / maxDist);
            
            // Halo de neon envolta do raio
            ctx.strokeStyle = activeParticles[i].color;
            ctx.globalAlpha = opacity * 0.7;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = activeParticles[i].color;
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
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('touchend', onLeave);
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
