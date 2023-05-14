
import Avatar from '@mui/material/Avatar'


type Props = {
    url: string,
}

export default function RandomFox({ url }: Props): JSX.Element {

    return (
        <Avatar variant='square' src={url} sx={
            {
                minWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "4px 4px 20px 0px black"
            }
        } />
    )
}