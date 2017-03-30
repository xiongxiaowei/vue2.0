<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from './components/tab'
import Header from './components/header/header'
const ERR_OK = 0
export default {
  name: 'app',
  components: {
    'v-tab': Tab,
    'v-header': Header
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
     response = response.body
     console.log(response)
      if (response.errno === ERR_OK) {
         this.seller = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    h2
      color red
</style>
