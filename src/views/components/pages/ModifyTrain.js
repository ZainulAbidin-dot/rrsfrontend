import React from 'react'
import AdminNav from './AdminNav'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../../App.js';
import './Contact.css';
import '../pages/Login'
import { useNavigate } from 'react-router';
import Axios from 'axios';
import $ from 'jquery';
import UpdateTrain from './UpdateTrain';

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function ModifyTrain() {
    var NUM = ""
    const [trainList, setTrainList] = useState([]);
    Axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    setTimeout(() => {
        searchTrain();
      }, 100);

    const searchTrain = () =>{
        Axios.get('http://localhost:1337/api/trains/viewtrains').then((response)=>{  
            setTrainList(response.data)
        })
    }

    const fun =(event)=>{
      // var i = event.currentTarget.dataset.index;
      
      // NUM = trainList[i].TRAIN_NUMBER

      navigate("/UpdateTrain")
    }
    
    
    return (
      <div>
            <AdminNav />
          
            <h1>Update a Train</h1>
            {/* searchTicket() */}
            {/* <button onClick={searchTicket}>Show</button> */}
            <input id="myInput" type="text" placeholder="Search a train.." />
            <br></br>
            <div className='table-alignment'>
            <table className='content-table' id='myTable'>
                <thead>
                    <tr>
                        <th>TRAIN_NAME</th>
                        <th>TRAIN_NUMBER</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {trainList.map((val, index)=>( 
                <tr data-index={index} key={index}>
                               <td>{val.TRAIN_NAME}</td>
                               <td>{val.TRAIN_NUMBER}</td>
                               <td><button className='print-btn' data-index={index} key={index} onClick={fun}>Update</button></td>
                </tr>
                  )
                 )}    
                </tbody>
            </table>
            </div>
            {/* {trainList.map((val)=>{
                    return <h1>TRAIN_NAME: {val.TRAIN_NAME} | TRAIN_NUMBER: {val.TRAIN_NUMBER} | STATION: {val.STATION_NAME}</h1>
                })} */}
        </div>
    )
}

export default ModifyTrain