<template>
  <div>
    <nav>
      导航栏
      <div class="avatar_layout" >
        <img  class="avatar" src="~/assets/author.jpeg" alt="avatar"/>
      </div>
    </nav>
    <slot />
  </div>
</template>
<style scoped>
.avatar_layout {
  display: inline-block;
  overflow:hidden;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(218,218,218);
}
  .avatar {
    height: 100%;
  }
</style>