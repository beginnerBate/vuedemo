import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default Line.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options', 'width', 'height'],
  mounted () {
    //  this.chartData is created in the mixin
    this.renderChart(this.chartData, this.options)
    console.log(this._chart)
  },
  watch: {
    width () {
      console.log(this._chart)
      this._chart.width = this.width
      this._chart.update()
    },
    height () {
      this._chart.height = this.height
      this._chart.update()
    }
  }
})
