import { Text,Button } from '@chakra-ui/react';
import DrawerExample from './Drawer';

export default function Nav(){
    return(
        <>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{textAlign:"right",width:"100%",marginTop:"5px",marginBottom:"5px",borderBottom:"0.1px solid lightgrey"}}>
        <div style={{display:"flex",flexDirection:"row",float:"right"}}>
        <img style={{height:"17px",marginTop:"4px",marginRight:"5px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector.png" alt="call"></img>
            <Text marginRight="10px">+917795687594 / +919019595595</Text>
            <Text>|</Text>
            <img style={{marginRight:"5px",marginLeft:"5px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/wa_logo-78af8e2ff6153e5c6db2838470dc06142d5d53f8eb885f1ce33779de97649f0a%201.jpg" alt="watsapp"></img>
            <a href="/" style={{marginRight:"10px"}}>Chat Now</a>
            </div>
        </div>
        <div style={{display:"flex" ,flexDirection:"row"}}>
        <div style={{width:"200px",display:"flex",flexDirection:"row",marginLeft:"10px"}}>
            <DrawerExample />
            <img style={{height:"57px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%201.png" alt="logo" />
        </div>
        <div style={{display:"flex" ,flexDirection:"row",width:"55%",alignItems:"center",justifyContent:"space-evenly"}}>
        <div>
            <Text fontSize="18px" fontWeight="500">Tariff</Text>
            </div>
            <div>
            <Text fontSize="18px" fontWeight="500">Store</Text>
            </div>
            <div style={{display:"flex",flexDirection:"row",width:"140px"}}>
            <Text fontSize="18px" fontWeight="500">What's New?</Text>
            <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
            <div>
            <Text fontSize="18px" fontWeight="500">Offers</Text>
            </div>
            <div  style={{display:"flex",flexDirection:"row",width:"200px"}}>
            <Text fontSize="18px" fontWeight="500">Partner With Us</Text>
            <img style={{height:"8px",marginTop:"11px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
        </div>
        <div>
            <div style={{height:"40px",width:"200px",display:"flex",flexDirection:"row",marginLeft:"10px",border:"1px solid black",marginTop:"10px",borderRadius:"4px",borderColor:"#FDB605"}}>
            <img style={{height:"80%",marginLeft:"10px",marginTop:"4px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(2).png" alt="location"></img>
                <Text  fontSize="18px" fontWeight="500" marginTop="4px" marginLeft="25px">Location</Text>
                <img style={{height:"8px",marginTop:"15px",marginLeft:"20px"}} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png" alt="arrow"></img>
            </div>
        </div>
        <div style={{marginLeft:"30px",width:"200px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Button height="50px" width="90px" backgroundColor="transparent">Login</Button>
            <Button height="50px" width="90px" backgroundColor="#FDB605"> Sign up</Button>
        </div>
        </div>
        </div>
        </>
    )
}