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



const LineGr = ({ title, data_graphic, name_serie, number_data, labels, colors }) => {

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
  
        console.log('data_graphicsdfsdfsdfsdf');
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
  

  
      if (number_data > 0) {
  
        createDataset();
      
  
  
      }
      
    }, [data_graphic, isReload])


    return (
        <>
      {data != null ? <Line options={options} data={data} /> : null}

    </>
    )
}

export default LineGr