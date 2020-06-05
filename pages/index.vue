<template>
    <div>
      <h1>Hey {{name}}</h1>
      <!-- <h1>Reps: Random one {{Example}}</h1> -->
      <!-- <h1>Stars: {{ $store.state.stars }}</h1> -->
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
      name: 'Default'
    }
  },
  asyncData (context) {
    return {name: 'There'}
  },
  fetch ({store, params}) {
    return axios.get('https://api.github.com/users/luml/repos')
    .then((res) => {
      // store.commit(res.data)
      // store.commit('setStars', 10)
      // store.commit('setStars', res.data[0].name)
      console.log(res.data.length, res.data[0].name)
    })
  }
  // head () {

  // }
}
</script>


<style scoped>
select > option {
  color : #39b982;
  font-size : 1rem;
}
</style>