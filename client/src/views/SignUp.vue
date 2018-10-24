<template>
  <section class="hero is-fullheight is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Sign Up</h1>
        <div class="column is-4 is-offset-4">
          <div class="box">
            <b-field>
              <b-input
                ref="loginId"
                v-model="loginId"
                placeholder="ログインID"
                required
                type="email"
                maxlength="30"
              />
            </b-field>
            <b-field>
              <b-input
                ref="userName"
                v-model="userName"
                placeholder="ユーザー名"
                required
                maxlength="30"
              />
            </b-field>
            <b-field>
              <b-input
                ref="password"
                v-model="password"
                placeholder="パスワード"
                required
                type="password"
                maxlength="30"
                password-reveal
              />
            </b-field>
            <b-field>
              <b-input
                ref="role"
                v-model="role"
                disabled
                maxlength="30"
              />
            </b-field>
            <a
              :class="{ 'is-loading': loading }"
              class="button is-fullwidth is-primary"
              type="submit"
              @click="signUp()"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebaseApp from '@/firebase';

@Component
export default class SignUp extends Vue {
  loginId = '';
  userName = '';
  password = '';
  role = 'ADMIN';

  error = false;
  loading = false;

  async signUp() {
    this.validate();
    this.loading = true;
    try {
      // 認証情報登録
      const credential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.loginId, this.password);
      if (credential !== null && credential.user !== null) {
        await credential.user.sendEmailVerification();
        // ユーザー情報登録（正式なケースではメール確認時のアクションで実施）
        const data = {
          loginId: this.loginId,
          userName: this.userName,
          role: this.role,
          authorId: credential.user.uid
        };
        firebaseApp
          .firestore()
          .collection('users')
          .doc(credential.user.uid)
          .set(data);

        this.$toast.open({
          duration: 3000,
          message: `確認メールを送信しました。`,
          position: 'is-bottom',
          type: 'is-success'
        });
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
    this.$refs.userName.checkHtml5Validity();
    this.$refs.password.checkHtml5Validity();
  }
}
</script>
