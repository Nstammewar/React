import React, { useState } from 'react';
import video from '../../videos/video.mp4'
import { HeroContainer, HeroBG, VideoBG,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForword,ArrowRight} from './HeroElement'
import {Button} from '../ButtonElement';
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src={video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1>Welcome to Virtual World</HeroH1>
                <HeroP>
                    This is demo react website . This content are created for just 
                    practice purpose
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"  onMouseEnter={hover} onMouseLeave={onHover}>
                        Lets Go {hover?<ArrowForword/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
       
    )
}

export default HeroSection
