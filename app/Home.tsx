import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-mrp.png"
              alt="Masjid Raden Patah Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-cyan-500"
            >
              Profil
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-cyan-500"
            >
              Unit Mahasiswa
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-cyan-500"
            >
              Artikel
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-cyan-500"
            >
              Pengumuman
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-cyan-500"
            >
              Kontak Kami
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-cyan-400">
          <div className="absolute inset-0 z-0 w-full bg-[url('/pattern.png')] bg-repeat-x"></div>
          <div className="container mx-auto flex flex-col items-center px-4 py-4 md:flex-row md:py-24">
            <div className="z-10 md:w-1/2">
              <p className="mb-4 flex items-center gap-2 text-8xl font-bold text-cyan-950 md:text-4xl lg:text-5xl">
                Masjid Raden Patah
              </p>
              <p className="mb-8 max-w-lg text-base font-medium text-gray-950">
                Kami hadir berkomitmen untuk memperkukuh keagamaan bangsa dan
                memfasilitasi kegiatan religius berbasis ilmu pengetahuan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full bg-white px-8 py-8 text-base font-semibold text-cyan-600 hover:bg-gray-100">
                  Profil
                </Button>
                <Button className="flex items-center gap-2 rounded-full bg-[#005C6F] px-8 py-8 text-base font-semibold text-white hover:bg-[#004C5F]">
                  Support Kami <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative flex h-full items-center justify-center md:w-1/2">
              <Image
                src="/menara-mrp.png"
                alt="Masjid Raden Patah Tower"
                width={500}
                height={500}
                className="relative z-10 h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0 h-20 w-full bg-[url('/pattern.png')] bg-repeat-x opacity-20"></div>
        </section>

        {/* Icons Section */}
        <section className="pt-20">
          <div className="mx-auto w-full px-4">
            <div className="grid grid-cols-1 gap-16 md:flex md:items-center md:justify-center md:gap-32">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-umar.png"
                  alt="Logo Umar"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-ptq.png"
                  alt="Logo PTQ"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-dc.png"
                  alt="Logo DC"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-imc.png"
                  alt="Logo IMC"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-lunch-space.png"
                  alt="Logo Lunch Space"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-cyan-500">
              Program Unggulan
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🕌",
                  title: "KISMALA",
                  description:
                    "Kajian Setiap Hari Senin dan Kamis terdapat, dilanjutkan dengan buka puasa bersama.",
                },
                {
                  icon: "📚",
                  title: "Mualaf Center",
                  description:
                    "Kajian Setiap Hari Senin dan Kamis terdapat, dilanjutkan dengan buka puasa bersama.",
                },
                {
                  icon: "🎓",
                  title: "Kelas Seni Baca Al-Quran",
                  description:
                    "Kajian Setiap Hari Senin dan Kamis terdapat, dilanjutkan dengan buka puasa bersama.",
                },
                {
                  icon: "🤲",
                  title: "KISMALA",
                  description:
                    "Kajian Setiap Hari Senin dan Kamis terdapat, dilanjutkan dengan buka puasa bersama.",
                },
              ].map((program, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-xl">
                      {program.icon}
                    </div>
                    <h3 className="mb-2 font-semibold">{program.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {program.description}
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-sm font-medium text-cyan-500"
                    >
                      Detail Program <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === 1 ? "bg-cyan-500" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fasilitas Masjid */}
        <section className="bg-cyan-400 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Fasilitas Masjid
            </h2>

            <div className="flex flex-wrap justify-between gap-4 pb-6">
              {[
                { name: "Al-Qur'an", image: "/fasilitas-alquran.png" },
                { name: "CCTV", image: "/fasilitas-alquran.png" },
                { name: "Tempat Wudhu", image: "/fasilitas-alquran.png" },
                { name: "Mukena", image: "/fasilitas-alquran.png" },
                { name: "Pengeras Suara", image: "/fasilitas-alquran.png" },
                { name: "AC Ruang", image: "/fasilitas-alquran.png" },
                { name: "Lift", image: "/fasilitas-alquran.png" },
              ].map((facility, i) => (
                <div
                  key={i}
                  className="max-w-[180px] flex-shrink-0 flex-grow basis-[140px]"
                  style={{ minWidth: 140 }}
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      width={160}
                      height={120}
                      className="h-full w-full rounded-lg object-cover p-3"
                    />
                    <div className="p-3 text-center">
                      <p className="text-sm font-medium">{facility.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artikel Event */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-cyan-500">
                Artikel Event
              </h2>
              <div className="flex space-x-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Image
                      src="/gambar-artikel.png"
                      alt="Event"
                      width={400}
                      height={240}
                      className="h-48 w-full object-cover"
                    />
                    <div className="relative z-20 p-6">
                      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-cyan-700">
                        <span className="text-green-600">📖</span>
                        Kajian Islami #{i + 1}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600">
                        Visi Masjid Raden Patah Universitas Brawijaya adalah
                      </p>
                      <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                        <span>🕋 12 Juni 2024</span>
                        <span>•</span>
                        <span>Ustadz Ahmad</span>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                      >
                        Baca Selengkapnya
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="rounded-full bg-cyan-500 px-6 py-8 font-medium text-white hover:bg-cyan-600">
                Artikel Lainnya <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Live Kajian Event */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-cyan-500">
                Live Kajian Event
              </h2>
              <div className="flex space-x-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Image
                      src="/gambar-artikel.png"
                      alt="Event"
                      width={400}
                      height={240}
                      className="h-48 w-full object-cover"
                    />
                    <div className="relative z-20 p-6">
                      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-cyan-700">
                        <span className="text-green-600">📖</span>
                        Kajian Islami #{i + 1}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600">
                        Visi Masjid Raden Patah Universitas Brawijaya adalah
                      </p>
                      <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                        <span>🕋 12 Juni 2024</span>
                        <span>•</span>
                        <span>Ustadz Ahmad</span>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                      >
                        Baca Selengkapnya
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="rounded-full bg-cyan-500 px-6 py-8 font-medium text-white hover:bg-cyan-600">
                Video Lainnya <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Galeri */}
        <section className="bg-gradient-to-b from-cyan-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Galeri Masjid Raden Patah
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <Image
                      src={"/gambar-artikel.png"}
                      alt={"Gambar Galeri"}
                      width={400}
                      height={300}
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button className="rounded-full bg-cyan-500 px-6 py-8 font-medium text-white hover:bg-cyan-600">
                Lihat Semua Foto
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cyan-400 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Berikut Pertanyaan Umum Seputar Masjid Raden Patah
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="overflow-hidden rounded-lg bg-white"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  Kapan Masjid Raden Patah pertama kali didirikan?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  Masjid Raden Patah didirikan pada tahun 1985 sebagai pusat
                  kegiatan keagamaan kampus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="overflow-hidden rounded-lg bg-white"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  Bisakah menyelenggarakan akad nikah di masjid ini?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  Ya, Masjid Raden Patah menyediakan fasilitas untuk akad nikah
                  dengan reservasi terlebih dahulu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="overflow-hidden rounded-lg bg-white"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  Bagaimana cara mendaftarkan kajian atau donasi ke masjid?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  Anda dapat menghubungi pengurus masjid melalui kontak yang
                  tersedia di website ini.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="overflow-hidden rounded-lg bg-white"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  Siapa yang bisa saya hubungi untuk informasi lebih lanjut?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  Silakan menghubungi sekretariat masjid di nomor yang tertera
                  pada bagian kontak.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pb-6 pt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Address/Logo Section */}
            <div className="md:w-1/3">
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/logo-mrp.png"
                  alt="Masjid Raden Patah Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-gray-600">
                  Jl. Kampus Universitas Brawijaya
                </p>
                <p className="text-sm text-gray-600">Ketawanggede, Lowokwaru</p>
                <p className="text-sm text-gray-600">
                  Kota Malang, Jawa Timur, 65145
                </p>
              </div>
            </div>
            {/* Links Section */}
            <div className="flex flex-col gap-16 md:w-1/2 md:flex-row md:justify-end md:text-left">
              <div className="flex flex-col items-start">
                <h3 className="mb-4 font-semibold">Program</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Program Kajian Rutin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Program Bulan Ramadhan
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="mb-4 font-semibold">Layanan</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Pendaftaran Kajian
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Konsultasi Agama
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="mb-4 font-semibold">Artikel</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Berita
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-cyan-500"
                    >
                      Kajian
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="flex justify-start">
            <div className="mb-4 mt-8 flex items-center gap-4">
              <span
                aria-label="Whatsapp"
                className="flex items-center gap-2 text-gray-700"
              >
                <Phone className="h-4 w-4" />
                <span className="text-xs font-medium">0899 311 7777</span>
              </span>
              <span
                aria-label="Youtube"
                className="flex items-center gap-2 text-gray-700"
              >
                <Youtube className="h-4 w-4" />
                <span className="text-xs font-medium">mrpmedia</span>
              </span>
              <span
                aria-label="Instagram"
                className="flex items-center gap-2 text-gray-700"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-xs font-medium">masjidradenpatah.ub</span>
              </span>
              <span
                aria-label="website"
                className="flex items-center gap-2 text-gray-700"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">radenpatah.ub.ac.id</span>
              </span>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-600 md:mb-0">
                © 2025 Masjid Raden Patah. All rights reserved.
              </p>
              <div className="flex items-center space-x-8">
                {[
                  { src: "/logo-umar.png", alt: "Logo Umar" },
                  { src: "/logo-ptq.png", alt: "Logo PTQ" },
                  { src: "/logo-dc.png", alt: "Logo DC" },
                  { src: "/logo-imc.png", alt: "Logo IMC" },
                  { src: "/logo-lunch-space.png", alt: "Logo Lunch Space" },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center transition-transform hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
