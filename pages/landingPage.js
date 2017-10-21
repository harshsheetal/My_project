

var landingPage = function(){


this.singInLink = element(by.id("uh-signin"));

this.clickOnSigninLink = function(){
    this.singInLink.click();
}

}

module.exports = new landingPage();