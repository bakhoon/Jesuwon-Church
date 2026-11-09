// ===== 설정: 여기만 고치면 됩니다 =====

// Google Sheets ID (주소의 /d/ 와 /edit 사이)
// 시트는 "링크가 있는 모든 사용자: 뷰어"로 공유되어 있어야 합니다.
export const SHEET_ID = '1djndPuNARnbFz8X3BN09iBDK2FBNYrQYzCvgE66fUZw';
export const SHEET_GID = '0';

// 화면에 보여줄 최신 설교 개수
export const MAX_SERMONS = 3;

// 맨 아래 홈페이지 버튼
export const HOME_URL = 'https://jesuwon.com/';

// 시트의 열 이름 (왼쪽: 코드에서 쓰는 이름, 오른쪽: 시트에서 쓸 수 있는 열 이름들)
export const COLUMNS = {
  date: ['Date', 'date', '날짜'],
  series: ['시리즈', 'series'],
  title: ['제목', 'title'],
  videoUrl: ['동영상 링크', '동영상', 'videoUrl'],
  mp3Url: ['MP3 링크', 'MP3', 'mp3Url']
};

// =====================================

export const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}`;
