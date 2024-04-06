import React, { useEffect, useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
/*
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      border: {
        color: '#ffffff'
      },
      ticks: {
        color: '#ffffff'
      }
    },
    x: {
      border: {
        color: '#ffffff'
      },
      ticks: {
        color: '#ffffff'
      }
    }
  }



};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [36, 52, 12, 25, 56, 78, 90],
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2
    },

  ],
};

*/


const Barras = ({ title, data_graphic, name_serie, number_data, labels, colors }) => {

  const [data, setData] = useState(null);
  const [isReload, setIsReload] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: title,
        font: { weight: 'bold', size: 16 },
        color: '#ffffff',
        padding: {
          top: 10,
          bottom: 70
      }
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        border: {
          color: '#ffffff'
        },
        ticks: {
          color: '#ffffff'
        }
      },
      x: {
        border: {
          color: '#ffffff'
        },
        ticks: {
          color: '#ffffff'
        }
      }
    }
  };


  const createDataset = () => {

    if (!isReload) {

      console.log(data_graphic);
      console.log(labels);


      setData({
        labels: labels,
        datasets:
          [{
            label: name_serie,
            data: data_graphic,
            borderColor: colors[0],
            backgroundColor: colors[0],
          }]
        ,

      });
      setIsReload(true);

    }

  }


  useEffect(() => {

    console.log('data_graphic');
    console.log(data_graphic);

    if (number_data > 0) {

      createDataset();
    


    }
    
  }, [data_graphic, isReload])




  return (
    <>
      {data != null ? <Bar options={options} data={data} /> : null}

    </>

  )
}

export default Barras