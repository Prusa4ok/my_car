export default {
  state: {
    taskData: [
      {
        title: 'Январь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Февраль',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Март',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Апрель',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Май',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Июнь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Июль',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Август',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Сентябрь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Октябрь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Ноябрь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
      {
        title: 'Декабрь',
        tasks: [
          {
            title: 'поесть',
            day: 1
          },
          {
            title: 'поспать',
            day: 1
          },
        ]
      },
    ]
  },
  getters: {
    allTaskData(state) {
      return state.taskData;
    }
  },
  mutations: {
    addTask(state, payload) {
      state.taskData[payload.id].tasks.push({
        title: payload.title,
        day: payload.day
      });
    },
    removeTask(state, payload) {
      state.taskData[payload.idMonth].tasks.splice([payload.idTask], 1);
    },
    editTask(state, payload) {
      console.log(payload);
      state.taskData[payload.idMonth].tasks[payload.idTask] = { day: payload.day, title: payload.title};
    }
  },
}