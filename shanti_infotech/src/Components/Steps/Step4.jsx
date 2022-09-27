import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Step4 = ({task,setStep3,step3,setStep4})=>{
    //delete function
    const deleteTask = (ele)=>{
        let arr = task.filter((tsk)=>{
            return ele!==tsk;
           })
           setStep4([...arr]);
    }

    //move step 4 to step 3
    const addToStp3 = (ele)=>{
       let arr = task.filter((tsk)=>{
        return ele!==tsk;
       })
       setStep4([...arr]);
       setStep3([...step3,ele]);
    }
    return (
        <>
        
            <Stack direction="column" justifyContent="start" alignItems="start" spacing={2} sx={{width:"20%", minHeight:"600px",  padding:"20px",bgcolor:"#e4e7ee",borderRadius:"10px"}}>
             <Typography>STEP 4</Typography>

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
                        <Stack direction="row" justifyContent="start">
                            <Box
                            onClick={()=>{
                                addToStp3(ele)
                            }}
                            sx={{height:"30px", width:"30px", borderRadius:"50%", border:"1px solid gray", display:"flex", justifyContent:"center", alignItems:"center",cursor:"pointer"}}>
                                <ArrowBackIcon/>
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