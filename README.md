{
"cli": {
"version": ">= 14.4.0",
"appVersionSource": "remote"
},
"build": {
"development": {
"developmentClient": true,
"distribution": "internal"
},
"preview": {
"distribution": "internal"
},
"production": {
"android": {
"buildType": "apk"
},
"autoIncrement": true
}
},
"submit": {
"production": {}
}
}

eas build --platform android --profile production
