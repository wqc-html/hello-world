<template>
  <div>

    <!-- 表单组件 -->
    <van-cell-group>
      <van-field
        label="姓名"
        placeholder="请输入姓名"
      />
      <van-field
        label="电话"
        placeholder="请输入电话/手机号"
      />
      <van-field
        label="地区"
        placeholder="请选择省 / 市 / 区"
      />
      <van-field
        label="地址"
        placeholder="街道、楼层等信息"
      />
      <van-field
        label="邮政编码"
        placeholder="邮政编码"
      />
      
    </van-cell-group>
    
  </div>
</template>

<script>
export default {
    name: 'JoinUsForm',
    /**
     * 父组件传递的数据
     */
    props: {
      msg: String
    },
    components : {

    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'JoinUsForm',
       
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
     
    },
    mounted(){
     
    }
}
</script>

<style  scoped>

</style>