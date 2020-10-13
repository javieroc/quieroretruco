function importAll() {
  const images: any = {}
  const r = require.context('./', true, /\.(png|jpe?g|svg)$/)
  r.keys().forEach((key) => images[key.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')] = r(key));
  return images
}

export const images = importAll();
