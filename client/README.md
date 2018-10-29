# bazzar 開発ガイド

## Project setup
```
# インストール
yarn install
# ローカル起動
yarn serve
# ビルド
yarn build
# デプロイ
yarn deploy
```
### （管理者のみ）初回はFirebaseToolをインストールしてください。
```
yarn global add firebase-tools
firebase login
```

## Overview

VueのUIフレームワークであるBuefyをコアコンポーネントとしています。  
vue-cli3.0ベースのVue.jsプロジェクトで構成されています。  
ベータ版を含むFirebaseの各種機能をコアコンポーネントに利用しています。

## System Requirement
- Node.js 
- npm 
- yarn 

## Development environment

### IDE & plugin
以下のツールを推奨設定とします。
- IDE : VSCode  
- plugin
    - Vetur
    - ESLint

ESLintをローカルで動かすにはインストールが必要なので以下コマンドを実行してください。
```bash
yarn --global add eslint 
```
VSCodeプライグインの推奨設定  
setting.json
```json
{
    "eslint.autoFixOnSave": true,
    "eslint.packageManager": "yarn",
    "eslint.validate": [
      "javascript",
      {"autoFix": true, "language": "vue"}
    ],
    "vetur.format.defaultFormatter.html": "prettyhtml"
}
```
## Architecture
### Package structure
```
.
├── dist
│   ├── css
│   └── js
├── public
└── src
    ├── assets : 静的ファイルを配置する
    ├── components : 共通で使用するVueコンポーネントを配置する
    ├── firebase
    ├── layout : レイアウトを定義するVueファイルを配置する
    ├── locales : i18nの言語定義ファイルを配置する
    ├── models : DTOなどのモデル定義ファイルを配置する
    ├── store : Vuexのストアファイルを配置する
    └── views : 各ページを定義するVueファイルを配置する
```

### Library
- Vue.js  
    javascriptベースのフロントエンドフレームワーク

- Vue CLI
    Vue.jsでのアプリケーション開発をサポートするコマンドラインツール。テンプレートやプロジェクト管理機能を提供する

- Buefy  
    Bulmaベースの軽量なCSSフレームワーク

- vue-router  
    ルーティング（画面とURLのマッピング）を直感的に設定できるようにしてくれるライブラリ
    これを使うことで画面ごとにファイル、コンポーネントを分けて開発ができる

- axios  
    HTTPクライアント。バックエンドのREST APIを呼び出すときに使用する。
    Mockモジュールもサポートしているのでローカル環境では静的なMockオブジェクトを返すこともできる

- vuex  
    フロントエンド上での状態管理を可能にするライブラリ。

- vuelidate  
    バリデーションライブラリ  
    一般的に適用するバリデーション機能をライブラリとして提供する  
    Formをまとめてバリデーション状態を判別することも可能

- i18n  
    多言語対応ライブラリ

- ESLint  
    リントツール。本プロジェクトではVueのrecommendedベースにprettierの定義を使用する。

- Firebase  
    Googleが開発するmBaaSプラットフォーム。
    Clientから直接データベース参照や認証を行うことができる。

- loom-js  
    Loom DAppチェーン上で実行されるスマートコントラクトと対話するためのライブラリ。

### Style Guide
- ES2015(ES6)準拠  
    ES2015(ES6)の機能・構文をベースに記述してください。

- Decorator for class-style Vue components  
    Vueファイルはvue-class-componentをコアとした、クラスコンポーネントベースの記述としてください。  
    https://github.com/vuejs/vue-class-component

- ファイル名の形式  
    Vueファイル、Class定義を行うJSファイルはPascalCaseとしてください。（SignUp.vue, LoginRes.js）  
    関数を実装しているJSファイルはcamelCaseとしてください。（index.js）  
    CSS/SASSファイルはkebab-caseとしてください。（buefy-build.scss）

- フォルダ名の形式  
    基本的に一単語としてください。  
    どうしても複数単語となる場合はkebab-caseで命名してください。

- Lint  
    以下ベースに遵守が難しいものをカスタマイズして適用する。  
    plugin:vue/recommended  
    @vue/prettier

