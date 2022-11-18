import VolleyballPlayerListItem from "../VolleyballPlayer-list-item/VolleyballPlayer-list-item";
import "./VolleyballPlayer-list.css";

const VolleyballPlayerList =  ({data, onDelete, onToggleProp,onSalaryChange }) =>{
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
       
          return(
           <VolleyballPlayerListItem 
           key = {id} 
           {...itemProps}
           onDelete = {() => onDelete(id)} 
           onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
           onSalaryChange = {(e) => onSalaryChange(e.target.value)}/>
        )
    })
    
    return(
        <ul className="app-list list-group">
        {elements}
        </ul>
    )
}

export default VolleyballPlayerList;
