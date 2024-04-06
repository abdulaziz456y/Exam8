const atim = [
  {
    giuh: "https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg",
    textvok: "Дерматологическое оборудование",
    key: 1,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg",
    textvok: "Ветеринарное оборудование",
    key: 2,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png",
    textvok: "Оборудование  анастезиологии",
    key: 4,
    buk: "hero",
  },

  {
    giuh: "https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg",
    textvok: "Оборудование  целей",
    key: 5,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg",
    textvok: "Мебель  медецинских целей",
    key: 6,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/8a0/7xi0t1s68lzie3zhvjh21zpe1d5f2yrs.jpg",
    textvok: "Дерматологическое оборудование",
    key: 3,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/a5a/y4a7xoykn1nr0619l5vyw91gdd7t8rcm.jpg",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
  {
    giuh: "https://global-mt.ru/upload/iblock/332/18jq7tbaxlcnn6tap3t79u7qnw4zmh71/6f21d7f2596e83f1f97c367f6266c48d.webp",
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk: "hero",
  },
];

const slides = atim.map((item) => {
  return (
      <div className="bg-[#F8F7F3] mt-[20px] max-md:mt-[0px]">
      <div className="  border p-4 rounded-xl" key={item.giuh}>
        <div>
          <img
            className="w-[300px] h-[300px] max-md:h-[100px]"
            src={item.giuh}
            alt="Hello Tashkent"
          />
          <a href="/product"><h1 className="p-3 font-medium max-md:text-[12px]">{item.textvok}</h1></a>
        </div>
      </div>
    </div>
  );
});

const Appe = () => {
  return <div className="grid grid-cols-4 gap-12">{slides}</div>;
};

export default Appe;