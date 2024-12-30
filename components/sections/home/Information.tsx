import InformationCard from "@/components/InformationCard";
import InformationImage1 from "@/public/informations/friends.jpg";
import InformationImage2 from "@/public/informations/alquran.jpg";
import InformationImage3 from "@/public/informations/sunnah.jpg";

const informationData = [
  {
    title: "Fiqih: Fiqih Pergaulan Gen Z",
    location: "Masjid Raden Patah",
    speaker: "Ust. Jamalul Akbar, Lc., M.A.",
    date: new Date("2024-06-12"),
    subtitle: "Kajian Islam Ba'da Zuhur",
  },
  {
    title: "Tafsir: Menyikapi Zaman dengan Al-Qur'an",
    location: "Masjid Raden Patah",
    speaker: "Ust. Hadi Al-Faqih, M.A.",
    date: new Date("2024-06-19"),
    subtitle: "Kajian Islam Ba'da Zuhur",
  },
  {
    title: "Sunnah: Keutamaan Shalat Dhuha",
    location: "Masjid Raden Patah",
    speaker: "Ust. Muhammad Sufyan, Lc.",
    date: new Date("2024-06-26"),
    subtitle: "Kajian Islam Ba'da Zuhur",
  }
];

const Information = () => {
  return (
    <div className={"container py-24"}>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex flex-col"}>
          <h2 className={"text-3xl font-bold"}>Informasi Terbaru</h2>
          <p>Ikut program kajian favorit kalian</p>
        </div>
        <div className={"flex gap-4 w-full"}>

          {informationData.map((item, index) => (
            <InformationCard
              key={index}
              title={item.title}
              location={item.location}
              speaker={item.speaker}
              date={item.date}
              subtitle={item.subtitle}
              image={item.image}
              altText={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Information;