
import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }





    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти игрока"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
        )
    }
}


 export default SearchPanel;

//  wtf   
//        |
//        |
//        |
//       \ /
//        V



// render() {
//     return (
//         <input 
//               type="text"
//               className="form-control search-input"
//               placeholder="Search employeers"
//               value = {this.state.term} 
//               onChange ={this.OnUpdateSearch}/>
//            )
//         }
// }

