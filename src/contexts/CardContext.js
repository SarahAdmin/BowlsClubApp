import React, {createContext, useReducer, useEffect} from 'react'; 
import {actionTypes } from '../helpers/actionTypes'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 


const STORAGE_KEY = 'mbc_super_secret_key'; 
let initialCardState = [
   { 
   id: 245,
   cname: "Go Cats", 
   date: new Date(),
   rink: 5, 
   team1: "Cheetahs", 
   team2: "Wildcats",
   scores: [  
      {
      id:"13942", 
      team1_shot: 4,
      team1_running_total: 4,
      end: 1, 
      team2_shot: 2, 
      team2_running_total: 2,
   },  { 
      id: '24535', 
      team1_shot: 6, 
      team1_running_total: 6, 
      end: 1, 
      team2_shot: 4, 
      team2_running_total: 4,
   }, 
    { 
      id: '45363',
      team1_shot: 3, 
      team1_running_total: 3, 
      end: 3, 
      team2_shot: 5, 
      team2_running_total: 5,
    },
    { 
      id: '34355', 
      team1_shot: 6, 
      team1_running_total: 6, 
      end: 4, 
      team2_shot: 9, 
      team2_running_total: 9,
    },
   
   ]
}];

let addScores = [ 
   
   { 
      shots: [ { 
         id: "", 
         team1_shot: "", 
         team1_running_total: "", 
         end: "", 
         team2_shot: "", 
         team2_running_total: ","

      },]
   }
]


const reducer = (action, state) => { 

  
   switch(action.type) { 
      case actionTypes.create:
      return [ 
         ...state, 
         { 
            id: action.payload.id,
            cname: action.payload.cname,
            date: action.payload.date,
            rink: action.payload.rink, 
            team1: action.payload.team1, 
            team2: action.payload.team2,
           scores: [ 
            { 
            id: 'random_id',
            team1_shot: 0, 
            team1_running_total: 0, 
            end: 1, 
            team2_shot: 0, 
            team2_running_total: 0,
         }
      ]
   }
];
      case 'Update':
      return state.map((e) => { 
         if (e.id === action.payload.id) { 
            return action.payload;
         } else { 
            return e;
         }
      }); 
      case 'Delete':
      return state.filter((e) => e.id !== action.payload.id) 
      default: 
      return state;
   }

   

};

const CardContext = React.createContext();
export const CardProvider = ({children}) => { 
   const[state, dispatch] = useReducer(reducer, initialCardState);
   const createCard = (id,cname,date,rink,team1,team2,callback) => { 
      dispatch({type: actionTypes.create, payload: {id,cname,date,rink,team1,team2}}); 
      dispatch({type: actionTypes.save}); 
      if (callback) { callback(); } 
   }


   const updateCard = (id,cname,date,rink,team1,team2, callback ) => { 
      dispatch({type: actionTypes.update, payload: {id,cname,date,rink,team1,team2}}); 
      dispatch({type: actionTypes.save}); 
      if (callback) { callback();}
   }

   const deleteCard = (id,cname,date,rink,team1,team2, callback ) => { 
      dispatch({type: actionTypes.delete, payload: {id,cname,date,rink,team1,team2}}); 
      dispatch({type: actionTypes.save}); 
      if (callback) { callback(); }
   }

   return ( 
          <CardContext.Provider value={{ state:state, 
            create: createCard,
            remove: deleteCard, 
            update: updateCard,}}>

             {children}
          </CardContext.Provider>

   );
};
   





   export default CardContext; 