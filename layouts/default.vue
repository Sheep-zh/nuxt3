<template>
  <div>
    <nav class="navlayout">
      <h1 class="title">Nuxt3 in Action</h1>
      <div class="avatar_layout" >
        <img class="avatar" src="~/assets/author.jpeg" alt="avatar"/>
      </div>
    </nav>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .navlayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 24px;
      font-weight: 700;
    }
  .avatar_layout {
    display: inline-block;
    overflow:hidden;
    border-radius: 50%;
    width: 50px;
    height: 50px;
      .avatar {
        height: 100%;
      }
    }
  }
</style>