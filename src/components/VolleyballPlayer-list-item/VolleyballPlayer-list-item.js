import "./VolleyballPlayer-list-item.css";
const VolleyballPlayerListItem = (props,{data}, onSalaryChange) =>  {
  
    onSalaryChange = (e) => {
        return  (e.target.value) 
    }
 
    const {name,salary,onDelete, onToggleProp, increase, promotion} = props;
    let classNames = "list-group-item d-flex justify-content-between";

  
    if (increase){
        classNames +=' increase';
    }
    if (promotion){
        classNames += ' like';
    }

    return(
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle = 'promotion' className="list-group-item-label">{name}  </span>
            <input type="text" onChange={onSalaryChange}  className="list-group-item-input" defaultValue={salary + "$"} /> 
            <div className="d-flex justify-content-center align-items-center">
                <button type = "button"
                        onClick={onToggleProp} 
                        data-toggle = 'increase'
                        className=" btn-cookie btn-sm">
                     <i className=" fas fa-cookie"></i>       
                </button>

                <button type = "button"
                        className=" btn-trash btn-sm"
                        onClick = {onDelete}>
                     <i className=" fas fa-trash"></i>       
                </button>
                <i className="fas fa-star"></i>
            </div>

        </li>
    )
  }

    

export default VolleyballPlayerListItem;
