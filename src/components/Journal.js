export default function Journal(props) {

    return (
        <div>
            <h1>My Field Journal</h1> 
            <p>{props.list}</p>
            {/* maybe have this be like x rare plants of x documented */}
            <h2>Total rare plants documented: {props.rareTot}</h2>  
        </div>
    )
    
}
