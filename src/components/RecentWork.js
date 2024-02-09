import React from 'react';
import '../style/RecentWork.scss'

const RecentWork = () => {
    const workExperience = [
        {
            id : 1,
            position: 'Product designer',
            date: '2023 - present',
            firm: 'Figma',
        },

        {
            id : 2,
            position: 'UI/UX designer',
            date: '2021 - 2022',
            firm: 'Google',
        },

        {
            id : 3,
            position: 'Product designer',
            date: '2023 - present',
            firm: 'Figma',
        },

        {
            id : 4,
            position: 'Product designer',
            date: '2023 - present',
            firm: 'Figma',
        }

    ]
  return (
    <section className='work_experience grid-item1'>
        <div className='flex_container work_experience_title'>
            <span className='spot spot-change'></span>
            <h4>Recent Work</h4>
        </div>

        <ul className='work_experience_list'>
           {
            workExperience.map((work) => (
                <li className = 'flex_container' key = {work.id}>
                    <div>
                        { work.id === 1? <h4 style={{color:'#F35034'}} className='work_experience_position'>{work.position}</h4>
                            :
                         <h4 className='work_experience_position'>{work.position}</h4>
                        }
                       
                        <p className='work_experience_date'>{work.date}</p>
                    </div>
                    <p>{work.firm}</p>
                </li>
            ))
           }
        </ul>
    </section>
  )
}

export default RecentWork