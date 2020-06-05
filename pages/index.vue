<template>
    <div>
      <h1>Hey {{name}}</h1>
      <!-- <h1>Reps: {{Reps}}</h1> -->
      <div>
        <select name="events" id="eventName">
          <option value="Just">🎥filming</option>
          <option value="Say">🎙singing</option>
          <option value="Hey">🎛Radioing</option>
        </select>
      </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data () {
    return {name: 'Default'}
  },
  asyncData (context) {
    return {name: 'There'}
  },
  // fetch ({Reps}) {
  //   return axios.get('https://api.github.com/users/luml/repos')
  //   .then((res) => {
  //     Reps.commit(res.data)
  //     console.log(res.data)
  //   })
  // },
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