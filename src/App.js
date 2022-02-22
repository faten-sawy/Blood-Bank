import i18n from 'i18next'
import {useTranslation ,initReactI18next} from 'react-i18next'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BloodBank from './Pages/Home/BloodBank';
import HomePage from './Pages/Posts/homePage';
import { BrowserRouter ,Route ,Switch } from 'react-router-dom';
import Login from './Components/Login/login';
import SignUp from './Components/Sign Up/signUp'
import Nav from './Components/Nav bar/nav';
import { Container } from 'react-bootstrap';
import LanguageDetector from 'i18next-browser-languagedetector';
import Search from './Components/Search/search';
import SemiProfile from './Components/Semi-Profile/semiProfile';
import Chat from './Components/Chat/chat';


function App() {
  let token = localStorage.getItem('token')

  return ( 
    <> 
    <BrowserRouter>    
    <Nav/>   
      <Switch> 
            
          <Route path="/" exact component={BloodBank}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
        
            <Route path="/homepage" exact component={HomePage}/>
            <Route path="/search" exact component={Search}/>
             <Route psth="/profile" exact component={SemiProfile}/>
            <Route path="/chat" exact component={Chat}/>
          
         
      </Switch>  
    </BrowserRouter>
    </>   
  );
}

export default App;
