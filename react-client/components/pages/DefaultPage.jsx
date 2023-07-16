import {useState} from "react";
import ss from "../../src/index.module.scss";
import {Button} from "@mui/material";

const DefaultPage = () => {
    return(
    <>
        <div className={ss.wrap}>
        <div className={ss.hello}>Hello, username</div><br/>
        <div className={ss.page}> page 1</div><br/>
        <Button variant="contained" className={ss.button}><a href={'/two'}>go to page2</a></Button>
        </div>
    </>
    )
}
export default DefaultPage