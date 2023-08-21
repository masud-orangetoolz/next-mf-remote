import React from 'react';
import {Box, Divider, Typography} from "@mui/material";


interface IProps {
    userList: object[]
}
const Contact: React.FC<IProps> = ({userList}) => {

    console.log({userList})
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Typography variant={"h3"}>Contact</Typography>
            <Divider />
            <Typography variant={"body1"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
            </Typography>
        </Box>
    );
};

export default Contact;