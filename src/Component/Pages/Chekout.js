import React from 'react'
import { Link } from 'react-router-dom'

export default function Chekout() {
  return (
    <div>

<header>
		
		<div  className="container-menu-desktop">
			
			<div  className="top-bar">
				<div  className="content-topbar flex-sb-m h-full container">
					<div  className="left-top-bar">
						Free shipping for standard order over 10000 TAKA
					</div>

					<div  className="right-top-bar flex-w h-full">
						<a href="/"  className="flex-c-m trans-04 p-lr-25">
							Help & FAQs
						</a>

						<a href="/"  className="flex-c-m trans-04 p-lr-25">
							My Account
						</a>

						<a href="/"  className="flex-c-m trans-04 p-lr-25">
							EN
						</a>

						<a href="/"  className="flex-c-m trans-04 p-lr-25">
							TAKA
						</a>
					</div>
				</div>
			</div>

			<div  className="wrap-menu-desktop">
				<nav  className="limiter-menu-desktop container">
					
					
					<a href="/"  className="logo">
						<img src="../../assets/images/icons/logo-04.png" alt="IMG-LOGO"/>
					</a>

					
					<div  className="menu-desktop">
						<ul  className="main-menu">
							<li  className="active-menu">
								
								<Link to={"/"}>Home</Link>
								<ul  className="sub-menu">
									<li><a href="index.html">Homepage 1</a></li>
									<li><a href="home-02.html">Homepage 2</a></li>
									<li><a href="home-03.html">Homepage 3</a></li>
								</ul>
							</li>

							<li>
								<Link to={"/banner"}>Product</Link>
								
							</li>

							<li  className="label1" data-label1="hot">
								<a href="shoping-cart.html">Shop</a>
							</li>

							<li>
							<Link to={"/checkout"}>Pages</Link>
								
							</li>

							<li>
								<a href="about.html">About</a>
							</li>

							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</div>	

					
					<div  className="wrap-icon-header flex-w flex-r-m">
						<div  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i  className="zmdi zmdi-search"></i>
						</div>

						<div  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
							<i  className="zmdi zmdi-shopping-cart"></i>
						</div>

						<a href="/"  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
							<i  className="zmdi zmdi-favorite-outline"></i>
						</a>
					</div>
				</nav>
			</div>	
		</div>

		
		<div  className="wrap-header-mobile">
				
			<div  className="logo-mobile">
				<a href="index.html"><img src="../../assets/images/icons/logo-04.png" alt="IMG-LOGO"/></a>
			</div>

			
			<div  className="wrap-icon-header flex-w flex-r-m m-r-15">
				<div  className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i  className="zmdi zmdi-search"></i>
				</div>

				<div  className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
					<i  className="zmdi zmdi-shopping-cart"></i>
				</div>

				<a href="/"  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
					<i  className="zmdi zmdi-favorite-outline"></i>
				</a>
			</div>

			
			<div  className="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span  className="hamburger-box">
					<span  className="hamburger-inner"></span>
				</span>
			</div>
		</div>


		
		<div  className="menu-mobile">
			<ul  className="topbar-mobile">
				<li>
					<div  className="left-top-bar">
						Free shipping for standard order over $100
					</div>
				</li>

				<li>
					<div  className="right-top-bar flex-w h-full">
						<a href="/"  className="flex-c-m p-lr-10 trans-04">
							Help & FAQs
						</a>

						<a href="/"  className="flex-c-m p-lr-10 trans-04">
							My Account
						</a>

						<a href="/"  className="flex-c-m p-lr-10 trans-04">
							EN
						</a>

						<a href="/"  className="flex-c-m p-lr-10 trans-04">
							USD
						</a>
					</div>
				</li>
			</ul>

			<ul  className="main-menu-m">
				<li>
					<a href="index.html">Home</a>
					<ul  className="sub-menu-m">
						<li><a href="index.html">Homepage 1</a></li>
						<li><a href="home-02.html">Homepage 2</a></li>
						<li><a href="home-03.html">Homepage 3</a></li>
					</ul>
					<span  className="arrow-main-menu-m">
						<i  className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li>
					<a href="product.html">Shop</a>
				</li>

				<li>
					<a href="shoping-cart.html"  className="label1 rs1" data-label1="hot">Features</a>
				</li>

				<li>
					<a href="blog.html">Blog</a>
				</li>

				<li>
					<a href="about.html">About</a>
				</li>

				<li>
					<a href="contact.html">Contact</a>
				</li>
			</ul>
		</div>

		
		<div  className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div  className="container-search-header">
				<button  className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="../../assets/images/icons/icon-close2.png" alt="CLOSE"/>
				</button>

				<form  className="wrap-search-header flex-w p-l-15">
					<button  className="flex-c-m trans-04">
						<i  className="zmdi zmdi-search"></i>
					</button>
					<input  className="plh3" type="text" name="search" placeholder="Search..."/>
				</form>
			</div>
		</div>
        
	</header>
         <section className="checkout spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h6 className="coupon__link"><span className="icon_tag_alt"></span> <a href="/">Have a coupon?</a> Click
                    here to enter your code.</h6>
                </div>
            </div>
            <form action="#" className="checkout__form">
                <div className="row">
                    <div className="col-lg-8">
                        <h5>Billing detail</h5>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>First Name <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Last Name <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="checkout__form__input">
                                    <p>Country <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Address <span>*</span></p>
                                    <input type="text" placeholder="Street Address"/>
                                    <input type="text" placeholder="Apartment. suite, unite ect ( optinal )"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Town/City <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Country/State <span>*</span></p>
                                    <input type="text"/>
                                </div>
                                <div className="checkout__form__input">
                                    <p>Postcode/Zip <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Phone <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="checkout__form__input">
                                    <p>Email <span>*</span></p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="checkout__form__checkbox">
                                    <label for="acc">
                                        Create an acount?
                                        <input type="checkbox" id="acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>Create am acount by entering the information below. If you are a returing
                                        customer login at the <br />top of the page</p>
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Account Password <span>*</span></p>
                                        <input type="text"/>
                                    </div>
                                    <div className="checkout__form__checkbox">
                                        <label for="note">
                                            Note about your order, e.g, special noe for delivery
                                            <input type="checkbox" id="note"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__form__input">
                                        <p>Oder notes <span>*</span></p>
                                        <input type="text"
                                        placeholder="Note about your order, e.g, special noe for delivery"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout__order">
                                <h5>Your order</h5>
                                <div className="checkout__order__product">
                                    <ul>
                                        <li>
                                            <span className="top__text">Product</span>
                                            <span className="top__text__right">Total</span>
                                        </li>
                                        <li>01. Chain buck bag <span>$ 300.0</span></li>
                                        <li>02. Zip-pockets pebbled<br /> tote briefcase <span>$ 170.0</span></li>
                                        <li>03. Black jean <span>$ 170.0</span></li>
                                        <li>04. Cotton shirt <span>$ 110.0</span></li>
                                    </ul>
                                </div>
                                <div className="checkout__order__total">
                                    <ul>
                                        <li>Subtotal <span>$ 750.0</span></li>
                                        <li>Total <span>$ 750.0</span></li>
                                    </ul>
                                </div>
                                <div className="checkout__order__widget">
                                    <label for="o-acc">
                                        Create an acount?
                                        <input type="checkbox" id="o-acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>Create am acount by entering the information below. If you are a returing customer
                                    login at the top of the page.</p>
                                    <label for="check-payment">
                                        Cheque payment
                                        <input type="checkbox" id="check-payment"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label for="paypal">
                                        PayPal
                                        <input type="checkbox" id="paypal"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" className="site-btn">Place oder</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

       
        <footer className="bg3 p-t-75 p-b-32">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						Categories
					</h4>

					<ul>
						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Women
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Men
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Shoes
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Watches
							</a>
						</li>
					</ul>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						Help
					</h4>

					<ul>
						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Track Order
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Returns 
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								Shipping
							</a>
						</li>

						<li className="p-b-10">
							<a href="/" className="stext-107 cl7 hov-cl1 trans-04">
								FAQs
							</a>
						</li>
					</ul>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						GET IN TOUCH
					</h4>

					<p className="stext-107 cl7 size-201">
						Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
					</p>

					<div className="p-t-27">
						<a href="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-instagram"></i>
						</a>

						<a href="/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-pinterest-p"></i>
						</a>
					</div>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						Newsletter
					</h4>

					<form>
						<div className="wrap-input1 w-full p-b-4">
							<input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com"/>
							<div className="focus-input1 trans-04"></div>
						</div>

						<div className="p-t-18">
							<button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="p-t-40">
				<div className="flex-c-m flex-w p-b-18">
					<a href="/" className="m-all-1">
						<img src="../../assets/images/icons/icon-pay-01.png" alt="ICON-PAY"/>
					</a>

					<a href="/" className="m-all-1">
						<img src="../../assets/images/icons/icon-pay-02.png" alt="ICON-PAY"/>
					</a>

					<a href="/" className="m-all-1">
						<img src="../../assets/images/icons/icon-pay-03.png" alt="ICON-PAY"/>
					</a>

					<a href="/" className="m-all-1">
						<img src="../../assets/images/icons/icon-pay-04.png" alt="ICON-PAY"/>
					</a>

					<a href="/" className="m-all-1">
						<img src="../../assets/images/icons/icon-pay-05.png" alt="ICON-PAY"/>
					</a>
				</div>

				
			</div>
		</div>
	</footer>
    </div>
  )
}
