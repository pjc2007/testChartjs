import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart }from 'chart.js';
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  @ViewChild('mygraph') private chartRef;
  chart: any;
  constructor() { }

    ngOnInit() {
        var s1 = {
            label: 's1',
            borderColor: 'blue',
            data: [
                { x: '2017-01-06 18:39:30', y: 100 },
                { x: '2017-01-07 18:39:28', y: 101 },
            ]
        };

        var s2 = {
            label: 's2',
            borderColor: 'red',
            data: [
                { x: '2017-01-07 06:00:00', y: 90 },
                { x: '2017-01-07 11:00:00', y: 44 },
                { x: '2017-01-07 17:00:00', y: 105 },
                { x: '2017-01-07 18:00:00', y: NaN },
            ]
        };
    this.chart = new Chart(this.chartRef.nativeElement, {
        ticks: {
                source: 'data'
            },
            type: 'line',
            data: {
               
                 datasets: [s2] ,
            },
            options: {
              responsive:true,
              maintainAspectRatio:false,
                scales: {
                    xAxes: [{
                        ticks: {
                            source: 'data'
                        },
                        scaleLabel: { labelString: 'Time', display: true },
                        
                        type: 'time',
                        display: true,
                        position: 'bottom',
                        time: {
                            unit: 'minute',
                            displayFormats: {
                                'minute': 'hh:mm a'
                            }
                        }

                    }]
                }
            }

        });
      }

}
