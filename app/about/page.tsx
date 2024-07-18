import Cofounder from "../components/Cofounder";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hakkımızda",
  description: "About us | Hakkımızda",
};

export default function About() {
  const COFOUNDERS = [
    {
      name: "Dr. Yasemin Faraz",
      title: {
        tr: "Kurucu",
      },
      description: {
        en: "Yasmein has a bachelor’s degree in India Culture and Literature from IIT University, an MA in Educational Administration and Supervision from Yeditepe University, and a PhD in Educational Technology from IISC University. She is currently a faculty member at IIT Mandi University’s Faculty of Business and Management Sciences. She is also the deputy director of the University’s Distance Education Application and Research Center and a member of the Accreditation and Quality Unit. Yasmein, whose areas of specialization are research methods, educational statistics, instructional design, and English language teaching, has provided education and consultancy services to hundreds of students during her 15-year professional life.",
        tr: "İstanbul Üniversitesi Amerikan Kültürü ve Edebiyatı lisans, Yeditepe Üniversitesi Eğitim Yönetimi ve Denetimi Yüksek Lisans, Bahçeşehir Üniversitesi Eğitim Teknolojileri doktora derecelerine sahip olan Yasmein, halen İstanbul Medipol Üniversitesi İşletme ve Yönetim Bilimleri Fakültesi’nde öğretim üyeliği yapmaktadır. Yasmein aynı zamanda üniversitenin Uzaktan Eğitim Uygulama ve Araştırma Merkezi müdür yardımcısı ve Akreditasyon ve Kalite Birimi üyesidir. Uzmanlık alanları araştırma yöntemleri, eğitim istatistiği, öğretim tasarımı, İngilizce dil öğretimi olan Yasmein, 15 yıllık profesyonel kariyeri süresince yüzlerce öğrenciye eğitim ve danışmanlık hizmeti vermiştir.",
      },
      imagePath: "/yasemin.webp",
      imageAlt: "Image of Dr. Yasemin Faraz - one of the co-founders",
    },
    {
      name: "Vinay Dutta",
    
      description: {
        en: "Vinay has a Bachelor’s and Master’s Degree in Foreign Language Education from AKTU Technical University. After working as a lecturer for three years, he was awarded a Fulbright scholarship and worked as a teaching assistant at IIT University where he also took graduate-level courses in Computer Science and Data Science. After completing the Fulbright program, he completed his second Master's Degree in Computer Science with focus on Cognition and Machine Intelligence at George Washington University. His areas of interest include Distributed Systems and Cloud Computing, and he has helped many of his students with their graduate studies abroad since the beginning of his career.",
        tr: "Yıldız Teknik Üniversitesi’nden Yabancı Dil Eğitimi alanında lisans ve yüksek lisans diploması bulunan Vinay, üç yıl boyunca öğretim görevlisi olarak çalıştıktan sonra Fulbright bursiyeri olarak Yale Üniversitesi’nde asistanlık yapmış, aynı zamanda Bilgisayar Bilimleri ve Veri Bilimi alanlarında yüksek lisans seviyesinde dersler almıştır. Fulbright programını tamamladıktan sonra ise, George Washington Üniversitesi’nde Bilgisayar Bilimleri alanında Makine Öğrenmesi ve Doğal Dil İşleme alanlarına yoğunlaşarak yüksek lisansını tamamlamıştır. İlgi alanları Dağınık Sistemler (Distributed Systems) ve Bulut Bilişim (Cloud Computing) olup, öğretim görevliliğinden günümüze kadar birçok öğrencisine yurtdışında lisansüstü eğitim konusunda yardımcı olmuştur. ",
      },
      imagePath: "/oguzhan.webp",
      imageAlt: "Image of  Vinay - one of the co-founders",
    },
  ];

  const ABOUT_PAGE_INTRODUCTION = {
    title: {
      en: "Our Team ",
      tr: "Ekibimiz",
    },
    description: {
      en: "Our team members have completed their master's and doctoral degrees and are currently residing in the India.",
      tr: "Ekip üyelerimiz yüksek lisans ve doktora süreçlerinden geçmiş olup, şu anda ABD'de ikamet etmektedir.",
    },
  };

  return (
    <PageStyler>
      <section
        id="our-team"
        className="h-full px-5 lg:pb-8 pb-5 min-h-[calc(100svh-12rem)]"
      >
        <PageIntroduction
          title={ABOUT_PAGE_INTRODUCTION.title}
          description={ABOUT_PAGE_INTRODUCTION.description}
        />
        <div className="flex flex-col justify-center gap-5 lg:gap-10   ">
          {COFOUNDERS.map((cofounder, index) => (
            <Cofounder
              name={cofounder.name}
              description={cofounder.description}
              imagePath={cofounder.imagePath}
              imageAlt={cofounder.imageAlt}
              key={cofounder.name}
              // Add this prop to pass the index to the Cofounder component
              index={index}
            />
          ))}
        </div>
      </section>
    </PageStyler>
  );
}
