function checkDate(item) {
  new Date(item).toLocaleDateString("en-US", {
    weekday: "long",
  });
}

export default checkDate;
