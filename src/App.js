import './App.css';
import Foot from './Components/Index/Foot';
import Ui from './Components/Index/Main'
import Nav from './Components/Index/Nav'
import List from './Components/Index/List'
import Cards from './Components/Department/Dept_be'
import Courses from './Components/Index/Courses'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from "react-router-dom";
import Dept_msc from "./Components/Department/Dept_msc"
import Button from '@material-ui/core/Button';
import Dept_bsc from './Components/Department/Dept_bsc'
import Dept_me from './Components/Department/Dept_me'
import Dept_mba from './Components/Department/dept_mba'
import Dept_mca from './Components/Department/Dept_mca'
import Dept_mtech from './Components/Department/Dept_mtech'
import S_Auto from './Components/Students/S_Auto'
import S_CSE from './Components/Students/S_CSE'
import S_ECE from './Components/Students/S_ECE'
import S_EEE from './Components/Students/S_EEE'
import S_EIE from './Components/Students/S_EIE'
import S_Mech from './Components/Students/S_Mech'
import S_Mtr from './Components/Students/S_Mtr'
import S_mba from './Components/Students/S_mba'
import S_Civil from './Components/Students/S_Civil'
import S_Chem from './Components/Students/S_Chem'
import S_FT_be from './Components/Students/S_FT_be'
import S_IT from './Components/Students/S_IT'
import S_mca from './Components/Students/S_mca'
import S_Msc from './Components/Students/S_Msc'
import S_Bsc_CSD from './Components/Students/S_Bsc_CSD'
import S_Bsc_IS from './Components/Students/S_Bsc_IS'
import S_Bsc_SS from './Components/Students/S_Bsc_SS'
import S_Mtech_IT from './Components/Students/S_Mtech_IT'
import S_Mtech_Chem from './Components/Students/S_Mtech_Chem'
import S_Mtech_Ft from './Components/Students/S_Mtech_Ft'
import S_Me_Cse from './Components/Students/S_Me_Cse'
import S_Me_Vsli from './Components/Students/S_Me_Vlsi'
import S_Me_Ae from './Components/Students/S_Me_Ae'
import S_Me_Ped from './Components/Students/S_Me_Ped'
import S_Me_Cem from './Components/Students/S_Me_Cem'
import S_Me_Se from './Components/Students/S_Me_Se'
import S_Me_Ed from './Components/Students/S_Me_Ed'
import S_Me_Mtr from './Components/Students/S_Me_Mtr'
import S_Me_Es from './Components/Students/S_Me_Es'
import S_Me_Commu from './Components/Students/S_Me_Commu'
import S_Me_Ci from './Components/Students/S_Me_Ci'

/************************Faculty*****************************************/
import F_Auto from './Components/Faculty/F_Auto'
import F_Chem from './Components/Faculty/F_Chem'
import F_Civil from './Components/Faculty/F_Civil'
{/*

import F_CSE from './Components/Faculty/F_CSE'
import F_ECE from './Components/Faculty/F_ECE'
import F_EEE from './Components/Faculty/F_EEE'
import F_EIE from './Components/Faculty/F_EIE'
import F_Mech from './Components/Faculty/F_Mech'
import F_Mtr from './Components/Faculty/F_Mtr'
import F_mba from './Components/Faculty/F_mba'


import F_FT_be from './Components/Faculty/F_FT_be'
import F_IT from './Components/Faculty/F_IT'
import F_mca from './Components/Faculty/F_mca'
import F_Msc from './Components/Faculty/F_Msc'
import F_Bsc_CSD from './Components/Faculty/F_Bsc_CSD'
import F_Bsc_IS from './Components/Faculty/F_Bsc_IS'
import F_Bsc_SS from './Components/Faculty/F_Bsc_SS'
import F_Mtech_IT from './Components/Faculty/F_Mtech_IT'
import F_Mtech_Chem from './Components/Faculty/F_Mtech_Chem'
import F_Mtech_Ft from './Components/Faculty/F_Mtech_Ft'
import F_Me_Cse from './Components/Faculty/F_Me_Cse'
import F_Me_Vsli from './Components/Faculty/F_Me_Vlsi'
import F_Me_Ae from './Components/Faculty/F_Me_Ae'
import F_Me_Ped from './Components/Faculty/F_Me_Ped'
import F_Me_Cem from './Components/Faculty/F_Me_Cem'
import F_Me_Se from './Components/Faculty/F_Me_Se'
import F_Me_Ed from './Components/Faculty/F_Me_Ed'
import F_Me_Mtr from './Components/Faculty/F_Me_Mtr'
import F_Me_Es from './Components/Faculty/F_Me_Es'
import F_Me_Commu from './Components/Faculty/F_Me_Commu'
import F_Me_Ci from './Components/Faculty/F_Me_Ci' */}

