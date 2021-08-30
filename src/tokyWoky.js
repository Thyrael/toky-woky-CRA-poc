import React, { useEffect } from 'react';

const TokyWoky = () => {
  const tokyId = '##;'; // Replace with your toky_id
  const tokyZone = '##;'; // Replace with your toky_zone

  useEffect(() => {
    window.toky_id = tokyId;
    window.toky_zone = tokyZone;

    const tokyWokyScript = document.createElement('script');

    tokyWokyScript.src = `//az601263.vo.msecnd.net/webview/${tokyId}/embed.js`;
    tokyWokyScript.async = true;

    tokyWokyScript.onload = () => {
      console.log('LOADED');
    };
    document.head.appendChild(tokyWokyScript);
  }, []);

  return <div />;
};

export default TokyWoky;
