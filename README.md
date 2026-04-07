# Split FFA Shop

Clean Node.js shop website for a Minecraft FFA server.

## Production deploy

`vercel.json` is configured to serve the `public` folder as a static site on Vercel.
The storefront now ships as a single HTML page with inline CSS and inline JS to reduce extra asset requests.

## Run locally

```bash
npm install
npm start
```

The site will run on `http://localhost:3000`.

## PayPal setup

Open [public/index.html](/C:/Dev/splitffa/public/index.html) and replace:

```js
business: "replace-with-your-paypal-email@example.com"
```

with your real PayPal business email.

## Main files

- [server.js](/C:/Dev/splitffa/server.js): Express server
- [public/index.html](/C:/Dev/splitffa/public/index.html): shop content, inline CSS, and inline JS
