# 예수원 설교 페이지

Google Sheets에 적은 설교 목록을 읽어서 최신 3개를 보여주는 React 페이지입니다.

## 설교 추가하기

Google Sheets에 한 줄 추가하면 끝입니다. 코드는 건드리지 않아도 됩니다.

| Date | 시리즈 | 제목 | 동영상 링크 | MP3 링크 |
|---|---|---|---|---|
| 2026-11-09 | 마태복음시리즈[83]: ... | 예수 그리스도: ... | https://youtu.be/... | https://drive.google.com/... |

- 날짜는 `YYYY-MM-DD` 형식으로 적어주세요. 날짜순으로 정렬됩니다.
- 시트와 MP3 파일은 "링크가 있는 모든 사용자: 뷰어"로 공유되어 있어야 합니다.

## 설정 바꾸기

`src/config.js`에서 시트 주소, 보여줄 설교 개수, 홈페이지 주소를 바꿀 수 있습니다.

## 내 컴퓨터에서 실행

```bash
npm install
npm run dev
```

## 배포 (GitHub Pages)

1. 이 폴더를 GitHub 저장소에 올립니다 (main 브랜치).
2. 저장소 Settings > Pages > Source 를 **GitHub Actions** 로 바꿉니다.
3. main 에 push 할 때마다 자동으로 배포됩니다.

커스텀 도메인을 쓸 때는 `public/CNAME` 파일에 도메인 한 줄 (예: `jesuwonchurch.com`)을 넣고,
도메인 DNS 에 GitHub Pages 주소를 연결합니다.
