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
          <!-- burger menu -->
          <a 
            :class="{ 'is-active': showNav }" 
            role="button" 
            class="navbar-burger burger has-text-white"
            aria-label="menu" 
            aria-expanded="false" 
            @click="showNav = !showNav">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <div
          :class="{ 'is-active': showNav }"
          class="navbar-menu">
          <!-- category -->
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable is-mobile-modal">
              <a class="navbar-link">カテゴリ</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">ファッション</a>
                <a class="navbar-item">エンタメ・デジタル家電</a>
                <a class="navbar-item">グルメ</a>
                <a class="navbar-item">美容・健康</a>
                <a class="navbar-item">車・スポーツ</a>
              </div>
            </div>
            <!-- Search box -->
            <div class="navbar-item">
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
            </div>
          
            <!-- detail search -->
            <div class="navbar-item">
              <b-dropdown>
                <a 
                  slot="trigger"
                  class="button is-primary is-inverted is-outlined">詳細検索</a>
              
                <div class="detail-search">
                  <div class="title-box">
                    <h1 class="detail-title">詳細検索</h1>
                    <span class="control">
                      <button class="is-text clear">条件をすべてクリアする</button>
                    </span>
                    <div class="right-side">
                      <b-icon
                        icon="close"/>
                    </div>
                  </div>
                  <!-- detail search form -->
                  <section>
                    <div class="form-parts">
                      <b-field 
                        horizontal 
                        label="カテゴリ">
                        <b-select 
                          placeholder="すべてのカテゴリ" 
                          expanded>
                          <option value="1">ファッション</option>
                          <option value="2">エンタメ・デジタル家電</option>
                          <option value="3">グルメ</option>
                          <option value="4">住まい・暮らし</option>
                          <option value="5">美容・健康</option>
                          <option value="6">車・スポーツ</option>
                        </b-select>
                      </b-field>
                    </div>

                    <div class="form-parts">
                      <b-field 
                        horizontal 
                        label="キーワード" >
                        <b-input 
                          expanded/>
                      </b-field>
                    </div>
                  </section>
                </div>

                <div class="form-parts">
                  <b-field 
                    horizontal 
                    label="価格帯">
                    <b-select 
                      placeholder="下限なし" 
                      expanded>
                      <option value="1">1,000円</option>
                      <option value="2">3,000円</option>
                      <option value="3">5,000円</option>
                      <option value="3">10,000円</option>
                      <option value="3">30,000円</option>
                      <option value="3">50,000円</option>
                    </b-select>
                    <p class="range">〜</p>
                    <b-select 
                      placeholder="上限なし" 
                      expanded>
                      <option value="1">1,000円</option>
                      <option value="2">3,000円</option>
                      <option value="3">5,000円</option>
                      <option value="3">10,000円</option>
                      <option value="3">30,000円</option>
                      <option value="3">50,000円</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="form-parts">
                  <b-field 
                    horizontal 
                    label="絞り込み">
                    <b-checkbox>
                      送料無料
                    </b-checkbox>
                  </b-field>
                </div>
                <b-field>
                  <p class="control button-box" >
                    <button 
                      class="button is-primary">
                      この条件で検索
                    </button>
                  </p>
                </b-field>
              </b-dropdown>
            </div>
          </div>
        </div>
        <!-- detail search form end -->
        <!-- Right side -->
        <div
          :class="{ 'is-active': showNav }"
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
                <a class="navbar-item">
                  ログアウト
                </a>
              </div>
            </div>
            <a class="navbar-item">
              マイリスト
            </a>
            <a class="navbar-item">
              <span class="icon">
                <img 
                  src="../assets/Bell.svg" 
                  alt="お知らせ"></span>
            </a>
            <a class="navbar-item">
              <span class="icon is-medium">
                <img src="../assets/cart.svg">
              </span>
              <span>カート</span>
            </a>
            <a class="navbar-item">
              商品を売る
            </a>
          </div>
        </div>
    </div></nav>
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
export default class MenuFrame extends Vue {
  showNav = false;
}
</script>

<style lang="scss">
.navbar {
  font-weight: bold;
  font-size: 13px;
}

.detail-search {
  display: inline-block;
  width: 460px;
  padding: 1rem 1.5rem 0;
  color: grey;
}

.form-parts {
  margin-bottom: 1.5rem;
}

.title-box {
  width: 100%;
}

.detail-title {
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 1.5rem;
}

button.clear {
  margin-left: 1rem;
  border: 0;
  font-size: 13px;
  color: #10a9db;
}

.right-side {
  float: right;
  text-align: right;
}

.range {
  width: 1rem;
  height: 1rem;
  margin: 0.5rem auto;
}

.button-box {
  display: block;
  width: 25%;
  margin: 1rem auto 2rem;
}
</style>
