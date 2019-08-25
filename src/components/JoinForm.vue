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

    <!-- 签名组件 -->
    <VueSignaturePad
      width="80%"
      height="150px"
      ref="signaturePad"
      :customStyle="signatureStyle"
    />

    <van-button 
      class="enterButton" 
      color="#FF4444"
      @click="submitResult"
      >
    确定
    </van-button>
    
  </div>
</template>

<script>
export default {
  name: 'JoinForm',
  props: {
    msg: String
  },
  /** 
   * 数据
  */
  data() {
    return {
      message: 'Hello',
      signatureStyle : {
        border: 'gray 1px solid',
         margin : '20px auto'
      },
    }
  },
  /**
   *  计算属性
   *  如果属性没有发生变化，直接拿缓存的值，不走过程（第一次走过程）
  */
  computed: {
    isTitle(){
      return "加入我们";
    }
  },
  /** 
   * 侦听属性
   * 如果属性发生变化就触发对应的方法
  */
  watch: {
    isTitle : function(newValue, oldValue){
        console.log(newValue+ "-" + oldValue )
    }
  },  
  /** 
   * 方法
  */
  methods: {
    submitResult(){
      this.$toast({
        message : "成功",
        icon : 'success'
      })

      // this.$refs.signaturePad.fromDataURL("http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg")

      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);

    },
  },
}
</script>

<style scoped>
   .enterButton{
    width: 90%;
    margin-top: 10px;
  }
</style>