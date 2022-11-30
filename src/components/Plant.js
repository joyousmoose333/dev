import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";


export default function Plant(props) {

    const addToList = () => {
        const exist = props.list.find((currName) => currName === props.name);
        if (!exist) { 
            props.setList([...props.list, props.name, <br></br>])
            props.setUniqueHabs([...props.uniqueHabs, props.habitat])
            const noDups = new Set(props.uniqueHabs)
            // console.log([...noDups])
            // props.setUniqueHabs(...noDups)



        }
        // props.setUniqueHabs(totElevation + min) // not functional just testing 
    }

    // const removeFromList = () => { //does not work
    //     // const newList = props.list.filter((currName) => currName == props.name);
    //     // console.log(newList)
    //     // props.setList([...newList, <br></br>]
    //     const exist = props.list.find((currName) => currName === props.name);
    //     if (exist) { 
    //         props.list.splice(props.list.indexOf(props.name), 1)
    //         props.setList(props.list, <br></br>)
    //         // console.log(props.list)

    //     }
    //     //TODO: remove from the cumulative count/price or whatev when removed from cart 
    // }

    return(
        <div className="Plant"> 
            <img className="img" src={props.image}/>
            <h1>{props.name}</h1>
            <div className="more-info">
                <h2>{'elevation: ' + props.minElevation + '-' + props.maxElevation + ' ft.'}</h2>
                <h2>{'habitat: ' + props.habitat}</h2>
                <h2>{'size: ' + props.minSize + '-' + props.maxSize + ' ft.'}</h2>
            </div>
            <div className="add-remove-buttons">
                <button onClick={addToList}>Add to my list</button>
                {/* <button onClick={removeFromList}>Remove from my list</button> */}
            </div>
        </div>
    )
}