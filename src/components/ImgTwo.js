// import { Parallax } from 'react-parallax';
// import blue_space from '../img/blue_space.jpg'

// const ImageTwo = () => (
//     <Parallax className='image' bgImage={blue_space} strength={200}>
//         <div className="content">
//             <span className="img-txt">Khule Aasmaan k Suffer</span></div>    
//     </Parallax>
// );

// export default ImageTwo

import { Parallax, Background } from 'react-parallax';
import * as React from "react";
import { motion } from "framer-motion";
import blue_space from '../img/blue_space.jpg'
import Satellite from '../img/Satellite.png'

const ImageTwo = () => (
    
    <Parallax className='image'
        blur={{ min: -15, max: 15 }}
        bgImage={blue_space}
        strength={-50}
        renderLayer={percentage => (
            <div className="content"
                style={{
                    position: 'absolute',
                    left: '20%',
                    top: '20%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
                ><img className='satellite' src={Satellite} alt="BigCo Inc. logo"/></div>
            
        )}
    >
        
    </Parallax>
    
  
);

export default ImageTwo