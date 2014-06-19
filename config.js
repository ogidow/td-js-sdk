'use strict';
var path = require('path');

module.exports = {
  folders: {
    dist: 'dist',
    src: 'src',
    test: 'test'
  },
  tdd: {
    watch: 'src/**/*.js'
  },
  concat: {
    library: {
      src: [
        'src/_intro.js',
        'src/core.js',
        'src/track.js',
        'src/lib/base64.js',
        'src/lib/json2.js',
        'src/lib/treasure-domready.js',
        'src/async.js',
        'src/_outro.js'
      ],
      dest: 'td-js-sdk.js'
    },
    loader: {
      src: [
        'src/loader.js'
      ],
      dest: 'td-js-sdk-loader.js'
    }
  },
  minify: {
    library: {
      dest: 'td-js-sdk.min.js'
    },
    loader: {
      dest: 'td-js-sdk-loader.min.js'
    }
  },
  server: {
    port: '9999',
    success: {
      created: true
    },
    error: {
      error: true
    }
  },
  sauce: {
    connect: {
      username: process.env.SAUCE_USERNAME || process.env.JS_SDK_SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY || process.env.JS_SDK_SAUCE_ACCESS_KEY,
      verbose: false,
      logfile: process.env.CI ? path.join(process.env.CIRCLE_ARTIFACTS, 'sauce.log') : null,
      tunnelIdentifier: process.env.CIRCLE_BUILD_NUM ? process.env.CIRCLE_BUILD_NUM : null,
      fastFailRexegps: null,
      directDomains: null,
      logger: console.log
    },
    karma: {
      captureTimeout: 0,
      transports: ['xhr-polling'],
      singleRun: true,
      browsers: [],
      customLaunchers: {},
      plugins: ['karma-mocha', 'karma-sinon-chai', 'karma-sauce-launcher']
    },
    concurrency: 3,
    browsers: [{
      browserName: 'opera',
      platform: 'Windows 7',
      version: '12'
    }, {
      browserName: 'opera',
      platform: 'Windows XP',
      version: '11'
    },{
      browserName: 'android',
      platform: 'Linux',
      version: '4.3',
      deviceName: 'Google Nexus 7 HD Emulator'
    },{
      browserName: 'android',
      platform: 'Linux',
      version: '4.2',
      deviceName: 'LG Nexus 4 Emulator'
    },{
      browserName: 'android',
      platform: 'Linux',
      version: '4.1',
      deviceName: 'Google Nexus 7C Emulator'
    },{
      browserName: 'android',
      platform: 'Linux',
      version: '4.0',
      deviceName: 'Samsung Galaxy Nexus Emulator'
    },{
        browserName: 'firefox',
        platform: 'OS X 10.9'
      },{
        browserName: 'firefox',
        platform: 'OS X 10.6'
      }, {
        browserName: 'firefox',
        platform: 'Linux'
      }, {
        browserName: 'firefox',
        platform: 'Windows 8.1'
      }, {
        browserName: 'firefox',
        platform: 'Windows 8'
      }, {
        browserName: 'firefox',
        platform: 'Windows 7'
      }, {
        browserName: 'firefox',
        platform: 'Windows XP'
      }, {
        browserName: 'chrome',
        platform: 'OS X 10.8'
      }, {
        browserName: 'chrome',
        platform: 'OS X 10.6'
      }, {
        browserName: 'chrome',
        platform: 'Windows 8.1'
      }, {
        browserName: 'chrome',
        platform: 'Windows 8'
      }, {
        browserName: 'chrome',
        platform: 'Windows 7'
      }, {
        browserName: 'chrome',
        platform: 'Windows XP'
      }, {
        browserName: 'chrome',
        platform: 'Linux'
      }, {
        browserName: 'safari',
        platform: 'OS X 10.9',
        version: '7'
      }, {
        browserName: 'safari',
        platform: 'OS X 10.8',
        version: '6'
      }, {
        browserName: 'safari',
        platform: 'OS X 10.6',
        version: '5'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 8',
        version: '10'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '11'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '10'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      }]
  }
};
