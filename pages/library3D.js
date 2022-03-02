
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css"; 

export default function Videolibrary3D() {
    return (
      <div>
   <Header />


<div className="play3d">

<Player className="play3d"
      autoplay
    playsInline
    loop
      src="../videos/library.mp4"
   />
  
</div>


  <Footer />

      </div>
    );
  }
  