- Vue.jsのスタイルガイドは参考程度に適用してください。  
    https://jp.vuejs.org/v2/style-guide/index.html

### Development tips
#### ルーティング(vue-router)
以下のようにパスとVueクラスをマッピングすることでルーティングを定義できます。  
router.js
```js
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/LogoFrame.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: '/login', component: () => import('./views/Login.vue') },
        { path: '/signup', component: () => import('./views/SignUp.vue') },
        { path: '/oauth', component: () => import('./views/OAuthSample.vue') }
      ]
    }
  ]
});
```

#### API呼び出し(axios) 
Axiosクライアントにパス（'/user'）とパラメータ（userId）を投げてレスポンス（res）を受け取っています。

```js
import Vue from 'vue';
import Component from 'vue-class-component';
import HttpClient from '../network/httpclient';

@Component
export default class MyPage extends Vue {
  user = 'init';
  async getUser(userId) {
    // 本来はtry{}catchでくくる  
    const res = await HttpClient.getAxios().get('/user', {
      adapter: HttpClient.getAdaptor(),
      params: {
        userId,
      },
    });
    if (res.status !== 200) {
      console.log('Error!!');
      process.exit();
    }
    this.user = res.data;
  }
}
```

#### 状態管理(Vuex)
以下に状態管理の例を記載します。  

div要素であるtitleがVuexの管理対象となっており、ボタンに紐づいたsetTitleイベントが実行されることで値が"ChangeTitle"に変化します。  

sample.vue
```html
<template>
  <div>
    {{ title }}
  </div>
  <q-btn @click='setTitle("ChangeTitle")'>
  </q-btn>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import store from './store/index';

@Component({
  store,
})
export default class App extends Vue {
  get title() {
    return this.$store.getters.title;
  }
  setTitle(val) {
    this.$store.commit('setTitle', val);
  }
}
</script>
```

Vuexの定義ファイルは定型的にstate,getters,mutationsを記載していますが、以下の資料を読むと考え方がわかると思います。

https://vuex.vuejs.org/ja/intro.html

VuexのStore Moduleの定義ファイル  
prop.js

```js
const getters = {
  uid: state => state.uid,
  userName: state => state.userName
};

const mutations = {
  doLogin(state, payload) {
    state.uid = payload.uid;
    state.userName = payload.userName;
  }
};

const state = {
  uid: '',
  userName: ''
};

export default {
  state,
  getters,
  mutations
};
```

### バリデーション(vuelidate)

単純に単項目に対してバリデーションを適用したい場合は以下のようになります。  
q-inputに定義したイベント(@blur)のタイミングでバリデーションが実施されます。  
エラーの場合は親タグの-fieldのエラーメッセージが呼び出されます。

```js
<template>
      <q-field
        :count="30"
        :error="error"
        :error-label="$t('common.message.requiredField')"
      >
        <q-input
          v-model="form.loginId"
          maxlength="30"
          :float-label="$t('login.label.loginId')"
          @blur="$v.form.loginId.$touch"
          :error="$v.form.loginId.$error"
        />
      </q-field>
</template>
<script>
import { Component, Vue} from 'vue-property-decorator';
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

@Component({
  mixins: [validationMixin],
  validations: {
    form: {
      loginId: { required, minLength: maxLength(30)}
    }
  },
})
export default class Login extends Vue {
  form = '';
}
</script>
```

### 多言語対応(i18n)

ラベルやメッセージをプロパティから取得し多言語対応することが可能になっています。  

#### カスタム辞書
src/locales/ja.json を編集します。  
画面ごと、ラベル・メッセージで単語をネストしています。  
画面に依らないものはcommon下に配置してください。
```json
{ 
  "common": {
    "message": {
      "requiredField": "このフィールドを入力してください。"
    },
    "label": {

    }
  }
}
```

##### 使用方法
HTML中では以下のようになります。
```html
      <q-field
        :count="30"
        :error="error"
        :error-label="$t('common.message.requiredField')"
      >
```
Javascript中では以下のようになります。
```ts
this.$q.notify(
        { message: this.$t('login.message.loginFormValidation'), icon: 'report_problem' }
      )
```
