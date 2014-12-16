if (_.keys(Meteor.settings).length == 0) {
    try {
        var localSettings = Assets.getText('local.settings.json');
        if (localSettings) {
            console.log("No settings passed in. Found local.settings.json in private folder. Using this file.");
            Meteor.settings = JSON.parse(localSettings);
        }
    } catch (ex) {
        console.log("No settings passed in. Did not find local.settings.json in private folder.");
        throw "No configuration set.";
    }
}