exports.config ={

  directConnection:true,
  capabilities:{
    'browserName': 'chrome'
  },


framework: 'jasmine',
allScriptsTimeout: 50000,

jasmineNodeOpts: {
  isVerbose: true,
  showColors: true,
  showTiming: true,
  realtimeFailure: true,
  stackTrace: false,
  defaultTimeoutInterval: 100000
},


onPrepare:function(){
   browser.ignoreSynchronization = true;
   browser.driver.manage().window().maximize();

   var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          savePath: './e2e-reports/',
          takeScreenshots: true,
        }));

 },


  suites: {
    functionTest: [
    //'Specs/User able to validate user name input filed.spec.js',
    //'Specs/User able to validate password input field.spec.js',
    'Specs/UserAbleToValidateForgotPassword.spec.js'


                    ],
    smokeTest: [
                  ],
    regressionTest: [
                ]

  }






};
