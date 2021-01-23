import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserData from "./components/UserData";
import {db} from './services/firebase';
import Data from "./components/getData";

function App() {
  return (
    <div>
      {/* <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Sitting Time Reducer
          </Typography>
        </Box>
      </Container> */}
      <Data/>
    </div>
  );
}

export default App;
