import { useEffect } from 'react';
import { SITE } from '../data/site';

export const usePageTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | İzmir Bayraklı Gözlük & Lens Mağazası`;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
    window.scrollTo(0, 0);
  }, [title, description]);
};
