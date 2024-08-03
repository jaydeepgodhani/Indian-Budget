import { data, links } from "./assets/sankey";
import sunburst from "./assets/sunburst";

const sunBurstOption = {
  visualMap: {
    type: "piecewise",
    show: false,
    pieces: [
      // {min: 0, max: 10, color: '#FFAE57'},
      // {min: 10, max: 20, color: '#FF7853'},
      // {min: 20, max: 30, color: '#EA5151'},
      // {min: 30, max: 40, color: '#CC3F57'},
      // {min: 40, max: 50, color: '#9A2555'},
      { min: 0, max: 10, color: "#087ca7" },
      { min: 10, max: 20, color: "#FFC470" },
      { min: 20, max: 30, color: "#DF5746" },
      { min: 30, max: 40, color: "#8B322C" },
      { min: 40, max: 50, color: "#8B322C" },
      // {min: 0, max: 10, color: '#164863'},
      // {min: 10, max: 20, color: '#427D9D'},
      // {min: 20, max: 30, color: '#9BBEC8'},
      // {min: 30, max: 40, color: '#DDF2FD'},
      // {min: 40, max: 50, color: '#DDF2FD'},
      // {min: 40, max: 50, color: '#d5896f'},
      // {min: 30, max: 40, color: '#dab785'},
      // {min: 20, max: 30, color: '#70a288'},
      // {min: 10, max: 20, color: '#04395e'},
      // {min: 0, max: 10, color: '#031d44'},
    ],
    min: 0,
    max: 50,
  },
  textStyle: {
    fontFamily: "Open Sans",
  },
  // title: {
  //   text: "Indian Budget 2023-24",
  // },
  tooltip: {
    trigger: "item",
  },
  series: {
    type: "sunburst",
    data: sunburst,
    radius: [0, "100%"],
    levels: [
      {
        itemStyle: {
          borderWidth: 2,
        },
      },
      {
        r: "15%",
        label: {
          rotate: "tangential",
          show: true,
          width: 100,
          overflow: "break",
          ellipsis: "...",
        },
      },
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "tangential",
          show: true,
          width: 100,
          overflow: "break",
          ellipsis: "...",
          formatter: "{b}\n{c}",
        },
      },
      {
        r0: "35%",
        r: "50%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "tangential",
          width: 100,
          overflow: "break",
          ellipsis: "...",
          formatter: "{b}\n{c}",
        },
      },
      {
        r0: "50%",
        r: "80%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "radial",
          width: 100,
          overflow: "break",
          ellipsis: "...",
          formatter: "{b}\n{c}",
        },
      },
      {
        r0: "80%",
        r: "100%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "radial",
          width: 100,
          overflow: "break",
          ellipsis: "...",
          formatter: "{b}\n{c}",
        },
      },
    ],
  },
};

const sankeyOption = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
    valueFormatter: (value) => "₹" + value.toFixed(2),
  },
  textStyle: {
    fontFamily: "Open Sans",
    fontWeight: 'normal',
    overflow: 'break',
    ellipsis: '...',
  },
  animation: true,
  series: [
    {
      nodeWidth: 20,
      nodeGap: 18,
      layoutIterations: 32,
      draggable: true,
      type: "sankey",
      bottom: "10%",
      edgeLabel: { show: true,
        color: '#000',
       },
      emphasis: {
        focus: "trajectory",
        blurScope: "series",
      },
      levels: [
        {
          depth: 3,
          label: {
            fontWeight: 'bold',
            formatter: '{b} ({c})'
          },
          itemStyle: {
            borderColor: '#333',
            borderWidth: 2,
            borderType: 'solid',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          },
        },
      ],
      selectMode: true,
      data: data,
      links: links,
      orient: "vertical",
      label: {
        position: "top",
      },
      labelLayout:{
        hideOverlap: true,
      },
      lineStyle: {
        color: "target",
        opacity: 0.2,
        curveness: 0.5,
      },
    },
  ],
};

export { sankeyOption, sunBurstOption };

