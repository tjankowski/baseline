export const labels = () => {
  return db.label.findMany()
}
