import logo from '../../assets/logo_NavBar.png'

const NavBar = ()=> {
    return(
        <div className="flex flex-row items-center justify-center rounded-b-2xl  h-20 w-[98vw] fixed top-0 bg-[#fcdf22] text-[#00283D] shadow-lg">

            <figure className='w-20 h-20 absolute top-0 left-6 '>
                <img src={logo} alt="icon" />
            </figure>
            
            <p className='flex flex-col items-center'>
                <span className='font-bold text-xl'>Ventricular</span>
                <span className='font-light text-lg pl-16'> Express</span> 
            </p>
        </div>
    )
}

export {NavBar}