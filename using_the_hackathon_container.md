# Using the Hackathon Container

We've created an F2 container for Hackathon participants to use for quickly deploying their apps.

[http://demo.markitqa.com/Hackathon](http://demo.markitqa.com/Hackathon)

## Registering Your Apps

To view your apps on the Hackathon container, you need to register them in the new Developer Center.

[http://developer-openf2.markitqa.com](http://developer-openf2.markitqa.com)

### Existing Accounts

If you have an existing F2 Developer Account from [developer.openf2.org](https://developer.openf2.org), you should use [Forgot Password](http://developer-openf2.markitqa.com/Account/Forgot) to get a new password for the new Developer Center. _This will not affect your production F2 Developer account._

### New Accounts

Simply follow the steps to [Sign up](http://developer-openf2.markitqa.com/Account/Create) for a new Developer Center account using your primary email address. 

### Apps

The first step in registering a new app is creating a unique AppID. This AppID will be unique to your app across the entire open financial framework ecosystem.

Go to [Manage Your Containers & Apps](http://developer-openf2.markitqa.com/Manage) to register a new app.

#### Heads up!

Remember to provide a `ManifestURL` using the **Production** field on Step 3. Doing so will automatically link your app(s) with the [Hackathon container](http://demo.markitqa.com/Hackathon). 

#### Double Heads up!

You can put _any_ `ManifestURL` accessible to the browser loading the Hackathon container in the Production ManifestURL field, even your local `wks` hostname.

### Viewing Apps

**Log in** to the Hackathon container using your new Developer Center credentials.

[http://demo.markitqa.com/Hackathon/Auth](http://demo.markitqa.com/Hackathon/Auth)

The container will make a request to the F2 Registry APIs and pull in all of your apps _(as long as the `ManifestURL` is provided)_. 

#### Back to Default

If you've changed your user on the container and want to get back to the info@openf2.org account, the best way to do so is to just clear your cookies for the site.

## Listening to Hackathon Container Events

If you want your app to listen to container-broadcasted Context events, you need to add an `F2.Events` listener in your [App Class](http://docs.openf2.org/app-development.html#scripts-1). The F2 spec details this out in [Container-to-App Context](http://docs.openf2.org/app-development.html#container-to-app-context) and this sample code below does the trick.

The container will emit a "symbol change" event:

`
F2.Events.emit(
    F2.Constants.Events.CONTAINER_SYMBOL_CHANGE, 
    { 
        symbol: "AAPL", 
        name: "Apple, Inc." 
    }
);
`

Your app will listen by subscribing:

`
F2.Events.on(
    F2.Constants.Events.CONTAINER_SYMBOL_CHANGE, 
    function(data){
        F2.log("The symbol was changed to " + data.symbol);
    }
);
`

The Context message transmitted _can be any javascript object_ but in the case of the type-ahead search at the top of the container, the Context message will be an object with two key-value pairs containing symbol and name.

`
{ 
    symbol: "AAPL", 
    name: "Apple, Inc." 
}
`