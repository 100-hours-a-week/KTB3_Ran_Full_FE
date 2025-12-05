function timestamp(time) {
  const [date, t] = time.split("T");
  const [Y, M, D] = date.split("-");
  const [hour, min] = t.split(":");
  return `${Y}.${M}.${D} ${hour}:${min}`;
}
export default timestamp;
