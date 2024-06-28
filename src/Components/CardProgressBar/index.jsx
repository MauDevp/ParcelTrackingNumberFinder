import { ProgressBar } from '../../Components/ProgressBar';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const CardProgressBar = ({ busqueda, trackingNumber, value}) => {

    console.log(busqueda, trackingNumber)

    return (
        <motion.div
            key={busqueda}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                {
                    busqueda === trackingNumber ?
                    <div className='flex flex-col items-center justify-center mt-12 bg-[#fcdf22] rounded-lg w-[84vw] h-52'>
                        <p className='mb-6'>
                            <span className='font-normal text-xl'>Tracking number:</span>
                            <span className='mx-2 font-bold text-lg border-b-2 border-[#041b27]'>{busqueda}</span>
                        </p>
                        <ProgressBar value={value} /> 
                    </div> :
                    busqueda !== '' ?
                        <div className='flex flex-col items-center justify-center mt-12 bg-[#fcdf22] rounded-lg w-[84vw] h-52'>
                            <div className='flex flex-col items-center justify-center text-center px-6'>
                                <p className='font-normal text-lg'>Your tracking number 
                                    <span className='mx-2 font-bold text-lg border-b-2 border-[#041b27]'>{busqueda}</span>
                                    was not found.
                                </p>
                                <SearchOffIcon sx={{ fontSize: 42 }} className='mt-6' />
                            </div> 
                        </div> :
                        <div>
                        </div>
                }
            </div>
        </motion.div>
    );
}

export { CardProgressBar }