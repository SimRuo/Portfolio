import { useId, useMemo } from 'react'
import Box from '@mui/material/Box'

/**
 * The card-photo hover effect from indexca.se/testofeight, adapted from a
 * colour tint to a darkened grayscale one. A single backdrop-filter
 * (grayscale + darken, see index.css's .tint) covers the whole shot, and
 * an SVG alpha mask carves a 12x7 grid of squares out of it. On hover each
 * mask cell snaps to transparent with steps(1,end) instead of easing, on
 * its own scattered delay, so the scrim dissolves off in a scatter of
 * squares rather than fading as one sheet. Delays are derived from a
 * seeded hash so the scatter is stable across renders and not the same
 * wipe on every card.
 *
 * The filter is one uncut shape — the mask is what's cut into cells, not
 * the filter itself — because mask cells can safely overlap (an alpha
 * union) to paper over CSS's subpixel grid-rounding gaps, where
 * overlapping the filter directly cannot: two stacked grayscale+brightness
 * passes darken their overlap further than either alone, turning a
 * rounding gap into a visible seam either way.
 */
const COLS = 12
const ROWS = 7
const CELLS = COLS * ROWS
const STEP_MS = 33
const PAD = 0.01 // fraction of the shot's size each cell overlaps its neighbours by

function tintBuckets(seed, count = CELLS) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) & 0x7fffffff
  const buckets = []
  for (let k = 0; k < count; k++) {
    h = (h * 1103515245 + 12345) & 0x7fffffff
    buckets.push(h % 10)
  }
  return buckets
}

export default function Tint({ seed }) {
  const buckets = useMemo(() => tintBuckets(seed), [seed])
  const maskId = `tint-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const w = 1 / COLS
  const h = 1 / ROWS

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
        <mask id={maskId} maskContentUnits="objectBoundingBox">
          {buckets.map((b, i) => {
            const col = i % COLS
            const row = Math.floor(i / COLS)
            return (
              <rect
                key={i}
                className="tint-cell"
                x={col * w - PAD}
                y={row * h - PAD}
                width={w + PAD * 2}
                height={h + PAD * 2}
                style={{ '--in': `${b * STEP_MS}ms`, '--out': `${(9 - b) * STEP_MS}ms` }}
              />
            )
          })}
        </mask>
      </svg>
      <Box
        className="tint"
        aria-hidden
        sx={{ WebkitMaskImage: `url(#${maskId})`, maskImage: `url(#${maskId})` }}
      />
    </>
  )
}
