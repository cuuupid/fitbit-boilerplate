# FitBit Auth Boilerplate

## Getting Started

Edit the top of `config.js` with the appropriate configuration (client id, domain, etc) from dev.fitbit.com.

It is highly recommended to use a domain. See [Surge.sh](http://surge.sh) for free static hosting--just install and use `surge .` to upload your static website.

See `app.html` for starter HTML boilerplate on making an app with the access token and user ID. Each time you go to a different page, you'll want to encode the access token and user ID into the URL. You may also set a cookie but this is reliant on the client allowing cookies which isn't always the case (also this is soon to be illegal without a Privacy Policy under GDPR).