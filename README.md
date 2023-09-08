# React Native wrapper for Klaviyo's Swift SDK

This is a sample react-native iOS app that uses bridge files to create a wrapper for Klaviyo's Swift SDK.  This sample app does two primary things to serve as a foundation to build/test off of. 

**Note: Event tracking is not included in this demo, we will look to incorporate in later updates.**

1) Requests notifications from the user, and create an anonymous user in Klaviyo with device token
2) Provide the end user the ability to enter an email, first name, and last name, to then tie the anonymous user to a known user. 


## Installation

We need to install two things for local compiling, and one setting within XCode to set an environment variable to hide our Klaviyo public API key. 

### Node Module Installation

- First, make sure you have node installed. 
```
npm -v
```
- If that comes back with a version number, proceed. If it doesn't please install node locally.
- After insuring node is installed, fork and clone this repository in a terminal. 
- CD (change directory) into the project folder that was just created 
- Ensure you are in the project folder, and run the below to install the node modules locally 

```
npm install
```

### CocoaPods installation and installation pod modules 
- Check to make sure Ruby is installed locally by typing 

```
ruby -v
```
- If it is installed, install Cocoapods 

```
sudo gem install cocoapods
```

- CD (change directory) into the "ios" folder
- Run the below to install the Pod modules needed 

```
Pod Install
```
### XCode - Environment Key Setup
- Open XCode and on the main prompt, select "Open a project or file"
- Navigate to: _Project Folder -> ios -> ReactNativeKlaviyoWrapper.xcworkspace_ and open that
- In the bridge file "Klaviyo.swift" note there is a place holder for an environment variable 
- To set that, do the following: 
   - Locate the "Play" button in the top left corner of XCode (don't click it), but look to the right of that 
   - You will see your project name next to an app icon, click that and then click "Edit Scheme"

![Image of the step above](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wxbYY0_cUxvYkeyO7zQ_GaY_C99n0CeYesQCPTvUHxAzGegyWslPJUVGlk16i-dZx4lhy7EGKA3Od1pRTV_ZDUWpE9Sg=w3456-h1814)
   - Edit the existing environment variable labelled "KLAVIYO_PUB_KEY" and add the value of your public API code from Klaviyo.  
   - If you need to locate your public key from Klaviyo, login and go to Settings -> API Keys -> Your public key will be on screen 

### XCode - Confirm Package Dependencies
- Package dependencies should show in the left sidebar as follows (see image)

![Image of the step above](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-y9Evd0iCINVnpHhmYyBU8wz6f_WVWcO6_FAQpyK_y0mpkoURQOemJClY5CJ1dU51-_-Cw7dR-m8JD3fe-h3yIbzEvR=w3456-h1814)

- If they do not, you will need to add via _File -> Add Packages_ in XCode
- You may also see the Packages but have a small red X next to them.  In this case, remove the package, and re-add it by pasting the url to our git repo (https://github.com/klaviyo/klaviyo-swift-sdk) in the search bar.  You will then be asked to authenticate to github to pull it down into your Xcode project.


## Running the app 
At this point you are ready to run the app. 

- Go into XCode and either click on the Play Button, or press "command + b" to build 
- You will get a terminal prompt with a Metro CLI that pops up, select "i" to run the app in iOS

![Metro CLI](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wekquXg_kpg016PiyDBP1p3msJ8KOEsFkyxJguJzDRnP_DxdGY7Tyfu-YsL0d2FigZbgmBl3jDSYNpxubh5Eu93MZeOQ=w3456-h1814)

- The app will ask you if you want to accept Push Notifications, select "Accept"
- Before doing anything else, login to your Klaviyo account after you hit accept notifications, insure an anonymous ID was created. You will see a system generated ID as a placeholder, but tied to that is the device token of the registration event. 

![image of anonymous profile](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-y_VM0CqbrXr35n1KKJNz-JmIb4Ivv1LWmDWJ46Gh_GIOIq8mU9eD_4cBAVdk9JFdcpmN6JrrPTMS-puMEo9lK4YLmp1w=w3456-h1814)

- Now go back into the React App, and enter an email address, first name, and last name, and hit submit. You will briefly see a success message to indicate the call went through.

![image of app with known user data](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yO1jTpAYD6Ni88FbmbrzSanoUAjG3l4cL8MudGCbpgGwyMDF4aFOhWMKURtqJzARstn8kyUHnjq9tRlQHH1aGGZ6uA0A=w3456-h1814)

- It may take up to 60 seconds, but you should see the anonymous ID flip to a known ID, and now you have your push notifications opt-in along side the rest of the main profile established for a user in Klaviyo. 

![image of profile being flipped](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zyrtaq4fUhBkbpc0zDWM-mo15-gswShnLDLIszZ5_Wl0-A4VdrGnt0naMbGwX57WMvx8qevtaGE6jjBEZbwKbONxA2UQ=w3456-h1814)

![image of the profile itself](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zfSZSxebOaFlUQb2b7pF7K6yXIYztKb8OEr-fD2p47ot_u0LVMKDqS9RS2JTSzc-sPNIEVeI0lxzf5rJM002lNP9zD=w3456-h1814)

## Testing push notifications 
From here, you can login to Klaviyo to send test push notification campaigns or flows, but you will not be able to receive the actual notification unless you are using a production app. Sending the notification to a device in simulator or a playground will result in you seeing a "bounced push" event in the profile list. 

![test pushes showing as bounced](https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zA3BZ06ZOj68flFXwz_xkTtCnaNghFP62cC5ZuDcs5CHaPJOIRyGcilezehpYQhI7MQ3fDAm7Gz_o0sOGeTsjAVfX7=w3456-h1814)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.