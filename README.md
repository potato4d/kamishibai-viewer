# Kamishibai Viewer

Web Component based Qiita slide viewer built with Vue.js(Vue CLI v3)

[![Image from Gyazo](https://i.gyazo.com/447d26f36fd0d346464be0901ee51ddc.gif)](https://gyazo.com/447d26f36fd0d346464be0901ee51ddc)

## !! Under development !!

Kamishibai is a under development library.
Because breaking changes may be born, please be careful when using.

## About

This is a library for embedding slides of Qiita which is a Japanese technical document sharing site.

demo: https://potato4d.github.io/kamishibai-viewer/dist/0.1.1/demo.html

## Usage

※ As we are planning to publish to webcomponents.org, the URL may change!

1. Load runtime on script tag

```
<script src="https://unpkg.com/vue"></script>
<script src="https://potato4d.github.io/kamishibai/dist/0.1.1/kamishibai.min.js"></script>
```

2. Write custom element tag for your HTML

```
<kamishibai-viewer data-item-id="4ff5873776992f0511d6"></kamishibai-viewer>
```

3. Done!

## Props
- itemid: String
  - Qiita item ID
- apikey?: String
  - Qiita personal access token

## Contributing

requirements:

- Node: Current LTS
- Yarn: 1.12.0 or higher

### clone repository

```bash
$ git clone https://github.com/potato4d/kamishibai-viewer
$ cd kamishibai-viewer
```

### Install deps

```bash
$ yarn
```

### Run development server

```bash
$ yarn serve
```

### Build

```bash
$ yarn build:web # Build Development website
$ yarn build # Build Web Component
```

## LICENSE

MIT @ HANATANI Takuma(@potato4d)

email: mail@potato4d.me
