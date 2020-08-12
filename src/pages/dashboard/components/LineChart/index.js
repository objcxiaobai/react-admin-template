import React, { Component } from 'react';
import echarts from 'echarts';
import './index.css';
class LineChart extends Component {
  state = {
    chart: null,
  };
  el = React.createRef();

  render() {
    return <div className="line-chart" ref={this.el}></div>;
  }

  setOptions = () => {
    var option = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['增长'],
      },
      //x轴
      xAxis: {
        data: ['用户数', '聊天数', '金额', '购物车'],
      },
      yAxis: {},
      //图形显示
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [25, 34, 10, 10],
        },
      ],
    };
    this.state.chart.setOption(option);
  };

  initChart = () => {
    if (!this.el.current) return;
    this.setState({ chart: echarts.init(this.el.current) }, () => {
      console.log('拿到el实例');
      this.setOptions();
    });
  };

  componentDidMount() {
    console.log('执行');
    this.initChart();
  }
}

export default LineChart;
