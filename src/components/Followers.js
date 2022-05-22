import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import Paginate from "./Paginate";
import loadingGif from "../assets/loading.gif";
const Followers = () => {
    const [followersList, setFollowersList] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [followersPerPage] = useState(12)

    const indexOfLastFollower = currentPage * followersPerPage;
    const indexOfFirstFollower = indexOfLastFollower - followersPerPage;
    const currentFollowers = followersList.slice(indexOfFirstFollower, indexOfLastFollower);
    const totalPages = Math.ceil(followersList.length / followersPerPage);


  
    const getFollowers = async() =>{
        const {data} = await axios.get("https://api.github.com/users/anthonyharold67/followers?per_page=100")
        setFollowersList(data)

        console.log(data);
    }
    
    useEffect(() =>{

        getFollowers()
        setTimeout(() => {
          setLoading(false)
        }, 3000);

    },[])
  return (
    
      <div>
        {loading ? <div style={{minHeight:"87vh",maxHeight:"87vh"}}><img src={loadingGif} style={{minHeight:"85vh",maxHeight:"85vh"}} alt=""/> </div>:<div>
        <Container>
        <Row xs={2} md={3} lg={4} className="g-4 mt-4">
          {currentFollowers.map((follower, index) => (
            <Col key={index}>
              <Card style={{backgroundColor:"bisque"}}>
                <Card.Img variant="top" src={follower.avatar_url} />
                <Card.Body>
                  <Card.Text>{follower.login}</Card.Text>
                  <Button 
                  href={follower.html_url}
                  style={{borderRadius:'50px'}}
                  variant="primary">VIEW PROFILE</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mt-3">
            <Paginate  pages={totalPages} setCurrentPage= {setCurrentPage}/>

      </Container>
        </div>
}
      </div>
    
  );
};
export default Followers;