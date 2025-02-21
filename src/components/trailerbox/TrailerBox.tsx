import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Trailer } from "../../types";
import './TrailerBox.modules.css';
import { SetStateAction } from "react";

interface TrailerBoxProps {
    trailer: Trailer;
    setActiveTrailer: React.Dispatch<SetStateAction<Trailer|null>>;
}

const TrailerBox: React.FC<TrailerBoxProps> = ({ trailer, setActiveTrailer }) => {
    const onTrailerSelection = () => {
        setActiveTrailer(trailer);
    }

    return (
        <div className={"boxwrap"}>
            <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                alt="trailer"
                height="140"
                image={trailer.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {trailer.make}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {trailer.model}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onTrailerSelection}>Mehr</Button>
            </CardActions>
            </Card>
        </div>
    );
}

export default TrailerBox;