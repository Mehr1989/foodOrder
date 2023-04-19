import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import styles from '@/styles/Home.module.scss'
import { IoPerson} from "react-icons/io5";
import Link from 'next/link';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export const getStaticProps = async () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts"
  const request = await fetch(API_URL)
  const posts = await request.json()
  return  { props : { posts } }
}

function Comments({posts}) {
  useEffect(()=>{
    Aos.init({duration:2000})

})
  return (
    <>
    <Button
     style={{backgroundColor:'#c21111',margin:"1%",padding:'1%',borderRadius:'10px',color:"aliceblue"}}>
      <Link href='/'> Back to Home</Link></Button>
    
     <Container >
    <Row>
      <Col className="text-center" >
      <div style={{display:"flex",justifyContent:"center"}}>

        <h1>Your Ideas Are Matter to us</h1>
      </div>
     
      </Col>
      <Col style={{marginLeft:"0.5%",marginTop:"1%"}} lg={12}>
      <div >
        <p>
          ot hithiorht eohikeohro eokhg I am a little surprised about this generation of writers and readers not understanding the importance of leaving a mark whenever they read something. The comment section is like a treasure box and your own locker where you leave your personal thought which might lead to much better growth in future.

It is your imprint I am a little surprised about this generation of writers and readers not understanding the importance of leaving a mark whenever they read something. The comment section is like a treasure box and your own locker where you leave your personal thought which might lead to much better growth in future.

It is your imprint 
        </p>
      </div>
       
      </Col>

    </Row>

    </Container>
    <Container>
      <Row>
     
        <Col lg={6}>
          <div style={{backgroundColor:'green',width:"20%",height:'20vh'}}>
          <img
         style={{width:"100%",height:"100%"}}
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtU7y8JEuSCd61VLva777cycmn9ylm5EGdA&usqp=CAU' />

          </div>
      
        </Col>

      </Row>
    </Container>
    <Container >
      <Row>
        {posts.slice(1,10).map((post)=>{
          return (
            <>
            <Col data-aos='fade-up'>
         
            <div key={post.id} className={styles.postBox}>
              <div style={{display:"flex"}}>
              <IoPerson /> 
          
              <h3 style={{marginLeft:"1%",marginBottom:"2vh"}}>{post.title}:</h3>

              </div>
          
              <p>{post.body}</p>

            </div>
            </Col>
            </>
          )
        })}
      </Row>
    </Container>
    </>
   

  )
}

export default Comments
