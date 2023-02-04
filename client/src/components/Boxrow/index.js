import Box from './box';
import './boxrow.css';

function Boxrow(){
    return (
        <>
            <div className="box-container">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </>
    );
}

export default Boxrow;