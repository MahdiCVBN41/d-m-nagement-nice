const sharp = require('sharp')
const path = require('path')

const assetsDir = path.join(__dirname, '..', 'public', 'assets')
const thumbDir = path.join(assetsDir, 'thumb')

// Map of thumb name -> source file (relative to assets dir)
const sources = {
  'nice.webp': 'nice.png',
  'paris.webp': 'paris.jpg',
  'marseille.webp': 'marseille.jpg',
  'lyon.webp': 'lyon.jpg',
  'nantes.webp': 'Nantes.jpg',
  'lille.webp': 'lille.jpg',
  'bordeaux.webp': 'Bordeaux.jpg',
  'toulouse.webp': 'toulouse.jpg',
  'montpellier.webp': 'montpellier.webp',
  'strasbourg.webp': 'Strasbourg.jpg',
  'grenoble.webp': 'grenoble.webp',
  'cannes.webp': 'cannes.jpg',
  'antibes.webp': 'antibes.jpg',
  'grasse.webp': 'grasse.jpg',
  'monaco.webp': 'monaco.jpg',
  'italie.webp': 'italie.jpg',
  'allemagne.webp': 'allemagne.jpg',
  'suisse.webp': 'suisse.jpg',
  'belgique.webp': 'belgique.jpg',
  'espagne.webp': 'spain.jpg',
  'luxembourg.webp': 'luxembourg.jpg'
}

async function main() {
  for (const [out, src] of Object.entries(sources)) {
    const inputPath = path.join(assetsDir, src)
    const outputPath = path.join(thumbDir, out)
    try {
      await sharp(inputPath)
        .resize(90, 90, { fit: 'cover' })
        .webp({ quality: 70 })
        .toFile(outputPath)
      const kb = Math.round((require('fs').statSync(outputPath).size) / 1024)
      console.log(`OK ${out} -> ${kb} KB`)
    } catch (e) {
      console.log(`FAIL ${out}: ${e.message}`)
    }
  }
}

main()