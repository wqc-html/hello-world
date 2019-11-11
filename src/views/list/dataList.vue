<template>
  
  <div>

     <!-- 导航栏 -->
    <van-nav-bar
      :title="isTitle"
      :left-text="isBack ? '后退' : ''"
      :left-arrow="isBack"
      @click-left="onClickBack"
    />

  </div>
    
</template>

<script >
 
  export default {
    name: 'dataList',
    components : {
      
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'dataList',
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
      },
      isBack(){
        return this.$route.query.showBack;
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
      login(){
 
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
     
    }
  }

</script>

<style lang="less">

   
</style>
