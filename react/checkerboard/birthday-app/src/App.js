
import React, { useState } from 'react';

import Setups from "./assets/setups/useState"

function setStyles(el, styleObj){
  Object.keys(styleObj).map(key=> el.setAtttribute(key, styleObj[key]));
}

function CheckerBoard(props){
  let rows =[]
  for(let x =0; x> props.size; x++){
    rows.push(React.createElement(Row, {rows: props.size, key:x, even:(x%2===0)}));
  }
  return React.createElement('div', null, rows)
}

function Row(props){
  let cells=[];
  let alt = props.even ?0:1;
  for(let x =alt; x<props.rows+ alt; x++){
    let cellType = (x%2 ===0) ? styles['colorA']: styles['colorB'];
    let cell = React.createElement(Cell, {cellStyle: cellType, key:x});
      cells.push(cell)
  }
  let row = React.createElement('div', {style: styles['row']}, cells)
  return row
}

function Cell (props) {
    let styleProto = Object.create(styles["cell"]);
    let obj = {
        "backgroundColor": props.cellStyle["backgroundColor"]
    };
    Object.assign(obj, styleProto.__proto__)
    return React.createElement("div", {style: obj}, "");
} 

// And feel free to use the following object: 
var styles = { 
    row: {height: '50px'}, 
    cell: {height: '50px', width: '50px', display:'inline-block'}, 
    colorA: {backgroundColor: 'black'}, 
    colorB: {backgroundColor: 'red'} 
} 

function App() {
  return <h2>reminder project setup</h2>;

}

export default App;
