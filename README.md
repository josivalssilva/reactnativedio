# reactnativedio
Este repositório é a atividade do curso de react-native na DIO

##criar projeto react-native com template typescript
npx react-native init nomeProjeto --template react-native-template-typescript

cd nomeProjeto

##caso apareça erro de ANDROID_SDK_ROOT environment variable, fazer isto:


Go to your React-native Project -> Android
Create a file local.properties
Open the file
paste your Android SDK path like below

in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk
in linux sdk.dir = /home/USERNAME/Android/Sdk
Replace USERNAME with your user name


##instalar projeto
npx react-native run-android

##executar projeto
npx react-native start

Funcionando!!
