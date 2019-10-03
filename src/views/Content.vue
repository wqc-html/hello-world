<template>
    <div>
        <div class="tab">
            <div class="tab-item" @click="onJumpView('commodity' , '商品')" >商品</div>
            <div class="tab-item" @click="onJumpView('comment' , '评论')" >评论</div>
            <div class="tab-item" @click="onJumpView('business' , '商家')" >商家</div>
        </div>

        <router-view/>
    </div>
</template>

<script type="text/ecmascript-6">
    import value, * as allObj   from "@/api/selfExport.js";
    import {selfRequest} from  "@/utils/SelfRequest.js";
import { log } from 'util';

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
        onJumpView(urlName , title){
          //跳转页面
          this.$router.push({name : urlName, query : {title: title}})
        }
      },
      mounted(){
        let url = "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18360702148";
        console.log(selfRequest({method: 'post' , url : url}))
        console.log(selfRequest({ url : url}));
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
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
</style>
