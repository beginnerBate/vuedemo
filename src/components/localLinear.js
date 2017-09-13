import {Line} from 'vue-chartjs'

export default Line.extend({
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'data-one',
          backgroundColor: '#FC2525',
          data: [10, 33, 40, 55, 52, 80]
        },
        {
          label: 'data-twp',
          backgroundColor: '#05CBE1',
          data: [60, 55, 32, 10, 12, 50]
        }
      ]
    },
      {
        responsive: true,
        maintainAspectRatio: false
      }
      )
  }
})
