<template>
  
  <div>

    <div class="singleData">

      <div style="clear:both"></div>
      
      <div class="titleData height30px">申请进度</div>
      <div class="contentData height30px">{{progress}}</div>


      <div style="clear:both"></div>

      <div class="isLine"></div>


      <div class="titleData height20px">施工地点</div>
      <div class="contentData height20px">{{address}}</div>

      <div style="clear:both"></div>

      <div class="titleData height20px">施工时间</div>
      <div class="contentData height20px">{{time}}</div>

      <div style="clear:both"></div>

      <div class="isBottom"></div>

    </div>

    

  </div>
    
</template>

<script >
 
  export default {
    name: 'singleData',
    components : {
      
    },
    /**
     * 父组件传递参数
     */
    props: {
      progress: String,
      address: String,
      time: String,
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'dataList',
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
     
    }
  }

</script>

<style lang="less">

  .singleData{
    width: 100%;
    // height: 100px;
    margin-top: 10px;
    background-color: white;
  }

  .titleData{
    float: left;
    width: 30%;
    text-align: center;
    color: #3A3A3A;
    font-weight: 500;
  }

  .contentData{
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    width: 65%;
    text-align: left;
    color: #666666;
  }

  .height30px{
    height: 50px;
    line-height: 50px;
  }

  .height20px{
    height: 25px;
    line-height: 25px;
  }

  .isLine{
    width:95%; 
    height:1px; 
    background-color:#EFEDF2;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .isBottom{
     width: 100%;
    height: 10px;
  }

</style>
