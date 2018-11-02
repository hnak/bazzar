<template>
  <div>
    <!-- Top bar -->
    <nav 
      id="navbarMenu"
      class="navbar is-primary navbar-menu">
      <div class="container">
        <div class="navbar-end"> 
          <div class="nabvar-item">
            <div class="container right-side">
              <a 
                href="#" 
                class="has-text-white">ログアウト</a>   
              <a 
                href="#" 
                class="button is-primary is-inverted is-outlined">ショップを見る</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- second nav -->
    <nav class="navbar shop-menu">
      <div class="container">
        <div class="navbar-brand logo-box">
          <a 
            class="navbar-item" 
            href="../">
            <img 
              src="https://bulma.io/images/bulma-logo.png"
              alt="Logo">
          </a>
          <!-- burger menu -->
          <a 
            role="button" 
            class="navbar-burger burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarMenu">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <!-- shop-menu nav -->
        <div 
          id="navbarMenu" 
          class="navbar-menu">
          <div class="navbar-start">
            <b-tabs 
              size="is-medium"
              class="block s-tab-item">
              <b-tab-item 
                label="ホーム"
                icon="home-outline"
                class="border-none"/>
              <b-tab-item
                label="出品管理"
                icon="tag-outline"/>
              <b-tab-item
                label="注文管理"
                icon="clipboard-check-outline"/>
              <b-tab-item 
                label="売上レポート"
                icon="chart-bar"/>
              <b-tab-item 
                label="設定"
                icon="settings-outline"/>
            </b-tabs>
          </div>
        </div>
      </div>
    </nav>
    <!-- End nav -->
    <router-view/>
    <myfooter/>
    
</div></template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import myfooter from '@/components/MyFooter.vue';

@Component({
  components: {
    myfooter
  }
})
export default class ShopLayout extends Vue {}
</script>

<style lang="scss">
.right-side {
  text-align: right;
  padding: 0.4rem 0;
}

.right-side a {
  vertical-align: middle;
  margin-left: 1rem;
  font-weight: bold;
}

.logo-box {
  margin-right: 1rem;
}
.shop-menu {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 4rem;
}

.s-tab-item a {
  display: block;
  padding: 0.5rem 0;
  width: 120px;
  height: 100px;
  text-align: center;
  border-bottom-color: #fff;
}

.s-tab-item span {
  font-size: 13px;
  display: block;
  margin-top: 1.2rem;
}
.s-tab-item i {
  display: inline-block;
  width: 120px;
}
</style>
