/** 
   * Fonction qui trie des elements par ordre alphabetique
   * @param {array} arrayOfElements
   * @param {string} nameOfFilter
   * @return {array} 
*/
export function filterByName(arrayOfElements, nameOfFilter){


        return arrayOfElements.sort((a, b)=>{



            

            if(nameOfFilter === "firstName"){
    
                return a.firstName.localeCompare(b.firstName);
    
            }
    
            if(nameOfFilter === "lastName"){
    
                return a.lastName.localeCompare(b.lastName);
    
            }
    
            if(nameOfFilter === "startDate"){
    
                return a.startDate.localeCompare(b.startDate);
    
            }
    
            if(nameOfFilter === "department"){
    
                return a.department.localeCompare(b.department);
    
            }
    
            if(nameOfFilter === "dateOfBirth"){
    
                return a.dateOfBirth.localeCompare(b.dateOfBirth);
    
            }
    
            if(nameOfFilter === "street"){
    
                return a.street.localeCompare(b.street);
    
            }
    
            if(nameOfFilter === "city"){
    
                return a.city.localeCompare(b.city);
    
            }
    
            if(nameOfFilter === "state"){
    
                return a.state.localeCompare(b.state);
    
            }
    
            if(nameOfFilter === "zipCode"){
    
                return a.zipCode.localeCompare(b.zipCode);
    
            }
    
            
    
            return a.localeCompare(b);
        });  
    



    









  
}