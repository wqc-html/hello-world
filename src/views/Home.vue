<template>
  <div class="home">

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="volume-o"
    >
      通知内容 : 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    </van-notice-bar>

    
    <img alt="Vue logo" src="../assets/logo.png" @click="isShow">
    
   
    <van-action-sheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />


    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="下拉" loosing-text="释放刷新">
    
      <van-steps direction="vertical" :active="1" active-icon="success"  active-color="#1989fa">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
          <p>2016-07-12 10:00</p>
          <p>2016-07-13 10:00</p>
          <p>2016-07-14 10:00</p>
          <p>2016-07-15 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>

    </van-pull-refresh>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import  {obj}   from "@/api/selfExport.js";


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
        { name: 'jumpContentView' },
        { name: 'cancel' }
      ],
      isLoading : false,
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
        case "jumpContentView":
          //跳转页面
          this.$router.push({name:'content' , query:{title:'内容'}})
          break;
        case "cancel":
          break; 
        default:
          break;
      }
    },
    isShow(){
      this.show = true ;
    },
    onRefresh(){
      setTimeout(() => {
         this.isLoading = false;
      }, 1000);
    }
  },
  mounted(){
      obj.a = 123;
      console.log(obj)
  }
}
</script>
