<template>
  <section class="hero is-fullheight is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">ログイン</h1>
        <div class="column is-4 is-offset-4">
          <div class="box">
            <b-field
              :type="$v.loginId.$error ? 'is-danger': ''"
              :message="$v.loginId.$error ? $t('common.message.requiredField') : ''" 
              label="メールアドレスまたはアカウント" 
            >
              <b-input
                ref="loginId"
                v-model="loginId"
                maxlength="30"
                @blur="$v.loginId.$touch"
              />
            </b-field>
            <b-field
              label="パスワード"
            >
              <b-input
                ref="password"
                v-model="password"
                placeholder="半角英数8文字以上"
                required
                type="password"
                maxlength="30" 
                password-reveal/>
            </b-field>
            <a
              :class="{ 'is-loading': loading }"
              class="button is-fullwidth is-primary"
              type="submit"
              @click="login()">ログイン</a>
          </div>
          <a
            :class="{ 'is-loading': loading }"
            class="button is-fullwidth is-outlined is-rounded is-inverted is-primary"
            type="submit"
            @click="$router.push('/signup')">SIGN UP</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebaseApp from '@/firebase';
import LoginRes from '@/models/LoginRes';
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

@Component({
  mixins: [validationMixin],
  validations: {
    loginId: { required, minLength: maxLength(30) },
    password: { required, minLength: maxLength(30) }
  }
})
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
<style lang="scss">
.label {
  font-weight: 200;
  text-align: left;
  font-size: 0.5rem;
}
</style>
