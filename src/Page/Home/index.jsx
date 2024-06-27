import { TextInput } from '@tremor/react';
import { RiSearchLine } from '@remixicon/react';
import { ProgressBar } from '../../Components/ProgressBar';
import { useState } from 'react';
import { motion } from "framer-motion";

const Home = () => {
    const [busqueda, setBusqueda] = useState('')
    const [inputValue, setInputValue] = useState('');
    const trackingNumber = 'MaU'

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setBusqueda(inputValue); // Actualiza busqueda solo cuando se presiona Enter
        }
    };

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='flex justify-center font-medium text-3xl w-full'>Rastrea tu pedido</p>
            <TextInput
                className='w-64 z-20 my-4' 
                icon={RiSearchLine}  
                placeholder='Find your tracking number...'
                onChange={(e) => setInputValue(e.target.value)} // Actualiza inputValue con cada cambio
                onKeyDown={handleKeyDown} // Maneja la tecla Enter
            />
            {
                <motion.div
                    key={busqueda}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {
                        busqueda.toLowerCase() === trackingNumber.toLowerCase() ?
                        <div className='flex flex-col items-center justify-center mt-12 bg-[#fcdf22] rounded-lg px-12 py-8'>
                            <p className='flex flex-col items-center mb-6'>
                                <span className='font-semibold text-xl'>Numero de rastreo:</span>
                                <span className='font-light text-lg'>{busqueda}</span>
                            </p>
                            <ProgressBar value={0} /> 
                        </div> :
                            <div><p>No se encontró el numero de rastreo</p></div>
                    }
                </motion.div>
            }
        </div>
    )
}

export {Home}