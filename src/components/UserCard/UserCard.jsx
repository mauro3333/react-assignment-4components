
import './UserCard.css';

export const UserCard = (props) => {
    console.log(props);
    return(
        <div className="card">
            <div className="card-header">
                <img src={props.data.image} alt="" />
            </div>
            <div className="card-body">
                <img src="./assets/star-icon.png" alt="" />
                <p className="name"> <span>Name: </span>{props.data.lastName} {props.data.firstName}</p>
                <p className="userName"> <span>User Name: </span>{props.data.username}</p>
                <p className="gender"> <span>Gender: </span>{props.data.gender}</p>
                <p className="email"><span>email: </span>{props.data.email}</p>
                <p className="phone"><span>Phone: </span>{props.data.phone}</p>
            </div>

            <div className="company-info">
            <p className="company"><span>Company: </span>{props.data.company.name}</p>
            <p className="title"><span>Title: </span>{props.data.company.title}</p>
            <p className="department"><span>Department: </span>{props.data.company.department}</p>
            <p className="address"><span>Address: </span>{props.data.company.address.address}</p>
            <p className="city"><span>City: </span>{props.data.company.address.city}</p>
            <p className="state"><span>State: </span>{props.data.company.address.state}</p>
            </div>
        </div>





    )
}