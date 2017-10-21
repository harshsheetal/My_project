var basePage = require('../pages/basePage.js')
var data = require('../GlobalData/data.json')
var landingPage = require ('../pages/landingPage.js');

var EC = protractor.ExpectedConditions;

describe('Hotel Home Page', function(){


var env = basePage.getEnv();
browser.get(data[env].launch_url);
var title = basePage.getPageTitle();
expect(title).toBe(data.title_yahoo);


"use strict"
it('userAbleToValidateForgotPassword', function(done){

  browser.get(data.testSiteURL);
  landingPage.clickOnSigninLink();
  browser.sleep(5000);
  //browser.wait(EC.urlContains(data.LoginPage.loginPageContainURL_login, 5000);
  element(by.xpath("//input[@name='username']")).sendKeys(data.LoginPage.userName);
  element(by.xpath("//input[@name='signin']")).click();
  browser.wait(EC.urlContains('password'), 5000);
  element(by.xpath("//input[@name='password']")).sendKeys(data.LoginPage.password);

 
  var passLinkField = element(by.xpath("//input[@id='mbr-forgot-link']"));
  expect(passLinkField.isEnabled()).toBe(true);
 


 browser.sleep(5000);

done();


});

});