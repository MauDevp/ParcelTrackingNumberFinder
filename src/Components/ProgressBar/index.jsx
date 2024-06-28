import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <PendingActionsIcon />,
        2: <InventoryOutlinedIcon />,
        3: <LocalShippingIcon />,
        4: <HomeOutlinedIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
}; 0

const steps = [
    { label: 'Reviewing', date: '23/01/01', time: '10:50'},
    { label: 'Ordered', date: '23/01/02', time: '17:56'},
    { label: 'Transit', date: null, time: null },
    { label: 'Delivered', date: null, time: null }
];

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value }) => {
    return (
        <Stepper alternativeLabel activeStep={value} connector={<ColorlibConnector />}>
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel className='w-[4rem]' StepIconComponent={ColorlibStepIcon}>{step.label}</StepLabel>
                    {
                        step.date && step.time ?
                            <div className='flex flex-row items-center justify-center my-1'>
                                <div className='flex flex-col items-center justify-center mr-1 gap-1'>
                                    <CalendarTodayIcon sx={{ fontSize: 12 }}/>
                                    <QueryBuilderIcon sx={{ fontSize: 12 }}/>
                                </div>
                                <div className='flex flex-col items-start justify-center gap-1'>
                                    <p className='font-light text-[10px]'>{step.date}</p> {/* Aquí renderizas la fecha */}
                                    <p className='font-light text-[10px]'>{step.time}</p> {/* Aquí renderizas la fecha */}
                                </div>
                            </div> :
                            null
                    }
                </Step>
            ))}
        </Stepper>
    );
}

export { ProgressBar }