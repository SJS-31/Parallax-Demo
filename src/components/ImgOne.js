// import { Parallax } from 'react-parallax';
// import black from '../img/black.jpg'

// const ImageOne = () => (
//     <Parallax className='image' bgImage={black} strength={200}>
//         <div className="content">
//             <span className="img-txt">Khule Aasmaan k Suffer</span></div>    
//     </Parallax>
// );

// export default ImageOne

import { Parallax, Background } from 'react-parallax';
import black from '../img/black.jpg'

const ImageOne = () => (
    <Parallax className='image'
        blur={{ min: -15, max: 15 }}
        bgImage={black}
        bgImageAlt="the dog"
        strength={0}
        renderLayer={percentage => (
            <div className="content"
                style={{
                    position: 'absolute',
                    left: '-5%',
                    top: '-5%',
                    width: percentage * 600,
                    height: percentage * 500,
                }}
            ><span class="dot"></span></div>
        )}
    >
        {/* <div className="content">
            <span className="img-txt">Khule Aasmaan k Suffer</span></div>  
        <div style={{ height: '200px' }} /> */}
    </Parallax>
);

export default ImageOne