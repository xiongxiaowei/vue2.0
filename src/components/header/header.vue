<template lang="html">
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="tittle">
          <span class='brand' ></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if='seller.supports'>
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .header
     color #fff
     background #000
     .content-wrapper
       padding 24px 12px 18px 24px
       font-size 0
       .avatar
          display: inline-block
       .content
          display: inline-block
          font-size 14px
          margin-left 16px

</style>
