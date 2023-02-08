// 구현
function solution(id_list, report, k) {
  let idList = id_list;
  let reportHits = {};
  idList.forEach((el) => {
    reportHits[el] = 0;
  });

  let reportList = {};
  report.forEach((el) => {
    let arr = el.split(" ");
    if (!reportList[arr[0]]) reportList[arr[0]] = [arr[1]];
    else if (reportList[arr[0]].indexOf(arr[1]) === -1) {
      reportList[arr[0]].push(arr[1]);
    }
  });

  let reportKeys = Object.keys(reportList);
  reportKeys.forEach((key) => {
    reportList[key].forEach((el) => {
      reportHits[el] += 1;
    });
  });

  let result = [];
  for (item of idList) {
    let list = reportList[item];

    if (list === undefined) {
      result.push(0);
      continue;
    }
    let count = 0;
    for (user of list) {
      if (reportHits[user] >= k) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
}
