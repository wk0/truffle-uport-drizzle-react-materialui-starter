import { Connect, SimpleSigner } from 'uport-connect'

// Have to set these in config/env.js
export let uport = new Connect('Nudge', {
    clientId: process.env.uportNudgeClientID,
    network: 'rinkeby',
    signer: SimpleSigner(process.env.uportNudgeSignerKey)
})

export const web3 = uport.getWeb3()
