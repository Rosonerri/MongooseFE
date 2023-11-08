import React, {useState, useMemo, useEffect} from 'react'
import styled from  "styled-components"
import {BsPlus, BsX} from "react-icons/bs"
import {ImCheckmark} from "react-icons/im"
import  {updateTodo, viewTodos} from './Api/Api'
import moment from "moment"
import TodoScreen from './TodoScreen'


const App = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [state, setState] : Array<any> = useState<Array<{}>>([])

 useMemo(()=>{
  viewTodos().then((res: any)=>{
    setState(res)
  })
 }, [state])
  return (
    <div>
      <Container>
    <Main>
    <Header>
<Text0>TODO  DASHBOAD</Text0>
</Header>
<Body>
  <Side>
    { toggle? (
      <Ball
      onClick={()=>{
        setToggle(!toggle)
      }}
      >
    <BsX/>
    </Ball>
    
    ) :(
<Ball
onClick={()=>{
  setToggle(!toggle)

}}
>
    <BsPlus/>
    </Ball>
    )}
    <Text2>ADD TASK</Text2>
  </Side>
  
  <MainBody>
  <Cards>
<Head>
  <Wrap>
 <sup> <Count>5</Count></sup>
  <Text3>START.....</Text3>
  </Wrap>
</Head>
{
  state && state?.filter((el: any)=> el.done === "Start").map((el: any)=>(
    <Card key={el._Id}>
    <Tasked>{el.task}</Tasked>

    <Time rr="l">
     <TimeWrap>
    <div>Created At: </div>
   </TimeWrap>
       {moment(Date.parse(el.createdAt)).format("LLLL")}
     </Time>
      <Time>
       <TimeWrap>
      <div>Ended At: </div>
       </TimeWrap>
       {moment(Date.parse(el.deadLine)).format("LLLL")}
       </Time>
        <hr />
       <hr />
        <Space/>
       <br/>
         <But>
         <Button
         onClick={()=>{
          updateTodo(el.Id)
         }}
         >
           Start Task
       </Button>
       <Button>
           Delete Task
       </Button>
       </But>

      </Card>
  ))
}
</Cards>

<Cards>
<Head>
  <Wrap>
 <sup> <Count>5</Count></sup>
  <Text3>ONGOING.....</Text3>
  </Wrap>
</Head>
{state && state?.filter((el:any)=> el.done === "ongoing").map((el: any)=>(
  <Card key={el._Id}>
  <Tasked>{el.task}</Tasked>
  <Time rr="l">
   <TimeWrap>
  <div>Created At: </div>
 </TimeWrap>
     {moment(Date.parse(el.createdAt)).format("LLLL")}
   </Time>
    <Time>
     <TimeWrap>
    <div>Ended At: </div>
     </TimeWrap>
     {el.deadLine}
     </Time>
      <hr />
     <hr />
      <Space />
     <br />
       <But>
       <Button >
         Add To Finished
     </Button>
     <Button
     onClick={()=>{
      delete(el._Id)
     }}
     >
         Delete Task
     </Button>
     </But>
    </Card>
))}
</Cards>

<Cards>
<Head>
  <Wrap>
 <sup> <Count>5</Count></sup>
  <Text3>FINISHED.....</Text3>
  </Wrap>
</Head>
<Card>
   <Tasked>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugiat, perferendis aliquam ex harum modi.</Tasked>
   <Time rr="l">
    <TimeWrap>
   <div>Created At: </div>
  </TimeWrap>
      7:30, Friday
    </Time>
     <Time>
      <TimeWrap>
     <div>Ended At: </div>
      </TimeWrap>
      7:30, Friday
      </Time>
       <hr />
       <Div2>
       <Ball2>
       <ImCheckmark />
       </Ball2>
       Task Completed!!
       </Div2>
       
      <hr />
       <Space />
      <br />
        <But>
        <Button >
          Finished
      </Button>
      <Button >
          Delete Task
      </Button>
      </But>
     </Card>
</Cards>
  </MainBody>
</Body>
    </Main>
      </Container>
      {toggle && <TodoScreen toggle={toggle} setToggle={setToggle}/>}
    </div>
  )
}

export default App
const Div2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Space = styled.div`
  flex: 1;
`;
const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Head = styled.div`
background-color: white;
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Count = styled.div`
font-size: 20px;
color: green;
margin: 0px 10px 20px;
`
const Text3 = styled.h2`
font-size: 30px;

`

const Cards = styled.h4`
height: 700px;
width: 450px;
border: 1px solid silver;
/* background-color: purple; */
border-radius: 10px;
overflow-y: auto;
margin: 0px 20px;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
`
const Text2 = styled.h4``
const Ball = styled.div`
width: 70px;
color: white;
height: 70px;
background-color: black;
border-radius: 50%;
display: flex;
font-size: 50px;
font-weight: 800;
justify-content: center;
align-items: center;
`
const Ball2 = styled.div`
width: 40px;
color: green;
text-align: center;
height: 40px;
margin: 0px 5px;
background-color: white;
border-radius: 50%;
display: flex;
font-size: 22px;
font-weight: 800;
justify-content: center;
align-items: center;
`
const MainBody = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
`
const Side = styled.div`
width: 160px;
height: 100%;
background-color: rgba(66, 0, 66, 0.103);
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
flex-direction: column;
`
const Body = styled.div`
/* background-color: grey; */
width: 100%;
height: 800px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Text0 = styled.h1`
letter-spacing: 1.2em;
color: white;
text-align: center;
`


const Header = styled.div`
width: 100%;
height: 65px;
background-color: crimson;
`
const Main = styled.div``
const Container = styled.div``
const Br = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 600;
`;

const But = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  padding: 10px 18px;
  background-color: #420042;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  margin: 0px 10px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const TimeWrap = styled.div`
  width: 90%;
`;

const Time = styled.div<{ rr?: string }>`
  font-size: 12px;
  margin: 10px 0;
  line-height: 1;

  display: flex;
  flex-direction: column;

  ${TimeWrap} {
    display: flex;
    flex-direction: ${({ rr }) => (rr ? "row" : "row-reverse")};
    div {
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
`;

const Tasked = styled.div`
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  font-size: 15px;
  line-height: 1.2;
`;

const Card = styled.div`
  width: 400px;
  min-height: 250px;
  border-radius: 5px;
  border: 1px solid silver;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgba(66, 0, 66, 0.103);
`;
