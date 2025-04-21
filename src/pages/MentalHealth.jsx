import SectionHeading from "@/components/common/SectionHeading";
import mentalBaneer from "../assets/mental.png";
import SectionAccordion from "@/components/layout/SectionAccordion";

const MentalHealth = () => {
  const accordionItems = [
    {
      question:
        "Understanding the impact of psychological stress on the pregnant woman",
      answer: "Details about impact...",
    },
    {
      question: "Reducing Psychological Stress During Pregnancy",
      answer: "Tips and methods to reduce stress...",
    },
    {
      question:
        "Changes in the psychology of the pregnant woman during the first trimester",
      answer: "Emotional changes in early pregnancy...",
    },
    {
      question:
        "Changes in the psychology of the pregnant woman during the second trimester",
      answer: "Mood stabilization, etc.",
    },
    {
      question:
        "Changes in the psychology of the pregnant woman during the third trimester",
      answer: "Preparation for childbirth...",
    },
    {
      question: "What causes mood swings during pregnancy?",
      answer: "Hormonal fluctuations, physical changes...",
    },
    {
      question: "Ways to improve your mood during pregnancy",
      answer: "Exercise, support, nutrition...",
    },
    {
      question:
        "Tips to help maintain the psychological health of the pregnant woman",
      answer: "Self-care, rest, professional help...",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={mentalBaneer}
        alt="sleeping"
        className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
      />

      <SectionHeading
        title="The psychological health of the mother affects the future of the child"
        description="growth and development The experience of pregnancy is a beautiful journey, and its impact can completely change your life. It can also lead to many changes and challenges in a woman’s life. Whether you are pregnant for the first time or have previous experiences, it is important to obtain the necessary support and information to have a healthy and happy pregnancy experience. sleep aids in the secretion of growth hormones. mood regulation quality sleep contributes to mood stability.  immune support good sleep strengthens the immune system, helping protect the baby from illnesses. infants typically sleep between 14 to 17 hours a day, but this can vary with age."
      />

      <SectionAccordion
        title="The psychological health of the mother affects the future of the child"
        description="The experience of pregnancy is a beautiful journey, and its impact can completely change your life. It can also lead to many changes and challenges in a woman’s life. Whether you are pregnant for the first time or have previous experiences, it is important to obtain the necessary support and information to have a healthy and happy pregnancy experience."
        items={accordionItems}
      />
    </div>
  );
};

export default MentalHealth;
