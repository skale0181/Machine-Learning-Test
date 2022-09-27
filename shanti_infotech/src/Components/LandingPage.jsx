import { Button, Input, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Step1 } from "./Steps/Step1";
import { useEffect, useState } from "react";
import { Step4 } from "./Steps/Step4";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";


// for modal
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius:"10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const LandingPage = ()=>{

    const [allTask, setAllTask] = useState([]);

    const [step1, setStep1] = useState([]);
    const [step2, setStep2] = useState([]);
    const [step3, setStep3] = useState([]);
    const [step4, setStep4] = useState([]);

    // add Task to list 
    const [task, setTask] = useState("")
    const addTask = ()=>{
         if(task=="")return;
         if(allTask.includes(task))return ///if already present task then not add to the list
         setStep1([...step1,task])
         setTask("")
         handleClose()
    }

    //search Tasks;
    let [findedTasks, setFindedTasks] = useState([])
    const searchTasks = (val)=>{
        if(val===""){
            setFindedTasks([])
            return;
        }
        let value = val.toLowerCase()
        let result = allTask.filter((data) => {
            return data.includes(value) === true ;  ////data.search(value)!==-1
            });
        setFindedTasks([...result])
    }
    console.log("finded tasks:===>", findedTasks)

 
    ///delete tasks function
    const deleteTask=(ele)=>{
        let arr;
         if(step1.includes(ele)){
             arr = step1.filter((tsk)=>{
                return ele!==tsk
             })
             setStep1(arr);
         }
         if(step2.includes(ele)){
             arr = step2.filter((tsk)=>{
                return ele!==tsk
             })
             setStep2(arr);
         }
         if(step3.includes(ele)){
             arr = step3.filter((tsk)=>{
                return ele!==tsk
             })
             setStep3(arr);
         }
         if(step4.includes(ele)){
             arr = step4.filter((tsk)=>{
                return ele!==tsk
             })
             setStep4(arr);
         }

         let temp = findedTasks.filter((tsk)=>{
            return ele!==tsk;
         })
         setFindedTasks(temp)
    }




    useEffect(()=>{
        setAllTask([...step1,...step2,...step3, ...step4])
    },[step1,step2, step3, step4])

    // console.log("allTask", allTask)

    // for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <>
        {/* search and add btn */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ padding:"20px 40px 20px 40px"}}>
                <TextField
                placeholder="Search"
                onChange={(e)=>{
                    searchTasks(e.target.value)
                }}
                 InputProps={{
                    endAdornment: (
                     <SearchIcon  sx={{color:"gray", fontSize:"40px"}}/>
                    ),
                   }}
                   sx={{width:"400px", backgroundColor:"#e4e7ee"}}
                />
                <Button
                onClick={handleOpen}
                startIcon={<AddIcon/>}
                sx={{borderRadius:"none",bgcolor:"#e4e7ee", color:"black", height:"50px" , padding:"10px 30px 10px 30px"}}
                >
                    Add Task
                </Button>
        </Stack>

        {/* search find tasks */}
       {findedTasks[0] && <Box sx={{display:"flex", justifyContent:"start",gap:"10px",padding:"20px 40px 20px 40px", overflowX:"scroll"}} >
               {findedTasks?.map((ele,index)=>{
                return(
                    <Stack key={ele} direction="row" justifyContent="space-between" alignItems="center" sx={{width:"150px", height:"10px", borderRadius:"5px", padding:"30px",backgroundColor:"#e4e7ee"}}>
                         <Typography>{ele}</Typography>
                         <Stack
                            onClick={()=>{deleteTask(ele)}}
                            direction="row" alignItems="center" spacing={1} sx={{cursor:"pointer"}}><DeleteOutlineIcon sx={{fontWeight:"200", color:"red"}}/> <Typography sx={{color:"red"}}>Delete</Typography> </Stack>
                    </Stack>
                )
               })}
        </Box>}

        {/* all tasks */}
        <Stack direction="row" justifyContent="space-between" sx={{ padding:"20px 40px 20px 40px"}}>
              
              <Step1 task={step1} setStep1={setStep1} step2={step2} setStep2={setStep2}/>
              <Step2 task={step2} setStep1={setStep1} step1={step1} setStep2={setStep2} step3={step3} setStep3={setStep3} />
              <Step3 task={step3} step2={step2} setStep2={setStep2}  setStep3={setStep3} step4={step4} setStep4={setStep4} />
              <Step4 task={step4} setStep3={setStep3} step3={step3} setStep4={setStep4}/>

        </Stack>

        {/* popup */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
         <Stack direction="row" justifyContent="end"><CloseIcon onClick={handleClose} sx={{color:"gray", height:"35px", width:"35px"}}/></Stack>
         <Stack direction="row" justifyContent="center"><Typography sx={{fontSize:"30px", fontWeight:"700",}}>Add Task</Typography></Stack>

         <Stack direction="column" spacing={3} sx={{mt:"30px"}}>
           <TextField
            value={task}
            onChange={(e)=>{
                setTask(e.target.value);
            }}
           placeholder="Add Title"
           sx={{ backgroundColor:"#e4e7ee"}}
           />

              <Button
                onClick={addTask}
                sx={{borderRadius:"none",bgcolor:"#e4e7ee", color:"black", height:"50px" , padding:"10px 30px 10px 30px", width:"180px"}}
                >
                    Add Task
                </Button>
         </Stack>
          
        </Box>
       </Modal>
       

        
        </>
    )
}