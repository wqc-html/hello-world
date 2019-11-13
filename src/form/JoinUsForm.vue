<template>
  <div>

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
      @getSignaturePadData="getSignaturePadData"
      ref="selfSpad"
      >
    </SelfSignature>

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

import SelfSignature  from '@/components/SelfSignature'

export default {
    name: 'JoinUsForm',
    /**
     * 父组件传递的数据, 并且数据不能被修改
     */
    props: {
      username: String ,
      phone: String ,
      region : String,
      location: String ,
      postalCode: String ,
    },
    components : {
      SelfSignature
    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'JoinUsForm',
        form : {
          username: this.username ,
          phone: this.phone ,
          region : this.region,
          location: this.location ,
          postalCode: this.postalCode ,
          signaturePad : '' ,
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
      message : function(newValue, oldValue){
          console.log(newValue+ "-" + oldValue )
      }
    },  
    /** 
     * 方法
    */
    methods: {
      /**
       * 提交表单
       */
     submitResult(){
        this.$toast({
          message : "成功",
          icon : 'success'
        })

        console.log(this.form);
        
        //通过this.$refs 得到子组件的对象 
        this.$refs.selfSpad.saveImg()
      },
      /**
       * 得到 图画内容
       */
      getSignaturePadData(data){
        this.form.signaturePad = data;
      }
    },
    mounted(){
     
    }
}
</script>

<style  scoped>
  .enterButton{
    width: 90%;
    margin-top: 10px;
  }
</style>