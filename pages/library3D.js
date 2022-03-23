
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

<br></br>
<h2>Passeio Virtual</h2>

<div className="tuor">



<iframe width="100%" height="515" src="https://conecte3d.com.br/tour360/air50/" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>


<h2>Street Views</h2>


<iframe width="100%" height="515" src="https://www.google.com/maps/embed?pb=!4v1648016879655!6m8!1m7!1sCAoSLEFGMVFpcE1TdFNzdVlzdWl4RHRoY1lkR0cteGlzQzlqcXluNS1FOFVtenlz!2m2!1d-9.76764302947521!2d-35.8482216999022!3f120!4f10!5f0.7820865974627469" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>


<h2>Street Views</h2>

<iframe width="100%" height="515" src="https://www.google.com/maps/embed?pb=!4v1648046590209!6m8!1m7!1sCAoSLEFGMVFpcE1zVmRPcm1KaHJJMWh3aWFpeWIxOHFnOHY4X094R2dwYkVfd1gx!2m2!1d-9.7682433!2d-35.837917!3f280!4f10!5f0.7820865974627469" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

<h2>Street Views</h2>

<iframe width="100%" height="515" src="https://www.google.com/maps/embed?pb=!4v1648048883984!6m8!1m7!1sCAoSLEFGMVFpcE5jZXhsc0l0MDBpczJCTEhqa25UQTFRUW02T0FXSExZZUhnMEdz!2m2!1d-9.64523847281001!2d-35.70664934813976!3f3.7699485497300467!4f9.19797126539217!5f0.7820865974627469" title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>






</div>


  <Footer />

      </div>
    );
  }
  
