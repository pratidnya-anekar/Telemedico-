import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const data = [
        {
            id: 1,
            img: "/src/assets/img/cart.jpeg",
            name: 'cold',
            price: '$20',
            
            
        },
        {
            id: 2,
            img: "/src/assets/img/cart2.jpeg",
            name: 'Product 2',
            price: '$30',
        },
        {
          id: 2,
          img: "/src/assets/img/cart3.jpeg",
          name: 'Product 3',
          price: '$5',
      },
      {
        id: 2,
        img: "/src/assets/img/cart4.jpeg",
        name: 'Product 4',
        price: '$12',
    },
    {
      id: 2,
      img: "/src/assets/img/cart5.jpeg",
      name: 'Product 5',
      price: '$13',
  },
  {
    id: 2,
    img: "/src/assets/img/cart6.jpeg",
    name: 'Product 6',
    price: '$56',
},
{
  id: 2,
  img: "/src/assets/img/cart7.jpeg",
  name: 'Product 7',
  price: '$99',
},
{
  id: 2,
  img: "/src/assets/img/cart8.jpeg",
  name: 'Product 8',
  price: '$90',
},
{
  id: 2,
  img: "/src/assets/img/cart9.jpeg",
  name: 'Product 9',
  price: '$90',
},
{
  id: 2,
  img: "/src/assets/img/cart10.jpeg",
  name: 'Product 10',
  price: '$9',
},
{
  id: 2,
  img: "/src/assets/img/cart11.jpeg",
  name: 'Product 11',
  price: '$112',
},{
  id: 2,
  img: "/src/assets/img/cart12.jpeg",
  name: 'Product 12',
  price: '$88',
},
{
  id: 2,
  img: "/src/assets/img/cart13.jpeg",
  name: 'Product 13',
  price: '$21',
},
{
  id: 2,
  img: "/src/assets/img/cart14.jpeg",
  name: 'Product 14',
  price: '$66',
},
{
  id: 2,
  img: "/src/assets/img/cart15.jpeg",
  name: 'Product 15',
  price: '$50',
},
        // Add more product data as needed
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: data.length > 3 ? 3 : data.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Shopping Cart</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Your shopping cart items
                    </p>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <button
                        className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                        
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowLeft size={25} />
                    </button>
                    <button
                        className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <Slider ref={slider} {...settings}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                            style={{ width: '150px' }} // Adjusted width
                        >
                            <div>
                                <img
                                    src={item.img}
                                    alt="Product"
                                    className="h-[190px] w-full object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h1 className="font-semibold text-lg">{item.name}</h1>
                                <h3 className="mt-2">{item.price}</h3>
                                <div className="flex gap-4 mt-4">
                                    <button
                                        className="bg-green-500 text-white px-3 py-1 rounded-md"
                                        onClick={() => addToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ShoppingCart;
