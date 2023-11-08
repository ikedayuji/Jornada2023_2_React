import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const chartStyle = {
  width: '300px',
  height: '240px',
  margin: '20px',
  border: '1px solid #ccc',
  display: 'inline-block',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const rowContainerStyle = {
  display: 'flex',
};

const cardStyle = {
  ...chartStyle,
};

function GraficoMinutoPeso() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Temperatura',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Peso (kg)'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Peso (kg)',
          type: 'line',
          data: [100, 120, 110, 105, 90, 85, 95],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoMinutoNivel() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Nível',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Nível'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Nível',
          type: 'line',
          data: [50, 60, 55, 58, 52, 62, 59],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoHoraPeso() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Fluxo',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Peso (kg)'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Peso (kg)',
          type: 'line',
          data: [1200, 1320, 1010, 1340, 900, 2300, 2100],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoHoraNivel() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Velocidade',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Nível'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Nível',
          type: 'line',
          data: [50, 60, 55, 58, 52, 62, 59],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo1() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Nível',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Dados 1'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Dados 1',
          type: 'line',
          data: [10, 20, 30, 40, 50, 40, 30],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo2() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Reservado',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Dados 2'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Dados 2',
          type: 'line',
          data: [15, 25, 35, 45, 55, 45, 35],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

// ... Código para os gráficos restantes ...

function App() {
  return (
    <div>
      <div style={containerStyle}>
        <div style={rowContainerStyle}>
          <GraficoMinutoPeso />
          <GraficoMinutoNivel />
          <GraficoHoraPeso />
        </div>
        <div style={rowContainerStyle}>
          <GraficoHoraNivel />
          <GraficoNovo1 />
          <GraficoNovo2 />
          {/* Adicione os outros gráficos GraficoNovo3, GraficoNovo4, GraficoNovo5, GraficoNovo6 aqui */}
        </div>
      </div>
    </div>
  );
}

export default App;
