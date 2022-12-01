import { isValidElement, useState } from "react";
import './App.css';
import plantData from "./assets/plant-data.json";
import Plant from "./components/Plant";
// import React, { useState, useEffect } from 'react';



function App() {

  const [list, setList] = useState([]);
  const [rareTot, setRareTot] = useState(0);
  const [habitat, setHab] = useState([]);
  const [color, setCol] = useState([]);

  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false, false, false, false])
  const [isSelected, setIsSelected] = useState([true, false, false]) //initially 0

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(habitat.length === 0 && color.length === 0) {  //if there is no filter applied
      return true
    } 

    else if(habitat.length === 0 && color.includes(item.color)) {  //if there is only a color filter 
      return true
    } 

    else if(color.length === 0 && habitat.includes(item.habitat)) {  //if there is only a hab filter 
      return true
    } 

    else if(color.includes(item.color) && habitat.includes(item.habitat)) {  //if there are both filters 
      return true
    } 
    else {
      return false
    }
  }

  const filteredData = plantData.filter(matchesFilterType)
  // console.log(filteredData)
  const [sortedData, setSortedData] = useState(plantData)

  const handleRadio = (index) => {
        return () => {
      // console.log(index)
      // console.log(sort)
      const newArray = [false, false, false]; //placeholder
      newArray[index] = true; // mutate placeholder copy 
      setIsSelected(newArray)

      if(index === 1) {
        console.log(filteredData)
        setSortedData(filteredData.sort((a, b) => {
          return a.minElevation - b.minElevation;
          }))
      }
      else if(index === 2) {
        setSortedData(filteredData.sort((a, b) => {
          return b.minElevation - a.minElevation;
          }))
  
      }
      else {
        setSortedData(filteredData)
      }

    }
  };

  const handleFilterEnv = (index) => { //environment filter
    return (x) => {
      setIsChecked((prev) => {
        prev[index] = x.target.checked
        return prev
      })
      if (x.target.checked) {
        setHab((prev) => [...prev, x.target.value])
      } else {
        setHab((prev) => prev.filter((item) => item !== x.target.value))
      }
    }
  };

  const handleFilterCol = (index) => { //color filter 
    return (x) => {
      setIsChecked((prev) => {
        prev[index+4] = x.target.checked
        return prev
      })
      if (x.target.checked) {
        setCol((prev) => [...prev, x.target.value])
      } else {
        setCol((prev) => prev.filter((item) => item !== x.target.value))
      }
    }
  };

  return (
    <div className="App">
      <div className="guide">
        {/* <h1>Sierra Nevada Field Guide</h1> */}
        { sortedData?.map((item => 
         <Plant item={item}
                name={item.name} 
                minElevation={item.minElevation}                 
                maxElevation={item.maxElevation} 
                habitat={item.habitat} 
                minSize={item.minSize} 
                maxSize={item.maxSize} 
                color={item.color}
                image={item.image} 
                rare={item.rare} 
                list={list} 
                setList={setList}
                rareTot={rareTot}
                setRareTot={setRareTot}
                key={item.name}/>
      ))}
      </div>

      <div className="my-list">
          <h1>My Field Journal</h1>
          <p>{list}</p>
          {/* maybe have this be like x rare plants of x documented */}
          <h2>Total rare plants documented: {rareTot}</h2>  
          <div className="filter">
            <h2>Filter on habitat:</h2>
            <label>
                  <input type="checkbox" checked={isChecked[0]} onChange={handleFilterEnv(0)} name= "habitat" value="forest floor"/>
                  forest floor
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[1]} onChange={handleFilterEnv(1)} name= "habitat" value="wet meadows"/>
                  wet meadows 
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[2]} onChange={handleFilterEnv(2)} name= "habitat" value="moist places"/>
                  moist places 
            </label>            
            <label>
                  <input type="checkbox" checked={isChecked[3]} onChange={handleFilterEnv(3)} name= "habitat" value="moist meadows"/>
                  moist meadows 
            </label>            
          </div>

          <div className="filter">
            <h2>Filter on color:</h2>
            <label>
                  <input type="checkbox" checked={isChecked[4]} onChange={handleFilterCol(0)} name= "color" value="pink"/>
                  pink
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[5]} onChange={handleFilterCol(1)} name= "color" value="blue"/>
                  blue
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[6]} onChange={handleFilterCol(2)} name= "color" value="red"/>
                  red
            </label>            
            <label>
                  <input type="checkbox" checked={isChecked[7]} onChange={handleFilterCol(3)} name= "color" value="white"/>
                  white
            </label>     
            <label>
                  <input type="checkbox" checked={isChecked[8]} onChange={handleFilterCol(4)} name= "color" value="purple"/>
                  purple
            </label>   
            <label>
                  <input type="checkbox" checked={isChecked[9]} onChange={handleFilterCol(5)} name= "color" value="yellow"/>
                  yellow
            </label>          
          </div>


          <div className="sort"> 
            <h2>Sort by:</h2>
            <input type="radio" value="recommended" name="sort" checked={isSelected[0]} onChange={handleRadio(0)}/>  
            recommended for you <br></br>
            <input type="radio" value="lowElev" name="sort" checked={isSelected[1]} onChange={handleRadio(1)}/>
            low to high minimum elevation<br></br>
            <input type="radio" value="highElev" name="sort" checked={isSelected[2]} onChange={handleRadio(2)}/>
            high to low minimum elevation
          </div>

      </div>
    </div>
  );
}

export default App;