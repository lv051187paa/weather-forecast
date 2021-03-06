export const formatDate = timestamp => {
  const d = new Date(timestamp * 1000);
  const options = {
    month: "long",
    day: "numeric"
  };
  return d.toLocaleString("en", options);
}

export const getDay = timestamp => {
  const d = new Date(timestamp * 1000);
  const options = {
    weekday: "long",
  };
  return d.toLocaleString("en", options);
}
