// import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries}
// from'@syncfusion/ej2-react-charts';
// import * as React from 'react';
// class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [44, 55, 41, 17, 15],
//         options: {
//           chart: {
//             type: 'donut',
//           },
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 position: 'bottom'
//               }
//             }
//           }]
//         },
      
      
//       };
//     }

  

//     render() {
//       return (
//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
// </div>


// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// //var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// class Appd extends Component {
//     render() {
//         const options = {
//             exportEnabled: true,
//             animationEnabled: true,
//             title: {
//                 text: "Website Traffic Sources"
//             },
//             data: [{
//                 type: "pie",
//                 startAngle: 75,
//                 toolTipContent: "<b>{label}</b>: {y}%",
//                 showInLegend: "true",
//                 legendText: "{label}",
//                 indexLabelFontSize: 16,
//                 indexLabel: "{label} - {y}%",
//                 dataPoints: [
//                     { y: 18, label: "Direct" },
//                     { y: 49, label: "Organic Search" },
//                     { y: 9, label: "Paid Search" },
//                     { y: 5, label: "Referral" },
//                     { y: 19, label: "Social" }
//                 ]
//             }]
//         }
//         return (
//             <div>
//                 <CanvasJSChart options={options}
//                 /* onRef={ref => this.chart = ref} */
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div>
//         );
//     }
// }
// module.exports = Appd;

// export default Appd;



















// import React from "react";
// import { PieChart, Pie, Cell, Legend,Tooltip } from "recharts";
// class PieRechartComponent extends React.Component {
//     COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
//     pieData = [
//         {
//             name: "Apple",
//             value: 54.85
//         },
//         {
//             name: "Samsung",
//             value: 47.91
//         },
//         {
//             name: "Redmi",
//             value: 16.85
//         },
//         {
//             name: "One Plus",
//             value: 16.14
//         },
//         {
//             name: "Others",
//             value: 10.25
//         }
//     ];
//     CustomTooltip = ({ active, payload, label }) => {
//         if (active) {
//             return (
//                 <div
//                     className="custom-tooltip"
//                     style={{
//                         backgroundColor: "#ffff",
//                         padding: "5px",
//                         border: "1px solid #cccc"
//                     }}
//                 >
//                     <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
//                 </div>
//             );
//         }
//         return null;
//     };
//     render() {
//         return (
//             <PieChart width={730} height={300}>
//                 <Pie
//                     data={this.pieData}
//                     color="#000000"
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={120}
//                     fill="#8884d8"
//                 >
//                     {this.pieData.map((entry, index) => (
//                         <Cell
//                             key={`cell-${index}`}
//                             fill={this.COLORS[index % this.COLORS.length]}
//                         />
//                     ))}
//                 </Pie>
//                 <Tooltip content={<this.CustomTooltip />} />
//                 <Legend />
//             </PieChart>
//         );
//     }
// }
// export default PieRechartComponent;