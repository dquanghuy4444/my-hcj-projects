// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45],
      },
    ],
    chart: {
      type: "bar",
      height: 160, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
};

const ele = document.querySelector("#apex1");
const chart = new ApexCharts(ele , options);
chart.render();

var sidebarIsDisplayed = false;
const eleSidebar = document.getElementsByClassName("sidebar")[0];
const eleIconClose = document.getElementsByClassName("sidebar__icon")[0];

function toggleSidebar(){
    if(!sidebarIsDisplayed){
        eleSidebar.classList.add("sidebar__responsive");
        sidebarIsDisplayed = true;
    }
}

function closeSidebar(){
    if(sidebarIsDisplayed){
        eleSidebar.classList.remove("sidebar__responsive");
        sidebarIsDisplayed = false;
    }
}

function changeDesign(){
    if (window.innerWidth > 855 && sidebarIsDisplayed) {
        eleSidebar.classList.remove("sidebar__responsive");
        sidebarIsDisplayed = false;
    }
}

