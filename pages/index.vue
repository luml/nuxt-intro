<template>
    <div>
      <p>😇Hey {{name}}, welcome to {{ title }}</p>
      <h3>👀{{ $store.state.stars }} repos belong to Elio</h3>
      <div>
        <select name="events" id="eventName">
          <option value="Just">🎥filming</option>
          <option value="Say">🎙singing</option>
          <option value="Hey">🎛Radioing</option>
        </select>
      </div>
      <div>
        <ol v-for="item of Reps" v-bind:key="item">
          <li>{{item}}</li>
        </ol>
      </div>
    </div>
</template>


<script>
import axios from 'axios'
import store from 'store'

export default {
  data () {
    return {
      name: 'Default',
      title: 'Elio Nuxt Demo',
      Reps: []
    }
  },
  asyncData (context) {
    return {name: 'There'}
  },
  fetch ({store, params}) {
    return axios.get('https://api.github.com/users/luml/repos')
    .then((res) => {
      // store.commit(res.data)
      store.commit('setReps', res.data)
      store.commit('setStars', res.data.length)
      console.log(res.data.length, res.data[0].name)
    })
  },
  head () {
    return {
      title: this.title,
      meta: [
        {hid: 'description', name: 'description', context: 'My custom description'}
      ]
    }
  }
}
</script>


<style scoped>
select > option {
  color : #39b982;
  font-size : 1rem;
}
</style>