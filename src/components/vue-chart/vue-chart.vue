<template>
    <div class="normalChart">
      <button @click="enlarge()">{{ text }}</button>
      <baseline-chart
        :width="width"
        :height="height"
        :chart-data="data"
        :options="options"></baseline-chart>
    </div>
</template>

<script>
  import baselineChart from 'base/chart/baseLinechart.js'
  export default {
    name: 'chart',
    data () {
      return {
        width: 300,
        height: 150,
        data: {
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
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              labelColor: function (tooltipItem, chart) {
                return {
                  borderColor: 'rgb(255, 0, 0)',
                  backgroundColor: '#f4f4f4'
                }
              },
              labelTextColor: function (tooltipItem, chart) {
                return '#543453'
              }
            }
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }
      }
    },
    computed: {
      text () {
        return this.width > 300 ? '缩小' : '放大'
      }
    },
    methods: {
      enlarge () {
        this.width = this.width > 300 ? 300 : 600
        this.height = this.height > 150 ? 150 : 300
      }
    },
    components: {
      baselineChart
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet">
  .normalChart{
    max-width: 1000px;
    margin: auto;
  }
  .bigChart{
    width: 800px;
    height: 400px;
  }
</style>
