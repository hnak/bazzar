<template>
  <div>
    <div>
      tx: {{ tx }}
    </div>
    <div>
      value: {{ value }}
    </div>
    <a
      class="button"
      type="submit"
      @click="call()"
    >
      call contract
    </a>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Web3 from 'web3';
import { Client, LocalAddress, CryptoUtils, LoomProvider } from 'loom-js';

// const privateKey = CryptoUtils.generatePrivateKey();
const privateKeyBase64 =
  '4J4On/kqG74sNyI/aaf7e5599fb7G+d69HIj7yQ/W/UsKkUhUjIG+H7luSNZrnb4dtVeLy5O1m7UaXtCBr/W5g==';
const privateKey = CryptoUtils.B64ToUint8Array(privateKeyBase64);
const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey);

// クライアントを作成
const client = new Client(
  // For Local
  // 'default',
  // 'ws://127.0.0.1:46658/websocket',
  // 'ws://127.0.0.1:46658/queryws'
  // For Test
  'extdev-plasma-us1',
  'wss://extdev-plasma-us1.dappchains.com/websocket',
  'wss://extdev-plasma-us1.dappchains.com/queryws'
);

// 関数呼び出し元のアドレス
const from = LocalAddress.fromPublicKey(publicKey).toString();

// LoomProviderを使って、web3クライアントをインスタンス化
const web3 = new Web3(new LoomProvider(client, privateKey));

const ABI = [
  {
    anonymous: false,
    inputs: [{ indexed: false, name: '_value', type: 'uint256' }],
    name: 'NewValueSet',
    type: 'event'
  },
  {
    constant: false,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'set',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'get',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

const contractAddress = '0xf8cb75a430db19ed86dec67f58e67a936dc4207c';

// Instantiate the contract and let it ready to be used
const contract = new web3.eth.Contract(ABI, contractAddress, { from });

@Component
export default class LoomContractSample extends Vue {
  tx = '';
  value = '';

  async call() {
    // バリューを47に設定
    const tx = await contract.methods.set(47).send();
    this.tx = tx;
    // バリュー47を取得
    const value = await contract.methods.get().call();
    this.value = value;
  }
}
</script>
