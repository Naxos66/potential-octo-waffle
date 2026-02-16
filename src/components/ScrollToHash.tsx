import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace('#', '');
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    };

    if (scrollToTarget()) return;

    const timeout = window.setTimeout(() => {
      scrollToTarget();
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [hash]);

  return null;
}
