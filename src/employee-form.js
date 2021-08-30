import React from 'react';
import { Button, Modal } from '@material-ui/core';
import './employee-form.css';


export const EmployeeForm = ({data}) => {
   
    return <React.Fragment>
        {
            <div className="form">
            Employee edit
            <div className="form-element">
                <form>
                    <label>Name: </label><br/>
                    <input value={data?.name}></input><br/>
                    <label>Designation: </label><br/>
                    <input value={data?.designation}></input><br/>
                    <label>Phone: </label><br/>
                    <input value={data?.phone}></input><br/>
                    <label>Location: </label><br/>
                    <input value={data?.location}></input><br/>
                    <button>Save</button>
                </form>
                
            </div>
        </div>
        }
        
    </React.Fragment>

}