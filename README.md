# GFS GROUP LLC — sayt redizayni

[gfs-groupllc.com](https://gfs-groupllc.com) uchun yangi versiya. Asos: ClickUp'dagi "gfs-groupllc.com — sayt va dizayn ko'rigi" xulosasi va "gfs-groupllc.com — redesign" taski.
Bu alohida repo; asosiy saytga ko'chirish dasturchi bilan kelishiladi (hozirgi kod: ItSoft-dev/gfs-group-front, Next.js + o'z API'si).

- Ko'rish havolasi: https://azizbektursunovme.github.io/gfs-group-redesign/
- Repo: https://github.com/azizbektursunovme/gfs-group-redesign

## Dizayn yo'nalishi: "Lanes" (yo'laklar)

Oldingi sister sayt redizaynlaridan (to'liq ekranli truck surati + qora overlay, yo'l belgilari, qorong'i "cinematic") farqli, g'oya **GFS logotipining o'zidan** olingan.
Logotip parallel chiziqlardan iborat: navy chiziqlar orasida bitta qizil chiziq bor va ular yo'llar kabi shoxlanadi. Sayt shu chiziqlar to'plamini yagona grafik g'oya qilib ishlatadi:
- **Hero:** sarlavha oq fonda, navy rangda va aniq o'qiladi. Yonida tiniq surat turadi, surat sarlavha orqasiga qo'yilmagan, shuning uchun xira bo'lmaydi.
- **"Find your lane":** bosh sahifada chiziqlar uch yo'lga shoxlanadi:
  - qizil chiziq o'rtada, **Company drivers**ga boradi;
  - navy chiziqlar chapga, **Owner-operators**ga boradi;
  - navy chiziqlar o'ngga, **Fleet partners**ga boradi.

  Kompyuterda chiziqlar bir marta chiziladi. Telefonda chap tomonda bitta ustun va har kartaga shoxcha bo'ladi.
- **Chiziqlar boshqa joylarda ham:** bo'lim ajratgichlari, hamkor bo'lish qadamlari (bitta yo'lakdagi bekatlar), haydovchilar so'rovnomasi ustunlari va ro'yxat belgilari shu chiziqlardan.
- **Shrift:** sarlavhalar Saira Semi Condensed, matn Public Sans. Ikkalasi o'zimizda va OFL litsenziyali.
- **Ranglar:** logotipdan olingan, navy `#0f3b6c` va qizil `#f53011`. Oq fonda tugma uchun qizilning to'q varianti `#d0280f` ishlatiladi, u 5.3:1 kontrast beradi.
- **Tizim:** bitta radius (6px), bitta tugma shakli (qizil asosiy, chiziqli ikkinchi darajali), aynan 4 ta kulrang.

Batafsil: [docs/design-system.md](docs/design-system.md). Sahifalar va bloklar: [docs/sitemap.md](docs/sitemap.md). Kerakli narsalar: [docs/needs.md](docs/needs.md).

## Ishga tushirish

Node.js **22.23.4 yoki undan yangi** kerak (Node 24 LTS tavsiya).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ papkaga statik sayt
npm run preview    # build'ni lokal ko'rish
npm run deploy:pages   # preview'ni GitHub Pages'ga (gh-pages branch) joylash
```

Sozlamalar (`.env.example` dan `.env` qiling):

| O'zgaruvchi | Nima uchun |
|---|---|
| `PUBLIC_CONTACT_ENDPOINT` | Kontakt formasi JSON yuboradigan API (https). Bo'sh bo'lsa forma preview rejimda, hech narsa yuborilmaydi va buni ochiq aytadi |
| `PUBLIC_CANONICAL_ORIGIN` | canonical va og:url domeni, standart `https://gfs-groupllc.com` |
| `PUBLIC_NOINDEX` | `true` bo'lsa sahifalar Google'da indekslanmaydi (preview uchun) |

## Sahifalar (hammasi tayyor)

URL'lar hozirgi sayt bilan bir xil, profillar va reklamadagi havolalar buzilmaydi.

| Sahifa | URL |
|---|---|
| Home | `/` |
| Why Us | `/why-us/` |
| Services | `/services/` (`#programs`) |
| Trucking services | `/services/trucking-services/` |
| Logistics solutions | `/services/logistics-solutions/` |
| Partners | `/partners/` (`#network`) |
| Reviews | `/reviews/` (filtr: All, Drivers, Owner-operators, Partners) |
| Contact | `/contact-us/` (`#contact-form`, eski `#inline-bQz7IIiAOwL2rSPfubC0` ham ishlaydi) |
| Privacy Policy | `/privacy-policy/` |
| Terms of Service | `/terms-of-service/` (oxirida surat mualliflari) |
| 404 | brendlangan |

Qo'shimcha: `sitemap.xml`, `robots.txt`, Organization JSON-LD, og-image, favicon (logotip belgisi).

## Taskdagi talablar qanday bajarildi

| Talab | Yangi versiyada |
|---|---|
| Hero: aniq rasm, o'qiladigan sarlavha | Sarlavha oq fonda navy rangda (11:1 kontrast), surat yonida, sarlavha ostida emas. Rasm 1280px gacha, xira emas |
| Bitta sarlavha, oraliq, karta va tugma tizimi; legal ham brend shriftida | Bitta tokenlar to'plami (`global.css`), bitta radius, bitta tugma, 4 kulrang. Privacy va Terms ham Saira/Public Sans'da |
| Telefon: katta raqamlar kartaga sig'adi, Partners logolari 2 ustunda, 1024px'da "Why Us" bir qatorda | 320–1440px'da 77 sahifa-kenglik tekshiruvi toza: raqamlar sig'adi, logolar telefonda 2 ustun, 1024px'da menyu bir qatorda |
| Kontakt ma'lumotlari hamma joyda bir xil | Hamma sahifa (Privacy va Terms ham) bitta joydan oladi: `src/data/site.ts`. Hozir (636) 442-1334 va info@. To'g'risini rahbar tasdiqlaydi |
| "Apply Now", "Join Our Team", hero tugmalari Tenstreet'ga | Hamma "Apply" tugmalari `intelliapp.driverapponline.com/c/2415900?r=Noza` ga (avtomatik tekshirildi). Telefonda pastda doimiy "Apply now / Call us" paneli |
| Test yozuvlar yo'q, sharhlar takrorlanmaydi, reyting bir xil | "Test Partner Co" va "Test Reviewer" olib tashlandi, 2 ta takror sharh birlashtirildi. Reyting va son ko'rsatilgan sharhlardan hisoblanadi: 4.8, 18 ta sharh (hamma joyda bir xil). "100% would recommend" olib tashlandi |
| Buzilgan havolalar yo'q, `<p>` kodi ko'rinmaydi | /about'ga havola yo'q; xizmat sahifalari oddiy matn |
| Takrorlanuvchi bloklar olib tashlanadi | "Drivers First, Always" bir marta; to'rtinchi ustun (u takror edi) olib tashlandi; statistika har sahifada bir marta |
| Contact formasi holatlari | Yuborilmoqda (spinner), xato, yuborildi (faqat 2xx javobdan keyin). Ko'rish: `?state=error`, `?state=sending` |
| PageSpeed telefonda kamida 90 | Lighthouse 13.6, telefon, lokal build: Home 99 (LCP 2.0 s), boshqa sahifalar 100. Jonli natija pastda |

## Forma API (dasturchi uchun)

Kontakt formasi `POST`, JSON, `Content-Type: application/json`. 2xx javob = yuborildi; boshqasi yoki 15 soniyada javob yo'q = xato.
Maydonlar hozirgi GoHighLevel formasi bilan bir xil nomda, shuning uchun 1:1 ulanadi:

`position_type, first_name, last_name, phone, email, postal_code, cdl, cdl_experience, message, sms_non_marketing, sms_marketing` + `source, page, submittedAt`.

Ikkala SMS rozilik katakchasi matni jonli formadagi bilan so'zma-so'z bir xil (A2P 10DLC), ixtiyoriy va belgilanmagan holda turadi.
Eng oson yo'l: GHL "Inbound webhook" yoki o'z API'ngizdagi bitta endpoint. API boshqa domenda bo'lsa, CORS'da sayt domenini ruxsat eting.

## Ma'lumotlarni o'zgartirish

- `src/data/site.ts`: kompaniya, kontakt, ish vaqti, statistika, imtiyozlar, xizmatlar, hamkorlik matnlari. `PENDING` deb belgilanganlar rahbardan keladi.
- `src/data/reviews.ts`, `src/data/partners.ts`, `src/data/legal.ts`: CMS'dan (`/api/v1/*`) olingan nusxa. Asosiy saytga ko'chirishda shu API'dan to'g'ridan-to'g'ri olinadi.
- Suratlar: `public/photos/`. Hozir vaqtinchalik Wikimedia Commons suratlari. Mualliflari `src/data/credits.ts` va Terms sahifasining oxirida.

## Tezlik

Lighthouse 13.6 (lokal build, telefon, 2026-11-14): Home 99 (LCP 2.0 s, CLS 0); Why Us, Services, Partners, Reviews, Contact 100. Accessibility, Best Practices, SEO hamma joyda 100.
Hozirgi sayt: bosh sahifa 69–75, Contact 42.
