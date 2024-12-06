const promisen= new Promise(function(resolve , reject)
{
    console.log("first promise", result)
    resolve("hi")
    reject("error")

});
ppromise.then(()=>{
    console.log("Second promise",result)
});
Promise.cache(()=>{
    console.log("  ")
});