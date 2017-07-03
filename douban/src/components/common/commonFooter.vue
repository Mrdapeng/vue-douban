<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <router-link to="/book">书籍</router-link>
      </li>
      <li>
        <router-link to="/music">音乐</router-link>
      </li>
      <li>
        <router-link to="/photo">图片</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
//        bgcolor: this.randomBottom()

      }
    },
    mounted(){
    },
    methods: {
      randomBottom(){
        let first = Math.floor(Math.random() * 255)
        let second = Math.floor(Math.random() * 255)
        let third = Math.floor(Math.random() * 255)
        return "rgb(" + first + ',' + second + ',' + third + ")";
      }
    },
  }
</script>
<style scoped>
  .nav {
    width: 6.4rem;
    position: fixed;
    bottom: 0;
    height: 1rem;
    background: rgb(222, 121, 111);
  }

  .nav a {
    color: #000000;
  }

  .nav ul {
    width: 6.4rem;
    height: 100%;
  }

  .nav ul li {
    width: 25%;
    height: 100%;
    font-size: 0.5rem;
    float: left;
    text-align: center;
  }

  .nav ul li a.router-link-active {
    background-color: #ccc;
  }
</style>
