import React from 'react'

export const Pagination1 = ({totalpage,paginate}) => {
    const PageNumbers=[]
    for(let i=1;i<=totalpage;i++){
        PageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
            {PageNumbers.map(number=>(
                <li className="page-item">
          <button onClick={()=>paginate(number)} className="page-link">{number} </button>
                </li>
            ))}
            </ul>
        </nav>
            
        
    )
}