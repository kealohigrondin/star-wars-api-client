/*
  formatString() returns:
    "?" if value is "unknown"
    value when value isn't able to convert to a number
    otherwise, value as a number with commas (at this point, logically, it must be a number)
  */
export default function formatString(num) {
  if (num === "unknown") return "?";
  const ret = Math.floor(num).toLocaleString();
  return ret === "NaN" ? num : ret;
};
