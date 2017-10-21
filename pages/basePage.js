var basePage = function(){


this.navigateToURL = () => {
    browser.get(url);
}
this.getPageTitle = () => {
    browser.getTitle();
}


this.getEnv = () => {
    var env = process.env.TEST_ENV;
    if(!env){
        env = browser.params.env;
    }
    if(!env || typeof evn === 'undefined'){
        env = qa;
    }
    console.log('Using ' + env + ' environment' );
    return env;
}


}

module.exports = new basePage();