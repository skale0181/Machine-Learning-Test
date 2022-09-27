import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Step3 = ({task,step2, setStep2,  setStep3, step4, setStep4 })=>{
     //delete function
     const deleteTask = (ele)=>{
        let arr = task.filter((tsk)=>{
            return ele!==tsk;
           })
           setStep3([...arr]);
    }

    //move step 3 to step 2
    const addToStp2 = (ele)=>{
       let arr = task.filter((tsk)=>{
        return ele!==tsk;
       })
       setStep3([...arr]);
       setStep2([...step2,ele]);
    }
    //move step 3 to step 4
    const addToStp4 = (ele)=>{
       let arr = task.filter((tsk)=>{
        return ele!==tsk;
       })
       setStep3([...arr]);
       setStep4([...step4,ele]);
    }
    return (
        <>
        
            <Stack direction="column" justifyContent="start" alignItems="start" spacing={2} sx={{width:"20%", minHeight:"600px",  padding:"20px",bgcolor:"#e4e7ee",borderRadius:"10px"}}>
             <Typography>STEP 3</Typography>

               {task?.map((ele,index)=>{
                return(
                    <>
                    <Stack key={ele} direction="column" justifyContent="space-between" sx={{height:"150px",  width:"100%", padding:"20px", boxSizing:"border-box",bgcolor:"white", borderRadius:"10px"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>{ele}</Typography>
                            <Stack 
                            onClick={()=>{deleteTask(ele)}}
                            direction="row" alignItems="center" spacing={1} sx={{cursor:"pointer"}}><DeleteOutlineIcon sx={{fontWeight:"200", color:"red"}}/> <Typography sx={{color:"red"}}>Delete</Typography> </Stack>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Box
                            onClick={()=>{addToStp2(ele)}}
                            sx={{height:"30px", width:"30px", borderRadius:"50%", border:"1px solid gray", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
                                <ArrowBackIcon/>
                            </Box>
                            <Box
                            onClick={()=>{addToStp4(ele)}}
                            sx={{height:"30px", width:"30px", borderRadius:"50%", border:"1px solid gray", display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
                                <ArrowForwardIcon/>
                            </Box>
                        </Stack>
                    </Stack>
                    </>
                )
               })}

            </Stack>

        </>
    )
}