import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { img } from '../data/content.js';

// Fullscreen viewer built on <dialog>: Esc closes, arrow keys page through
export function Lightbox({ images, index, onClose, onIndex, title }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (index != null && !d.open) d.showModal();
    if (index == null && d.open) d.close();
  }, [index]);
  useEffect(() => {
    const onKey = (e) => {
      if (index == null) return;
      if (e.key === 'ArrowRight') onIndex((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, onIndex]);

  return (
    <dialog ref={ref} className="lightbox" onClose={onClose} onClick={(e) => e.target === e.currentTarget && onClose()}>
      {index != null && (
        <div className="stage" onClick={(e) => e.target === e.currentTarget && onClose()}>
          <figure style={{ margin: 0 }}>
            <img src={img(images[index])} alt={`${title}, image ${index + 1}`} />
            <figcaption className="caption">{title}{images.length > 1 && ` (${index + 1} of ${images.length})`}</figcaption>
          </figure>
          <button className="close" aria-label="Close" onClick={onClose}><HiX /></button>
          {images.length > 1 && (
            <>
              <button className="prev" aria-label="Previous image" onClick={() => onIndex((index - 1 + images.length) % images.length)}><HiChevronLeft /></button>
              <button className="next" aria-label="Next image" onClick={() => onIndex((index + 1) % images.length)}><HiChevronRight /></button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}

// Main image + thumbnail strip; clicking the main image opens the lightbox
export default function Gallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(null);
  return (
    <div>
      <button className="gallery-main" onClick={() => setZoom(current)} aria-label={`Enlarge ${title} image`}>
        <img src={img(images[current])} alt={`${title}, image ${current + 1}`} loading="lazy" />
        {images.length > 1 && <span className="count">{current + 1} / {images.length}</span>}
      </button>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((k, i) => (
            <button key={k} aria-current={i === current} aria-label={`Show image ${i + 1}`} onClick={() => setCurrent(i)}>
              <img src={img(k)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <Lightbox images={images} index={zoom} title={title} onClose={() => setZoom(null)} onIndex={(i) => { setZoom(i); setCurrent(i); }} />
    </div>
  );
}
