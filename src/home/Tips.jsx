



import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TipsCarousel = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);

  const tips = [
    t("tips.tip1"),
    t("tips.tip2"),
    t("tips.tip3"),
    t("tips.tip4"),
    t("tips.tip5")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <div className="bg-white border rounded-xl shadow-md p-5 w-full max-w-md text-center">
      <h2 className="text-xl font-bold text-green-700 mb-3">{t("tips.title")}</h2>
      <p className="text-gray-700 italic transition duration-500 ease-in-out">
        “{tips[index]}”
      </p>
    </div>
  );
};

export default TipsCarousel;
