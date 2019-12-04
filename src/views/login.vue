<template>
  
  <div>

      <br/>
      <br/>
      <br/>
      <span style="font-size:28px;">{{message}}</span>
      <span :is="'RotationPicture'"></span>
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

<script>

 import RotationPicture from '@/components/RotationPicture.vue'

  export default {
    name: 'login',
    components : {
      RotationPicture
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'login',
        form : {
          phone : '',
          username : '',
        },
        attributeName : 'href',
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

        //跳转页面
        this.$router.replace({name:'dataList' , query:{title:'材料列表'}})
       
      },
      //初始化配置
      initConfig(){
        //开发环境
        if('development' == process.env.NODE_ENV){
          //设置访问地址
          let ipAddress = "http://192.168.0.118"
          let port = ":" + "8080";
          let projectName = "/" + "excavate" + "/";
          this.$store.state.baseURL = ipAddress + port + projectName ;

        //编译环境
        }else{
          //设置访问地址
          let ipAddress = "http://192.168.0.118"
          let port = ":" + "8080";
          let projectName = "/" + "excavate" + "/";
          this.$store.state.baseURL = ipAddress + port + projectName ;
        }  

        console.log(this.$store)
      },
    },
    /**
     * 创建挂载之前
     */
    beforeMount(){
      //初始化配置
      this.initConfig();
    },
    /**
     * 挂载完成
     */
    mounted(){
      
      this.message = 'isLogin!';

      console.log(this.$el.textContent);

      this.$nextTick().then(()=>{
        console.log(this.$el.textContent);
      })

      console.log(this.$el.textContent);
      
    }
  }

</script>

<style lang="less">

  .enterButton{
    width: 90%;
    margin-top: 10px;
  }
</style>
