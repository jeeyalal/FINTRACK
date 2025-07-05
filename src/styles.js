import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  footer: {
   
    padding: '12px 0',
    textAlign: 'center',
   
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
