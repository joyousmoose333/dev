import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Plant(props) { 
    // //pass function as prop and call function using prop from here

    const addToList = () => {
        const exist = props.list.find((currName) => currName === props.name);
        if (!exist) { 
            props.setList([...props.list, props.name, <br></br>])
            props.setRareTot(props.rareTot+props.rare)
        }
    }

    const removeFromList = () => { 
        const exist = props.list.find((currName) => currName === props.name);
        if (exist) { 
            props.setList([props.list.filter(itemName => itemName !== props.name) // maybe remove empty elements so there arent weird spaces
            ])
            //a bug in here -- if you add remove and re add you can add two or smth
            props.setRareTot(props.rareTot-props.rare)
        }
    }

    return(
        <div className="Plant"> 
            <img className="img" src={props.image}/>
            <h1>{props.name}</h1>
            <div className="more-info">
                <h2>{'Elevation: ' + props.minElevation + '-' + props.maxElevation + ' ft.'}</h2>
                <h2>{'Habitat: ' + props.habitat}</h2>
                <h2>{'Size: ' + props.minSize + '-' + props.maxSize + ' ft.'}</h2>
                <h2>{'Color: ' + props.color}</h2>
            </div>
            <div className="add-remove-buttons">
                <button onClick={addToList}>Add to my list</button>
                <button onClick={removeFromList}>Remove from my list</button>
            </div>
        </div>
    )
}