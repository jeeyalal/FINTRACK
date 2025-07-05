import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid #FF5722',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)', // soft subtle shadow
    borderRadius: '8px',
  },
  expense: {
    borderBottom: '10px solid #00ADB5',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
  },
}));