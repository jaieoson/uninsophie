
import React, {useState} from "react";



function FormCreatePostUni(){


    const [workCoverImage, setImage] = useState('')


    
const uploadImageHeader = async e =>{

    e.preventDefault()
    alert(workCoverImage)
}


    return(
<div>


<form onSubmit={uploadImageHeader}>
  <div class="form-group">

  <label for="exampleFormControlFile1">Cover image</label>
  <br></br>

    <input type="file" onChange={e => setImage(e.target.files[0])} class="form-control-file" id="exampleFormControlFile1"/><br></br>

    {workCoverImage ? <img src={URL.createObjectURL(workCoverImage)} alt="user image" /> : <img src="../img/icons-camera.jpg" alt="user image" width="300" height="300"/> }



 <br></br><br>
 </br>
    <label for="exampleInputEmail1">Title Post</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Título do post"/>
   
  </div>



  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>

   

    <textarea class="form-control" id="exampleInputPassword1" name="story"
          rows="5" cols="33">
Describe what you are putting together. It can be a job to choose. Or simply the material you used to learn something. Make it public...
</textarea>


  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
    )

}

export default FormCreatePostUni