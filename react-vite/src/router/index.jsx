import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage';
import PhotoPage from '../components/PhotoPage';
import DogPage from '../components/DogPage';
import NotePage from '../components/NotePage';
import RecordModal from '../components/RecordModal';
import Layout from './Layout';
import ForumShareNote from '../components/ForumShareNote/ForumShareNote';
import FriendsLastNote from '../components/FriendsLastNote';
import FriendSharePhoto from '../components/FriendSharePhoto';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <h1>Welcome!</h1>,
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "photo",
        element: <PhotoPage />,
      },
      {
        path: "dog",
        element: <DogPage />,
      },
      {
        path:'note',
        element:<NotePage />
      },
      {
        path:'record',
        element:<RecordModal />
      }
      ,
      {
        path:'forum',
        element:<ForumShareNote />
      },{
        path:'friendsnote',
        element:<FriendsLastNote />
      },{
        path:'friendsphoto',
        element:<FriendSharePhoto />
      }
    ],
  },
]);