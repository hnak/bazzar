<template>
  <section class="hero">
    <breadcrumb/>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1">
            <h1 class="title is-4">マイページ</h1>
          </div>
        </div>
        <div class="columns">
          <!-- Menu -->
          <div class="column is-3 is-offset-1">
            <sidemenu/>
          </div>
          <!-- Profile -->
          <div class="column is-7">
            <h3 class="title is-5">会員情報
              <hr class="bold-line">
            </h3>
            
            <div class="content">
              <table class="table-profile">
                <tr>
                  <td>名前</td>
                  <td>山田太郎</td>
                </tr>
                <tr>
                  <td>メールアドレス</td>
                  <td>minion@despicable.me</td>
                </tr>
                <tr>
                  <td>パスワード</td>
                  <td>*******</td>
                </tr>
              </table>
            </div>
            <h3 class="title is-5">お届け先
              <hr class="bold-line">
            </h3>
            <div class="box">
              <p>
                山田 タロウ
              </p>
              <p>
                〒123-4567<br>東京都港区虎ノ門1-2-3<br>オランダヒルズ6F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import firebaseApp from '@/firebase';
import LoginRes from '@/models/LoginRes';
import breadcrumb from '@/components/Breadcrumb.vue';
import sidemenu from '@/components/SideMenu.vue';

@Component({
  components: {
    breadcrumb,
    sidemenu
  }
})
export default class MyPage extends Vue {
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
hr {
  border: none;
  background-color: #e4e4e5;
  margin: 0.5rem 0 1.5rem 0;
}
.bold-line {
  height: 0.25rem;
  border: none;
  background-color: #e4e4e5;
  margin: 0.5rem 0 1.5rem 0;
}
.menu {
  padding: 1rem;
}
</style>
