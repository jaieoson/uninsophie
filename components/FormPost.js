import Image from 'next/image'
import ImagePostDefault from '../public/img/icons-camera.jpg'


import React, {useState} from "react";



export default function FormCreatePostUni(){


    const [workCoverImage, setImage] = useState('')


    
const uploadImageHeader = async e =>{

    e.preventDefault()

  

//boas funcoes
//alert(print(reader));

let photo = document.getElementById("input").files[0];
let formData = new FormData();
     
formData.append("photo", photo);
fetch('../public/img/', {method: "POST", body: formData});




}


    return(
<div>


<form onSubmit={uploadImageHeader}>



  <div className="form-group">

  <label htmlFor="exampleFormControlFile1">Cover image</label>
  <br></br>

    <input type="file" accept='image/*' onChange={e => setImage(e.target.files[0])} className="form-control-file" id="input" capture/><br></br>

    {workCoverImage ? <Image src={URL.createObjectURL(workCoverImage)} alt="user image" width="710" height="180"/> : <Image src={ImagePostDefault} alt="user image" width="300" height="300"/> }



 <br></br><br>
 </br>
    <label htmlFor="exampleInputEmail1">Title Post</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Título do post"/>
   
  </div>



  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>

   

    <textarea className="form-control" id="exampleInputPassword1" name="story"
          rows="5" cols="33">
Describe what you are putting together. It can be a job to choose. Or simply the material you used to learn something. Make it public...
</textarea>


  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
    )

}

