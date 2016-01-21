# MyHealthApp
The MyHealth App is developed for a NGO. 
This is a mobile app development , where a person can go and store his medicine reminders, 
Appointment reminders and Contacts to contact their Doctors or Hospitals in case of Emergency.

This app is developed using Ionic Framework for the UI.


#Softwares to be installed for Running this app.
#Steps:

<b>
1. sudo npm install -g cordova
2.sudo npm install -g ionic
3. ionic platform add ios 
4. ionic platform add android
5. ionic build iOS
6. ionic emulate iOS 
7. ionic build android
8.ionic emulate android
(ionic run android)
9. ionic serve --lab (to see the app on browser)
10 npm install -g bower
11. bower install angular-local-storage --save
12.sudo npm install -g phonegap
13. phonegap serve (to run on phone gap developer app)
</b>


#Steps to View the App: 

1.<b>$git clone https://github.com/divyaabilash/MyHealthApp.git</b></br>
2.<b>$cd MyHealthApp</b></br>
3.<b>$ionic build ios</b> or <b> $ionic build android </b>(According to platform installed during Ionic installation)</br>
4.<b>$ionic emulate ios</b> or <b> $ionic emulate android (to run on simulator)</b></br>
or </br>
<b>$ionic serve --lab</b>(this comment will open the browser with Android and ios view of the app)</br>
5. If we want to test on the phone , Install the phone gap app in the phone. </br>
Run the command : <b>$phonegap serve</b></br>
we will be getting the server address on the command prompt .</br>
on opening the phone gap app , enter that server address and then you will be able to see the App in the mobile.</br>
