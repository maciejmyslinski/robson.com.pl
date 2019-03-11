export const color = (...path) => ({ theme: { colors } }) => {
  return path.reduce((acc, selector) => acc[selector], colors)
}
