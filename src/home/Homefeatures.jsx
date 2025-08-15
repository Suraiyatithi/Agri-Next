
import { Leaf, CloudSun, Sprout, BookOpen } from "lucide-react";
import img1 from '../assets/main-icon-leaf.png';
import { useTranslation } from 'react-i18next';

const HomeFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Leaf size={32} className="text-green-700" />,
      title: t('home_features.smart_farming_title'),
      desc: t('home_features.smart_farming_desc')
    },
    {
      icon: <CloudSun size={32} className="text-yellow-600" />,
      title: t('home_features.weather_title'),
      desc: t('home_features.weather_desc')
    },
    {
      icon: <Sprout size={32} className="text-green-500" />,
      title: t('home_features.eco_tools_title'),
      desc: t('home_features.eco_tools_desc')
    },
    {
      icon: <BookOpen size={32} className="text-blue-600" />,
      title: t('home_features.library_title'),
      desc: t('home_features.library_desc')
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-20">
      <div className="flex lg:ml-40 lg:pl-40">
        <h2 className=" text-lime-800 lg:text-4xl sm:text-xl text-right font-semibold mb-12 lg:ml-20">
          {t('home_features.heading')}
        </h2>
        <img className="w-26 h-10" src={img1} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-green-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
