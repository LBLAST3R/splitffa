# Split FFA Shop

Clean Node.js shop website for a Minecraft FFA server.

## Run locally

```bash
npm install
npm start
```

The site will run on `http://localhost:3000`.

## PayPal setup

Open [public/script.js](/C:/Dev/splitffa/public/script.js) and replace:

```js
business: "replace-with-your-paypal-email@example.com"
```

with your real PayPal business email.

## Main files

- [server.js](/C:/Dev/splitffa/server.js): Express server
- [public/index.html](/C:/Dev/splitffa/public/index.html): shop content
- [public/style.css](/C:/Dev/splitffa/public/style.css): yellow + sky blue visual style
- [public/script.js](/C:/Dev/splitffa/public/script.js): PayPal checkout link generation
