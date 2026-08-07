import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

import { buildDissolveFrames } from '../lib/dissolve.js'

/**
 * An <img> that rests dissolved into scattered cells and reassembles into
 * the full picture on hover, stepping through cached frames rather than
 * transitioning (mask-image can't tween). Reverses on mouse-leave.
 */
export default function DissolveImage({ src, alt, seed, cols = 28, rows = 16, sx, onError }) {
  const imgRef = useRef(null)
  const framesRef = useRef(null)
  const stepRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    framesRef.current = buildDissolveFrames(seed, cols, rows)
    stepRef.current = 0
    imgRef.current?.style.setProperty('--m', framesRef.current[0])
    return () => clearTimeout(timerRef.current)
  }, [seed, cols, rows])

  const run = (dir) => {
    clearTimeout(timerRef.current)
    const frames = framesRef.current
    const img = imgRef.current
    if (!frames || !img) return
    const step = () => {
      stepRef.current = Math.min(Math.max(stepRef.current + dir, 0), frames.length - 1)
      img.style.setProperty('--m', frames[stepRef.current])
      if ((dir > 0 && stepRef.current < frames.length - 1) || (dir < 0 && stepRef.current > 0)) {
        timerRef.current = setTimeout(step, dir > 0 ? 45 : 240)
      }
    }
    step()
  }

  return (
    <Box
      onMouseEnter={() => run(1)}
      onMouseLeave={() => run(-1)}
      sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
    >
      <Box
        component="img"
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onError={onError}
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskImage: 'var(--m)',
          maskImage: 'var(--m)',
          ...sx,
        }}
      />
    </Box>
  )
}
