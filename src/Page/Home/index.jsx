
import { TextInput } from '@tremor/react';
import { RiSearchLine } from '@remixicon/react';
import { useState } from 'react';
import { CardProgressBar } from '../../Components/CardProgressBar';

const Home = () => {
    const [busqueda, setBusqueda] = useState('')
    const [inputValue, setInputValue] = useState('');

    const trackingNumber = '061626mau';
    const value = 1;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') { // Validación de entrada
            setBusqueda(inputValue.trim()); // Actualiza busqueda solo cuando se presiona Enter
            setInputValue(''); // Limpia el campo de entrada
            scrollToCardProgressBar(); // Desplazamiento suave hacia CardProgressBar
        }
    };

        // Función para desplazarse suavemente hasta el componente CardProgressBar
        function scrollToCardProgressBar() {
            const element = document.getElementById('cardProgressBar');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center'  });
            }
        }

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p className='flex justify-center font-bold text-center text-4xl w-full'>Track your order</p>
            <TextInput
                className='w-64 h-12 z-20 my-4' 
                icon={RiSearchLine}  
                placeholder='Find your tracking number...'
                onChange={(e) => setInputValue(e.target.value)} // Actualiza inputValue con cada cambio
                onKeyDown={handleKeyDown} // Maneja la tecla Enter
            />
            {
                <div id="cardProgressBar"> {/* Envuelve CardProgressBar en un div con un id */}
                    <CardProgressBar busqueda={busqueda.toLowerCase()} trackingNumber={trackingNumber.toLowerCase()} value={value} />
                </div>
            }
        </div>
    )
}

export {Home}