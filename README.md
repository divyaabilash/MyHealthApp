# MyHealthApp
The MyHealth App is developed for a NGO. 
This is a mobile app development , where a person can go and store his medicine reminders, 
Appointment reminders and Contacts to contact their Doctors or Hospitals in case of Emergency.

This app is developed using Ionic Framework for the UI.


#Softwares to be installed for Running this app.
#Steps:

<b>
1. sudo npm install -g cordova</b> installing Cordova</br><b>
2.sudo npm install -g ionic</b> installing Ionic</br><b>
3. ionic platform add ios </b> installing IOS platform for buliding the App</br><b>
4. ionic platform add android</b> installing Android platform</br><b>
5. npm install -g bower</b> installing Bower</br><b>
6. bower install angular-local-storage --save</b> installing Local Storage factility for the app</br><b>
7.sudo npm install -g phonegap</b> installing Phonegap for running the app on the phone</br><b>
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
