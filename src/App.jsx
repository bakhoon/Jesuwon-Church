import { useEffect, useState } from 'react';
import { fetchSermons } from './sermons.js';
import { HOME_URL } from './config.js';
import './App.css';

function LinkButton({ label, url }) {
  const valid = /^https?:\/\//.test(url || '');
  if (!valid) {
    return (
      <span className="btn disabled" aria-disabled="true">
        {label}
      </span>
    );
  }
  return (
    <a className="btn" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function SermonSection({ sermon, featured }) {
  return (
    <section className={`sermon${featured ? ' featured' : ''}`}>
      <div className="inner">
        <div className="date">{sermon.date}</div>
        {sermon.series && <div className="series">{sermon.series}</div>}
        <h2 className="title">{sermon.title}</h2>
        <div className="buttons">
          <LinkButton label="동영상" url={sermon.videoUrl} />
          <LinkButton label="MP3" url={sermon.mp3Url} />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [sermons, setSermons] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    fetchSermons()
      .then((list) => {
        setSermons(list);
        setStatus('ready');
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  }, []);

  return (
    <main>
      {status === 'loading' && <p className="status">설교 목록을 불러오는 중...</p>}
      {status === 'error' && (
        <p className="status">설교 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
      )}
      {status === 'ready' && sermons.length === 0 && (
        <p className="status">등록된 설교가 없습니다.</p>
      )}
      {sermons.map((s, i) => (
        <SermonSection
          key={`${s.date}-${s.title}`}
          sermon={s}
          featured={i === 0 || i === sermons.length - 1}
        />
      ))}

      <div className="home">
        <a href={HOME_URL}>
          예수원 홈페이지 가기
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </main>
  );
}
