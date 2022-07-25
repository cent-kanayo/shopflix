I cleared the App components and move the state values and functions to context.js

I use context API to access all the state and values in any of the components that required it, keeping our app component clean

I wrapped the app at the index.js with the AppProvider to and create the useGlobalContext custom hook.

I also tried to update to react-router-dom@6 even though yarn lock is not working here

You can update the app by installing the latest version of react-dom
