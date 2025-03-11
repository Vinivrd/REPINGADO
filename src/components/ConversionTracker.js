import { useEffect } from 'react';

const ConversionTracker = ({ value = 1.0, eventType = 'page_view' }) => {
  useEffect(() => {
    // Verifica se a função gtag existe
    if (window.gtag) {
      // Configuração específica para cada tipo de evento
      const eventConfig = {
        'page_view': {
          'send_to': 'AW-16834605468/XGM-CPfO_pMaEJzjrts-',
          'value': value,
          'currency': 'BRL'
        },
        'start_chat': {
          'send_to': 'AW-16834605468/XGM-CPfO_pMaEJzjrts-',
          'value': value,
          'currency': 'BRL'
        },
        'reach_roles': {
          'send_to': 'AW-16834605468/XGM-CPfO_pMaEJzjrts-',
          'value': value,
          'currency': 'BRL'
        }
      };

      window.gtag('event', 'conversion', eventConfig[eventType]);
    }
  }, [eventType, value]); // O efeito roda quando eventType ou value mudam

  return null; // Este componente não renderiza nada visualmente
};

export default ConversionTracker; 