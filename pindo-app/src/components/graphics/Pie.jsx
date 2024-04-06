import React, { useEffect, useState } from 'react'

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);





const Bar = ({title, data_graphic, name_serie, number_data, labels, colors}) => {

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
        color: '#ffffff'
      },
    },
  };

  const createDataset = () => {

    if (!isReload) {

      //generate colors
      console.log(labels);
  
      setData({
        labels: labels,
        datasets: 
          [{
            data: data_graphic,
            borderColor: colors,
            backgroundColor: colors,
          }]
        ,

      });

      console.log('reinicia el graficoasidosdfasdgg');
      setIsReload(true);

    }

  }


  useEffect(() => {

    console.log('number_data');
    console.log(number_data);
   
    if (number_data > 0) {
  
      createDataset();

    }
   
  }, [data_graphic, isReload])


  return (


    <>
      {data != null ? <Pie options={options} data={data} /> : null}

    </>
  )
}

export default Bar