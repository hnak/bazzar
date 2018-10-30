<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <a 
            class="navbar-item" 
            href="../">
            <img 
              src="https://bulma.io/images/bulma-logo.png"
              alt="Logo">
          </a>
        </div>
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">カテゴリ</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                カテゴリ1
              </a>
              <a class="navbar-item">
                カテゴリ2
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                カテゴリ3
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                カテゴリ4
              </a>
            </div>
          </div>

          <div class="field has-addons search-box">
            <div class="control">
              <input 
                class="input" 
                type="search"
                placeholder="キーワードから探す">
            </div>
            <div class="control">
              <a class="button is-light">
                <span class="icon is-medium">
                  <img 
                    src="../assets/Search.svg" 
                    alt="検索"></span></a>
            </div>
          </div>
          <div class="navbar-item">
            <a class="button is-primary is-inverted is-outlined">詳細検索</a>
          </div>

          <div 
            id="navbarMenu" 
            class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">ユーザーネームさん</a>
                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    マイページ
                  </a>
                  <a class="navbar-item">
                    注文履歴
                  </a>
                  <a class="navbar-item">
                    マイリスト
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    ログアウト
                  </div>
                </div>
              </div>
              <a class="navbar-item">
                マイリスト
              </a>
              <a class="navbar-item">
                <span class="icon is-medium">
                  <img 
                    src="../assets/Bell.svg" 
                    alt="お知らせ"></span>
              </a>
              <a class="navbar-item">
                <span class="icon is-medium">
                  <img 
                    src="../assets/cart.svg"
                ></span>
                <span>カート</span>
              </a>
              <a class="navbar-item">
                商品を売る
              </a>
            </div>
            <span 
              class="navbar-burger burger" 
              data-target="navbarMenu"/>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <router-view/>
    <myfooter/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import myfooter from '@/components/MyFooter.vue';

@Component({
  components: {
    myfooter
  }
})
export default class MenuFrame extends Vue {}
</script>

<style lang="scss">
.navbar {
  font-weight: bold;
  font-size: 13px;
}

.search-box {
  margin-top: 10px;
}
</style>
