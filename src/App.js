import React, {useState, useRef} from 'react';
import './App.css';
import  {employee} from './employee-data';
import { EmployeeForm } from './employee-form';


function App() {
const employeeKeys = Object.keys(employee[0]);
const [isEdit, setEditHandler] = useState(false);
const [currentEmpData, setCurrentEmpData] = useState({});
const editHandler = (empData)=> {
  setCurrentEmpData(empData);
  setEditHandler((currentEdit)=> {
    return !currentEdit
  })
}
return <div>
  {!isEdit &&  <table>
    <tr>
      {employeeKeys.map((key, i)=> {
        return <th key={i}>{key}</th>
      })}
    </tr>
    <React.Fragment>
      {employee.map((empData)=> {
        
          return <tr >
          <td>{empData.name}</td>
          <td>{empData.designation}</td>
          <td>{empData.phone}</td>
          <td>{empData.location}</td>
          <td><button onClick={()=> {editHandler(empData)}}>Edit</button></td>
        </tr>

        
      })}
    </React.Fragment>
  </table>}
  {isEdit && <EmployeeForm data={currentEmpData}></EmployeeForm>}

 
</div>
}

export default App;