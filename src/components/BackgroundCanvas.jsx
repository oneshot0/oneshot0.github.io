import { useEffect, useRef } from 'react';

/**
 * Full-screen animated canvas background with moving rays/lines.
 * Uses requestAnimationFrame for smooth 60fps animation.
 */
export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrameId;

    // Ray definition
    const RAY_COUNT = 60;
    const rays = [];

    function createRay() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        length: 80 + Math.random() * 180,
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.03 + Math.random() * 0.12,
        width: 0.5 + Math.random() * 1.5,
        // Hue alternates between cyan (180) and purple (270)
        hue: Math.random() > 0.5 ? 185 : 270,
      };
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      rays.length = 0;
      for (let i = 0; i < RAY_COUNT; i++) {
        rays.push(createRay());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const ray of rays) {
        const endX = ray.x + Math.cos(ray.angle) * ray.length;
        const endY = ray.y + Math.sin(ray.angle) * ray.length;

        const grad = ctx.createLinearGradient(ray.x, ray.y, endX, endY);
        grad.addColorStop(0, `hsla(${ray.hue}, 90%, 65%, ${ray.opacity})`);
        grad.addColorStop(1, `hsla(${ray.hue}, 90%, 65%, 0)`);

        ctx.beginPath();
        ctx.moveTo(ray.x, ray.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = ray.width;
        ctx.stroke();

        // Move ray forward
        ray.x += Math.cos(ray.angle) * ray.speed;
        ray.y += Math.sin(ray.angle) * ray.speed;

        // Wrap around edges
        if (ray.x < -ray.length || ray.x > canvas.width + ray.length ||
            ray.y < -ray.length || ray.y > canvas.height + ray.length) {
          // Reset to a random edge
          const side = Math.floor(Math.random() * 4);
          if (side === 0) { ray.x = Math.random() * canvas.width; ray.y = 0; }
          else if (side === 1) { ray.x = canvas.width; ray.y = Math.random() * canvas.height; }
          else if (side === 2) { ray.x = Math.random() * canvas.width; ray.y = canvas.height; }
          else { ray.x = 0; ray.y = Math.random() * canvas.height; }
          ray.angle = Math.random() * Math.PI * 2;
        }
      }

      animFrameId = requestAnimationFrame(draw);
    }

    init();
    draw();

    const handleResize = () => {
      resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
