export const reviews = () => {
  return db.review.findMany()
}
