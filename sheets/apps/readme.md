
Consult:
```
https://github.com/google/clasp
```
```
https://www.youtube.com/watch?v=4Qlt3p6N0es&t=1046s
```

step - 1
```
npm install -g @google/clasp
```

- install to your IDEA recognized the methods of lib in google web app
```
npm i -S @types/google-apps-script
```

step - 2 

- Give permission
```
https://script.google.com/home/usersettings
``` 

- Authorize to use services
```
clasp login
```

get script id:
file->ProjectProperties

step - 2 

```
clasp clone "<script id>" --rootDir src
```

To get project from server
```
clasp pull
```

To send project from server
```
clasp push
```

To send project from server, automatically when you save the file
```
clasp push -w
```