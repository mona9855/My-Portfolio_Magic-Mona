import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center text-sm'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn text-sm sm:text-xl'>
            {btnText}
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl text-sm sm:leading-snug text-center neo-brutalism-blue py-2 px-5 mx-5 text-white'>
            Hi, I am <span className='font-semibold'>Mona</span> 👋
            <br/>
            A Frontend developer from Egypt.
        </h1>
    ),
    2: (
        <InfoBox 
            text='Learned the latest technologies, and picked up many skills along the way.'
            link='/about'
            btnText='Learn more 🙋‍♀️'
            />
    ),
    3: (
        <InfoBox 
        text='Brought multiple projects to life over the years. Curious about the impact?'
        link='/projects'
        btnText='Visit my portfolio 👩‍💻'
        />
    ),
    4: (
        <InfoBox 
        text="Need a project done or looking for a dev? I'm just a few
        keystrokes away."
        link='/contact'
        btnText="Let's talk 🤙"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo