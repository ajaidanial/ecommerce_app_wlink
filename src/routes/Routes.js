import {
  AddressesPage,
  CartDeliveryDetailsPage,
  CartProductDetailsPage,
  CartReviewPage,
  LandingPage,
  OrdersPage,
  ProductDetailPage,
  ProductListPage,
  WishlistPage,
  Page404
} from 'pages'
import {
  LANDING_PAGE_URL,
  CART_DELIVERY_DETAILS_PAGE_URL,
  CART_PRODUCT_DETAILS_PAGE_URL,
  CART_REVIEW_PAGE_URL,
  PRODUCT_DETAIL_PAGE_URL,
  PRODUCT_LIST_PAGE_URL,
  ORDERS_PAGE_URL,
  WISHLIST_PAGE_URL,
  ADDRESSES_PAGE_URL
} from 'constants/appConfig'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LANDING_PAGE_URL} component={LandingPage} />
      <Route
        exact
        path={CART_DELIVERY_DETAILS_PAGE_URL}
        component={CartDeliveryDetailsPage}
      />
      <Route
        exact
        path={CART_PRODUCT_DETAILS_PAGE_URL}
        component={CartProductDetailsPage}
      />
      <Route exact path={CART_REVIEW_PAGE_URL} component={CartReviewPage} />
      <Route
        exact
        path={PRODUCT_DETAIL_PAGE_URL}
        component={ProductDetailPage}
      />
      <Route exact path={PRODUCT_LIST_PAGE_URL} component={ProductListPage} />
      <Route exact path={ORDERS_PAGE_URL} component={OrdersPage} />
      <Route exact path={WISHLIST_PAGE_URL} component={WishlistPage} />
      <Route exact path={ADDRESSES_PAGE_URL} component={AddressesPage} />
      <Route component={Page404} />
    </Switch>
  )
}

export default Routes
