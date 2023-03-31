import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('technical-analysis-chart-demo') && 'TradingView' in window) {
          new window.TradingView.widget({
            container_id: "technical-analysis-chart-demo",
            width: "100%",
            height: "100%",
            autosize: true,
            symbol: "AAPL",
            interval: "D",
            timezone: "exchange",
            theme: "light",
            style: "1",
            toolbar_bg: "#f1f3f6",
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            save_image: false,
            studies: ["ROC@tv-basicstudies", "StochasticRSI@tv-basicstudies", "MASimple@tv-basicstudies"],
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            locale: "in"
          });
        }
      }
    },
    []
  );

  return (
    <div className='mfstot'>
        <div className='mfs1'>
          <div className='Headings'>
            Mutual Funds
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary btn-lg logbutton">Invest in Mutual Funds</button>
          </div>
      </div>
      <div className='tradingview-widget-container'>

      <div id='technical-analysis-chart-demo ' className='' />
        <div className="mutu tradingview-widget-copyright">
          <a className='' href="https://in.tradingview.com/symbols/AAPL/" rel="noopener" target="_blank"><span className="blue-text"></span></a>
        </div>
        </div>
    </div>
  );
}