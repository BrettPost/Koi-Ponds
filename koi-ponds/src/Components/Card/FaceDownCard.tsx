import React from 'react';
import CardImage from '../../Assets/KoiPondsCardBack.png'

function FaceDownCard(props: {position: string}) {
    
    
    return (
        <>
            <div className="max-h-64 max-w-40 rounded overflow-hidden shadow-lg border-2 bg-slate-100 border-black m-1">
                {/* Card Header */}
                <div className='flex justify-center items-center'>
                    <img className="" src={CardImage} alt="Back of Card" />
                </div>
            </div>
        </>
        
    );
  }
  
export default FaceDownCard;