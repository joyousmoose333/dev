import { isValidElement, useState } from "react";
import './App.css';
import plantData from "./assets/plant-data.json";
import Plant from "./components/Plant";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {

  const [list, setList] = useState([]);
  const [uniqueHabs, setUniqueHabs] = useState([]);
  const [habitat, setHab] = useState([]);
  const [sort, setSort] = useState(0)

  const [isChecked, setIsChecked] = useState([false, false, false, false])
  const [isSelected, setIsSelected] = useState([true, false, false]) //initially 0
  
  // const [checkedTwo, setCheckedTwo] = React.useState(false);

  // const sortedArray = array.sort((a, b) => {
  //   return a.value - b.value;
  //   })

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(habitat.length === 0) { 
      return true
    } 
    if (habitat.includes(item.habitat)) {
      return true
    } else {
      return false
    }
  }

  const filteredData = plantData.filter(matchesFilterType)

  let sortedData;
  const handleSorting = () => {
    if(sort === 1) {
      sortedData = filteredData.sort((a, b) => {
        return a.minElevation - b.minElevation;
        })
    }
    else if(sort === 2) {
      sortedData = filteredData.sort((a, b) => {
        return b.minElevation - a.minElevation;
        })

    }
    else {
      sortedData = filteredData 
      }
    }

    console.log(sortedData)


  //   return b.minElevation - a.minElevation;   });

  

  const handleRadio = (index) => {
    return () => {
      setSort(index)
      const newArray = [false, false, false]; //placeholder
      newArray[index] = true; // mutate placeholder copy 
      setIsSelected(newArray)
      setSort(index)
    }
  };

  const handleFilter = (index) => {
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

  return (
    <div className="App">
      <div className="guide">
        <h1>Sierra Nevada Field Guide</h1>
        {sortedData?.map((item => 
         <Plant item={item}
                name={item.name} 
                minElevation={item.minElevation}                 
                maxElevation={item.maxElevation} 
                habitat={item.habitat} 
                minSize={item.minSize} 
                maxSize={item.maxSize} 
                image={item.image} 
                list={list} 
                setList={setList}
                uniqueHabs={uniqueHabs}
                setUniqueHabs={setUniqueHabs}
                key={item.name}/>
      ))}
      </div>

      <div className="my-list">
          <h1>My Field Journal</h1>
          <p>{list}</p>
          <h2>Unique Habitats Documented: {uniqueHabs.length}</h2> 
          <div className="filter">
            <h2>Filter on habitat:</h2>
            <label>
                  <input type="checkbox" checked={isChecked[0]} onChange={handleFilter(0)} name= "habitat" value="forest floor"/>
                  forest floor
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[1]} onChange={handleFilter(1)} name= "habitat" value="wet meadows"/>
                  wet meadows 
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[2]} onChange={handleFilter(2)} name= "habitat" value="moist places"/>
                  moist places 
            </label>            
            <label>
                  <input type="checkbox" checked={isChecked[3]} onChange={handleFilter(3)} name= "habitat" value="moist meadows"/>
                  moist meadows 
            </label>            
          </div>

{/* TODO - second filter, how to make it independent from first */}
          {/* <div className="filter">
            <h2>Filter on color:</h2>
            <label>
                  <input type="checkbox" checked={isChecked[0]} onChange={handleFilter(0)} name= "color" value="pink"/>
                  pink
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[1]} onChange={handleFilter(1)} name= "color" value="blue"/>
                  blue
            </label>
            <label>
                  <input type="checkbox" checked={isChecked[2]} onChange={handleFilter(2)} name= "color" value="red"/>
                  red
            </label>            
            <label>
                  <input type="checkbox" checked={isChecked[3]} onChange={handleFilter(3)} name= "color" value="white"/>
                  white
            </label>            
          </div> */}


          <div className="sort"> 
            <h2>Sort by:</h2>
            <input type="radio" value="recommended" name="sort" checked={isSelected[0]} onChange={handleRadio(0)}/>  
            recommended for you <br></br>
            <input type="radio" value="lowElev" name="sort" checked={isSelected[1]} onChange={handleRadio(1)}/>
            low to high minimum elevation<br></br>
            <input type="radio" value="highElev" name="sort" checked={isSelected[2]} onChange={handleRadio(2)}/>
            high to low minimum elevation
          </div>


            {/* TODO: add another filter */}

                      {/* <Nav onSelect={sortList}>
              <h2>Sort list</h2>
              <Nav.Item><Nav.Link eventKey="low">low to high min altitude</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="high">high to low min altitude</Nav.Link></Nav.Item>
            </Nav> */}

      </div>
    </div>
  );
    
}

export default App;