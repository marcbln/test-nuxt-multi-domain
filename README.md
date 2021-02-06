# test-nuxt-multi-domain

created: 02/2021

## Install

add to `/etc/hosts`:
    
    127.0.0.0.1 domain1.test
    127.0.0.0.1 domain2.test

on terminal type `yarn install` then `yarn dev`, open urls in browser:
http://domain1.test:3000 and http://domain2.test:3000

-----------------------------------------------------------------

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
