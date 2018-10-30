<template>
  
  <div>
    <link 
      rel="stylesheet" 
      href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" 
      integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" 
      crossorigin="anonymous">

    <!-- START NAV -->
    <div>
      <nav class="navbar shop-menu">
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
            
            <div class="tabs">
              <ul>
                <li class="is-active">
                  <a>
                    <img 
                      src="../assets/home.svg" 
                      alt="ホーム"
                      class="menu-image">
                    <p class="menu-lavel">ホーム</p>
                  </a>
                </li>
                <li>
                  <a class="button-icon">
                    <img 
                      src="../assets/home.svg" 
                      alt="ホーム">
                    <div class="menu-lavel">ホーム</div>
                  </a>
                </li>
                <li>
                  <a class="button-icon">
                    <img 
                      src="../assets/home.svg" 
                      alt="ホーム">
                    <div class="menu-lavel">ホーム</div>
                  </a>
                </li>
              
              </ul>
            </div>
            

          </div>
        </div>
      </nav>

      <!-- END NAV -->
      <router-view/>
      <myfooter/>
    </div>
</div></template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import myfooter from '@/components/MyFooter.vue';

@Component({
  components: {
    myfooter
  }
})
export default class ShopFrame extends Vue {}
</script>

<style lang="scss">
.shop-menu {
  padding-bottom: 1rem;
  border-bottom: 1px solid #e4e4e4;
}

.menu-image {
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.menu-lavel {
  font-size: 13px;
}
</style>
