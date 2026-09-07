/**
 * Google Apps Script (Code.gs)
 */

const SPREADSHEET_ID = '1wV1Tq3aVq-SOefpF3sAVVIdKbKP-IB33SSAdrP8SzCs';
const SHEET_NAME = '시트1';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('교육 프로그램 만족도 조사')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 설문 데이터를 시트에 기록합니다.
 */
function submitSurvey(name, satisfaction, helpful, opinion) {

  name = String(name || '').trim();
  satisfaction = String(satisfaction || '').trim();
  helpful = String(helpful || '').trim();
  opinion = String(opinion || '').trim();

  if (!name) {
    throw new Error('이름을 입력해주세요.');
  }

  if (!satisfaction) {
    throw new Error('교육 만족도를 선택해주세요.');
  }

  if (!helpful) {
    throw new Error('가장 유익했던 내용을 입력해주세요.');
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error('시트 "' + SHEET_NAME + '"을(를) 찾을 수 없습니다.');
  }

  sheet.appendRow([
    new Date(), // 제출 시간 추가
    name,
    satisfaction,
    helpful,
    opinion
  ]);

  return {
    success: true,
    message: '설문에 참여해주셔서 감사합니다.'
  };
}
