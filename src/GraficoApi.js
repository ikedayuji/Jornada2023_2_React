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
  flexWrap: 'wrap',
};

const cardContainerStyle = {
  display: 'flex',
};

const cardStyle = {
  ...chartStyle,  // Mantém as propriedades do cartão
  float: 'left', // Adiciona float para alinhar à esquerda
};

function GraficoMinutoPeso() {
  // Componente GraficoMinutoPeso existente, mantido igual
}

function GraficoMinutoNivel() {
  // Componente GraficoMinutoNivel existente, mantido igual
}

function GraficoHoraPeso() {
  // Componente GraficoHoraPeso existente, mantido igual
}

function GraficoHoraNivel() {
  // Componente GraficoHoraNivel existente, mantido igual
}

function GraficoNovo1() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Temperatura',
      },
      // Adicione configurações específicas para o Gráfico Novo 1
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
        text: 'Peso dos Materiais',
      },
      // Adicione configurações específicas para o Gráfico Novo 2
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo3() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Nível',
      },
      // Adicione configurações específicas para o Gráfico Novo 3
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo4() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Fluxo',
      },
      // Adicione configurações específicas para o Gráfico Novo 4
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo5() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Sensores de Velocidade',
      },
      // Adicione configurações específicas para o Gráfico Novo 5
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function GraficoNovo6() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Reservado',
      },
      // Adicione configurações específicas para o Gráfico Novo 6
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={cardStyle} />;
}

function App() {
  return (
    <div>
      <div style={containerStyle}>
        <div style={cardContainerStyle}>
          <GraficoNovo1 />
          <GraficoNovo2 />
          <GraficoNovo5 />
        </div>
        <div style={cardContainerStyle}>
          <GraficoNovo3 />
          <GraficoNovo4 />
          <GraficoNovo6 />
        </div>
      </div>
    </div>
  );
}

export default App;
