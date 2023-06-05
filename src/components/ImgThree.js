// import { Parallax } from 'react-parallax';
// import purple_space from '../img/purple_space.jpg'

// const ImageThree = () => (
//     <Parallax className='image' bgImage={purple_space} strength={200}>
//         <div className="content">
//             <span className="img-txt">Khule Aasmaan k Suffer</span></div>    
//     </Parallax>
// );

// export default ImageThree

import { Parallax, Background } from 'react-parallax';
import purple_space from '../img/purple_space.jpg'

const ImageThree = () => (
    <Parallax className='image'
        blur={{ min: -15, max: 15 }}
        bgImage={purple_space}
        bgImageAlt="the dog"
        strength={0}
        
        renderLayer={percentage => (
            <div className="content"
                style={{
                    position: 'absolute',
                    left: '30%',
                    top: '20%',
                    width: percentage * 600,
                    height: percentage * 500,
                }}
            ><span className="img-txt">Khule Aasmaan k Suffer</span></div>
        )}
    >
    </Parallax>
);

export default ImageThree