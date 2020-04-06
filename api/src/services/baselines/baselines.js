export const baselines = () => {
  return db.baseline.findMany()
}
