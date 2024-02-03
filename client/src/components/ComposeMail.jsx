import { useState } from 'react';

import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`

const ComposeMail = ({ open, setOpenDrawer }) => {
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmails);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {
        Username: "imcoder001@yopmail.com",
        Password: "1316CE643F0264BE79E120661C3CDE4BFAC2",
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "kumbharaditya9903@gmail.com",
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }

        const payload = {
            to: data.to,
            from: "kumbharaditya9903@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Aditya Kumbhar',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }
    }

    const closeComposeMail = (e) => {
        e.preventDefault();

        const payload = {
            to: data.to,
            from: "kumbharaditya9903@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Aditya Kumbhar',
            starred: false,
            type: 'drafts'
        }

        saveDraftService.call(payload);

        if (!saveDraftService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }
    }

    return (
        <Dialog
            open={open}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
            </RecipientWrapper>
            <TextField
                multiline
                rows={18}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
            <Footer>
                <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDrawer(false)} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;











// import { useState } from "react";
// import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material";
// import { Close, DeleteOutline } from "@mui/icons-material";
// import useApi from "../hooks/useApi";
// import { API_URLS } from "../services/api.urls";

// const dialogStyle = {
//     height: '90%',
//     width: '80%',
//     maxHeight: '100%',
//     maxWidth: '100%',
//     boxShadow: 'none',
//     borderRadius: '10px 10px 0 0'
// }

// const Header = styled(Box)({
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px 15px',
//     background: '#f2f6fc',
//     '& > p': {
//         fontSize: 14,
//         fontWeight: 500
//     }
// });

// const RecipientsWrapper = styled(Box)({
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '0 15px',
//     '& > div': {
//         fontSize: 14,
//         borderBottom: '1px solid #f5f5f5',
//         marginTop: 10
//     }
// });

// const Footer = styled(Box)({
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px 15px',
//     alignItems: 'center'
// });

// const SendButton = styled(Button)({
//     background: '#0b57d0',
//     color: "#fff",
//     fontWeight: 500,
//     textTransform: 'none',
//     borderRadius: 18,
//     width: 100
// });

// const ComposeMail = ({ openDialog, setOpenDialog }) => {

//     const [data, setData] = useState({});
//     const sentEmailService = useApi(API_URLS.saveSentEmail);
//     const saveDraftService = useApi(API_URLS.saveDraftEmails);
//     const config = {

//         Host: "smtp.elasticemail.com",
//         Username: process.env.REACT_APP_USERNAME,
//         Password: process.env.REACT_APP_PASSWORD,
//         Port: 2525,
//     }

//     const closeComposeMail = (event) => {
//         event.preventDefault();
//         const payload = {
//             to: data.to,
//             from: "kumbharaditya9903@gmail.com",
//             subject: data.subject,
//             body: data.body,
//             date: new Date(),
//             image: "",
//             name: "Aditya Kumbhar",
//             starred: false,
//             bin: false,
//             type: 'drafts'
//         }

//         saveDraftService.call(payload);
//         if (!saveDraftService.error) {
//             setOpenDialog(false);
//             setData({});
//         }
//     }
//     const sendMail = (event) => {
//         event.preventDefault();
//         if (window.Email) {
//             window.Email.send({
//                 ...config,
//                 To: data.to,
//                 From: "kumbharaditya9903@gmail.com",
//                 Subject: data.subject,
//                 Body: data.body
//             }).then(
//                 message => alert(message)
//             );
//         }
//         const payload = {
//             to: data.to,
//             from: "kumbharaditya9903@gmail.com",
//             subject: data.subject,
//             body: data.body,
//             date: new Date(),
//             image: "",
//             name: "Aditya Kumbhar",
//             starred: false,
//             bin: false,
//             type: 'sent'
//         }

//         sentEmailService.call(payload);
//         if (!sentEmailService.error) {
//             setOpenDialog(false);
//             setData({});
//         }
//         setOpenDialog(false);
//     }

//     const onValueChange = (event) => {
//         setData({ ...data, [event.target.name]: event.target.value });
//         // console.log(data);
//     }
//     return (
//         <Dialog
//             open={openDialog}
//             PaperProps={{ sx: dialogStyle }}
//         >
//             <Header>
//                 <Typography required>New Message</Typography>
//                 <Close fontSize="smaller" onClick={(event) => { closeComposeMail(event) }} />
//             </Header>
//             <RecipientsWrapper>
//                 <InputBase placeholder="Recipient" name="to" onChange={(event) => { onValueChange(event) }} />
//                 <InputBase placeholder="Subject" name="subject" onChange={(event) => { onValueChange(event) }} />
//             </RecipientsWrapper>
//             <TextField
//                 multiline
//                 rows={18}
//                 sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
//                 name="body"
//                 onChange={(event) => { onValueChange(event) }}
//             />
//             <Footer>
//                 <SendButton onClick={(event) => { sendMail(event) }}>
//                     Send
//                 </SendButton>
//                 <DeleteOutline onClick={() => { setOpenDialog(false) }} />
//             </Footer>
//         </Dialog>
//     );
// }
// export default ComposeMail;