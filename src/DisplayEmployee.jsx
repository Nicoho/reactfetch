import  React  from  'react';

const  DisplayEmployee = ({ citations }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={citations.image}  alt="picture"  />
            <ul>
                                <li>
                    Name : {citations.character}
                </li>
                
                <li>
                    citation :{citations.quote}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;