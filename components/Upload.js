import {useEffect} from "react";
import useDrivePicker from "react-google-drive-picker";

export default function UploadImageCover(){

    const [openPicker, data, authResponse] = useDrivePicker();  
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
      openPicker({
        clientId: "865153836219-ek4g7dtjgs7p9tp5bpf9ffedrv0ee45d.apps.googleusercontent.com",
        developerKey: "AIzaSyA-ZAOR5S1TOTRmFG_cflqiMJxvLc48r6A",
        viewId: "DOCS",
        token: "ya29.A0ARrdaM9lHaUiisnVKFZBOl-vU-oPx5Sjq79J2arAKPml8G2PoI_9-4xzD2IFrVACB4z4Y0DRtP1y_rPw6y3YwasQXHRUc_OYMgE1BPNg9ByYkj1hIhBxc9k1y2SvpKa4-VUvUHhXYkS84wH7IHn0MiHqY3Wv ",
        // token: token, // pass oauth token in case you already have one
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        // customViews: customViewsArray, // custom view
      })
    }
  
    useEffect(() => {
      // do anything with the selected/uploaded files
      if(data){
        data.docs.map(i => console.log(i.name))
      }
    }, [data])
  
    
    return (
      <div>
          <button className="picker" onClick={() => handleOpenPicker()}>Open Picker</button>
      </div>
    );
  }
  