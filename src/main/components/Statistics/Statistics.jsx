import React, { Component } from 'react';
import Chart from 'chart.js';

import './statistic.scss';

class Statistics extends Component {
    componentDidMount() {
        const ctx = document.getElementById('myChart').getContext('2d');

        const gradientFillBlue = ctx.createLinearGradient(0, 0, 0, 150);
        gradientFillBlue.addColorStop(0, 'rgba(52, 84, 245, 0.45)');
        gradientFillBlue.addColorStop(1, 'rgba(250, 251, 255, 0.45)');

        const gradientFillPurple = ctx.createLinearGradient(0, 0, 0, 150);
        gradientFillPurple.addColorStop(0, 'rgba(168, 83, 247, 0.45)');
        gradientFillPurple.addColorStop(1, 'rgba(250, 251, 255, 0.45)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Feb 1-7', 'Feb 7-14', 'Feb 14-21', 'Feb 21-28'],
                datasets: [{
                    data: [17, 28, 34, 19],
                    backgroundColor: gradientFillBlue,
                    borderColor: '#3454f5',
                    borderWidth: 2,
                    fill: true,
                }, {
                    data: [30, 22, 17, 34],
                    backgroundColor: gradientFillPurple,
                    borderColor: '#a957f5',
                    borderWidth: 2,
                    fill: true,
                }],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scaleShowVerticalLines: false,
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
                    line: {
                        backgroundColor: 'white',
                        borderWidth: 3,
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
                            fontColor: '#aeabc0',
                            fontSize: 12,
                            fontFamily: 'RubikRegular',
                            maxTicksLimit: 5,
                            padding: 14,
                        },
                        gridLines: {
                            drawBorder: false,
                            zeroLineColor: '#eae9f7',
                            tickMarkLength: 0,
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            zeroLineWidth: 0,
                            tickMarkLength: 0,
                        },
                        ticks: {
                            padding: 22,
                            beginAtZero: true,
                            fontColor: '#aeabc0',
                            fontSize: 12,
                            fontFamily: 'RubikRegular',
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
