import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FaSignal } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import './nav.css'

const Nav = () => {
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
            <LiaShippingFastSolid />
            </div>
            <div className='info'>
                <p>Free Shipping When Shipping Upto $1000</p>
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='image/logo.webp' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value='' placeholder='search'></input>
                <button>
                <CiSearch />
                </button>
            </div>
            <div className='login'>
                <button>
                <FaRegUser />
                </button>
            </div>
            <div className='comparison'>
                <button>
                <FaSignal />
                </button>
            </div>
            <div className='fav'>
                <button>
                <FaRegHeart />
                </button>
            </div>
            <div className='cart'>
                <button>
                <BsCart3 />
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
