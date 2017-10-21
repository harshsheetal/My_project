
var landingPage = require ('../pages/landingPage.js');
var loginPage= require('../pages/loginPage.js');
var passwordPage= require('../pages/passwordPage.js');

var EC = protractor.ExpectedConditions;

describe('Hotel Home Page', function(){


"use strict"
it('userAbleToValidateForgotPassword', function(done){
  browser.get('https://www.yahoo.com/');
  landingPage.clickOnSigninLink();
  browser.sleep(5000);
  browser.wait(EC.urlContains('login'), 5000);
  loginPage.username.sendKeys("shahnewazzaman");
  loginPage.nextBtn.click();
  browser.wait(EC.urlContains('password'), 5000);
    //Validate password field

    var passInputField = passwordPage.passwordField;
    expect(passInputField.isEnabled()).toBe(true);

    passwordPage.passwordField.sendKeys("abcd");
    passwordPage.clickOnPasswordBtn();

  



 

 browser.sleep(5000);

done();


});

});