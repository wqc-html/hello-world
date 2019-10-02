<template>
    <div>
        commodity
    </div>
</template>

<script>
    export default{
      name: 'commodity',
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
        onJumpView(urlName , title){
          //跳转页面
          this.$router.push({name : urlName, query : {title: title}})
        }
      },
      mounted(){
        //提示
        this.$toast( this.isTitle );
      },
    }
</script>

<style scoped>

</style>
