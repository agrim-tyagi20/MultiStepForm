import Layout from "./components/Layout";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Navbar from "./components/Navbar"
import "./components/CSS/style.css"

function App() {
  return (
    <>
  <Navbar/>
  <CssBaseline />
      <Container style={{width:"90%"}} >
        <Paper component={Box} p={3} style={{padding:"2rem 4rem",height:"54rem"}}>
          <Layout />
        </Paper>
      </Container>
    </>
  );
}

export default App;