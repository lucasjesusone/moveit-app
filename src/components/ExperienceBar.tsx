import React from 'react'


function ExperienceBar() {




    return (
        <header className='experience-bar'>
            <span>0xp</span>
            <div>
                <div style={{width: '50%'}} />          { /*Cor da barra */  }

                <span className='current-experience' style={{left: '50%'}}>300xp</span>
            </div>
            
            <span>600xp</span>
        </header>
    )
}

export default ExperienceBar