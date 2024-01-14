import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Root from './Components/Root/Root';
import FrontPage from './Components/Manga/FrontPage/FrontPage';
import Content from './Components/Manga/Content/Content';
import Image, { mangaLoader } from './Components/Manga/Image/Image';
import Favourite from './Components/Manga/Favourite/Favourite';
import UploadManga from './Components/Upload/Manga/UploadManga';
import UploadChapter from './Components/Upload/Chapter/UploadChapter';
import UploadImage from './Components/Upload/Image/UploadImage';
import './App.css';

import React from 'react';
//import AuthProvider from 'react-auth-kit/AuthProvider';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
    //<AuthProvider authType={'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={false}>
      <Route path='/' element={<Root/>}>
        <Route path='frontpage' element={<FrontPage/>}/>
        <Route path='favourite' element={<Favourite/>}/>
        <Route path='uploadmanga' element={<UploadManga/>}/>
        <Route path="content" element={<Content />}>
          <Route path='uploadchapter' element={<UploadChapter/>}/>
          <Route path=':id' element={<Image/>} loader={mangaLoader}>
          <Route path='uploadimage' element={<UploadImage/>}/>
          </Route>
        </Route>
      </Route>
    //</AuthProvider>
    
  )
)

class App extends React.Component {
  constructor(){
    super();
    this.state={
      route: "signIn",
      isSignIn: false,
      user:{
        email: '',
        password: '',
        name: '',
        join: ''
      }
    }
  }

  loadUser = (data) =>{
    this.setState({user:{
      email: data.email,
      password: data.password,
      name: data.name,
      join: data.join
    }})
  }
  
  onRouteChange = (route) =>{
    if(route==="signOut"){
      this.setState({isSignIn: false});
    }
    else if (route==="home"){
      this.setState({isSignIn: true});
    }
    this.setState({route: route});
  }
  render (){
    return(

        <div className="App">
          <Navigation isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
          {
            this.state.route === "home"  
              ?<div>
                <Logo/>
                <RouterProvider router={router}/>  
              </div>
              :(
                this.state.route==="signIn" ?
                  <SignIn onRouteChange={this.onRouteChange}/>
                :
                  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
          }
         </div>
    )
  };
}

export default App;
