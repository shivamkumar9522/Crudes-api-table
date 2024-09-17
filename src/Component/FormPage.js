import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {}, []);

  const handleAdd = async (e) => {
    e.preventDefault();
  

    const newUser = {
      Address: address,
      Age: age,
      Company: company,
      CreatedAt: createdAt,
      Email: email,
      Name: name,
      Phone: phone,
    };

    try {
      const res = await fetch(
        "https://66daa02cf47a05d55be5585f.mockapi.io/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      // console.log(res, "res");
      navigate("/user/form");
    } catch (error) {
      console.error("Error saving data:", error);
    }

    console.log("New User Data:", newUser);

    setData((prevData) => [...prevData, newUser]);

    setAddress("");
    setAge("");
    setCompany("");
    setCreatedAt("");
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <>
      <div style={{ backgroundColor: "aqua", color: "Blue", height: "100vh" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          INPUT-FORM{" "}
        </h1>

        <Form
          style={{ marginTop: "50px", marginLeft: "30px" }}
          onSubmit={handleAdd}
        >
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  name="Address"
                  placeholder="with a placeholder"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input
                  id="exampleAge"
                  name="Age"
                  placeholder="with a placeholder"
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCompany">Company</Label>
                <Input
                  id="exampleCompany"
                  name="company"
                  placeholder="with a placeholder"
                  type="text"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleCreatedAt">createdAt</Label>
                <Input
                  id="createdAt"
                  name="createdAt"
                  placeholder="Enter createdAt"
                  type="text"
                  onChange={(e) => setCreatedAt(e.target.value)}
                  value={createdAt}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email "
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleName">name</Label>
                <Input
                  id="exampleName"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="examplePhone">Phone</Label>
                <Input
                  id="Phone"
                  name="Phone"
                  placeholder="Enter mobile number "
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="submit"
            style={{
              color: "white",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Forms;
