<template>
    <div>
        <div class="tab">
            <div class="tab-item">商品</div>
            <div class="tab-item">评论</div>
            <div class="tab-item">商家</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import value  , { demo1 , demo2 , deValue , obj}   from "@/api/selfExport.js";

    export default{
      name: 'content',
      components : {
        
      },
      /** 
       * 数据
      */
      data() {
        return {
          message: 'Hello',
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
        message : function(newValue, oldValue){
            console.log(newValue+ "-" + oldValue )
        }
      },  
      /** 
       * 方法
      */
      methods: {
        onChangeImgPre(index){
           
        },
      },
      mounted(){
         console.log(obj)
      },
    }

</script>

<style scoped>
    .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .tab-item{
        flex: 1;
        text-align: center;
    }
</style>
