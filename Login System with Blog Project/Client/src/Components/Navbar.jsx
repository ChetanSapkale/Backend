import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import "../Styles/Navbar.css";

const CustomNavbar = () => {
  const handleLogout = async () => {
    localStorage.removeItem("currentUser");
    try {
      const res = await axios.get("http://localhost:7070/user/logout", {
        withCredentials: true,
      });
      alert("Logged Out",res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-navbar">
        <Container>
          <Navbar.Brand href="/">Blogify</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/createblog">
              <button>Create Blog</button>
            </Nav.Link>
            <Nav.Link href="/signUp">
              <button>Sign Up</button>
            </Nav.Link>
            <Nav.Link href="">
              <button onClick={handleLogout}>Logout</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
