import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const assetsDir = join(process.cwd(), 'public', 'assets')
const imagesDir = join(process.cwd(), 'public', 'images')

async function optimizeAssets() {
  const files = readdirSync(assetsDir).filter(f => /\.(jpe?g|png)$/i.test(f))
  for (const f of files) {
    const src = join(assetsDir, f)
    const out = join(assetsDir, f.replace(/\.(jpe?g|png)$/i, '.webp'))
    try {
      const img = sharp(src)
      const meta = await img.metadata()
      const max = Math.min(meta.width || 1200, 1200)
      await img
        .resize({ width: max, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(out)
      console.log(`OK ${f} -> ${f.replace(/\.(jpe?g|png)$/i, '.webp')} (${meta.width}x${meta.height})`)
    } catch (e) {
      console.error(`FAIL ${f}: ${e.message}`)
    }
  }
}

async function optimizeOg() {
  const svg = join(imagesDir, 'og-default.svg')
  const out = join(imagesDir, 'og-default.png')
  try {
    await sharp(svg).resize(1200, 630, { fit: 'contain' }).png().toFile(out)
    console.log('OK og-default.svg -> og-default.png 1200x630')
  } catch (e) {
    console.error(`FAIL og-default: ${e.message}`)
  }
}

await optimizeAssets()
await optimizeOg()