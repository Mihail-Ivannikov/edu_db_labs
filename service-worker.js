/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "915f255e9aa92f26051aba89bb3c9380"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/aboba.9afd0d8a.png",
    "revision": "9afd0d8a856a1d456ca9093c518f9168"
  },
  {
    "url": "assets/img/addQuestion.fe650c1f.png",
    "revision": "fe650c1f41cd0e422bc597b1bdfc73d8"
  },
  {
    "url": "assets/img/addQuiz.9ba2e864.png",
    "revision": "9ba2e864b1a28d732de36e4d9b538cee"
  },
  {
    "url": "assets/img/addUser.3b43385d.png",
    "revision": "3b43385d6fff01a9ab60b2f9beb6a831"
  },
  {
    "url": "assets/img/getAllUsers.77601808.png",
    "revision": "7760180852820b073b6d7a0ad8db8b4b"
  },
  {
    "url": "assets/img/getQuizes.6f7fcd45.png",
    "revision": "6f7fcd458f4db3482e9358d8e6f6bb0e"
  },
  {
    "url": "assets/img/getUserById.d4af3d56.png",
    "revision": "d4af3d56ee0e60a3a6428e4185c02686"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updateQuestion.a31f2d75.png",
    "revision": "a31f2d75304a4a65ad941b88d7eddfa5"
  },
  {
    "url": "assets/img/updateQuiz.e4cab2c9.png",
    "revision": "e4cab2c9e75cdaeb06b9f7daa808d8e3"
  },
  {
    "url": "assets/img/updateUser.d4fcef2c.png",
    "revision": "d4fcef2cc031bf6e809d6b3b299f9da6"
  },
  {
    "url": "assets/js/10.6db29c85.js",
    "revision": "8c2ae717064859491bcc824cf7ad1616"
  },
  {
    "url": "assets/js/11.ce68b5da.js",
    "revision": "a4341c789ca71e2ca5c58539ae27691f"
  },
  {
    "url": "assets/js/12.b1468cfc.js",
    "revision": "bb210cb631338f01208b3f3b75d136c2"
  },
  {
    "url": "assets/js/13.02f63a74.js",
    "revision": "9ec8b9353339f50d34908ff0944bcc14"
  },
  {
    "url": "assets/js/14.3abf31d7.js",
    "revision": "9ba942219a6b61e8fbf4816af109e69d"
  },
  {
    "url": "assets/js/15.65030050.js",
    "revision": "1450219a44efd18789e9b3547f4532e9"
  },
  {
    "url": "assets/js/16.53103d7c.js",
    "revision": "798ba52c8195ca45c8c9fee095e441bc"
  },
  {
    "url": "assets/js/17.0501e11d.js",
    "revision": "9d7bd6dfc2398e514fcf7b4fb38957ab"
  },
  {
    "url": "assets/js/18.dc6e593b.js",
    "revision": "ff09739015ed921d5271171878e40084"
  },
  {
    "url": "assets/js/19.f062d6e1.js",
    "revision": "2e352cacf40ae790b3a0ff7b2f18e8bc"
  },
  {
    "url": "assets/js/2.fa139711.js",
    "revision": "5ebd306ad36c78d73fb50e334910f38b"
  },
  {
    "url": "assets/js/20.09dc4f52.js",
    "revision": "5497c9dfa374888a5b3894a0559ade7b"
  },
  {
    "url": "assets/js/21.3ab013ab.js",
    "revision": "2ca3a5d09fe717c04b034b77da0056cb"
  },
  {
    "url": "assets/js/22.96bb87fc.js",
    "revision": "2d431d784093c2a8208228091445b427"
  },
  {
    "url": "assets/js/23.a9ee506d.js",
    "revision": "71577f2c0b05bf99f53b8990ef98d16f"
  },
  {
    "url": "assets/js/24.7c93b45f.js",
    "revision": "c3bf57ed519d6c962ea3e3d13e3f6dd6"
  },
  {
    "url": "assets/js/26.6dec4e79.js",
    "revision": "57e940fd028f64683c665bc0f029fdf5"
  },
  {
    "url": "assets/js/3.4f245925.js",
    "revision": "5b1d099ad6e4c04ee040b067ca34249e"
  },
  {
    "url": "assets/js/4.be4158cc.js",
    "revision": "5bb50177e0f9b360062bdc16c2947c3c"
  },
  {
    "url": "assets/js/5.4f25205d.js",
    "revision": "db3f962a728eca3cd02aeaa0c400a274"
  },
  {
    "url": "assets/js/6.219ee8d0.js",
    "revision": "ca4bcdc8b665bce19f60e5b330ab68a7"
  },
  {
    "url": "assets/js/7.616a1f74.js",
    "revision": "fbf823ad6638bb90093a9692259e537a"
  },
  {
    "url": "assets/js/8.4824737a.js",
    "revision": "174b6147e2ef01b86e2e4169b0daa8ac"
  },
  {
    "url": "assets/js/9.3fba8c87.js",
    "revision": "2ded8347e08fc412f1051a096f944b9e"
  },
  {
    "url": "assets/js/app.04feba9f.js",
    "revision": "06be59d7f36e608cb6cacb3a773df73f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d26d93477d78ef20fce7a4fd78c08f91"
  },
  {
    "url": "design/index.html",
    "revision": "f676c570c90330b67310bae768fbc03f"
  },
  {
    "url": "index.html",
    "revision": "41e5f318a0cc2c0a61851df830f109c6"
  },
  {
    "url": "intro/index.html",
    "revision": "2b8db99ef9ffa15e763b6eb32cfddf6d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c3512de0dc40c4eb0715403f4294a7fe"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "07f2a51404c3159af480c0abda5640df"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d402699379c80728099b099dd67fee7e"
  },
  {
    "url": "software/index.html",
    "revision": "9132da387da5de261a3d51819b58ce43"
  },
  {
    "url": "test/index.html",
    "revision": "06675a8297471e62edd75a6c7d0fd10c"
  },
  {
    "url": "use cases/index.html",
    "revision": "5275f7d6dc562770920f8319edf7dda1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
