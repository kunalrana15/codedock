import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export const Tree = ({
    fileFolderData
}) => {
 
    const [visbility,setVisibility] = useState({});

    function toggleVisibility(name){
        setVisibility({
            ...visbility,
            [name]: !visbility[name]
        })
    }

    return (
       ( fileFolderData && <div
         style={{
            paddingLeft: '15px',
            color: 'white'
         }} >
         {
            fileFolderData.children /*If the current node is a folder */ ? (
                /**If the current node is a folder return it as a button */
                <button
                 onClick={() => toggleVisibility(fileFolderData.name)}
                 style={{
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    color: 'white',
                    backgroundColor: "black",
                    paddingTop: '15px',
                    fontSize: '16px'
                 }} >
                    { visbility[fileFolderData.name] ? <IoIosArrowDown /> : <IoIosArrowForward /> }
                    { fileFolderData.name }
                </button>
            ) : (
                /** If current node is not a file i.e. File, render it as a file */
                <p
                  style={{
                    paddingTop: "10px",
                    fontSize: "15px",
                    cursor: "pointer",
                    backgroundColor: "black",
                    marginLeft: "5px"
                  }}
                >
                    { fileFolderData.name }
                </p>
            )}

            {visbility[fileFolderData.name] && fileFolderData.children && (
                fileFolderData.children.map((child) => (
                    <Tree
                     fileFolderData={child}
                     key={child.name} />
                ))
            )}

        </div>)
    )
}