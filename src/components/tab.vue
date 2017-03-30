<template lang="html">
  <div class="tab">
    <div class="tab-item">
      <router-link to="/sell">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/rating">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/detail">详情</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../common/stylus/mixin.styl'
  .tab
    display flex
    height 40px
    width 100%
    line-height 40px
    border-1px(rgb(7,17,27,0.1))

    .tab-item
      flex 1
      text-align center
      color rgb(77,85,93)

      &>a:hover
        background #ccc
        display block
        font-size 14px
        color rgb(240,20,20)



</style>
