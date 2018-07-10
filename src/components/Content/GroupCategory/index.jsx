import React,{Component} from 'react';
import Category from './Category';
import lodash from 'lodash';



class GroupCategory extends Component {
    constructor(props){
      super(props)
      this.state = {
          listCategorys: [{id: 1, name: 'Moedas'},{id:2, name:'Taxas'}],
          listQuestion: [{id:1, textQuestion:'O que é bitcoin?', idCat:1},
                        {id:2, textQuestion:'O que é ripple?', idCat:1},
                        {id:3, textQuestion:'Quais taxas cobramos?', idCat:2}]
      }
    }
  
  
    render() {
      return (
        <div className="groupCategory">
            { this.state.listCategorys.map(category => (
                <Category category={category} questions={lodash.filter(this.state.listQuestion,{'idCat':category.id})}/>
                ))
            }             
        </div>
      );
    }
  }

export default GroupCategory;
