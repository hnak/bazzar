<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar">
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
export default class LogoFrame extends Vue {}
</script>
