/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","2c9edad8616996f5a14c11b762922835"],["/2014/07/29/vue-next/index.html","b1052161f0d3bea2885509390a14c870"],["/2014/11/09/vue-011-release/index.html","d06f8c124f9f600fe9db7ec82d5fe71e"],["/2014/12/08/011-component/index.html","8a52ae0578af837ff57ef59153f8d8aa"],["/2015/06/11/012-release/index.html","38f8d8d97be5f25402aac19736bd69d7"],["/2015/10/26/1.0.0-release/index.html","bf068bb40156298fec610ad14621aa41"],["/2015/10/28/why-no-template-url/index.html","a7d6154aa8837dcb9eeea93d1da6430e"],["/2015/12/28/vue-cli/index.html","fc3c8a61142c3d899d6921d90d90465c"],["/2016/02/06/common-gotchas/index.html","ad5c4eb041a5b3edd922067340d87e57"],["/2016/03/14/march-update/index.html","c94c7e187435fb5d91867caa76c141ca"],["/2016/04/27/announcing-2.0/index.html","6b6e0753c34731fb5b8886a0e1e64361"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","9892af8402a0928a9ff80ecec85f4006"],["/archives/2014/07/index.html","e94ff704753b02bc6b08cbbd3d472943"],["/archives/2014/11/index.html","5e283cbc957640cbda01074ad7142592"],["/archives/2014/12/index.html","ef01897bf8423041407d5edc9ca515e9"],["/archives/2014/index.html","ffd52a64b58a12a9f8f84b675754c4ff"],["/archives/2015/06/index.html","e060815f2b9e743beebd80730e6b5063"],["/archives/2015/10/index.html","ecf677f3004db1ea7c432ce63d9c4c52"],["/archives/2015/12/index.html","ce4f0dae0c0b1b9300afbbf85ad086aa"],["/archives/2015/index.html","dc37656fcf09948fbef808d037e610ab"],["/archives/2016/02/index.html","a9169b046bc55170ff5645acc4c4ceff"],["/archives/2016/03/index.html","52ed819eee32d9b45058f8b64cbb46c6"],["/archives/2016/04/index.html","d5efe2588a9e2c080980c81665db654c"],["/archives/2016/index.html","c9d21699f496ffb67b44faea333968ee"],["/archives/index.html","fcb9b53dc81b68052184f4e92e968ee1"],["/archives/page/2/index.html","44d325888620ec1841aa14b3f86d4e8b"],["/atom.xml","e7af8ee2d67c8cb821342bbb577d926a"],["/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","fbcf012cff9a26d8b39ef59e1436ce40"],["/css/page.css","4a77320090d7834b9ab16d5e223045c5"],["/css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/100offer.png","8029274e3fa53cd1f5195d4cf02d5234"],["/images/2mhost.png","cf1c6b16ae197cc8fece227593cf3cd8"],["/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/images/actualize.png","2a07999eb1d845af6d9f7fe7b2eb0253"],["/images/anymod.png","234cf9604fd55de7ce924f520d6c5610"],["/images/bit-wide.png","e7b6072d049ed29615462f7c83cbfeaa"],["/images/bit.png","db6a4b731ecc06de8bd36d64112c768b"],["/images/bmqb.png","25e28c3c20f8f32618a732fe055d6321"],["/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/images/check.png","c634675b753a1a03b587c43d8b535600"],["/images/codepilot.png","123c45958229de783198d2d893a4044c"],["/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/images/conf.png","0d1e4840e924b232e605779b5040c879"],["/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/images/datacamp.png","251ad9e67095233b3fcede7b03eaca9c"],["/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/images/down.png","2f948222df409af3121254d5fe0ed377"],["/images/email-login.png","5690bbbf2d496ebb572bf8126661768b"],["/images/famebroker.png","9a879f5f83d3583145c756ba381ca482"],["/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/images/frontend-love.png","b514babc53a0f3ddc854b0b14a54a489"],["/images/frontend-meetups.png","d9b76c14d7eaf24c6b030ac3352d1e58"],["/images/hackr-io.png","2a0d1f9625ec5b529656fe6028f66c4f"],["/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/images/hn.png","99176cdebac521e823be519aef514bb3"],["/images/htmlburger.png","c7ce1344d001e7a236a89694ed59d988"],["/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/images/icons/android-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/images/icons/android-icon-192x192.png","297f8bf4a188ec86955f8cd3495f0736"],["/images/icons/android-icon-36x36.png","e5ae07eaacb24b15478d2fbac3ec090d"],["/images/icons/android-icon-48x48.png","db4a201f604661cb836e57c6223e4d89"],["/images/icons/android-icon-72x72.png","366c88c28e54c78fa12dfcd0d5d8723d"],["/images/icons/android-icon-96x96.png","40b559df2eaf8ae34babe725ccde30ef"],["/images/icons/apple-icon-114x114.png","424e164f9d47e1cfb48936de0958e8eb"],["/images/icons/apple-icon-120x120.png","9f060efef24d07e11e907fe7ccf9594e"],["/images/icons/apple-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/images/icons/apple-icon-152x152.png","dc48f89259350831cea8e436f8958e0c"],["/images/icons/apple-icon-180x180.png","26454c9da1d7a5cbf2d4da4cc0ee3f83"],["/images/icons/apple-icon-57x57.png","27c82218198c6192752cc5ff024e886f"],["/images/icons/apple-icon-60x60.png","367febdec454266d7a982cea4ff6822d"],["/images/icons/apple-icon-72x72.png","366c88c28e54c78fa12dfcd0d5d8723d"],["/images/icons/apple-icon-76x76.png","c7624fc035b8e37683a7529e893448bc"],["/images/icons/apple-icon-precomposed.png","9983b8fb858ec6b6eafde1f69f3b2e1e"],["/images/icons/apple-icon.png","9983b8fb858ec6b6eafde1f69f3b2e1e"],["/images/icons/browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["/images/icons/favicon-16x16.png","0409aed6e377eb3c57a284daf32a53b6"],["/images/icons/favicon-32x32.png","c9dfdee31c413a436b784dcd2eb3b949"],["/images/icons/favicon-96x96.png","40b559df2eaf8ae34babe725ccde30ef"],["/images/icons/manifest.json","57a7ca65a5e92dfa1167098b0339427e"],["/images/icons/ms-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/images/icons/ms-icon-150x150.png","c3f3f8936ac5a443f033f543cb7b509e"],["/images/icons/ms-icon-310x310.png","5ce19daab7642c412d212430eda8aff0"],["/images/icons/ms-icon-70x70.png","5fac73c068e180c9dd213fdaf2324f56"],["/images/icons8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/images/infinitynewtab.png","446b9c9b5b7c251e3cf3b67ac5ed4acb"],["/images/itunescn.png","dffb5409b975a5590aab9be99fb53ca8"],["/images/jsfiddle.png","9f92527b7bce17471203e83f948292c5"],["/images/jsguru.png","31c4e9e56df283700fd81a44d46099c7"],["/images/juejin.png","46d2970cf094e50a218e1a8cd242b536"],["/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/images/loginservice-codesandbox.png","70590e4e2226f5df382e4dae9532274a"],["/images/logo.png","75b915e5e98fc9fe7bbb26d39d44424f"],["/images/logovue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/images/monterail.png","3a441c52ccf03e6d09defa528cd2d632"],["/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/images/neds.png","8936cd0dd2ea2dedb127a330448d45e8"],["/images/nsoft.png","a4b60a037e1870b022a6c5f40880dc56"],["/images/onsen-ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/images/pubnub.png","c8adaae8b1a592516f7791ad82ab25c3"],["/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/images/someline.png","d6908ea0b99280afa9655c564d385833"],["/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/images/stdlib.png","2ec485cb1b307821c82a850f440fab3f"],["/images/strikingly.png","ef615f471302167fbc882f4a5f783dd1"],["/images/tde.png","8b43557cde5163b9c7a11cc541cc9b97"],["/images/teamextension.png","29f354472d73a5568552f9475d48d5a4"],["/images/tmvuejs2.png","3ee9bd2b594a166ccc14995630c81cbe"],["/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/images/user-management.png","64d0af4c7ca02b68cb3548384f1c2c06"],["/images/valuecoders.png","1bccdd1583af0609cada15218d98a2f4"],["/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/images/vuejsadmin.png","e517dc0c38a982cfca2b123ce33dc261"],["/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/images/vueschool.png","cc8c47d63a2c5dc2e073357372e12048"],["/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/images/vuetron-heirarchy.gif","04444ec1376afad5deae6a3df0f16f46"],["/images/xfive.png","2fd3304fe6a1b44d2bfd19876e454d0c"],["/index.html","6398d75ac6f6d1655b6e535a0fa2b201"],["/js/common.js","3e012abbd558261d697fb1bfb4ba598d"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","c0b34fd784c6afa2f36b5d35d436bbba"],["/js/vue.min.js","94fbbc9116995db775c8b22e8c53297f"],["/manifest.json","1f9d32296abfe6424fabf01ea92f7a4b"],["/menu/index.html","0b9888bac5a5268960fca26057cb8637"],["/page/2/index.html","1838d94e823f8f01d7df09abacf18308"],["/perf/index.html","bd31487b491d3510043bd5bd0fe6abbc"],["/support-vuejs/index.html","c735882456852e8ff34113e5107bfe82"],["/v2/api/index.html","847f2a44906560fb39ce9b0fea8bff57"],["/v2/cookbook/adding-instance-properties.html","a8380e2ae8169c63d7612c90820c6758"],["/v2/cookbook/avoiding-memory-leaks.html","1953920a1eca9a1fd4c0b6b1e80e838d"],["/v2/cookbook/client-side-storage.html","facf24a8ca5b8103f577e1406c0fa4a7"],["/v2/cookbook/creating-custom-scroll-directives.html","f9f42463a479f7f28ddbaa3d95492b08"],["/v2/cookbook/debugging-in-vscode.html","4a48f9cd29f6a54c16271d5193e6125e"],["/v2/cookbook/dockerize-vuejs-app.html","67cb1e324f6345159b4ac4e104bdd2ee"],["/v2/cookbook/editable-svg-icons.html","cc910500f1f141a8cb03a55cad7c6c6d"],["/v2/cookbook/form-validation.html","ba7cb456f4d22df5e507fee5375a8bb4"],["/v2/cookbook/index.html","6d993a7dd221d266b40e7c4448b9db1a"],["/v2/cookbook/packaging-sfc-for-npm.html","75f3be6fb8438061031df743f2bd8f23"],["/v2/cookbook/serverless-blog.html","386585b06344596a0ee6e64a4066ecab"],["/v2/cookbook/unit-testing-vue-components.html","3f282de63decfb12b52d522bfd154bf4"],["/v2/cookbook/using-axios-to-consume-apis.html","6d7d3c3de9a684f98a4e11fe96cbeb79"],["/v2/examples/commits.html","ca31abbfd30aeccdaaf98c030d98a463"],["/v2/examples/deepstream.html","f9fb46be27333e16457ca20a669e1f0b"],["/v2/examples/elastic-header.html","24aaaf260d773d786c01a4177438158c"],["/v2/examples/firebase.html","f8c7ea3e7dfa83dc88ed870d0dafd7b5"],["/v2/examples/grid-component.html","818a86f32e65a691e39332b99630e8fb"],["/v2/examples/hackernews.html","77a74f017b7b7694ff3feb24df7b97d2"],["/v2/examples/index.html","789f87a1a21d51ef56a92c9b159c1c96"],["/v2/examples/modal.html","6722b5b8ece730cf1979faf1ca2db25a"],["/v2/examples/select2.html","1037fa8fc19fe4212dac42d868bff418"],["/v2/examples/svg.html","52c7dc121510b792f47a6535e4d9038b"],["/v2/examples/todomvc.html","597e7f8c78a119b6a7296b930ae7b8d4"],["/v2/examples/tree-view.html","ef4e5b99d8356d134e2ed31fd9b2ceba"],["/v2/guide/account-dashboard.html","c838e2f2f2618f8e64b1f8ac557f722d"],["/v2/guide/index.html","27faad78a64beea5b923ffb270d407c9"],["/v2/guide/installation.html","60f41c32f5817247b6a30e1fc9d19bc3"],["/v2/search/index.html","5e9fe6c9aaa774a23104ece41b8c0b63"],["/v2/style-guide/index.html","5762edeb4e4eac2adee073b346dcb3d3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




