import { Doughnut, Bar } from 'react-chartjs-2';
import React, { useEffect } from 'react';

const axios = require('axios');

const token = localStorage.getItem("Token");
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

let userData: any[] = []

const SupplierChart = () => {
    useEffect(() => {
      console.log(token);
          axios.get('http://localhost:1337/api/responses', {
            headers: {'Authorization': `Bearer ${token}` }
          })
          .then(function (response:any) {
            
            for(var i in response.data.data){
              userData.push(i)
            }
            console.log(userData);
          })
          .catch(function (error:any) {
            console.log(error);
          });
      }, []);

    return(
        <div>
            {/* <Bar data={} options={}/> */}
        </div>
    )
}

export default SupplierChart;