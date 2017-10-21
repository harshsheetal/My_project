var passwordPage= function()
{
    this.passwordField= element(by.xpath("//input[@id='login-passwd']"));
    this.passwordBtn= element(by.xpath("//button[@id='login-signin']"));

    this.clickOnPasswordBtn= function()
    {
        this.passwordBtn.click();
    }
}

module.exports= new passwordPage();