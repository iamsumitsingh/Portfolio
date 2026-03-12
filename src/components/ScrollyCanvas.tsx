'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 192; // We have frames from 000 to 191 based on the directory listing

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0-1) to frame index (0-191)
  const calculateFrame = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload images
  useEffect(() => {
    let mounted = true;
    
    const loadImages = async () => {
      console.log('Starting to load sequence images...');
      const promises = Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
        return new Promise<HTMLImageElement | null>((resolve) => {
          const img = new Image();
          const frameNumber = i.toString().padStart(3, '0');
          const src = `/sequence/frame_${frameNumber}_delay-0.04s.webp`;
          img.src = src;
          
          img.onload = () => resolve(img);
          img.onerror = (e) => {
            console.error(`Failed to load image: ${src}`, e);
            resolve(null);
          };
        });
      });

      const loaded = await Promise.all(promises);
      const validImages = loaded.filter((img): img is HTMLImageElement => img !== null);
      
      console.log(`Successfully loaded ${validImages.length} of ${TOTAL_FRAMES} images.`);
      
      if (mounted) {
        setImages(validImages);
      }
    };

    loadImages();
    
    return () => {
      mounted = false;
    };
  }, []);

  // Initial draw once images are loaded
  useEffect(() => {
    if (images.length > 0) {
      console.log('Images mounted to state, rendering initial frame.');
      // ensure we are on the main thread for drawing
      requestAnimationFrame(() => drawImage(calculateFrame.get()));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const drawImage = (frameIndex: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[Math.floor(frameIndex)];
    if (!img) return;

    // object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Use slightly less dark so the #121212 blends perfectly if the image has edges
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useScrollEffect(calculateFrame, drawImage, images);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-100"
          width={1920}
          height={1080}
        />
        {/* Gradients to fade edges smoothly into the background if needed. Disabled for debug.
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]" /> */}
      </div>
    </div>
  );
}

// Custom hook to subscribe to motion value changes securely in React 18+
function useScrollEffect(
  motionValue: MotionValue<number>,
  callback: (val: number) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: any[]
) {
  useEffect(() => {
    if (deps.length === 0) return;
    const unsubscribe = motionValue.on('change', (latest: number) => {
      requestAnimationFrame(() => callback(latest));
    });
    return () => unsubscribe();
  }, [motionValue, callback, deps]);
}
