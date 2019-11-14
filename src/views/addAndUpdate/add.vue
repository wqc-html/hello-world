<template>
  
  <div class="isBody">

     <!-- 导航栏 -->
    <van-nav-bar
      :title="isTitle"
      :left-text="isBack ? '后退' : ''"
      :left-arrow="isBack"
      @click-left="onClickBack"
    />


    <!-- 表单组件 -->
    <van-cell-group>
      <van-field
        label="姓名"
        placeholder="请输入姓名"
        v-model="form.username"
      />
      <van-field
        label="电话"
        placeholder="请输入电话/手机号"
        v-model="form.phone"
      />
      <van-field
        label="地区"
        placeholder="请选择省 / 市 / 区"
        v-model="form.region"
      />
      <van-field
        label="地址"
        placeholder="街道、楼层等信息"
        v-model="form.location"
      />
      <van-field
        label="邮政编码"
        placeholder="邮政编码"
        v-model="form.postalCode"
      />

    </van-cell-group>


    <!-- 签名 -->
    <SelfSignature  
      ref="selfSpad"
      >
    </SelfSignature>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <van-button 
      class="enterButton" 
      color="#1989fa"
      :loading="submitLoading"
      >
      确定
    </van-button>


  </div>
    
</template>

<script >

  import SelfSignature  from '@/components/SelfSignature'

  export default {
    name: 'add',
    components : {
      SelfSignature
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'add',
        form : {

        },
        submitLoading : true,
      }
    },
    /**
     *  计算属性
     *  如果属性没有发生变化，直接拿缓存的值，不走过程（第一次走过程）
    */
    computed: {
      isTitle(){
        return this.$route.query.title;
      },
      isBack(){
        return this.$route.query.showBack ? true : false;
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
      /**
       * 后退
       */
      onClickBack(){
        this.$router.back();
      },
    },
    /**
     * 创建挂载之前
     */
    beforeMount(){
      
    },
    /**
     * 挂载完成
     */
    mounted(){
      setTimeout(() => {
        this.submitLoading = false;
      }, 2000);
    }
  }

</script>

<style lang="less">

  .isBody{
    background-color: rgb(255, 255, 255)
  }


  .enterButton{
    width: 90%;
    margin-top: 10px;
  }

</style>
