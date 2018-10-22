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
    <!-- START FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="soc">
            <a href="#"><i 
              class="fa fa-github-alt fa-2x" 
              aria-hidden="true"/></a>
            <a href="#"><i 
              class="fa fa-youtube fa-2x" 
              aria-hidden="true"/></a>
            <a href="#"><i 
              class="fa fa-facebook fa-2x" 
              aria-hidden="true"/></a>
            <a href="#"><i 
              class="fa fa-twitter fa-2x" 
              aria-hidden="true"/></a>
          </div>
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br>
          </p>
        </div>
      </div>
    </footer>
    <!-- END FOOTER -->
  </div>
</template>
