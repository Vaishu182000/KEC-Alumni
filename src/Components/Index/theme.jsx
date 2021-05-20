import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    typography: 
    {
              h2: {
              fontFamily: '"Lucida handwriting"',
              fontSize:40
              },
              h3: {
                fontFamily: '"Times new Roman"',
              },
              h5: {
                fontFamily: '"Patrick Hand SC,cursive"',
                fontSize:25
              },
    },


    h4: {
      fontFamily: '"Lucida handwriting"',
      fontSize:50
     },
     
     h6: { 
       fontFamily: '"Lucida handwriting"',
       fontSize:20
     }
  })
export default theme 