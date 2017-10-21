
var landingPage = require ('../pages/landingPage.js');
var loginPage= require('../pages/loginPage.js');
   
var EC = protractor.ExpectedConditions;

describe('Hotel Home Page', function(){


"use strict"
it('userAbleToValidateForgotPassword', function(done){
  browser.get('https://www.yahoo.com/');
 
  landingPage.clickOnSigninLink();


  browser.sleep(5000);
  browser.wait(EC.urlContains('login'), 5000);

  var userInputField = loginPage.username;
  expect(userInputField.isEnabled()).toBe(true);


done();


});

});