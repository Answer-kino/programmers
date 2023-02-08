const converTime = (hour) => {
  return hour * 60;
};
// 구현
function solution(fees, records) {
  var answer = [];
  const maxTime = 1439;
  const recordDp = {};
  const timeDp = {};

  records.map((record) => {
    const [time, carNumber, history] = record.split(" ");
    let [hour, min] = time.split(":");
    min = converTime(hour) + Number(min);
    if (history === "IN") {
      recordDp[carNumber] = min;
    } else {
      const inTime = min - recordDp[carNumber];
      timeDp[carNumber] = timeDp[carNumber]
        ? timeDp[carNumber] + inTime
        : inTime;

      delete recordDp[carNumber];
    }
  });

  for (let [carNumber, inTime] of Object.entries(recordDp)) {
    inTime = maxTime - inTime;

    timeDp[carNumber] = timeDp[carNumber] ? timeDp[carNumber] + inTime : inTime;
  }

  const carNumberKeys = Object.keys(timeDp).sort((a, b) => a - b);
  for (let carNumber of carNumberKeys) {
    const defaultTime = fees[0];
    const defaultCoin = fees[1];
    const extraTime = fees[2];
    const extraCoin = fees[3];
    const time = timeDp[carNumber] - defaultTime;
    let extra = 0;
    if (time > 0) extra = Math.ceil(time / extraTime) * extraCoin;

    answer.push(defaultCoin + extra);
  }

  return answer;
}
