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
          <span 
            class="navbar-burger burger" 
            data-target="navbarMenu">
            <span/>
            <span/>
            <span/>
          </span>
        </div>
        <div 
          id="navbarMenu" 
          class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Features
            </a>
            <a class="navbar-item">
              Team
            </a>
            <a class="navbar-item">
              Archives
            </a>
            <a class="navbar-item">
              Help
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Account
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Dashboard
                </a>
                <a class="navbar-item">
                  Profile
                </a>
                <a class="navbar-item">
                  Settings
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <router-view/>
  </div>
</template>
