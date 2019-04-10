import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  @ViewChild('mygraph') private chartRef;
    chart: any;
    
    data: any;
  constructor() { }

    updateClick() {
        this.data.data[0] = { x: '2017-01-07 06:00:00', y: 50 };
        this.chart.options.scales.xAxes[0].scaleLabel.labelString = "My new string";
        this.chart.update();

        // Or can update as suggested here
        // https://www.chartjs.org/docs/latest/developers/updates.html
    }
    ngOnInit() {
        var s1 = {
            label: 's1',
            borderColor: 'blue',
            data: [
                { x: '2017-01-06 18:39:30', y: 100 },
                { x: '2017-01-07 18:39:28', y: 101 },
            ]
        };

        this.data = {
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
               
                datasets: [this.data ] ,
            },
        options: {
                legend: false,
              responsive:true,
              maintainAspectRatio:false,
                scales: {
                    xAxes: [{
                        ticks: {
                            source: 'data',
                            maxRotation: 30,
                            minRotation:30
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
