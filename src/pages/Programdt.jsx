import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Programdt = () => {
  const { id } = useParams();
  const { programs } = useSelector((state) => state.program);

  const selectedProgram = programs.find(p => p._id === id);

  if (!selectedProgram) return <p>Program not found</p>;

  return (
    <div className="grid grid-rows-1 w-95 m-4  md:max-w-2/3 m-auto bg-amber-100 border border-gray-300 rounded-2xl p-10 my-4 text-center">
    
      <img src={selectedProgram.imageUrl} alt={selectedProgram.pname} className="w-md h-auto mb-4 m-auto" />
      <h2 className="text-3xl font-bold mb-4">{selectedProgram.pname}</h2>
      <p className="text-lg text-amber-950">{selectedProgram.description}</p>
      <p className="text-lg text-gray-700 ">{selectedProgram.detail}</p>
      {/* Add more fields if needed */}
   
    </div>
  );
}

export default Programdt