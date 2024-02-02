import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[name , setname] =useState('');
  let[roll , setroll] =useState('');
  let[sub1 , setsub1] =useState('');
  let[sub2 , setsub2] =useState('');
  let[sub3 , setsub3] =useState('');
  let[sub4 , setsub4] =useState('');
  let[sub5 , setsub5] =useState('');
  let[arr , setarr] =useState([]);
  let[final , setfinal] = useState([]);
  let[resul , setresul] = useState('');
  // let[resu , setresu] = useState('');
  const result =() => {

    if(name=="" || roll=='' || sub1=='' || sub2=='' || sub3==''|| sub4==''|| sub5=='')
    {
      alert("fil the data");
    }
    else{

      let total = parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5);
      let per = total / 5;

      // >>>>>>>> MIN MAX >>>>>>>>>>
      let min = Math.min(sub1, sub2 , sub3, sub4 , sub5);
      let max = Math.max(sub1, sub2 , sub3, sub4 , sub5);
      
      let temp = 0 , res , gred;

      // >>>>>>>>>>> RESULT >>>>>>>>>>
      if (parseInt(sub1) > 35) {
        temp += 1;
      }
      if (parseInt(sub2) > 35) {
        temp += 1;
      }
      if (parseInt(sub3) > 35) {
        temp += 1;
      }
      if (parseInt(sub4) > 35) {
        temp += 1;
      }
      if (parseInt(sub5) > 35) {
        temp += 1;
      }
      if(temp == 3 || temp == 4){
        res ="ATKT";
      }
      else if(temp == 5) {
        res="PASS";
      }
      else{
        res ="FAIL";
      }

      // >>>>>>>> GREAD >>>>>>>>>>>>>>>>
      if(per>90){
        gred="A1";
      } 
      else if(per>80) {
        gred="A2";
      }
      else if(per>70) {
        gred="B1";
      }
      else if(per>60) {
        gred="B2";
      }
      else if(per>70) {
        gred="C1";
      }
      else if(per>60) {
        gred="C2";
      }
      else if(per>50){
        gred="D";
      }
      else {
        gred="F";
      }


      setarr([...arr, { Name: name, Roll: roll, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Res:res, Min: min, Max:max, Gred:gred }])
      setfinal(arr);
      console.log(arr);
      setname('');
      setroll('');
      setsub1('');
      setsub2('');
      setsub3('');
      setsub4('');
      setsub5('');
    }
  }

  const pass =() => {
    // alert()
    // alert(e)
    alert(resul)
    
  }
  
  const alldata= ()=> {
    // const allstudata = (final);
    console.log("final "+final)
    setarr(final);
  }

  return (
    <div>
      <h2>STUDENT RESULT</h2>
      Name :- <input type='text' value={name} onChange={(e) => setname(e.target.value)}></input>
      Roll no. :- <input type='text' value={roll} onChange={(e) => setroll(e.target.value)}></input><br></br>
      <li style={{marginTop:"10px" }}>SUB 1 :- <input type='text' value={sub1} onChange={(e) => setsub1(e.target.value)}></input></li>
      <li>SUB 2 :- <input type='text' value={sub2} onChange={(e) => setsub2(e.target.value)}></input></li>
      <li>SUB 3 :- <input type='text' value={sub3} onChange={(e) => setsub3(e.target.value)}></input></li>
      <li>SUB 4 :- <input type='text' value={sub4} onChange={(e) => setsub4(e.target.value)}></input></li>
      <li>SUB 5 :- <input type='text' value={sub5} onChange={(e) => setsub5(e.target.value)}></input></li>

      <input type='button' value={"Add Result"} onClick={result} style={{marginLeft:"30px", marginTop:"10px"}}></input>
      {/* <input type='button' value={"PASS"} onClick={pass}></input> */}
      <select onClick={pass} >
        <option value={""} disabled selected>select</option>
        <option value={"PASS"} onChange={(e) => setresul(e.target.value)}>PASS</option>
        <option value={"ATKT"} onChange={(e) => setresul(e.target.value)}>ATKT</option>
        <option value={"FAIL"} onChange={(e) => setresul(e.target.value)}>FAIL</option>
      </select>
      {/* <input type='button' onClick={pass} value={"PASS"}></input> */}
      <input type='button' onClick={alldata} value={"ALL"}></input>

    <table border={1} style={{marginLeft: "20px", marginTop:"10px"}}>
      <tr>
        <th>Roll n.</th>
        <th>NAME</th>
        <th>SUB 1</th>
        <th>SUB 2</th>
        <th>SUB 3</th>
        <th>SUB 4</th>
        <th>SUB 5</th>
        <th>TOTAL</th>      
        <th>PERCENTAGE</th>      
        <th>MIN</th>      
        <th>MAX</th>      
        <th>RESULT</th>      
        <th>GREAD</th>      
      </tr>
      {
        arr.map((ele , ind) => {
          return(
            
              <tr key={ind} >
                {/* style={{ backgroundColor: ele.Res == "PASS" ? "lightgreen" :ele.Res=='ATKT'?'lightblue':'lightred'}} */}
                <td>{ele.Roll}</td>
                <td>{ele.Name}</td>
                <td>{ele.Sub1}</td>
                <td>{ele.Sub2}</td>
                <td>{ele.Sub3}</td>
                <td>{ele.Sub4}</td>
                <td>{ele.Sub5}</td>
                <td>{ele.Total}</td>
                <td>{ele.Per}</td>
                <td>{ele.Min}</td>
                <td>{ele.Max}</td>
                <td>{ele.Res}</td>
                <td>{ele.Gred}</td>
              </tr>           
          )
        })
      }
     
    </table>

    </div>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   let [name, setname] = useState('');
//   let [rno, setrno] = useState('');
//   let [sub1, setsub1] = useState('');
//   let [sub2, setsub2] = useState('');
//   let [sub3, setsub3] = useState('');
//   let [sub4, setsub4] = useState('');
//   let [sub5, setsub5] = useState('');
//   let [arr, setarr] = useState([]);

//   const result = () => {
//     let total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
//     let per = total / 5;
//     let max = Math.max(sub1, sub2, sub3, sub4, sub5)
//     let min = Math.min(sub1, sub2, sub3, sub4, sub5)
//     let temp = 0,res;
//     if (parseInt(sub1) > 35) {
//       temp += 1;
//     }
//     if (parseInt(sub2) > 35) {
//       temp += 1;
//     }
//     if (parseInt(sub3) > 35) {
//       temp += 1;
//     }
//     if (parseInt(sub4) > 35) {
//       temp += 1;
//     }
//     if (parseInt(sub5) > 35) {
//       temp += 1;
//     }

//     if (temp == 3 || temp == 4) {
//       res='ATKT';
//     }
//     else if (temp == 5) {
//       res='PASS';
//     }
//     else {
//       res='FAIL';
//     }
//     if(res=='FAIL'){
//       per='**';
//     }
    
//     setarr([...arr, { Name: name, Rno: rno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Max: max, Min: min, Res: res }])
//     //console.log(arr)
//     setname('')
//     setrno('')
//     setsub1('')
//     setsub2('')
//     setsub3('')
//     setsub4('')
//     setsub5('')


//   }
//   return (
//     <>
//       <table className='table1'>
//         <tr>
//           <td>NAME :-</td>
//           <td><input type='text' value={name} onChange={(e) => setname(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>RNO :-</td>
//           <td><input type='text' value={rno} onChange={(e) => setrno(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>SUB1 :-</td>
//           <td><input type='text' value={sub1} onChange={(e) => setsub1(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>SUB2 :-</td>
//           <td><input type='text' value={sub2} onChange={(e) => setsub2(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>SUB3 :-</td>
//           <td><input type='text' value={sub3} onChange={(e) => setsub3(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>SUB4 :-</td>
//           <td><input type='text' value={sub4} onChange={(e) => setsub4(e.target.value)}></input></td>
//         </tr>
//         <tr>
//           <td>SUB5 :-</td>
//           <td><input type='text' value={sub5} onChange={(e) => setsub5(e.target.value)}></input></td>
//         </tr>
//       </table>
      
//       <button onClick={result} className='button'>Click here</button>

     

//       <table border={2} className='table'>
//         <tr>
//           <th>NAME</th>
//           <th>RNO</th>
//           <th>SUB 1</th>
//           <th>SUB 2</th>
//           <th>SUB 3</th>
//           <th>SUB 4</th>
//           <th>SUB 5 </th>
//           <th>TOTAL</th>
//           <th>PERCENTAGE</th>
//           <th>MAXIMUM</th>
//           <th>MINIMUM</th>
//           <th>RESULT</th>
//         </tr>
//         {
//           arr.map((ele) => {
//             return (              
//                 <tr style={{ backgroundColor: ele.Res == "PASS" ? "green" :ele.Res=='ATKT'?'blue':'red'}}>
//                   <td>{ele.Name}</td>
//                   <td>{ele.Rno}</td>
//                   <td>{ele.Sub1}</td>
//                   <td>{ele.Sub2}</td>
//                   <td>{ele.Sub3}</td>
//                   <td>{ele.Sub4}</td>
//                   <td>{ele.Sub5}</td>
//                   <td>{ele.Total}</td>
//                   <td>{ele.Per}</td>
//                   <td>{ele.Max}</td>
//                   <td>{ele.Min}</td>
//                   <td>{ele.Res}</td>
//                 </tr>              
//             )
//           })
//         }
//       </table>
//     </>
//   );
// }

// export default App;