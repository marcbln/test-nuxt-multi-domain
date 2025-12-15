# test-nuxt-multi-domain

created: 02/2021
updated: 07/2024

## Install

add to `/etc/hosts`:
    
    127.0.0.1 domain1.test
    127.0.0.1 domain2.test

on terminal type `npm install` then `npm run dev -- --host`, open urls in browser:
http://domain1.test:3000 and http://domain2.test:3000

-----------------------------------------------------------------

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxt.com).
