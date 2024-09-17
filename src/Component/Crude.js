import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "reactstrap";
const Crudes = () => {
  const [data, setdata] = useState([]);
  const  navigate = useNavigate();
  useEffect(() => {
    fetch("https://66daa02cf47a05d55be5585f.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data, "dta");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    console.log(updatedData);
    setdata(updatedData);
  };
  const formnavigate =()=>{
    navigate('/user/form');
  }

  return (
    <>
    <br></br>
     <Button color="primary" onClick={formnavigate}>Add User</Button>
      <Table bordered >
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th> 
            <th>Age</th>  
            <th>Company</th>
            <th>createdAt</th> 
            <th>Email</th>
            <th>Name</th> 
            <th>Phone</th> 
           
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>
                {user.address}
              </td>
              <td>{user.age}</td>
              <td>{user.company}</td>
              <td>{user.createdAt}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
           

              <div>
                <Button    onClick={() => handleDelete(user.id)}
                  color="primary"
                  size="sm"
                  style={{ background: "red", color: "white" }}
                >
                  Delete
                </Button>
                
                <Button   
                  color="primary"
                  size="sm"
                  style={{ background: "gray", color: "white",marginLeft:"5px"}}
                >
                  Edit
                </Button>

              </div>
              
            </tr>
            
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Crudes;
