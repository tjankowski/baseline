export const ratings = () => {
  return db.rating.findMany()
}
