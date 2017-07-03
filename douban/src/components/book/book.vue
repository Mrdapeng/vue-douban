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
  export default{
    data(){
      return {}
    },
    mounted(){
      this.$store.dispatch('changeTitle',['book','rgb(222,122,122)','Main']);
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
