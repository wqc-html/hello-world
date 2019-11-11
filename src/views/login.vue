<template>
  
  <div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <van-field
        label="电话"
        placeholder="请输入电话/手机号"
        v-model="form.phone"
        required
      />
      <van-field
        label="密码"
        placeholder="请输入密码"
        v-model="form.username"
        type="password"
        required
        :error="false"
      />

      <br/>

      <van-button 
          class="enterButton" 
          color="#1989fa"
          @click="login"
          >
        登录
      </van-button>

  </div>
    
</template>

<script >
 
  export default {
    name: 'login',
    components : {
      
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'login',
        form : {

        }
      }
    },
    /**
     *  计算属性
     *  如果属性没有发生变化，直接拿缓存的值，不走过程（第一次走过程）
    */
    computed: {
      isTitle(){
        return this.$route.query.title;
      }
    },
    /** 
     * 侦听属性
     * 如果属性发生变化就触发对应的方法
    */
    watch: {
      
    },  
    /** 
     * 方法
    */
    methods: {
      login(){
         
      },
    },
    mounted(){
      
    }
  }

</script>

<style lang="less">

  .enterButton{
    width: 90%;
    margin-top: 10px;
  }
</style>
