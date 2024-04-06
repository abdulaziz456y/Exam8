import React from 'react'
import Logo2 from '../assets/images/Logo2.png'
import Vk from '../assets/images/Vk.png'
import Telegram from '../assets/images/Telegram.png'
import Telefon from '../assets/images/Telefon.png'
import Frame from '../assets/images/Frame.png'

export default function Footer() {
  return (
    <div className='w-[100%] h-[670px] bg-[#088269] text-[#FFF] max-md:h-[730px]'>
      <h1 className='ml-[77px] mt-[40px] absolute text-2xl'>Покупателям</h1>
      <hr className='w-[210px] h-[2px] bg-[#FFF] ml-[77px] mt-[90px] absolute' />
      <div className='w-[91px] h-[181px]  ml-[77px] mt-[100px] absolute'>
        <h1>О компании</h1>
        <h1 className='mt-[5px]'>Сертификаты</h1>
        <h1 className='mt-[5px]'>Вакансии</h1>
        <h1 className='mt-[5px]'>Гарантии</h1>
        <h1 className='mt-[5px]'>Услуги</h1>
        <h1 className='mt-[5px]'>Акции</h1>
        <h1 className='mt-[5px]'>Доставка</h1>
      </div>
      <div className='w-[55px] h-[154px] ml-[233px] absolute mt-[100px]'>
        <h1>Оплата</h1>
        <h1 className='mt-[5px]'>Возврат</h1>
        <h1 className='mt-[5px]'>FAQ</h1>
        <h1 className='mt-[5px]'>Лизинг</h1>
        <h1 className='mt-[5px]'>Отзывы</h1>
        <h1 className='mt-[5px]'>Блог</h1>
      </div>
      <h1 className='ml-[410px] mt-[40px] absolute text-2xl'>Каталог</h1>
      <hr className='w-[660px] h-[2px] bg-[#FFF] ml-[410px] mt-[90px] absolute max-md:w-[300px]' />
      <div className='ml-[410px] h-[181px] w-[203px]  absolute mt-[103px]'>
        <h1>Реанимация</h1>
        <h1 className='mt-[5px]'>Хирургия</h1>
        <h1 className='mt-[5px]'>Офтальмология</h1>
        <h1 className='mt-[5px]'>Лабораторная диагностика</h1>
        <h1 className='mt-[5px]'>Акушерство и Гинекология</h1>
        <h1 className='mt-[5px]'>Гистология</h1>
        <h1 className='mt-[5px]'>Косметология</h1>
      </div>
      <div className='w-[230px] h-[154px] absolute mt-[103px] ml-[670px] max-md:hidden'>
        <h1 className='max-md:hidden'>Орториноларингология</h1>
        <h1 className='mt-[5px] max-md:hidden'>Рентгенология и томография</h1>
        <h1 className='mt-[5px] max-md:hidden'>Стрерилизация</h1>
        <h1 className='mt-[5px] max-md:hidden'>Физиотерапия и реабилитация</h1>
        <h1 className='mt-[5px] max-md:hidden'>Функциональная диагностика</h1>
        <h1 className='mt-[5px] max-md:hidden'>Эндоскопия</h1>
      </div>
      <div className='w-[135px] h-[100px] ml-[940px] absolute mt-[103px] max-md:hidden'>
        <h1 className='max-md:hidden'>Новинки</h1>
        <h1 className='mt-[5px] max-md:hidden'>Распродажи</h1>
        <h1 className='mt-[5px] max-md:hidden'>Кабинеты под ключ</h1>
        <h1 className='mt-[5px] max-md:hidden'>Скачать каталог</h1>
      </div>
      <h1 className='ml-[1200px] mt-[40px] absolute text-2xl max-md:hidden'>Контакты</h1>
      <hr className='w-[210px] h-[2px] bg-[#FFF] ml-[1210px] mt-[90px] absolute max-md:hidden'  />
      <h1 className='ml-[1210px] absolute mt-[115px] text-lg max-md:hidden'>Адрес:</h1>
      <h1 className='ml-[1210px] absolute mt-[140px] max-md:hidden'>г. Москва, ул. Московская, д. 35 </h1>
      <h1 className='ml-[1210px] absolute mt-[190px] max-md:hidden text-lg'>Карта проезда </h1>
      <h1 className='ml-[1210px] absolute mt-[240px] max-md:hidden'>График работы: <br />  Пн-Пт с 09:00-19:00, <br /> Сб-Вс - выходной</h1>
      <h1 className='ml-[1210px] absolute mt-[330px] max-md:hidden'>+7 000-000-00-00</h1>
      <h1 className='ml-[1210px] absolute mt-[355px] max-md:hidden'>+7 495-000-00-00</h1>
      <h1 className='ml-[1210px] absolute mt-[380px] max-md:hidden'>8 800-000-00-00</h1>
      <h1 className='ml-[1210px] absolute mt-[405px] max-md:hidden'>info@mail.ru</h1>

      <hr className='w-[1350px] h-[2px] absolute ml-[77px] mt-[450px] bg-[#FFF] max-md:w-[600px]' />
      <img className='ml-[77px] absolute mt-[475px]' src={Logo2} alt="" />
      <h1 className='ml-[77px] mt-[530px] absolute'>ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</h1>
      <h1 className='mt-[475px] absolute ml-[410px] text-lg'>Мы в соцсетях</h1>
      <img className='mt-[510px] ml-[420px] absolute' src={Vk} alt="" />
      <img className='mt-[510px] ml-[457px] absolute' src={Telegram} alt="" />
      <img className='mt-[510px] ml-[495px] absolute' src={Telefon} alt="" />
      <h1 className='mt-[475px] absolute ml-[670px] max-md:hidden'>Партнерская программа</h1>
      <h1 className='mt-[505px] absolute ml-[670px] max-md:hidden'>Оптовые продажи</h1>
      <h1 className='mt-[535px] absolute ml-[670px] max-md:hidden'>Реквизиты</h1>
      <h1 className='mt-[475px] absolute ml-[940px] max-md:hidden'>Политика конфиденальности</h1>
      <h1 className='mt-[505px] absolute ml-[940px] max-md:hidden'>Условия соглашения</h1>
      <h1 className='mt-[535px] absolute ml-[940px] max-md:hidden'>Карта сайта</h1>
      <h1 className='mt-[475px] absolute ml-[1200px] max-md:hidden text-lg'>Политика </h1>
      <img className='mt-[515px] ml-[1200px] absolute max-md:hidden' src={Frame} alt="" />
      <h1 className='ml-[77px] mt-[596px] absolute max-md:hidden'>© 2022 <br /> Медоборудование Все <br /> права защищены </h1>
      <h1 className='ml-[377px] mt-[626px] absolute text-[#cbd5e1] max-md:hidden'>Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского </h1>
    </div>
  )
}
