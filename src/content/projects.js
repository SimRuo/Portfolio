/**
 * Project data. Copy lives in locales/{en,sv}.json under `projects.items.<id>`.
 * Static facts (stack, URLs, media paths, card variant) stay here.
 *
 * Media: `image` is always a poster fallback. If `video` is set, the card plays
 * the video inline (autoplay, muted, loop) on top of the poster.
 *
 * Variants:
 *   - "default": normal card with media + live demo + source buttons
 *   - "private": no media, no links — styled placeholder (mognadstrappan)
 *   - "bonus": smaller card, source only (canvas-extension)
 */
const projects = [
  {
    id: 'liftlog',
    variant: 'default',
    image: '/screenshots/liftlog.png',
    stack: ['React 19', 'Vite', 'MUI v7', 'ASP.NET Core', 'SQL Server', 'JWT', 'Docker', 'PWA'],
    liveUrl: 'https://liftlog.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/LiftLog',
  },
  {
    id: 'syncio',
    variant: 'default',
    image: '/screenshots/syncio.png',
    video: '/screenshots/syncio.webm',
    stack: ['React', 'MUI', '.NET 8', 'SignalR', 'yt-dlp', 'FFmpeg', 'Docker'],
    liveUrl: 'https://syncio.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/Syncio',
  },
  {
    id: 'foodscraper',
    variant: 'default',
    image: '/screenshots/foodscraper.png',
    stack: ['React 19', 'MUI v7', 'Nivo', 'TanStack Query', 'FastAPI', 'Selenium', 'BeautifulSoup', 'pandas', 'Docker'],
    liveUrl: 'https://foodscraper.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/FoodScraper',
  },
  {
    id: 'mognadstrappan',
    variant: 'private',
    stack: ['React', '.NET', 'Python', 'SQLite', 'Docker'],
  },
  {
    id: 'canvas',
    variant: 'bonus',
    video: '/screenshots/canvas.webm',
    stack: ['JavaScript', 'GNOME Shell'],
    sourceUrl: 'https://github.com/SimRuo/canvas-assignments-gnome-extension',
  },
]

export default projects
