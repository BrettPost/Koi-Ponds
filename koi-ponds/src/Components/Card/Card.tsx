import React from 'react';
import CardImage from '../../Assets/ScoutShip.png'

function Card(props: {type: string, position: string}) {
    
    
    return (
        <>
            <div className="max-h-64 max-w-40 grid grid-cols-3 grid-rows-5 rounded overflow-hidden shadow-lg border-2 bg-slate-100 border-black m-1">
                {/* Card Header */}
                <div className='col-span-1 row-span-1 flex justify-center items-center'>
                    <img className="h-6 w-6" src="ScoutShip.png" alt="Card" />
                </div>
                <div className='col-span-1 row-span-1 flex justify-center items-center'>
                    <div className="font-bold text-xl mb-2">Title</div>
                </div>
                <div className='col-span-1 row-span-1 flex justify-center items-center'>
                    <h2 className=''>3</h2>
                </div>

                {/* Card body */}
                <div className='col-span-3 row-span-3 h-auto w-auto self-center'>
                    <img className='' src={CardImage}/>
                </div>

                {/* Card Footer */}
                <div className='col-span-3 row-span-1 flex justify-center items-center'>
                    <h1 className=''>Abilities</h1>
                </div>
                
            </div>
        </>
        
    );
  }
  
export default Card;