import React, { Component } from 'react';
import Chart from 'chart.js';

import './statistic.scss';

class Statistics extends Component {
    componentDidMount() {
        const ctx = document.getElementById('myChart').getContext('2d');

        const gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0.6)');
        gradientFill.addColorStop(1, 'rgba(244, 144, 128, 0.6)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Feb 1-7', 'Feb 7-14', 'Feb 14-21', 'Feb 21-28'],
                datasets: [{
                    data: [17, 28, 34, 19],
                    backgroundColor: 'rgba(0,0,0,0)',
                    // backgroundColor: gradientFill,
                    borderColor: 'red',
                    borderWidth: 5,
                    fill: true,
                }, {
                    data: [30, 22, 17, 34],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'blue',
                    borderWidth: 5,
                    fill: true,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        label: tooltipItem => tooltipItem.yLabel,
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                scales: {
                    yAxes: [{
                        dislay: true,
                        ticks: {
                            min: 0,
                            max: 60,
                            stepSize: 20,
                            beginAtZero: true,
                            fontColor: 'blue',
                            fontStyle: 'bold',
                            maxTicksLimit: 5,
                            padding: 20,
                        },
                        gridLines: {
                            drawBorder: false,
                            tickMarkLength: 0,
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            zeroLineWidth: 0,
                            zeroLineColor: 'blue',
                            tickMarkLength: 0,
                        },
                        ticks: {
                            padding: 20,
                            beginAtZero: true,
                            fontColor: 'red',
                            fontStyle: 'bold',
                        },
                    }],
                },
            },
        });
    }


    render() {
        return (
            <div id="statistics" className="statistics">
                <canvas id="myChart" width="400" height="400" ref={r => this.chartRef = r} />
            </div>
        );
    }
}

export default Statistics;
