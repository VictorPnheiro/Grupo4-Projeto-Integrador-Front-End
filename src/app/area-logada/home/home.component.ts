import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prospeccao = [50, 60 ,80 ,70, 100, 150, 200, 210, 220, 250, 300, 350];
  real = [55, 66 ,88 ,77, 120, 170, 230, 240, 250, 260, 310, 300]

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          label: 'Prospecção',
          data: this.prospeccao,
          borderWidth: 3,
          borderColor: '#40D90B'
        }, {
          label: 'Real',
          data: this.real,
          borderWidth: 3,
          borderColor: '#ff5510'
        } ],
        
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    var myChartPie = new Chart("myChartPie", {
      type: 'pie',
      data: {
        labels: ['Medicamentos', 'Vitaminas e Suplementos', 'Dermocosméticos', 'Perfumaria'],
        datasets: [{
          label: 'Vendas - R$',
          data: [500, 100, 900, 200],
          borderWidth: 0,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }
  }
