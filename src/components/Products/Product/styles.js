import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ( {
    root: {
        maxWidth: '100%',
        height: '450px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    desc: {
        fontSize: '.8rem',
        height: '100px'
    },
    name: {
        fontSize: '1rem',
    },
    price: {
        fontSize: '.9rem',
    }
}))