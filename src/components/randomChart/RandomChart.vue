<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: {
          labels: ['Red', 'Blue', 'Blue', 'Green', 'purple', 'orange'],
          datasets: [
            {
              label: 'of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Red', 'Blue', 'Blue', 'Green', 'purple', 'orange'],
          datasets: [
            {
              label: 'of Votes',
              data: [this._randomData(), this._randomData(), this._randomData(), this._randomData(), this._randomData(), this._randomData()],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        }
        console.log(this.datacollection)
      },
      _randomData () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>


<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
