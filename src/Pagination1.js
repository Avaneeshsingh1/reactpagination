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
          <a onClick={()=>paginate(number)} href="!#" className="page-link">{number}</a>
                </li>
            ))}
            </ul>
        </nav>
            
        
    )
}