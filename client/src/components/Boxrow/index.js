import React, {useState, useContext, useEffect} from "react";
import Box from './box';
import './boxrow.css';
import DataContext from "../Datacontext";

function Boxrow(){
    const details = useContext(DataContext);
    const [obj, setobj]= useState({
        giggers:0,
        ongoing:0,
        completed: 0,
        open: 0,
        pending: 0,
        open_invoice: 0
    });

    useEffect(()=>{
        var cpy={
            giggers:0,
            ongoing:0,
            completed: 0,
            open: 0,
            pending: 0,
            open_invoice: details.length
        };
        details.map((ele)=>{
            if(ele.status=="pending")
            {
                cpy.pending+=1;
                cpy.ongoing+=ele.gignumber;
            }
            else if(ele.status=="completed")
            {
                cpy.completed+=ele.gignumber;
                cpy.open-=ele.gignumber;
                cpy.open_invoice-=1;
            }
            cpy.giggers+=ele.gignumber;
        })
        cpy.open+=cpy.giggers;
        setobj(cpy);
    },[details]);


    return (
        <>
            <div className="box-container">
                <Box value={obj.giggers} title={"Giggers"} />
                <Box value={obj.ongoing} title={"Ongoing Gigs"} />
                <Box value={obj.completed} title={"Gigs Completed"} />
                <Box value={obj.open} title={"Open Gigs"} />
                <Box value={obj.pending} title={"Pending"} />
                <Box value={obj.open_invoice} title={"Open Invoices"} />
            </div>
        </>
    );
}

export default Boxrow;