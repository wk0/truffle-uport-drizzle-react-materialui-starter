# truffle-uport-drizzle-react-materialui-starter

This repo started as a two truffle boxes:
* Drizzle Truffle Box: https://github.com/truffle-box/drizzle-box 
* Uport Box http://truffleframework.com/boxes/react-uport

## Environmental Variables
You need to set infuraKey, uportNudgeClientID, and uportNudgeSignerKey (checkout config/env.js)

## Installation 
1. Make sure you have Truffle and Ganace CLI (I'm using the GUI)
    ```javascript
    npm install -g truffle
    npm install -g ganache-cli
    ```

I'm using the ganache-1.0.2 AppImage from http://truffleframework.com/ganache/

2. The Truffle box has already been unboxed, so all you need to do is 
    ```
    truffle compile
    truffle migrate
    ```
    Note: for the GUI, use 
    ```
    truffle migrate --network ganache_gui
    ```
    And if you want to add a network, like main or a test net, add it to truffle.js as a network. Refer to http://truffleframework.com/docs/advanced/configuration. Truffle-config.js is for Windows compatibility.

3. In your browser of choice (I'm using Firefox), open metamask and add an RPC network. Then add whichever accounts you'll need via the import account functionality. 

4. Start the app with 
    ``` 
    npm run start
    ```
    and make sure MetaMask is unlocked and on the correct network. If you get a loading screen, Metamask or your RPC node is probably the issue. 

5. Tests are using Jest, and are done via 
    ```
    npm run test
    ```

6. To build for production
    ```
    npm run build
    ```

    
