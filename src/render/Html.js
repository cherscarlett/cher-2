import React from 'react'
// import './base.css';

const Html = (props) => {
  const { app, store } = props
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Reem+Kufi:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/assets/base.css"></link>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `
          nav > a {
            display: inline-block;
            padding: 4px;
          }
        ` }} />
      </head>
      <body>
        <div
          id="react-container"
          dangerouslySetInnerHTML={{ __html: app }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.__REDUX_STATE__=${JSON.stringify(store.getState())};`,
          }}
        />
        <script src="/dist/app.js" type="text/javascript" />
      </body>
    </html>
  )
}

export default Html
