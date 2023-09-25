const repeatString = function (string, num) {
  let text = "";
  if (num < 0) {
    text = "ERROR";
  } else {
    for (num; num > 0; num--) {
      text = text + string;
    }
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;
