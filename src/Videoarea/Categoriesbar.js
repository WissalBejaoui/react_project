import React, {useState} from 'react'
import './Categoriesbar.css';


const keyword =["All", "React js", "React native", "React redux",
"Bootstrap", "UI Material", "youtube clone", "building React", "React router",
"JavaScript", "Computer programming","Web pages",
"Bootstrap", "UI Material"
]


const Categoriesbar = () => {
     const [activeElement, setActiveElement] = useState('All')

     const handleClick = value =>{
         setActiveElement(value)
     }

    return (
        <div className="categoriesBar">
            {
              keyword.map((value,i)=>(
                    <span onClick={()=> handleClick(value)}
                        key={i}
                        className={activeElement === value ? 'active' : ''}>
                        {value}
                    </span>
                )
              )
            }
            
        </div>
    )
}

export default Categoriesbar
