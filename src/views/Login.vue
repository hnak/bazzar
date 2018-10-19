<template>
  <section class="hero is-fullheight is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">BAZZAR</h1>
        <p class="subtitle">decentralized blockchain EC application.</p>
        <div class="column is-4 is-offset-4">
          <div class="box">
            <b-field>
              <b-input
                placeholder="ログインID"
                ref="loginId"
                v-model="loginId"
                required
                type="email"
                maxlength="30"
              />
            </b-field>
            <b-field>
              <b-input
                placeholder="パスワード"
                ref="password"
                v-model="password"
                required
                type="password"
                maxlength="30"
                password-reveal
              />
            </b-field>
            <a
              class="button is-fullwidth is-primary"
              v-bind:class="{ 'is-loading': loading }"
              type="submit"
              @click="login()"
            >LOGIN</a>
          </div>
          <a
            class="button is-fullwidth is-outlined is-rounded is-inverted is-primary"
            v-bind:class="{ 'is-loading': loading }"
            type="submit"
            @click="$router.push('/signup')"
          >SIGN UP</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebaseApp from '@/firebase';
import LoginRes from '@/models/LoginRes';

@Component
export default class Login extends Vue {
  loginId = '';
  password = '';

  error = false;
  loading = false;

  async login() {
    this.validate();
    this.loading = true;
    try {
      // Firebaseログイン
      const credential = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.loginId, this.password);
      if (credential !== null && credential.user !== null) {
        if (credential.user.emailVerified == false) {
          this.$toast.open({
            duration: 3000,
            message: 'メールアドレスの確認が未完了です。',
            position: 'is-bottom',
            type: 'is-danger'
          });
          return;
        }
        // ログイン後処理
        const idToken = await credential.user.getIdToken();
        this.$store.commit('saveJwt', idToken);
        const loginRes = new LoginRes(
          credential.user.uid,
          this.loginId,
          '',
          new Array('ROLE_ADMIN')
        );
        this.$store.commit('doLogin', loginRes);
        // トップページへ遷移させる
        this.$router.push('/');
      }
    } catch (err) {
      this.$toast.open({
        duration: 3000,
        message: err.message,
        position: 'is-bottom',
        type: 'is-danger'
      });
      return;
    } finally {
      this.loading = false;
    }
  }

  validate() {
    this.$refs.loginId.checkHtml5Validity();
    this.$refs.password.checkHtml5Validity();
  }
}
</script>
