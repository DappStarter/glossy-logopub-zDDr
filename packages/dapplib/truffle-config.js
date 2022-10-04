require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name renew rural unknown idea prison metal genius'; 
let testAccounts = [
"0xccf3383fc447bb6f7bb9c3eeb8bfe081bf0dc40159a5ba45f1ea2adab0f55f6e",
"0x2b02ed4b6741c7ca887ee9b4bda61b993d8d42449ff1b9fbfd8a5419e1e9de9e",
"0x32796de08aaf4dfc5c29127cc6640689b80b64e5bb860314caf95b981072588a",
"0xef75aefd8de816d823e430ae43ad12b8067e020f95f861df5532bd0181d37ef3",
"0xa633a244953f76022273931c3394bc523a1feb6f886a1616265a3dfb6eba0aed",
"0xa67241a588f2bfa5e72431d610b99826fd1e4005e6f31335a66fd651e40c5f05",
"0xf576715f66ed88400aff7e5b5df74da914c9be8aa526594238789eaa4237af77",
"0xfb9b6c494b03f09476ca3850c8c36688615650d4a357d00ab4d6b5dcc0bcf288",
"0xc7aeb07d0716edeb973a5c5939f23247d7a085a286e29249d27cab6065f42bf7",
"0xd87a84cc28dcb0fe0631716b80985b232f8ad712288b776f3dd5f9bf0a14b9e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

