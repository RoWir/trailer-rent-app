import { SetStateAction, useState } from 'react';
import { Trailer } from '../../types'
import './TrailerView.css'
import { Button, Checkbox, FormControlLabel, RadioGroup, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircleIcon from '@mui/icons-material/Circle';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SendIcon from '@mui/icons-material/Send';

interface TrailerViewProps {
    trailer: Trailer;
    setActiveTrailer: React.Dispatch<SetStateAction<Trailer|null>>
}

const TrailerView: React.FC<TrailerViewProps> = ({ trailer, setActiveTrailer }) => {
    const [color, setColor] = useState<string|null>("white");
    const trailerExtras = [
        "Spanngurte",
        "Diebstahlsicherung",
        "Seilwinde & Kurbel",
        "Adapter 7/13 polig",
        "Hebel f. Hydraulikpumpe"
    ];

    const onReturnClick = () => {
        setActiveTrailer(null);
    };

    const handleColorChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setColor(newAlignment);
    };

    return (
        <div className='trailerViewWrap'>
            <div className='trailerViewImageBox'>
                <img src={trailer.thumbnail} alt="trailer"></img>
            </div>
            <div className='trailerViewContentWrap'>
                <Button onClick={onReturnClick} variant="text" startIcon={<ArrowBackIcon />} sx={{ color: '#ffffff', justifyContent: 'flex-start', width: '105px' }}>
                    Zurück
                </Button>
                <h1>{trailer.make}</h1>
                <span className='trailerModelText'>{trailer.model}</span>
                <span className='trailerTypeText'>{trailer.type}</span>
                <span className='trailerPriceText'>{trailer.price}€</span>
                <h3 className='trailerExtaText'>Zubehör</h3>
                <RadioGroup
                    defaultValue="female"
                    sx={{ marginTop: "0px" }}
                >
                    {trailerExtras.map(extra => (<FormControlLabel value="female" control={<Checkbox />} label={extra} />))}
                </RadioGroup>
                <h3 className='trailerExtraText'>Farbe</h3>
                <ToggleButtonGroup
                    value={color}
                    exclusive
                    onChange={handleColorChange}
                >
                <ToggleButton value="white">
                    <CircleIcon sx={{ color: '#ffffff' }} fontSize='large'/>
                </ToggleButton>
                <ToggleButton value="black">
                    <CircleIcon sx={{ color: '#000000' }} fontSize='large' />
                </ToggleButton>
                <ToggleButton value="yellow">
                    <CircleIcon sx={{ color: '#FFFF00' }} fontSize='large' />
                </ToggleButton>
                <ToggleButton value="red">
                    <CircleIcon sx={{ color: '#ED2939' }} fontSize='large' />
                </ToggleButton>
                </ToggleButtonGroup>
                <div className='trailerUserInfoWrap'>
                    <h3 className='trailerExtraText'>Mieterdaten</h3>
                    <div className='trailerNameWrap'>
                        <TextField label={"Vorname"} sx={{ width: '50%' }} />
                        <TextField label={"Nachname"} sx={{ width: '50%' }} />
                    </div>
                    <TextField label={"E-Mail Adresse"} sx={{ width: '100%' }} />
                    <TextField label={"Telefonnummer"} sx={{ width: '100%' }} />
                    <TextField label={"Ausweisnummer"} sx={{ width: '100%' }} />
                    
                    <h4 className='trailerUntilText'>Ausleihen bis</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Bis" sx={{ width: '500px' }}/>
                    </LocalizationProvider>
                </div>
                <Button variant="contained" endIcon={<SendIcon />} sx={{ width: '150px', mt: '40px' }}>
                    Anfragen
                </Button>
            </div>
        </div>
    );
}

export default TrailerView;