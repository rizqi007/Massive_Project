import React from 'react';
import { useState } from 'react';



const Admin =()=>{
    return(
        <div className='pt-20 '>
            <div className="bg-white rounded px-8 pt-6 pb-8 mx-48 mb-2 flex flex-col w-auto h-auto border bottom-4 border-primary justify-center ">
            <h2 className="text-2xl font-bold text-black mb-5 text-center">
                                    Daftar Kandidat
                                </h2>
                                <div className="mb-4">
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full h-48 justify-items-center py-2 px-3 text-grey-darker bottom-0"
                                        id="username"
                                        type="file"
                                        placeholder="NIM"
                                    />
                                </div>
                                <div className="border  border-slate-600 shadow appearance-none  rounded">
                                    <h2 className="text-2xl font-bold text-black mb-5 text-center">
                                    VISI MISI
                                </h2>
                                    <div className="py-6 px-14 w-4/5 ">
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full h-32 justify-items-center py-1 px-3 text-grey-darker bottom-0"
                                        id="visimisi"
                                        type="text"
                                       
                                    />
                                </div>
                                </div>
                                
                                <div className='w-full'>
                                   
                                       <p className='text-center  bg-primary hover:bg-orange-600  rounded-lg text-base font-semibold text-white py-2 mt-6'>Tambahkan  <a
                                        href="Pemira2"
                                        className=""
                                       
                                    ></a></p>
                                
                                </div>
                            </div>
        </div>
         

    )
}
export default Admin;