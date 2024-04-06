import React from 'react';
import Katalogtovarov from '../assets/images/Katalog-tovarov.png'
import Katalogtovarov2 from '../assets/images/Katalog-tovarov2.png'
import Katalogtovarov3 from '../assets/images/Katalog-tovarov3.png'
import Vektor3 from '../assets/images/Vector3.png'
import Vektor4 from '../assets/images/Vector4.png'

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Анализатор мочи  MIND UA-66', price: 300, image: Katalogtovarov,},
    { id: 2, name: 'Анализатор мочи  MIND UA-69', price: 355, image: Katalogtovarov2, },
    { id: 3, name: 'Анализатор мочи  MIND UA-72', price: 275, image: Katalogtovarov3, },
  ];

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = cartItems.find((item) => item.id === product.id);

    if (itemExists) {
      itemExists.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <div className="bg-[#F8F7F3] w-[100%] h-[780px]">
     <div>
      <h1 className='mt-[63px] absolute ml-[77px] font-[500] text-[33px] max-md:ml-[25px]'>Каталог товаров</h1>
      <p className='ml-[77px] mt-[170px] absolute text-[#202020] text-[600] max-md:hidden'>Хиты продаж</p>
      <p className='ml-[77px] mt-[200px] absolute text-[#202020] text-[600] max-md:hidden'>Новинки</p>
      <p className='ml-[77px] mt-[230px] absolute text-[#202020] text-[600] max-md:hidden'>Акции</p>
      <div className="grid grid-cols-3 gap-4 w-[900px] absolute ml-[550px] mt-[73px] h-[522px] max-md:mt-[170px] max-md:ml-[30px] max-md:w-[700px]">
        {products.map((product) => (
          <div key={product.id} className="border  rounded-[10px]">
            <div className='w-[287px] h-[280px] bg-white rounded-[10px] max-md:w-[221px]'>
            <button className='w-[77px] h-[27px] border-[2px] border-[#088269] rounded-full bg-[#E1EFE6] text-[#088269] ml-[20px] mt-[18px]'>Новинка</button>
            <a href="/cart">
            <img className='absolute mt-[-26px] ml-[200px] max-md:ml-[160px]' src={Vektor4} alt="" />
            <img className='absolute mt-[-24px] ml-[236px] max-md:ml-[190px]' src={Vektor3} alt="" />
            </a>
            <img src={product.image} alt={`Image ${product.id}`} className=" ml-[63px] absolute max-md:ml-[23px]" />
            </div>
            <h1 className='ml-[15px] mt-[20px] font-[600]'>Анализатор мочи <br />MIND UA-66</h1>
            <p className='mt-[20px] ml-[15px] text-[#7A7687]'>Артикул: 213134 <br />В наличии</p>
            <h1 className="ml-[15px] mt-[10px] font-[700]">{product.price} руб.</h1>
            <button onClick={() => handleAddToCart(product)} className='w-[266px] h-[41px] border-[2px] border-[#D5D1E1] rounded-full ml-[12px] mt-[20px] text-[#088269] max-md:w-[196px]'>Добавить в корзину</button>
          </div>
        ))}
      </div>
     </div>
     <div className="mt-[680px] w-[1310px] h-[41px] ml-[83px] absolute">
     <a href="/katalog">
     <button className='w-[241px] h-[41px] border-[2px] border-[#D5D1E1] text-[#088269] rounded-full mt-[-5px] absolute ml-[966px] font-[500] max-md:hidden'>Бесплатная консультация</button>
     <button className='w-[138px] h-[42px] border-none bg-[#088269] text-white rounded-full mt-[-5px] absolute ml-[1217px] font-[500] max-md:hidden'>Все товары</button>
     </a>
     </div>
    </div>
  );
};

export default ProductPage;