import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss'],
})
export class PieGraphComponent implements OnInit {
  @ViewChild('mygraph') private chartRef;
  chart: any;

  data: any;
  constructor() { }

  public updateClick(evt) : void {
    try {
      let activePoints = this.chart.getElementsAtEvent(evt);
      let i = 0;  

      this.data.datasets[0].data[0] = 44;
      this.chart.update();
    } catch (error) {
      alert(error);
    }
    
  }

  public ngOnInit() : void {
    this.data = {
      datasets: [{
        data: [10, 20, 30, 50],
        backgroundColor: [
          'green',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Red',
        'Yellow',
        'Blue',
        'another'
      ]
    };

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        boxWidth:10
      },
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            return 'hello';
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
            });
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;


          },
          color: 'black',
        }
      }
    };
    this.chart = new Chart(this.chartRef.nativeElement, { 
      type: 'pie',
      data: this.data,
      options: options
    });
  }

}
