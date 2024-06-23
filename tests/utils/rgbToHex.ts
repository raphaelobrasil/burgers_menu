const rgbToHex = (rgb: string): string => {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number)
  const formatHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  return formatHex.toUpperCase()
}

export default rgbToHex