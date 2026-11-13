# Dizayn tizimi — "Lanes"

Kod: `src/styles/global.css` (`:root` tokenlari). G'oya GFS logotipidan olingan: parallel chiziqlar to'plami (navy chiziqlar, o'rtada bitta qizil), yo'llar kabi shoxlanadi.
Butun sayt shu bitta grafik g'oyani ishlatadi, qolgan hamma narsa sokin: oq sahifalar, navy matn, faqat harakat uchun qizil.

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--navy` | `#0f3b6c` | Logotip navy'si: sarlavhalar, chiziqlar (oq matn bilan 11.4:1) |
| `--navy-deep` | `#0b2142` | Asosiy matn, to'q bandlar, footer |
| `--navy-tint` | `#e9eff7` | Ikonka kvadratlari, tanlangan tab |
| `--red` | `#f53011` | Logotip qizili: faqat chiziq va grafika (3.9:1, matnga yaramaydi) |
| `--red-ink` | `#d0280f` | Tugmalar va qizil matn (oq bilan 5.3:1) |
| `--red-soft` | `#ff7a5c` | To'q fondagi qizil (6.3:1) |
| `--grey-1` | `#f4f6f9` | Och bo'limlar |
| `--grey-2` | `#dde3eb` | Chegara, ajratgich, bar fon |
| `--grey-3` | `#8b96a6` | Input chegarasi (oq fonda 3:1) |
| `--grey-4` | `#576274` | Ikkinchi darajali matn (6.2:1) |

Kulranglar soni: **4** (task: "ko'pi bilan 3–4"). To'q fonda kulrang o'rniga oq rangning shaffofligi ishlatiladi.

## Shrift

- **Saira Semi Condensed 700:** sarlavhalar va raqamlar. Yarim tor, yumaloq-to'rtburchak harflari logotipdagi "GROUPLLC" yozuviga yaqin.
- **Public Sans (variable 100–900):** matn, tugma va formalar. Bu AQSh hukumatining ochiq shrifti; rasmiy hujjatdek, ishonchli o'qiladi.
- O'lchamlar:
  - matn 17px / 1.6;
  - h1 42–84px;
  - h2 32–52px;
  - h3 22px.
- Ikkala shrift o'zimizda, jami 45 KB.
- Katta harfli yorliqlar yo'q, sarlavhalar oddiy registrda.

## Komponentlar

- **Lane rule** (`.lanes`): 5 ta 2px chiziq, o'rtadagisi qizil. Bo'lim ajratgichi, to'q fonda `.lanes--light`.
- **Router** (`components/Router.astro`): bosh sahifadagi asosiy element. SVG'da chiziqlar uch yo'lga bo'linadi:
  - qizil chiziq o'rtadagi Company drivers kartasiga boradi;
  - navy chiziqlar chap va o'ngga ketadi.

  Kompyuterda chiziqlar 1.6 s davomida bir marta chiziladi. `prefers-reduced-motion` yoqilgan bo'lsa animatsiya bo'lmaydi.
- **Tugma** (`.btn`): bitta shakl, 48px (katta varianti 54px), radius 6px.
  - Asosiy tugma qizil, ikkinchi darajali tugma navy chiziqli (`.btn--line`).
  - Bosilganda biroz kichrayadi.
  - Forma yuborilayotganda tugmada spinner chiqadi.
- **Bekatlar** (`.steps`): faqat haqiqiy ketma-ketlikda raqamlanadi (hamkor bo'lish 4 qadami). Kompyuterda gorizontal yo'lak, telefonda vertikal.
- **Bar** (`.bar`): so'rovnoma foizlari va reyting taqsimoti uchun. Navy to'ldirish, oxirida qizil belgi.
- **Mobil panel** (`.mobile-bar`): telefonda pastda doimiy turadigan "Apply now / Call us".

## Shakl va oraliq

- Bitta radius: **6px**.
- Soya yo'q. Gradientlar faqat chiziqlarni chizish uchun ishlatiladi.
- Kontent kengligi 1240px, gutter 16–40px.
- Bo'lim oraliqlari 56–104px.
- Breakpoint'lar: 600, 700, 900, 1024 (to'liq menyu), 1100, 1200 (header'da telefon raqami).

## Harakat

Faqat ikkita joyda:
1. Router chiziqlari bir marta chiziladi.
2. Tugma bosilganda kichrayadi.

Kartalarda hover animatsiyasi va scroll'da paydo bo'luvchi effektlar yo'q.
