<template>
  <div class="movie">
    <common-header></common-header>
    <div class="movie_list">
      <ul>
        <li></li>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>

</template>
<script>
  import commonHeader from '../common/commonHeader.vue'
  import commonFooter from '../common/commonFooter.vue'
  import axios from 'axios'
  export default{
    data(){
      return {


      }
    },
    methods: {},
    components: {
      commonHeader,
      commonFooter,
    }

  }
</script>
<style>

</style>
