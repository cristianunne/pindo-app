import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



const MultiLine = ({ title, data_graphic, name_serie, number_data, labels, colors }) => {
    const [data, setData] = useState(null);
    const [isReload, setIsReload] = useState(false);
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#ffffff',
            textAlign: 'right'
          },
          align: 'start'
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

      style: {
        strokewidth: 1
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
  
        //la creacion del dataset aca cambiara
  
  
        setData({
          labels: labels,
          datasets:
            data_graphic
          ,
  
        });
        setIsReload(true);
  
      }
  
    }
  
  
    useEffect(() => {
  
     
  
      if (data_graphic != null) {
  
        createDataset();
      
      }
      
    }, [data_graphic, isReload])
    return (
        <>
        {data != null ? <Line options={options} data={data} /> : null}
  
      </>
    )
}

export default MultiLine