import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName,setBoardName] = useState('no boards yet!')

   const boards = [
      {label:'Bad Recipes',value:'badRecipes'},
      {label:'Scary Mad Women',value:'scaryMadWomen'},
      {label:'Crack and Cheese',value:'crackAndCheese'},
   ];

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => {
            return (
               <option key={board.label} value={board.value}>{board.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
