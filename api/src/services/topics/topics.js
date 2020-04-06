export const topics = () => {
  return db.topic.findMany()
}
