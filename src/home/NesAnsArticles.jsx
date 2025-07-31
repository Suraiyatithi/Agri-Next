// import React from 'react';
// import img1 from '../assets/main-icon-leaf.png';

// const articles = [
//     {
//         id: 1,
//         image: 'https://i.ibb.co.com/Ngv6D9J6/pexels-photo-1112080.jpg',
//         author: 'Jane Doe',
//         topic: 'AgriTech',
//         date: 'May 01',
//         title: 'Smart Farming: The Future of Agriculture',
//         description: 'Smart farming integrates advanced technology into traditional agriculture, optimizing productivity and sustainability...',
//         link: '#'
//     },
//     {
//         id: 2,
//         image: 'https://i.ibb.co.com/wZmYy1sx/pexels-photo-2131784.jpg',
//         author: 'John Smith',
//         topic: 'Sustainability',
//         date: 'May 03',
//         title: 'Sustainable Farming Practices in 2025',
//         description: 'Discover how farmers are adopting sustainable methods to protect the environment while increasing yield...',
//         link: '#'
//     },
//     {
//         id: 3,
//         image: 'https://i.ibb.co.com/9kjdsN7G/sunflower-sun-summer-yellow.jpg',
//         author: 'Alice Johnson',
//         topic: 'Climate Impact',
//         date: 'May 04',
//         title: 'Climate Change and Its Effect on Crops',
//         description: 'Rising temperatures and unpredictable weather patterns are forcing a change in how we grow our food...',
//         link: '#'
//     }
// ];

// const NesAnsArticles = () => {
//     return (
//          <div className='p-12 mt-12'>
//                     <p className='text-gray-600 text-sm mb-2 text-center'>WELCOME TO AGRINEXT</p>
//                     <h1 className='text-lime-800 text-5xl sm:text-6xl text-center font-semibold mb-4'>Latest News and Articles</h1>
//                     <div className="flex items-center justify-center mt-2 mb-12">
//           <img className="w-26 h-10" src={img1} alt="" />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
//             {articles.map(article => (
//                 <div key={article.id} className="bg-white shadow-none relative">
//                     <div className="relative">
//                         <img
//                             src={article.image}
//                             alt={article.title}
//                             className="w-full h-80 object-cover rounded-t-lg"
//                         />
//                         <div className="absolute top-2 left-2 bg-yellow-700 text-white text-2xl font-serif px-5 py-10 rounded-full shadow-lg">
//                             {article.date}
//                         </div>
//                     </div>
//                     <div className="flex justify-between text-sm text-gray-500 mt-2 px-1">
//                         <span>{article.author}</span>
//                         <span>{article.topic}</span>
//                     </div>
//                     <h2 className="text-xl font-semibold mt-2 px-1">{article.title}</h2>
//                     <p className="text-gray-700 mt-2 px-1">{article.description}</p>
//                     <a
//                         href={article.link}
//                         className="text-yellow-700 underline mt-3 inline-block px-1"
//                     >
//                         Continue Reading
//                     </a>
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// };

// export default NesAnsArticles;



import React from 'react';
import img1 from '../assets/main-icon-leaf.png';
import { useTranslation } from 'react-i18next';

const articles = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/Ngv6D9J6/pexels-photo-1112080.jpg',
    author: 'Jane Doe',
    topic: 'AgriTech',
    date: 'May 01',
    title: 'news.title1',
    description: 'news.desc1',
    link: '#'
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/wZmYy1sx/pexels-photo-2131784.jpg',
    author: 'John Smith',
    topic: 'Sustainability',
    date: 'May 03',
    title: 'news.title2',
    description: 'news.desc2',
    link: '#'
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/9kjdsN7G/sunflower-sun-summer-yellow.jpg',
    author: 'Alice Johnson',
    topic: 'Climate Impact',
    date: 'May 04',
    title: 'news.title3',
    description: 'news.desc3',
    link: '#'
  }
];

const NesAnsArticles = () => {
  const { t } = useTranslation();

  return (
    <div className='p-12 mt-12'>
      <p className='text-gray-600 text-sm mb-2 text-center'>{t('news.welcome')}</p>
      <h1 className='text-lime-800 text-5xl sm:text-6xl text-center font-semibold mb-4'>
        {t('news.heading')}
      </h1>
      <div className="flex items-center justify-center mt-2 mb-12">
        <img className="w-26 h-10" src={img1} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {articles.map(article => (
          <div key={article.id} className="bg-white shadow-none relative">
            <div className="relative">
              <img
                src={article.image}
                alt={t(article.title)}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2 bg-yellow-700 text-white text-2xl font-serif px-5 py-10 rounded-full shadow-lg">
                {article.date}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2 px-1">
              <span>{article.author}</span>
              <span>{article.topic}</span>
            </div>
            <h2 className="text-xl font-semibold mt-2 px-1">{t(article.title)}</h2>
            <p className="text-gray-700 mt-2 px-1">{t(article.description)}</p>
            <a
              href={article.link}
              className="text-yellow-700 underline mt-3 inline-block px-1"
            >
              {t('news.read_more')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NesAnsArticles;
