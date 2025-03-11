import { useEffect, useRef, useState } from 'react';
import ConversionTracker from './ConversionTracker';

const ViewTracker = ({ eventType, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5 // O elemento precisa estar 50% visível para disparar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasTracked) {
      setHasTracked(true); // Garante que o evento só será rastreado uma vez
    }
  }, [isVisible, hasTracked]);

  return (
    <div ref={ref}>
      {hasTracked && <ConversionTracker eventType={eventType} />}
      {children}
    </div>
  );
};

export default ViewTracker; 