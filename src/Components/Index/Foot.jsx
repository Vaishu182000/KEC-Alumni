import Typography from '@material-ui/core/Typography';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {' '}
        {'KEC'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  
 }

        function Foot() {
            return (
                <div>
                    {/* Footer */}
            <footer>
            <Typography variant="h6" align="center" gutterBottom>
                ***END***
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Designed by Kavin_brti.b.e
            </Typography>
            <Copyright />
            </footer>
            {/* End footer */}
                </div>
            )
        }
export default Foot
