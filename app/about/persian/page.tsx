import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "درباره من",
  description: "زندگی‌نامهٔ فارسی محمدرضا نادری.",
  alternates: {
    canonical: "/about/persian",
    languages: { en: "/about", fa: "/about/persian" },
  },
};

export default function PersianAboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="philosophy-persian" lang="fa" dir="rtl">
        <section className="about-main shell">
          <figure>
            <Image
              src="/profile-photo-4x5.jpg"
              alt="محمدرضا نادری"
              width={977}
              height={1221}
              sizes="(max-width: 760px) calc(100vw - 38px), 40vw"
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center", transform: "none" }}
            />
          </figure>
          <div className="about-prose" style={{ textAlign: "right" }}>
            <div className="philosophy-language-switch">
              <Link href="/about">English</Link>
            </div>
            <h1>زندگی‌نامه</h1>
            <p className="about-lead">
              من فیلسوف، نویسنده و مدرس ایرانی-کانادایی و ساکن تورنتو هستم. در کار فلسفی‌ام کوشش کرده‌ام فلسفهٔ قاره‌ای را از یک سو با هستی‌شناسی ریاضی، و از سوی دیگر با حیات عملی سامان‌ها در تماس مستمر قرار دهم.
            </p>
            <p>
              در سال ۲۰۱۷ دکترای خود را در رشتهٔ <span lang="en" dir="ltr">Philosophy and Critical Thinking</span> از <span lang="en" dir="ltr">European Graduate School</span> دریافت کردم. رسالهٔ دکتری من با عنوان <em lang="en" dir="ltr">Infinity and Subjectivity: Badiou’s Theory of Discipline</em> زیر نظر آلن بدیو نوشته شد. پیش از آن، دورهٔ کارشناسی ارشد فلسفه را در <span lang="en" dir="ltr">University of Toronto</span> به پایان رسانده بودم. رسالهٔ کارشناسی ارشدم در سال ۲۰۰۶، با عنوان <em lang="en" dir="ltr">Relation of Heidegger to German Idealism</em>، به کوشش هایدگر برای برقراری نسبت میان ایدئالیسم آلمانی و پدیدارشناسی هوسرلی می‌پرداخت. کتاب‌ها و مقالات من عمدتاً حول بی‌نهایت، سوژگی، صوری‌سازی، حقیقت و پیامدهای فلسفی کار بدیو شکل گرفته‌اند.
            </p>
            <p>
              من عضو گروه پژوهشی <span lang="en" dir="ltr">Subset of Theoretical Practice</span> هستم و در <span lang="en" dir="ltr">Toronto Psychoanalytic Society &amp; Institute</span> فلسفهٔ معاصر فرانسه تدریس می‌کنم. کار کنونی‌ام از یک سو ادامهٔ بسط نظریهٔ سامان است و از سوی دیگر نگارش کتاب سومی که بداعت اساسی را به‌عنوان مقولهٔ مرکزی فلسفه مورد بررسی قرار می‌دهد.
            </p>
            <p>
              مطالعات مستقل فلسفی من طیفی گسترده را دربر گرفته است: از افلاطون و ارسطو تا دکارت و اسپینوزا؛ کانت، هگل، مارکس و ایدئالیسم آلمانی؛ نیچه، لوکاچ و گلدمن؛ و در اندیشهٔ معاصر، لاکان، دلوز و بدیو.
            </p>
            <p>
              این مطالعات نه پس از، بلکه همزمان با تحصیلات و فعالیت حرفه‌ای من در ریاضیات و علوم کامپیوتر شکل گرفتند. در سال ۱۹۹۴ مدرک <span lang="en" dir="ltr">BSc</span> خود را در رشته‌های <span lang="en" dir="ltr">Computer Science</span> و <span lang="en" dir="ltr">Pure Mathematics</span> از <span lang="en" dir="ltr">University of Toronto</span> دریافت کردم و پس از آن چند دهه به‌عنوان معمار نرم‌افزار، کارآفرین و مشاور فعالیت داشتم. از طریق شرکت <span lang="en" dir="ltr">FARA Logics Inc.</span> سال‌ها مسئولیت کارهای بلندمدت در حوزهٔ فناوری و معماری سیستم‌ها را در مؤسسات کانادایی و آمریکایی بر عهده داشتم. الزامات عملی ساختن سیستم‌ها و تداوم کار جمعی همچنان بخشی درونی از دغدغهٔ فلسفی من دربارهٔ این پرسش‌اند که سامان‌ها چگونه به سازگاری دست می‌یابند.
            </p>
            <p>
              آشنایی من با فلسفه بسیار زودتر و از طریق مطالعهٔ مستقل متون کلاسیک فلسفی و مارکسیستی آغاز شد. در اوایل دههٔ ۱۹۸۰، زمانی که امکان تحصیلات رسمی در ایران به‌شدت محدود بود، به مطالعهٔ مستمر فلسفهٔ اسلامی، ادبیات فارسی و عرفان نیز پرداختم و در این زمینه‌ها از محضر استادان برجسته بهره بردم؛ از جمله دکتر حسین الهی قمشه‌ای. ارتباط من با ایشان در طول چند دهه ادامه یافت و به بخش مهمی از زندگی فکری و شخصی من تبدیل شد و همچنین حلقه‌ای از دوستی‌ها و گفت‌وگوها را به همراه آورد که پس از مهاجرت نیز در زندگی من در کانادا استمرار یافت. مطالعات من در این دوره به‌ویژه بر <em>مثنوی</em> مولوی، <em>گلشن راز</em> شبستری و <em>منطق‌الطیر</em> عطار متمرکز بود. بعدها نیز به مدت ده سال <em>مثنوی</em> را تدریس کردم.
            </p>
          </div>
        </section>

        <section className="about-cv shell" aria-labelledby="public-cv-title" style={{ textAlign: "right" }}>
          <h2 id="public-cv-title">رزومهٔ عمومی</h2>
          <div>
            <p>
              فهرست کامل‌تری از کتاب‌ها، مقالات، تدریس‌ها، سخنرانی‌ها، تحصیلات و فعالیت‌های حرفه‌ای پیشین من در رزومهٔ عمومی‌ام در دسترس است.
            </p>
            <div className="about-cv-actions">
              <a className="text-link" href="/documents/Mohammad-Reza-Naderi-CV.pdf">
                دریافت نسخهٔ PDF ↗
              </a>
              <a className="text-link" href="/documents/Mohammad-Reza-Naderi-CV.docx">
                دریافت نسخهٔ Word
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
