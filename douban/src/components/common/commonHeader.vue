<template>
      <div class="header" :style={background:$store.state.bgColor}>
        <div class="left" >
          <button @click="backMain">{{$store.state.nav}}</button>
        </div>
        <div class="right">
          <h1>{{$store.state.title}}</h1>
        </div>
      </div>

</template>
<script>
 export default{
     data(){
         return {

         }
     },

   methods: {
         backMain:function () {
           history.back();
         }
   }

 }
</script>
<style >
  @import "../../assets/css/reset.css";
  .header{
    position: fixed;
    top: 0;
    font-size: 0.5rem;
    display: flex;
    background: rgb(222,122,122);
    height: 1rem;
  }
  .header .left{
    float: left;
    width: 1.8rem;
    height: 1rem;
  }
  .header .left button{
    width: 1.8rem;
    height: 1rem;
  }
  .header .right{
    float: right;
    width: 4.8rem;
    height: 1rem;
  }
  .header .right h1{
    width: 4.8rem;
    height: 1rem;
    font-size: 0.6rem;
    text-indent:0.9rem;
    line-height:1rem;
  }
</style>
