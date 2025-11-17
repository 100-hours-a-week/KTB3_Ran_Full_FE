function timestamp(time) {
  const Date = time.split("T")[0];
  const Time = time.split("T")[1].split(".")[0];
  console.log(Date, Time);
  return Date + " " + Time;
}

export default timestamp;
