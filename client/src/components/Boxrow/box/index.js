import './box.css';

function Box({value,title}){
    return (
        <>
            <div className="box">
                <span>{value}</span>
                <span>{title}</span>
            </div>
        </>
    );
}

export default Box;