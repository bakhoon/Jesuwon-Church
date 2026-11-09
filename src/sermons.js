import Papa from 'papaparse';
import { CSV_URL, COLUMNS, MAX_SERMONS } from './config.js';

// 열 이름 앞뒤 공백이 달라도 찾을 수 있게
function pick(row, names) {
  for (const key of Object.keys(row)) {
    if (names.includes(key.trim())) return String(row[key] ?? '').trim();
  }
  return '';
}

export function toSermons(rows) {
  return rows
    .map((row) => {
      const s = {};
      for (const [field, names] of Object.entries(COLUMNS)) s[field] = pick(row, names);
      return s;
    })
    .filter((s) => s.date && s.title)
    .sort((a, b) => b.date.localeCompare(a.date)) // 최신 날짜가 위로
    .slice(0, MAX_SERMONS);
}

export function parseCsv(text) {
  const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
  return toSermons(data);
}

export async function fetchSermons() {
  // 캐시를 피하려고 시간값을 붙여서 매번 새로 읽습니다.
  const res = await fetch(`${CSV_URL}&t=${Date.now()}`);
  if (!res.ok) throw new Error(`시트를 읽지 못했습니다 (${res.status})`);
  const text = await res.text();
  // 공유가 안 되어 있으면 CSV 대신 로그인 페이지(HTML)가 옵니다.
  if (text.trimStart().startsWith('<')) throw new Error('시트 공유 설정을 확인해 주세요');
  return parseCsv(text);
}
