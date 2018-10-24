# bazzar dappchain

## Install

```bash
yarn install
```

## Start Local DappChain

```bash
# Download
curl https://raw.githubusercontent.com/loomnetwork/loom-sdk-documentation/master/scripts/get_loom.sh | sh

# Run
./loom init
./loom run
```

## Deploy
```bash
truffle deploy --network loom_dapp_chain

# Re-deploy
truffle reset --network loom_dapp_chain
# Or
rm -rf build
truffle deploy --network loom_dapp_chain
```