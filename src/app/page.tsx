
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Package, Heart, Award, ArrowRight, Leaf, Trash2, Globe, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { leaderboardUsers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';


const content = {
  en: {
    appName: "Too Good To Waste",
    tagline: "Jakarta",
    features: "Features",
    about: "About",
    getStarted: "Get Started",
    language: "ID",
    heroTitle: "Taste the Good, Waste No More",
    heroSubtitle: "Rescue delicious surplus food from your favorite Jakarta cafes, bakeries, and restaurants at a fraction of the price. Every meal is a surprise and a step towards a greener planet.",
    findSurpriseBag: "Find a Surprise Bag",
    howItWorks: "How It Works",
    howItWorksTitle: "A Simple Way to Save",
    howItWorksSubtitle: "Getting your hands on a delicious Surprise Bag is as easy as 1-2-3.",
    step1Title: "1. Choose a Store",
    step1Subtitle: "Browse stores in your area and reserve a Surprise Bag from your favorite spot.",
    step2Title: "2. Rescue Your Food",
    step2Subtitle: "Head to the store during the pickup window, show your digital receipt, and grab your bag.",
    step3Title: "3. Enjoy & Feel Good",
    step3Subtitle: "Enjoy your delicious food knowing you've saved money and helped the environment.",
    impact: "Our Impact",
    impactTitle: "Together We Can Save The World",
    impactSubtitle: "Every Surprise Bag you rescue is a small step with a big impact on our planet.",
    impact1Title: "Reduce Food Waste",
    impact1Subtitle: "Prevent perfectly good food from ending up in landfills, tackling one of the biggest environmental challenges.",
    impact2Title: "Lower CO2 Emissions",
    impact2Subtitle: "By reducing food waste, we also cut down on the harmful greenhouse gases produced during its decomposition.",
    impact3Title: "Conserve Resources",
    impact3Subtitle: "Saving food means saving the water, land, and energy that went into producing it. It's a win for your wallet and the world.",
    leaderboard: "Leaderboard",
    leaderboardTitle: "Top Heroes of the Month",
    leaderboardSubtitle: "See who's leading the charge in our food rescue mission. Earn points with every purchase!",
    footerRights: "Too Good To Waste. All rights reserved.",
    terms: "Terms of Service",
    privacy: "Privacy",
  },
  id: {
    appName: "Too Good To Waste",
    tagline: "Jakarta",
    features: "Fitur",
    about: "Tentang",
    getStarted: "Mulai",
    language: "EN",
    heroTitle: "Rasa Enak, Tanpa Sisa",
    heroSubtitle: "Selamatkan makanan surplus lezat dari kafe, toko roti, dan restoran favorit Anda di Jakarta dengan harga miring. Setiap hidangan adalah kejutan dan langkah menuju planet yang lebih hijau.",
    findSurpriseBag: "Cari Tas Kejutan",
    howItWorks: "Cara Kerjanya",
    howItWorksTitle: "Cara Mudah untuk Berhemat",
    howItWorksSubtitle: "Mendapatkan Tas Kejutan yang lezat semudah 1-2-3.",
    step1Title: "1. Pilih Toko",
    step1Subtitle: "Jelajahi toko di area Anda dan pesan Tas Kejutan dari tempat favorit Anda.",
    step2Title: "2. Selamatkan Makanan Anda",
    step2Subtitle: "Pergi ke toko selama jendela penjemputan, tunjukkan tanda terima digital Anda, dan ambil tas Anda.",
    step3Title: "3. Nikmati & Rasakan Manfaatnya",
    step3Subtitle: "Nikmati makanan lezat Anda dengan mengetahui bahwa Anda telah menghemat uang dan membantu lingkungan.",
    impact: "Dampak Kami",
    impactTitle: "Bersama Kita Bisa Selamatkan Dunia",
    impactSubtitle: "Setiap Tas Kejutan yang Anda selamatkan adalah langkah kecil dengan dampak besar bagi planet kita.",
    impact1Title: "Kurangi Limbah Makanan",
    impact1Subtitle: "Cegah makanan yang masih layak berakhir di tempat sampah, mengatasi salah satu tantangan lingkungan terbesar.",
    impact2Title: "Turunkan Emisi CO2",
    impact2Subtitle: "Dengan mengurangi limbah makanan, kita juga mengurangi gas rumah kaca berbahaya yang dihasilkan selama dekomposisinya.",
    impact3Title: "Hemat Sumber Daya",
    impact3Subtitle: "Menyimpan makanan berarti menghemat air, tanah, dan energi yang digunakan untuk memproduksinya. Ini adalah kemenangan untuk dompet dan dunia Anda.",
    leaderboard: "Papan Peringkat",
    leaderboardTitle: "Pahlawan Teratas Bulan Ini",
    leaderboardSubtitle: "Lihat siapa yang memimpin misi penyelamatan makanan kami. Dapatkan poin dengan setiap pembelian!",
    footerRights: "Too Good To Waste. Hak cipta dilindungi undang-undang.",
    terms: "Ketentuan Layanan",
    privacy: "Privasi",
  },
};

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'id'>('en');

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const t = content[lang];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center gap-3">
          <UtensilsCrossed className="size-8 text-primary" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold font-headline tracking-tight">
              {t.appName}
            </h1>
            <p className="text-sm text-muted-foreground -mt-1">{t.tagline}</p>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t.features}
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {t.about}
          </Link>
          <Button variant="ghost" size="sm" onClick={toggleLang}>{t.language}</Button>
          <Button asChild>
            <Link href="#">{t.getStarted}</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
               <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="400"
                src="https://picsum.photos/seed/1/600/400"
                data-ai-hint="food rescue"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    {t.heroTitle}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t.heroSubtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">
                      {t.findSurpriseBag}
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  {t.howItWorks}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  {t.howItWorksTitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.howItWorksSubtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.step1Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.step1Subtitle}
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.step2Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.step2Subtitle}
                </p>
              </div>
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.step3Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.step3Subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* "Together We Can Save The World" Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  {t.impact}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  {t.impactTitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.impactSubtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Trash2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.impact1Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.impact1Subtitle}
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.impact2Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.impact2Subtitle}
                </p>
              </div>
              <div className="grid gap-1 text-center">
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t.impact3Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.impact3Subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  {t.leaderboard}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  {t.leaderboardTitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.leaderboardSubtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-12">
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {leaderboardUsers.map((user, index) => (
                      <li key={user.id} className="flex items-center gap-4 p-4">
                        <div className="flex items-center gap-4">
                          <span className={cn(
                            "font-bold text-lg w-6 text-center",
                            index < 3 ? "text-primary" : "text-muted-foreground"
                          )}>
                            {index + 1}
                          </span>
                          <Avatar>
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <p className="font-medium flex-1">{user.name}</p>
                        <div className="flex items-center gap-2 font-semibold text-primary">
                          <Award className="size-5" />
                          <span>{user.points.toLocaleString()}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {t.footerRights}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            {t.terms}
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            {t.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
