/**
 * Composes the user's face onto a landmark background with a Voxel/Pixel art style.
 * @param backgroundUrl URL of the scenic background
 * @param faceDataUrl Base64 URL of the user's face
 * @returns Promise resolving to a base64 string of the composed image
 */
export const composeSelfie = (backgroundUrl: string, faceDataUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    // Canvas size
    const WIDTH = 800;
    const HEIGHT = 600;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // Helper to pixelate an image onto the canvas
    const drawPixelated = (img: HTMLImageElement, x: number, y: number, w: number, h: number, pixelSize: number = 8) => {
      // Create an offscreen canvas for pixelation
      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      // Calculate scaled down dimensions
      const wScaled = Math.max(1, Math.floor(w / pixelSize));
      const hScaled = Math.max(1, Math.floor(h / pixelSize));

      offCanvas.width = wScaled;
      offCanvas.height = hScaled;

      // Draw small
      offCtx.drawImage(img, 0, 0, wScaled, hScaled);

      // Disable smoothing for the scale up
      ctx.imageSmoothingEnabled = false;
      
      // Draw back onto main canvas scaled up
      ctx.drawImage(offCanvas, 0, 0, wScaled, hScaled, x, y, w, h);
    };

    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous"; // Important for external images
    // Add cache buster to prevent CORS issues with cached images
    bgImg.src = backgroundUrl + (backgroundUrl.includes('?') ? '&' : '?') + 't=' + new Date().getTime();
    
    bgImg.onload = () => {
      // 1. Draw Background (Pixelated)
      // Calculate aspect ratio to cover
      const hRatio = canvas.width / bgImg.width;
      const vRatio = canvas.height / bgImg.height;
      const ratio = Math.max(hRatio, vRatio);
      const drawW = bgImg.width * ratio;
      const drawH = bgImg.height * ratio;
      const drawX = (canvas.width - drawW) / 2;
      const drawY = (canvas.height - drawH) / 2;

      // Apply pixelation effect to background
      drawPixelated(bgImg, drawX, drawY, drawW, drawH, 6); // 6px blocks for background

      // 2. Draw Voxel/Pixel Frame Overlay
      ctx.lineWidth = 16;
      ctx.strokeStyle = '#2d2d2d';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // 3. Draw User Face
      const faceImg = new Image();
      faceImg.onload = () => {
        const faceSize = 220;
        const faceX = 40;
        const faceY = canvas.height - faceSize - 40;

        // Create a temporary canvas for the face to clip it before pixelating
        const faceCanvas = document.createElement('canvas');
        faceCanvas.width = faceSize;
        faceCanvas.height = faceSize;
        const faceCtx = faceCanvas.getContext('2d');
        
        if (faceCtx) {
            // Draw square face (Voxel style preference over circle)
            faceCtx.drawImage(faceImg, 0, 0, faceSize, faceSize);
            
            // Draw pixelated face onto main canvas
            const pixelFaceImg = new Image();
            pixelFaceImg.onload = () => {
                // Draw white background for face
                ctx.fillStyle = 'white';
                ctx.fillRect(faceX - 8, faceY - 8, faceSize + 16, faceSize + 16);
                
                // Draw face pixelated
                drawPixelated(pixelFaceImg, faceX, faceY, faceSize, faceSize, 4); // 4px blocks for face (more detail)

                // Draw simple pixel border
                ctx.lineWidth = 8;
                ctx.strokeStyle = '#000000';
                ctx.strokeRect(faceX - 4, faceY - 4, faceSize + 8, faceSize + 8);
                
                resolve(canvas.toDataURL('image/png'));
            };
            pixelFaceImg.src = faceCanvas.toDataURL();
        } else {
             // Fallback if face context fails
             resolve(canvas.toDataURL('image/png'));
        }
      };
      faceImg.onerror = (e) => {
          console.error("Face load error", e);
          reject(e);
      };
      faceImg.src = faceDataUrl;
    };
    
    bgImg.onerror = (e) => {
        console.error("Bg load error", e);
        reject(e);
    };
  });
};