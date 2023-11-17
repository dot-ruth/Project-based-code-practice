import {Button}  from "@mui/material";
import {Dialog} from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogContent} from "@mui/material";
import {DialogContentText} from "@mui/material";
import {DialogTitle} from "@mui/material";


export default function CustomDialog({ open,children,title,contentText, handleContinue }){
    return (
        /* {open} a boolean property value to determine if the dialog should be rendered or not */
        <Dialog open={open}> {/* opens dialog container */}
            <DialogTitle>{title}</DialogTitle> {/* title of the dialog container */}
            <DialogContent> {/* main body of the dialog */}
                <DialogContentText>
                    {contentText} {/* message to be displayed in the dialog */}
                </DialogContentText>
            </DialogContent>
            {children} {/* to include other contents ( the component's children) */}
            <DialogActions>
                <Button onClick={handleContinue}>Continue</Button> {/* handleContinue: a function called when the button is clicked */}
            </DialogActions>
        </Dialog>
    )
}