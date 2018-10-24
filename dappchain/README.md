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

## Deploy for local
```bash
yarn compile
yarn deploy:local
```

## Deploy for test
```bash
# loomのローカル起動は不要

yarn compile
yarn deploy:test
```