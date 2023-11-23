function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

var folderID = "1nHg-jw3KOCj8MdxcyBYKPXeM3Q-wQuzx"; //เปลี่ยนไอดีโฟลเดอร์
var sheetName = "Data"; //ชื่อชีต

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function uploadFiles(formObject) {
  
    
    var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

    //Saving records to Google Sheet
    sheet.appendRow([
      formObject.mess,
      formObject.music,
      formObject.link,
       new Date()]);
    var output = {}
    var data = sheet.getDataRange().getValues()
    data = sheet.getRange(sheet.getLastRow(),1,1,sheet.getLastColumn()).getDisplayValues()[0]
     output.data = data

    var token = 'toJt5AmTL20bi4mzkI3VMCj7A1LUIgaSwnbsx5lYyb1'//Token   
  var message = '\n❤️ ข้อความใหม่!' + '\nข้อความถึงพี่ๆ : ' + data[0] +'\nชื่อเพลง :  '+ data[1] +'\nลิงค์เพลง :  '+ data[2]
      NotifyApp.sendNotify(token, message)

    return output; 
  } 
    
/** DataTable */
function getData() {
  var sheetName = SpreadsheetApp.getActive()
  var range = sheetName.getDataRange()
  var values = range.getDisplayValues()
  Logger.log(values)
  return values
  }