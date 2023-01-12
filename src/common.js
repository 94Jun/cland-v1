export const getNowDate = () => {
  return new Date().toISOString().slice(0, 10)
}
export const getID = () => {
  return Math.random().toString(32).slice(2);
}