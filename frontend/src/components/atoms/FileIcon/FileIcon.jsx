
import { FaJs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { BsTypescript } from "react-icons/bs";
import { FaCss } from "react-icons/fa6";


export const FileIcon = ({ extension }) => {
    console.log("EXTENSION IS:",extension)
    const IconMapper = {
        "js" : <FaJs color='yellow' style={{height: "25px", width: "25px"}} />,
        "jsx": <GrReactjs color='#3c99dc' style={{ height: "25px", width: "25px" }} />,
        "ts": <BsTypescript color='#3c99dc' style={{ height: "25px", width: "25px" }} />,
        "css": <FaCss color='#3c99dc' style={{ height: "25px", width: "25px" }} />
    }

    return (
        <>
            { IconMapper[extension] }
        </>
    )
}