
export  const basicModalInstance = () =>{
           
    const ClientHistoryWrapper = document.createElement("div")
     ClientHistoryWrapper.insertAdjacentHTML("beforeend", 
     `
  <div>        
      <label for="purpose_visit">the purpose of the visit</label>
      <input name ="purpose_visit" type="text" >
 </div>
 <div>        
     <label for="description_problem">description of the problem</label>
     <div><textarea name ="description_problem"></textarea>
 </div>    
 <div>           
     <label for="urgently">urgently</label>
     <select name="urgently" id="">
         <option value="">routine</option>
         <option value="">priority</option>
         <option value="">urgent</option>
     </select>
 </div>
 <div>        
     <label for="client_name">name</label>
     <input type="text" name ="client_name">
 </div>
     `)
     const modalForm = document.querySelector(".create_form")
     modalForm.append(ClientHistoryWrapper)
   
  
}