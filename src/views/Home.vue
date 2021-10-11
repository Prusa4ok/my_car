<template>
  <div class="home">      
  <router-link :to="'month/' + index" class="card" 
      v-for="(data, index) in allTaskData" 
      :key="index">
    <p class="title">{{ data.title }}</p>
    <p class="subtitle">Задач в списке: {{ data.tasks.length }}</p>
    <img class="img" 
      src="http://kulchytska.com/image/cache/catalog/vector/free-download-vector-cartoon-elephant-web-800x534.jpg" alt="img">
  </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['allTaskData']),    
  }
}
</script>

<style lang="scss">
  .home {
    background-color: rgb(247, 243, 243);
    width: 80vw;
    max-width: 1280px;
    box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 20px;
    box-sizing: border-box;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: 15px;
    justify-content: center;
  }
  
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: .1s;
    position: relative;
    height: 25vh;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .title {
    font-size: 14px;
    color: rgb(48, 45, 45);
  }
  
  .subtitle {
    font-size: 12px;
    color: rgba(48, 45, 45, 0.842);
  }
  
  .img {
    height: 20vw;
    width: 20vh;
  }
  
  .card {
    text-decoration: none;
  }
</style>
