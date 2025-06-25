import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrograms } from "../features/program";
import { useNavigate } from "react-router-dom";


const Program = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { programs } = useSelector((state) => state.program);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Government Programs for Wildlife Protection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {programs?.map((program) => (
          <div
            key={program._id}
            className="bg-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center md:flex-row justify-between hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/program/${program._id}`)}
          >
            <div className="md:w-1/2 text-gray-700 font-semibold">
              <img
                height="200"
                width="200"
                alt="Avatar"
                src={program.imageUrl}
                className="h-40 w-60 rounded-lg border-2 object-cover"
              />
            </div>
            <div className="md:w-1/2 text-gray-600 mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-2">{program.pname}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
