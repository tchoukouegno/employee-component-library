import '../lib/index.css';
import { useState } from 'react';
import { filterByName } from './filterByName';





export function EmployeeList({employeeTitle, employees}) {


   

    const [employeeData, setEmployeeData]= useState(employees);

    const [sortedColumn, setSortedColumn] = useState(null);
   
       

    const handleClick = (data)=>{

        if(data === sortedColumn ) {

            setEmployeeData(employees.reverse());

            setSortedColumn(null);
          

        } else {

            const employeeDataFilter = filterByName(employeeData, data);

           setEmployeeData(employeeDataFilter);

           setSortedColumn(data);

           setCurrentPage(1);

        }
   

    }

    const [dataInput, setDataInput] = useState("");

    const string = dataInput;

    const userInput = string.toLowerCase();

    const employeeDataFilterList =  employeeData.filter((employee)=>{


        if(employee.firstName.toLowerCase().includes(userInput) === true ) {


            return employee;

        }

        if(employee.lastName.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.startDate.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.department.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.dateOfBirth.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.street.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.city.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.state.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }

        if(employee.zipCode.toLowerCase().includes(userInput) === true) {
           
            return employee;

        }
        
       
        
    })


    const handleChange = (e)=>{ 
        
        setDataInput(e.target.value);

        setCurrentPage(1); 
        
        setEmployeeData(employees);
       
    }

  
    const [selectValue, setSelectValue] = useState(5);

    const [currentPage, setCurrentPage]= useState(1);
    const recordsPerPage= selectValue;
    let lastIndex = currentPage * recordsPerPage ;
    let firstIndex = lastIndex  - recordsPerPage;
    const displayEmployeeList = employeeDataFilterList.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(employees.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

   

   const handleChangeSelect = (e)=>{     

        setSelectValue(e.target.value);

        setCurrentPage(1);
       
        setEmployeeData(employees);
       
   }
   

   
   const prevPage = ()=>{

    if(currentPage !== 1 && dataInput.length === 0) {

    
     setCurrentPage(currentPage - 1);
    

    }


   }

   const changePage = (page)=>{
    
    setCurrentPage(page) ;

   }

   const nextPage = ()=>{

    if(currentPage !== nPage && currentPage <= nPage && dataInput.length === 0) {

        setCurrentPage(currentPage + 1);

    }


   }
  
  

    return(

        <div className='componentBody'>


                <div className='headerTable'>
                       
                       <div className='showEntriesTable'>

                            <span className='showEntries'>Show</span>
                            
                            <select onChange={handleChangeSelect} value={selectValue}>

                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>

                            </select>

                            <span className='showEntries'>entries</span>

                       </div>
                        
                        <div>

                        <span>Search:</span>

                        <input className='search' type="text"  onChange={handleChange}  />

                        </div>

                </div>

                <div id="array">
                        

                        <div id="arrayTitle">   
                        
                            <table>
                    
                                <thead>

                                    <tr>
                                        {employeeTitle.map((employee)=>(

                                            <td key={employee.data} onClick={()=>handleClick(employee.data)}>{employee.title}</td>

                                        ))}
                    
                                    </tr>

                                </thead>  
                    
                            </table>
                    
                        </div>
            
                        <table className="site">    

                                    {displayEmployeeList.length !== 0 ? displayEmployeeList.map((data)=>(

                                        <tbody key={data.zipCode}>

                                                <tr>

                                                    <td >{data.firstName}</td>
                                                    <td >{data.lastName}</td>
                                                    <td >{data.startDate}</td>
                                                    <td>{data.department}</td>
                                                    <td >{data.dateOfBirth}</td>
                                                    <td>{data.street}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.state}</td>
                                                    <td>{data.zipCode}</td>

                                                </tr>

                                        </tbody>            

                                    )) 
                                    
                                    :
                                        <tbody>

                                            <tr><td id='errorFound'>No matching records found</td></tr>

                                        </tbody>                  
                                    
                                    }     
                    
                        </table>

                        
                        <div className='tFooter'>


                                    <div className='numberShowAndEntries'>

                                        <span>Showing {lastIndex >= displayEmployeeList.length ? lastIndex = displayEmployeeList.length : firstIndex + 1} to {lastIndex >= displayEmployeeList.length ? lastIndex = displayEmployeeList.length : lastIndex} of {displayEmployeeList.length} entries</span>

                                        {dataInput.length !==0 &&  <span>(filtered from {employees.length} total entries)</span>}


                                    </div>

                                    <nav>

                                        <ul className='pagination'>

                                            <li className='page-item'>

                                                <span  className={`page-link ${currentPage !==1 ? 'active' : ''}`} onClick={prevPage}> Previous</span>

                                            </li>

                                            { displayEmployeeList.length !== 0 && dataInput.length === 0 ?

                                                numbers.map((n, i)=>(

                                                
                                                <li className= {`page-item ${currentPage === n ? 'active' : ''}`} onClick={()=>changePage(n)} key={i}> {n} </li>


                                                ))

                                                :

                                                displayEmployeeList.length === 0 ? null :  <li className= {`page-item ${currentPage ? 'active' : ''}`}>1</li>

                                            }

                                            <li className='page-item'>

                                                <span  className= {`page-link ${currentPage !== nPage && currentPage <= nPage && dataInput.length === 0   ? 'active' : ''}`}  onClick={nextPage}> Next</span>

                                            </li>



                                        </ul>




                                    </nav>




                        </div>
            
            


                        </div>
                
                        

        </div>



    );





}
