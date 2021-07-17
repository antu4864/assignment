import React ,{useState} from "react";
import { GoogleLogin } from "react-google-login";
import A from "./A";


const App=() =>{
  
    const [sucess , setsucess] = useState(false);

  const responseGoogle= (response) =>{
    console.log(response);
    if(response){
      setsucess(true)
    }
  };
  
    return (
      <div className="App">
          {!sucess && <GoogleLogin 
           clientId="1008653298420-ikho9377it0rnj56uokba45vgkjp5qa0.apps.googleusercontent.com"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           cookiePolicy={'single_host_origin'}
       
           />}
         {sucess &&  <A/>}
      </div>
    );
  }
export default App;
