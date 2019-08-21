<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="isShow">
   
    <van-action-sheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  /** 
   * 数据
  */
  data() {
    return {
      show : false,
      actions : [
        { name: 'toast' },
        { name: 'notify' },
        { name: 'jumpView' },
        { name: 'cancel' }
      ]
    }
  },

  /** 
   * 方法
  */
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;

      switch (item.name) {
        case "toast":
          //提示
           this.$toast(item.name);
          break;
        case "notify":
          //通知
          this.$notify({
            message: item.name,
            duration: 1000,
            background: '#1989fa'
          });
          break;
        case "jumpView":
          //跳转页面
          this.$router.push({name : 'about' , query: { title: '关于' }})
          break;
        case "cancel":
          break; 
        default:
          break;
      }
    },
    isShow(){
      this.show = true ;
    }
  },
}
</script>
