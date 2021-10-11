<template>
  <div class="">
  
    <div v-show="editTaskForm"  class="popup">
      <form class="popup__content form__input mt-50" v-on:submit.prevent="saveEditTask">
        <input required ref="editDay" type="number" min="1" max="31" class="input input__num" placeholder="12">
        <input required ref="editTitle" class="input input__text" placeholder="Сделать...">
        <button class="btn btn__edit btn__input">OK</button>
      </form>
      <div @click="editTaskForm = !editTaskForm" class="popup__overlay overlay"></div>
    </div>
    
    <div class="card-list">
    <h2>{{ allTaskData[id].title }}</h2>
    <div v-for="(task, index) in allTaskData[id].tasks" :key="index">
      <p><span @click="editTask(index)">{{ task.day }}-го числа <b>{{ task.title }}</b>. </span><span v-if="!lastMonth" class="btn__delete" @click="removeTask(index)">❌</span></p>
      
    </div>
      <form v-if="!lastMonth" class="form__input mt-50" v-on:submit.prevent="addTask">
        <input required ref="day" type="number" min="1" max="31" class="input input__num" placeholder="12">
        <input required ref="title" class="input input__text" placeholder="Сделать...">
        <button class="btn btn__input">+</button>
      </form>
      <router-link class="btn mt-8" to="/">Назад</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params['id'],
      idTask: null,
      lastMonth: false,
      editTaskForm: false,
    }
  },
  created() {
    this.checkDate();
  },
  computed: {
    ...mapGetters(['allTaskData'])
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        id: this.id, day: this.$refs.day.value, 
        title: this.$refs.title.value
      });
    },
    removeTask(id) {
      this.$store.commit('removeTask', { idMonth: this.id, idTask: id });
    },
    editTask(id) {
      this.editTaskForm = true;
      this.$refs.editDay.value = this.allTaskData[this.id].tasks[id].day;
      this.$refs.editTitle.value = this.allTaskData[this.id].tasks[id].title;
      this.idTask = id;
    },
    saveEditTask() {
      this.$store.commit('editTask', { 
        idMonth: this.id, 
        idTask: this.idTask, 
        title: this.$refs.editTitle.value, 
        day: this.$refs.editDay.value 
      });
      
      this.idTask = null;
      this.editTaskForm = false;
    },
    checkDate() {
      const today = new Date;
      if (today.getMonth() > this.id) {
        this.lastMonth = true;
      }
    }
  }
}
</script>

<style class="scss">
.card-list {
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 238, 238);
  padding: 20px;
  border-radius: 6px;
  width: 300px;
  z-index: -1;
}
  
.btn {
  display: flex;
  bottom: 20px;
  border: none;
  padding: 8px;
  border-radius: 6px;
  background-color: rgb(88, 187, 113);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;  
  transition: .2;
  text-decoration: none;
  justify-content: center;
}

.mt-50 {
  margin-top: 50px;
}

.mt-8 {
  margin-top: 8px;
}

.btn__delete {
  font-size: 12px;
  cursor: pointer;
}

.btn__edit {  
  border-radius: 0 6px 6px 0;
}

.btn:hover {
  opacity: .8;
}

.btn:active {
  background-color: rgb(12, 119, 83);
}

.form__input {
  display: grid;
  grid-template-columns: 48px auto 48px;
}

.input {
  outline: none;
  border: none;
  padding: 6px;
  display: flex;
  justify-items: end;
}

.popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.popup__content {
  z-index: 1;
  position: absolute;
  top: 25px;
  left: calc(50vw - 145px);
  border-radius: 6px;
  overflow: hidden;
}

.popup__overlay {
  position: absolute;
  background-color: #000;
  opacity: .5;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>