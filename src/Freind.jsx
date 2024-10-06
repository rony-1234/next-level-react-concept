
export default function Freind({freind}){

    const {name,email} = freind;

    return(
        <div className="box">
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
           
        </div>
    )
}