function App() {
  return (
  <Router>
            <div className="App">
       
                    <Nav/>
                   <br></br>
                    <div className="main">
                          <Switch>
                              <Route exact path="/">
                                  <Ui/>
                              </Route>
                              <Route path="/Courses">
                                  <Courses/>
                              </Route>
                              <Route path="/Dept_be">
                                  <Cards/>
                              </Route>
                              <Route path="/Dept_msc">
                                  <Dept_msc/>
                              </Route>
                              <Route path="/Dept_bsc">
                                  <Dept_bsc/>
                              </Route>
                              <Route path="/Dept_me">
                                  <Dept_me/>
                              </Route>
                              <Route path="/Dept_mca">
                                  <Dept_mca/>
                              </Route>
                              <Route path="/Dept_mtech">
                                  <Dept_mtech/>
                              </Route>
                              <Route path="/dept_mba">
                                  <Dept_mba/>
                              </Route>
                             <Route path="/S_CSE">
                                  <S_CSE/>
                              </Route>
                              <Route path="/S_Auto">
                                  <S_Auto/>
                              </Route>
                              <Route path="/S_ECE">
                                  <S_ECE/>
                              </Route>
                              <Route path="/S_EEE">
                                  <S_EEE/>
                              </Route>
                              <Route path="/S_EIE">
                                  <S_EIE/>
                              </Route>
                              <Route path="/S_Mech">
                                  <S_Mech/>
                              </Route>
                              <Route path="/S_Mtr">
                                  <S_Mtr/>
                              </Route>
                              <Route path="/S_Civil">
                                  <S_Civil/>
                              </Route>
                              <Route path="/S_Chem">
                                  <S_Chem/>
                              </Route>
                              <Route path="/S_FT_be">
                                  <S_FT_be/>
                              </Route>
                              <Route path="/S_Mtr">
                                  <S_Mtr/>
                              </Route>
                              <Route path="/S_IT">
                                  <S_IT/>
                              </Route>
                              <Route path="/S_mba">
                                  <S_mba/>
                              </Route>
                              <Route path="/S_mca">
                                  <S_mca/>
                              </Route>
                              <Route path="/S_Msc">
                                <S_Msc/>
                              </Route>
                              <Route path="/S_Bsc_CSD">
                                <S_Bsc_CSD/>
                              </Route>
                              <Route path="/S_Bsc_IS">
                                <S_Bsc_IS/>
                              </Route>
                              <Route path="/S_Bsc_SS">
                              <S_Bsc_SS/>
                            </Route>
                              <Route path="/S_Mtech_IT">
                                  <S_Mtech_IT/>
                              </Route>
                              <Route path="/S_Mtech_Chem">
                                  <S_Mtech_Chem/>
                              </Route>
                              <Route path="/S_Mtech_Ft">
                                  <S_Mtech_Ft/>
                              </Route>
                              <Route path="/S_Me_Cse">
                                  <S_Me_Cse/>
                              </Route>
                              <Route path="/S_Me_Vsli">
                                  <S_Me_Vsli/>
                              </Route>
                              <Route path="/S_Me_Ae">
                                  <S_Me_Ae/>
                              </Route>
                              <Route path="/S_Me_Ped">
                                  <S_Me_Ped/>
                              </Route>
                              <Route path="/S_Me_Cem">
                                  <S_Me_Cem/>
                              </Route>
                              <Route path="/S_Me_Se">
                                  <S_Me_Se/>
                              </Route>
                              <Route path="/S_Me_Ed">
                                  <S_Me_Ed/>
                              </Route>
                              <Route path="/S_Me_Mtr">
                                  <S_Me_Mtr/>
                              </Route>
                              <Route path="/S_Me_Es">
                                  <S_Me_Es/>
                              </Route>
                              <Route path="/S_Me_Commu">
                                  <S_Me_Commu/>
                              </Route>
                              <Route path="/S_Me_Ci">
                                  <S_Me_Ci/>
                              </Route>

                    {/****************Faculty*********************************/}

                              <Route path="/F_Auto">
                                  <F_Auto/>
                              </Route>
                              <Route path="/F_Chem">
                                  <F_Chem/>
                              </Route>
                              <Route path="/F_Civil">
                                  <F_Civil/>
                              </Route>

                              {/*
                              <Route path="/F_CSE">
                                  <F_CSE/>
                              </Route>
                              
                              <Route path="/F_ECE">
                                  <F_ECE/>
                              </Route>
                              <Route path="/F_EEE">
                                  <F_EEE/>
                              </Route>
                              <Route path="/F_EIE">
                                  <F_EIE/>
                              </Route>
                              <Route path="/F_Mech">
                                  <F_Mech/>
                              </Route>
                              <Route path="/F_Mtr">
                                  <F_Mtr/>
                              </Route>
                              
                              
                              <Route path="/F_FT_be">
                                  <F_FT_be/>
                              </Route>
                              <Route path="/F_Mtr">
                                  <F_Mtr/>
                              </Route>
                              <Route path="/F_IT">
                                  <F_IT/>
                              </Route>
                              <Route path="/F_mba">
                                  <F_mba/>
                              </Route>
                              <Route path="/F_mca">
                                  <F_mca/>
                              </Route>
                              <Route path="/F_Msc">
                                <F_Msc/>
                              </Route>
                              <Route path="/F_Bsc_CSD">
                                <F_Bsc_CSD/>
                              </Route>
                              <Route path="/F_Bsc_IS">
                                <F_Bsc_IS/>
                              </Route>
                              <Route path="/F_Bsc_SS">
                              <F_Bsc_SS/>
                            </Route>
                              <Route path="/F_Mtech_IT">
                                  <F_Mtech_IT/>
                              </Route>
                              <Route path="/F_Mtech_Chem">
                                  <F_Mtech_Chem/>
                              </Route>
                              <Route path="/F_Mtech_Ft">
                                  <F_Mtech_Ft/>
                              </Route>
                              <Route path="/F_Me_Cse">
                                  <F_Me_Cse/>
                              </Route>
                              <Route path="/F_Me_Vsli">
                                  <F_Me_Vsli/>
                              </Route>
                              <Route path="/F_Me_Ae">
                                  <F_Me_Ae/>
                              </Route>
                              <Route path="/F_Me_Ped">
                                  <F_Me_Ped/>
                              </Route>
                              <Route path="/F_Me_Cem">
                                  <F_Me_Cem/>
                              </Route>
                              <Route path="/F_Me_Se">
                                  <F_Me_Se/>
                              </Route>
                              <Route path="/F_Me_Ed">
                                  <F_Me_Ed/>
                              </Route>
                              <Route path="/F_Me_Mtr">
                                  <F_Me_Mtr/>
                              </Route>
                              <Route path="/F_Me_Es">
                                  <F_Me_Es/>
                              </Route>
                              <Route path="/F_Me_Commu">
                                  <F_Me_Commu/>
                              </Route>
                              <Route path="/F_Me_Ci">
                                  <F_Me_Ci/>
                              </Route> */}
                              </Switch>
                    </div>
                
                   <br></br> 
                    <Foot/>
            </div>
  </Router>
  );
}

export default App;
