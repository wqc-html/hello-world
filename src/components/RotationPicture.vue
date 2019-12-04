<template>
  <div>
    
     <!-- 图片轮播 -->
    <van-swipe :autoplay="3000"  @change="onChangeImgLoop">
      <van-swipe-item v-for="(image, index) in images" :key="index"  @click="onClickImg(index)">
        <img class="imgSize" :v-lazy="image" :src="image"/>
      </van-swipe-item>
    </van-swipe>

    <!-- 图片预览 -->
    <van-image-preview
      v-model="isImgShow"
      :images="images"
      @change="onChangeImgPre"
    >
      <template v-slot:index>第{{ imgPreIndex + 1 }}页</template>
    </van-image-preview>

  </div>
</template>

<script>
export default {
    name: 'RotationPicture',
    components : {

    },
    /** 
     * 数据
    */
    data() {
      return {
        message: 'RotationPicture',
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        isImgShow : false,
        imgPreIndex : 0,
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
      onChangeImgLoop(index){
        // this.$toast('当前 Swipe 索引：' + index);
      },
      onClickImg(index){
        this.isImgShow = true;
      },
      onChangeImgPre(index){
        this.imgPreIndex = index ;
      },
    },
    mounted(){
     
    }
}
</script>

<style  scoped>
 .imgSize{
    width: 100%;
    height: 150px;
  }
</style>