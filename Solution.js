// Выводит JSON файл в читаемом виде, очень полезно для отладки кода
function doPost(e) {
  var contents = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.openById(spreadSheetId);
  ss.getSheetByName("Debug").getRange(1,1).setValue(JSON.stringify(contents,null, 7))
}

// Перемешивает значения в массиве. 
function shuffle() { // Тасование Фишера — Йетса
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let array = [1, 2, 3]; //Массив который перемешиваем
shuffle(array)
console.log(array)
