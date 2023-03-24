import React, {useReducer} from 'react'; 

const game_state = [
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 1, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 2, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 3, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 4, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 5, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 6, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 7, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 8, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 9, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 10, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 11, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 12, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 13, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 14, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 15, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 16, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 17, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 18, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 19, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 20, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 21, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 22, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 23, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 24, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 25, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 26, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 27, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 28, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 29, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 30, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 31, 'team2_shot':0, 'team2_running_total':0},
  {'team1_shot': 0, 'team1_running_total': 0, 'end': 32, 'team2_shot':0, 'team2_running_total':0}
 ];


export const ShotProvider = ({children}) => { 
    return ( 
        <ShotContext.Provider value={{state:state, create: addShot,}}> 
        {children}
        </ShotContext.Provider>
    );
}; 








export default {ShotContext};
