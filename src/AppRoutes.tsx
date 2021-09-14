import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import ProductDetail from './productdetail'
import Home from './home'
import Category from './category'
import Checkout from './checkout'
import NewArrivals from './newarrivals'
import TopDeals from './topdeals'
import Search from './search'
import Confirmation from './confirmation'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LeftSidebar from './components/LeftSidebar'
import SideBar from './components/SideBar/SideBar'
import  { useUI } from './app/context'
import CartSidebarView from './components/CartSidebarView'
import NavSidebarView from './components/NavSidebarView'
import FeatureBar from './components/FeatureBar'
import LoginView from './components/Auth/LoginView'
import Modal from './components/Modal'

const AppRoutes = () => {

    const {
        displaySidebar,
        displayLeftSidebar,
        displayModal,
        closeSidebar,
        closeModal,
        modalView,
        closeLeftSidebar,
      } = useUI()
    
    return (
         <>
            <Nav/>
            <LeftSidebar open={displayLeftSidebar} onClose={closeLeftSidebar}><NavSidebarView /></LeftSidebar>
            <SideBar open={displaySidebar} onClose={closeSidebar} ><CartSidebarView /></SideBar>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product/:id" component={ProductDetail}/>
            <Route exact path="/products/checkout" component={Checkout}/>
            <Route exact path="/products/category/:category" component={Category}/>
            <Route exact path="/products/newarrivals" component={NewArrivals}/>
            <Route exact path="/products/topdeals" component={TopDeals}/>
            <Route exact path="/products/confirmation" component={Confirmation}/>
            <Route exact path="/:q" component={Search}/>
            <Footer/>
            <Modal open={displayModal} onClose={closeModal}>
          {modalView === 'LOGIN_VIEW' && <LoginView />}
          
        </Modal>
            <FeatureBar />
        </>
    )
}

export default AppRoutes
