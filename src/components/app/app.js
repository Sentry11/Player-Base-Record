import { Component } from 'react';

import AppInfo from '../app-info/app-info'; 
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import VolleyballPlayerList from '../VolleyballPlayer-list/VolleyballPlayer-list';
import VolleyballPlayerAddForm from '../VolleyballPlayer-add-form/VolleyballPlayer-add-form'


import './app.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      data : [
        {name : "John Cena", salary : 1900, promotion: false, increase : false, id : 1},
        {name : "Cm Punk", salary : 1700, promotion: false, increase : false, id : 2},
        {name : "Triple H", salary : 1200, promotion: false, increase : false, id :3},
        {name : "Kofi Kingston", salary : 1000, promotion: true, increase : true, id : 4},
        {name : "Rey Misterio", salary : 1500, promotion: false, increase : false, id : 5}
      ],
      term: '',
      filter: 'all',
      nSalary: ''

    }
    this.maxId = 6
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return{
       data : data.filter(item => item.id !== id)  
      }
    })
  } 

  addItem = (name,salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp =(id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
         if (item.id === id) {
           return{...item, [prop]: !item[prop]}
         }
         return item;
      })
    }))
  }


  searchEmp = (items, term) => {
      if (term.length === 0){
        return items;
      }

      return items.filter(item => {
        return item.name.indexOf(term) > -1
      })
  }

  
  onUpdateSearch = (term) => {
    this.setState({term});
  }

  
  filterPost = (items, filter) =>{
    switch(filter) {
      case 'rise': 
      return items.filter(item => item.promotion);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000 )
        default :
        return items
    }
  }
  
  
 onFilterSelect = (filter) => {
   this.setState({filter});
 }


 onSetValue = (newSalary) => {
  this.setState(({data}) => ({
     data: data.map(item => {
     return{...item, salary: newSalary}  
    })
  }))

 }

 
 onSalaryChange = (salary) =>{
  const newItem = {
    salary,
    increase: false,
    promotion: false,
    id: this.maxId++
  }
  this.setState(({data}) => {
    const newArr = [...data, newItem];
    console.log(newArr,"what is that")
    return {
      data: newArr
    }
  });
}


  render(){
        const {data, term,filter} = this.state;
        const numOfteammate = this.state.data.length;
        const increaseTeammate = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data,term), filter);
        return (
          <div className="app">
          
          <AppInfo
          numOfteammate = {numOfteammate}
          increaseTeammate = {increaseTeammate}/>
      
            <div className="search-panel">
            <SearchPanel
            onUpdateSearch = {this.onUpdateSearch}/> 
            <AppFilter
            filter = {filter} 
            onFilterSelect = {this.onFilterSelect}/>
            </div>
      
            <VolleyballPlayerList 
            data = {visibleData} 
            onDelete = {this.deleteItem}
            onToggleProp= {this.onToggleProp}
            onSalaryChange = {this.onSalaryChange}
            />
            <VolleyballPlayerAddForm onAdd = {this.addItem}/>
          </div>
        );
  }
}

export default App;
