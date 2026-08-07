/**
 * Deterministic per-seed "cell dissolve" mask, ported from the hover effect
 * on indexca.se/testofeight's event photos. A tiny seeded PRNG scatters cut
 * cells across a cols x rows grid and renders them as an SVG data URI, which
 * is applied to an <img> as a CSS mask. Because mask-image can't be
 * transitioned, the reveal is faked by stepping through a short run of
 * frames (`buildDissolveFrames`) on a timer instead — see DissolveImage.jsx.
 */
export function dissolveMask(seed, cols, rows, solid = 0.46, floor = 0.12) {
  const LV = 6
  let h = 0
  const lvl = new Array(LV).fill('')
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) & 0x7fffffff
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      h = (h * 1103515245 + 12345) & 0x7fffffff
      const x = c / (cols - 1)
      const v = x >= solid ? 1 : x / solid
      if ((h % 1000) / 999 >= v) continue // cut out entirely
      let k = Math.round(v * (LV - 1)) + (((h >> 13) % 3) - 1)
      k = k < 0 ? 0 : k > LV - 1 ? LV - 1 : k
      lvl[k] += `M${c} ${r}h1v1h-1z`
    }
  }
  let paths = ''
  for (let i = 0; i < LV; i++) {
    if (!lvl[i]) continue
    const opacity = (floor + (1 - floor) * (i / (LV - 1))).toFixed(2)
    paths += `<path fill="#fff" fill-opacity="${opacity}" d="${lvl[i]}"/>`
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cols} ${rows}">${paths}</svg>`
  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`
}

// Resting, then a widening scatter across the whole frame, a beat of
// full-frame noise, and only then a resolve back to nothing (= fully
// visible). Reversed on the way out for the same burst as it forgets.
const STAGES = [
  [0.46, 0.12],
  [0.8, 0.22],
  [1.0, 0.32],
  [0.72, 0.58],
  [0.38, 0.8],
  null,
]

export function buildDissolveFrames(seed, cols, rows) {
  return STAGES.map((stage) => (stage ? dissolveMask(seed, cols, rows, stage[0], stage[1]) : 'none'))
}
