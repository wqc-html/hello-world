<template>
  
  <div>

    <!-- 导航栏 -->
    <van-nav-bar
      :title="isTitle"
      left-text="返回"
      left-arrow
      @click-left="onClickBack"
    />

    <!-- 图片轮播 -->
    <RotationPicture></RotationPicture>

    <!-- 分割线 -->
    <van-divider :style="{ padding: '0 16px' }">
      加入我们
    </van-divider>

    <!-- 加入我们 表单 -->
    <JoinUsForm :username="form.username"
                :phone="form.phone"
                :region="form.region"
                :location="form.location"
                :postalCode="form.postalCode"
      >

    </JoinUsForm>

    <br/>
     
  </div>
    
</template>

<script >
  import RotationPicture  from '@/components/RotationPicture'
  import JoinUsForm  from '@/form/JoinUsForm'


    export default {
      name: 'about',
      components : {
        RotationPicture,
        JoinUsForm,
      },
      /** 
       * 数据
      */
      data() {
        return {
          message: 'about',
          form : {
            username : 'wqc',
            phone : '10086',
            region : '江苏省',
            location : '淮安',
            postalCode : '223001'
          },
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
        onClickBack(){
          this.$router.back();
        },
      },
      mounted(){
        this.$store.count = 1;
        console.log("///////////////")
        console.log(this.$store.count)
        console.log("///////////////")
         this.$store.count = 2;
        console.log("///////////////")
        console.log(this.$store.count)
        console.log("///////////////")
        console.log(this.$route)
      }
    }

</script>

<style lang="less">
  .imgSize{
    width: 100%;
    height: 150px;
  }
</style>
