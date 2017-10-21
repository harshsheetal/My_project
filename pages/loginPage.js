var loginPage= function(){

    this.username= element(by.xpath("//input[@id='login-username']"));
    this.nextBtn= element(by.xpath("//input[@id='login-signin']"));

    this.clickOnNextBtn= function()
    {
        this.nextBtn.click();
    }
}


module.exports= new loginPage();

