import React from "react";
import "./Home.css";
import { Container, Row, Col,Progress  } from 'reactstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const value = 88;
function Home() {

  return (
    <>
  <Container fluid={true}>
  <Row id="Home" className="exactsect">
        <Col>
        <h1 align="center" className="hm">Waqar Ahmad</h1>
        <hr/>
        <p className="Container">Chak Lasa P/O, Fazilpur, District Rajanpur, Punjab, 33400 | +92-306-6190519 | waqar.ch.ahmad@gamil.com</p>
        </Col>
      </Row>
      <Row className="bgc textc exact">
        <Col>
        <h1 align="center">Objective</h1>
        <p className="Container">To obtain a position that will enable me to use my strong organizational skills, award-winning educational
background, and ability to work well with people.</p>
        </Col>
      </Row>
      <Row id="Education" className="exactsect">
        <Col>
        <h1 align="center">Education</h1>
        
        <p className="Container">
        <b>MCS | 2019 | THE ISLAMIA UNIVERSITY OF BAHALWALPUR, BAHAWALPUR</b> <br/>
· 3.58/ 4.00 CGPA with B+ Grade with Silver Medal <br/>
<b>B.SC | 2014 | THE ISLAMIA UNIVERSITY OF BAHALWALPUR, BAHAWALPUR</b> <br/>
· 3.51/ 4.00 CGPA with B Grade <br/>
<b>F.SC | 2012 | B.I.S.E DERA GHAZI KHAN</b> <br/>
· 791/ 1100 Marks with A Grade <br/>
<b>MATRIC | 2010 | B.I.S.E DERA GHAZI KHAN</b> <br/>
· 929/ 1050 Marks with A+ Grade <br/>



        </p>
        </Col>
        <Col><div className="Container"><img src="./img/Education.png" height="20%" width="50%" alt="Education"/></div></Col>
      </Row>
      <Row className="bgc textc"  >
        <Col>
        <div id="Skills" className="exactsect"></div>
        <h1 align="center">Skills & Abilities</h1>
        
        </Col>
        </Row>
        <Row className="bgc textc">
          <Col> 
        <div className="Container">MS Office (MS Excel, MS Word, MS Power Point)
        <Progress animated color="success" value="90" > 90%</Progress></div>  
        </Col>
        <Col> <div className="Container">Internet Surfing (Data Search, Mining & Social Media)
        <Progress animated color="#19d3da" value="98" > 98%</Progress></div>  
        </Col>
        <Col> <div className="Container">Blogger Developer(Google)
        <Progress animated color="success" value="95" > 95%</Progress></div>  
        </Col></Row>
        <Row className="bgc textc">
          <Col> 
        <div className="Container">Photoshop, AE, PP, Corel Draw & In page
        <Progress animated color="#19d3da" value="93" > 93%</Progress></div>  
        </Col>
        <Col> <div className="Container">Desktop Software Development
        <Progress animated color="success" value="97" > 97%</Progress></div>  
        </Col>
        <Col> <div className="Container">All Operating System Experties
        <Progress animated color="#19d3da" value="99" > 99%</Progress></div>  
        </Col>
        <br/><br/><br/></Row>
        <h1 align="center" className="exact">Computer Languages</h1>
        <br/>
        <div style={{ width: "100%" }}>
        <Row >
       
        <Col >
         
        
          <CircularProgressbar value={value} text="React js" />
           
        </Col>


        <Col>
       
       
          <CircularProgressbar styles={buildStyles({
          
          pathColor: "turquoise"
         
        })} value={78} text="PHP" /> 
         
        </Col>
      
       
        <Col  >
        
          <CircularProgressbar styles={buildStyles({
          
          pathColor: "#373a40"
         
        })} value={92} text="Python" />
          
        </Col>
        <Col  >
       
          <CircularProgressbar value={93} text="C/C++" />
        
        </Col>
        <Col  >
        
          <CircularProgressbar styles={buildStyles({
          
          pathColor: "turquoise"
         
        })} value={95} text="C#" />
          
        </Col>
        <Col  >
        
          <CircularProgressbar styles={buildStyles({
          
          pathColor: "#373a40"
         
        })} value={value} text="Java" />
          
        </Col>
       
        
        </Row>
        <br/>
        </div>
        <Row className="bgc textc">
        <Col>
        <h1 align="center"  className="exact">Communication Languages</h1>
        
        </Col>
        </Row>
        <Row className="bgc textc">
          <Col> 
        <div className="Container">English
        <Progress animated color="success" value="90" > 90%</Progress></div>  
        </Col>
        <Col> <div className="Container">Urdu
        <Progress animated color="#19d3da" value="98" > 98%</Progress></div>  
        </Col>
        <Col> <div className="Container"> Hindi
        <Progress animated color="success" value="95" > 95%</Progress></div>  
        </Col></Row>
        <Row className="bgc textc">
          <Col> 
        <div className="Container">Punjabi
        <Progress animated color="#19d3da" value="99" > 99%</Progress></div>  
        </Col>
        <Col> <div className="Container">Saraki
        <Progress animated color="success" value="97" > 97%</Progress></div>  
        </Col>
        
        <br/><br/><br/></Row>
        <Row  className="exact">
        <Col>
        <h1 align="center">Awards</h1>
        
        <p className="Container">
        . I got Laptop from Chief Minister of Punjab on merit in 2012 <br/>
        . I got Scholarship from Prime Minister of Paksitam on merit in 2017 - 2019 <br/>
        · I got Silver Medal from Chancellor of Punjab, Islamia University of Bahawalpur in 2019 <br/>
        </p>
        </Col>
      </Row>
      <Row  className="bgc textc exact">
        <Col>
        <h1 align="center">Leadership</h1>
        
        <p className="Container">

        · I have arranged a class party at Habit, Bahawalpur at 4 March 2018, my experience was so good to arrange
party. <br/>
· I have lead a group of 5 persons which were working on Report on Gulzar Palace, my experience was so
amazing to me as I lead it with all manners. <br/>
        </p>
        </Col>
      </Row>
     
      <Row >
      
        <Col>
        <div id="Experience" className="exactsect"></div>
        <h1 align="center" >Experience</h1>
       
        <p className="Container" >
          
        <b>LECTURER | DEGREE COLLEGE (BOYS) FAZILPUR | 01 OCT, 2019 – 30 APRIL 2020</b> <br/>
        · Working as Computer Teacher as CTI. <br/>
<b>TEACHER | CIVIC ACADEMY BAHAWALPUR | 13 FEB, 2018 – 2 FEB, 2019</b> <br/>
· Working as Computer Teacher<br/>
<b>TEACHER | NEW CITY ACADEMY | 6 JAN, 2015 – 31 DEC, 2016
</b> <br/>
· Working as Computer, Math & Physic Teacher & Computer Operator also <br/> <br/>
        </p>
        
        </Col>
       
      </Row>
     
      </Container>
    </>
  );
}

export default Home;
