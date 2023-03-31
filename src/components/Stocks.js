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
        if (document.getElementById('tradingview_a9ab8') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 980,
            height: 610,
            symbol: "NASDAQ:AAPL",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: true,
            withdateranges: true,
            range: "YTD",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            calendar: true,
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            container_id: "tradingview_a9ab8"
          });
        }
      }
    },
    []
  );

  return (
    <>
    <div className='stocks1'>
      <div className='Headings'>
        Stocks
      </div>
      <div className='tradingview-widget-container graph'>
        <div id='tradingview_a9ab8' />
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" className='graph' target="_blank"><span className="blue-text"></span></a>
        </div>
      </div>
    </div>
    <div className='stocks2'>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary btn-lg stockbutton">Buy Stocks</button>
        </div>

    </div>
    </>
  );
}