"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Mi-Portafolio/index.html","0ab29a5fd999aabae40541218c0d80a9"],["/Mi-Portafolio/static/css/main.b78f7b65.css","51793ad5d68a5a151b0af0538eca0ba9"],["/Mi-Portafolio/static/js/main.ca5a0b4b.js","1ab1b4e95442ae52adf9e972c63bb1d5"],["/Mi-Portafolio/static/media/GabrielaParedes-CV.46106750.pdf","46106750825939b322b68c3b50fc172e"],["/Mi-Portafolio/static/media/ajedrez-compressor.dffe259d.jpg","dffe259dec445db6e778667a1d0436c9"],["/Mi-Portafolio/static/media/ajedrez2-compressor.deab892d.png","deab892dfa7c039188a702883c3daf57"],["/Mi-Portafolio/static/media/asientos-compressor.07681699.jpg","07681699c1850fb6006a7a4b36e3be32"],["/Mi-Portafolio/static/media/asientos2-compressor.baad4d8b.png","baad4d8b73b9fd1ded5cbaf624473adc"],["/Mi-Portafolio/static/media/imageHome1-compressor.572b2b3d.jpg","572b2b3d5837f0bd9e3c9d146ef344f7"],["/Mi-Portafolio/static/media/imageProfile-compressor.fbb2c665.jpg","fbb2c665eee8e42182ae69d8967f9f40"],["/Mi-Portafolio/static/media/koala-compressor.d08c398b.jpg","d08c398be9c5792823cb07dbe74dca1b"],["/Mi-Portafolio/static/media/koala2-compressor.f42e657d.png","f42e657d076a9077cff1c8391f3b10a1"],["/Mi-Portafolio/static/media/laberinto-compressor.06985635.jpg","069856356eb94c671219ca41579ba8b4"],["/Mi-Portafolio/static/media/laberinto2-compressor.37129c4c.png","37129c4c31a2198e2e07f794c93b5e50"],["/Mi-Portafolio/static/media/logo1.341bdab7.png","341bdab7a2eb22fe7cda9dbb4032a81d"],["/Mi-Portafolio/static/media/panda-compressor.cbdaac79.jpg","cbdaac79e6c2ecbf0d54107dce68f32e"],["/Mi-Portafolio/static/media/panda2-compressor.c3dbdb6d.png","c3dbdb6d5526164edda27cec4a7a6cae"],["/Mi-Portafolio/static/media/profile-compressor.fcd0a131.jpg","fcd0a1318ca4a416f14052a073f33d78"],["/Mi-Portafolio/static/media/trivia-compressor.aecdcda4.jpg","aecdcda4d799d47776d82d5b5385e28e"],["/Mi-Portafolio/static/media/trivia2-compressor.8edf1403.png","8edf1403f20c562427073011b24cceb4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),o=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Mi-Portafolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});