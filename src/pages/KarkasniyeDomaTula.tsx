import { Helmet } from "react-helmet-async"
import KarkasniyeDomaHero from "@/pages/karkasniye-doma-tula/KarkasniyeDomaHero"
import KarkasniyeDomaContent from "@/pages/karkasniye-doma-tula/KarkasniyeDomaContent"
import KarkasniyeDomaFaq, { faqs } from "@/pages/karkasniye-doma-tula/KarkasniyeDomaFaq"
import KarkasniyeDomaOrderForm from "@/pages/karkasniye-doma-tula/KarkasniyeDomaOrderForm"

export default function KarkasniyeDomaTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Каркасные дома под ключ в Туле — от 2 800 000 ₽ | Тойстрой71</title>
        <meta name="description" content="Строим каркасные дома под ключ в Туле и Тульской области. От 2 800 000 ₽. Гарантия 5 лет, готовность 90–120 дней, более 200 объектов с 2015 года. Бесплатный выезд специалиста. Звоните!" />
        <meta name="keywords" content="каркасные дома Тула, каркасный дом под ключ Тула, строительство каркасного дома Тульская область, каркасные дома цены Тула, каркасный дом купить Тула, дом под ключ Тула, строительство дома Тула, каркасный дом Алексин, каркасный дом Новомосковск, каркасный дом Щёкино" />
        <link rel="canonical" href="https://toystroy71.ru/karkasnye-doma-tula" />
        <meta property="og:title" content="Каркасные дома под ключ в Туле — от 2 800 000 ₽ | Тойстрой71" />
        <meta property="og:description" content="Строим каркасные дома под ключ в Туле и области. От 2 800 000 ₽, гарантия 5 лет, готовность 90–120 дней. Более 200 объектов с 2015 года." />
        <meta property="og:url" content="https://toystroy71.ru/karkasnye-doma-tula" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
          }))
        })}</script>
      </Helmet>
      <KarkasniyeDomaHero />
      <KarkasniyeDomaContent />
      <KarkasniyeDomaFaq />
      <KarkasniyeDomaOrderForm />
    </div>
  )
}
