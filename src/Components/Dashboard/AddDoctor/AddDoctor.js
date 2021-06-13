import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddDoctors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)


    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
        console.log(newInfo)

    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)

    }


    const handleSubmit = (e) => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('https://whispering-sands-28148.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
      
  


    return (
        <div>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h4 className="text-brand">Add a Doctor</h4>

                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name" />
                    </div>
                    <div class="form-check pt-5 mt-5">
                        <input type="file"  onChange={handleFileChange} id="uploadImg" />
                        <label class="form-check-label upload" for="uploadImg">Uplode image   <FontAwesomeIcon icon={faCloudUploadAlt} /></label>
                    </div>
                    <button type="submit" class="btn btn-brand float-end">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;