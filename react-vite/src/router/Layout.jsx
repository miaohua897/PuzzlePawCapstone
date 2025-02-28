import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import Navigation from "../components/Navigation/Navigation";
import FootPage from "../components/FootPage";
import SideBarProvider from '../context/SideBar';
import SetDogIdProvider from '../context/SetDogId';

export default function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <ModalProvider>
        <SideBarProvider >
          <SetDogIdProvider >
           <Navigation />
            {isLoaded && <Outlet />}
            <FootPage />
            <Modal />
          </SetDogIdProvider>     
        </SideBarProvider>
      </ModalProvider>
    </>
  );
}
