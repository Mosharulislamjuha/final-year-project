import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
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


    <section className="product-details spad">
    <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Product </a>
                        <span>women's</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__left product__thumb nice-scroll">
                            <a className="pt active" href="#product-1">
                                <img src="../../assets/images/product-01.jpg" alt=""/>
                            </a>
                            
                        </div>
                        <div className="product__details__slider__content">
                            <div className="product__details__pic__slider owl-carousel">
                                <img data-hash="product-1" className="product__big__img" src="../../assets/images/product-01.jpg" alt=""/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product__details__text">
                        <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>( 138 reviews )</span>
                        </div>
                        <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="product__details__button">
                            <div className="quantity">
                                <span>Quantity:</span>
                                <div className="pro-qty">
                                    <input type="text" value="1"/>
                                </div>
                            </div>
                            <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
                            <ul>
                                <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span className="icon_adjust-horiz"></span></a></li>
                            </ul>
                        </div>
                        <div className="product__details__widget">
                            <ul>
                                <li>
                                    <span>Availability:</span>
                                    <div className="stock__checkbox">
                                        <label for="stockin">
                                            In Stock
                                            <input type="checkbox" id="stockin"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available color:</span>
                                    <div className="color__checkbox">
                                        <label for="red">
                                            <input type="radio" name="color__radio" id="red" checked/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label for="black">
                                            <input type="radio" name="color__radio" id="black"/>
                                            <span className="checkmark black-bg"></span>
                                        </label>
                                        <label for="grey">
                                            <input type="radio" name="color__radio" id="grey"/>
                                            <span className="checkmark grey-bg"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available size:</span>
                                    <div className="size__btn">
                                        <label for="xs-btn" className="active">
                                            <input type="radio" id="xs-btn"/>
                                            xs
                                        </label>
                                        <label for="s-btn">
                                            <input type="radio" id="s-btn"/>
                                            s
                                        </label>
                                        <label for="m-btn">
                                            <input type="radio" id="m-btn"/>
                                            m
                                        </label>
                                        <label for="l-btn">
                                            <input type="radio" id="l-btn"/>
                                            l
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Promotions:</span>
                                    <p>Free shipping</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <h6>Description</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <h6>Specification</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <h6>Reviews ( 2 )</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

