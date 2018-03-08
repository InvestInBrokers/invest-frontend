import React, { Component } from 'react';
import * as d3 from 'd3';
import Chart from 'chart.js';

import './statistic.scss';

class Statistics extends Component {
    constructor(props) {
        super(props);
        const parseTime = d3.timeParse('%Y-%m-%d');

        this.state = {
            data: [
                {
                    key: 'apples',
                    values: [
                        {
                            date: parseTime('2017-02-01'),
                            value: 15,
                        },
                        {
                            date: parseTime('2017-02-07'),
                            value: 30,
                        },
                        {
                            date: parseTime('2017-02-14'),
                            value: 45,
                        },
                        {
                            date: parseTime('2017-02-21'),
                            value: 30,
                        },
                        {
                            date: parseTime('2017-02-28'),
                            value: 15,
                        },
                    ],
                },
                {
                    key: 'bananas',
                    values: [
                        {
                            date: parseTime('2017-02-01'),
                            value: 45,
                        },
                        {
                            date: parseTime('2017-02-07'),
                            value: 30,
                        },
                        {
                            date: parseTime('2017-02-14'),
                            value: 15,
                        },
                        {
                            date: parseTime('2017-02-21'),
                            value: 30,
                        },
                        {
                            date: parseTime('2017-02-28'),
                            value: 45,
                        },
                    ],
                },
            ],
        };
    }

    componentDidMount() {
        //TODO: add margins to display axis nicer

        // const width = 490;
        // const height = 300;
        //
        // const chart = d3.select(this.chartRef)
        //     .attr('width', width + 100)
        //     .attr('height', height)
        //     .append('g')
        //     .attr('transform', 'translate(100, 0)');
        //
        // const x = d3.scaleTime()
        //     .domain([new Date(2017, 1, 1), new Date(2017, 1, 28)]) // min max dates
        //     .range([0, width]);
        //
        // const y = d3.scaleLinear()
        //     .domain([0, 60]) //max value
        //     .range([height, 0]);
        //
        // const colors = d3.scaleOrdinal()
        //     .domain(['apples', 'bananas'])
        //     .range(['red', 'green']);
        //
        // const graph = chart.selectAll('.graph')
        //     .data(this.state.data)
        //     .enter()
        //     .append('g')
        //     .attr('class', 'graph');
        //
        // graph
        //     .append('path')
        //     .attr('class', 'line')
        //     .style('stroke', d => colors(d.key))
        //     .attr('d', parentData => (d3.line()
        //         .curve(d3.curveBasis) // make points round, not sharp
        //         .x(d => x(d.date))
        //         .y(d => y(d.value))
        //     )(parentData.values));
        //
        // chart.append('g')
        //     .attr('class', 'axis axis--x')
        //     .attr('transform', `translate(0,${y(0) - 20})`)
        //     .call(d3.axisBottom(x));
        //
        // chart.append('g')
        //     .attr('class', 'axis axis--y')
        //     .attr('transform', 'translate(0,0)')
        //     .call(d3.axisLeft(y));

        new Chart(this.chartRef, {
            type: 'line',
            data: {
                labels: ['Feb 1-7', 'Feb 7-14', 'Feb 14-21', 'Feb 21-28'],
                datasets: [{
                    label: '# of Votes',
                    data: [15, 25, 30, 15],
                }],
            },
            options: {
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
                    }
                },
                scales: {
                    yAxes: [{
                        dislay: true,
                        ticks: {
                            min: 0,
                            max: 60,
                            stepSize: 20,
                            beginAtZero: true,
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
