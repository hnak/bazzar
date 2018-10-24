<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';
// Set your colors
$primary: #10a9db;
$primary-invert: findColorInvert($primary);
$light: #f7f7f7;
$light-invert: findColorInvert($light);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  )
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
.breadcrumb {
  font-size: 0.85rem;
}
html {
  font-size: 14px;
}
</style>
