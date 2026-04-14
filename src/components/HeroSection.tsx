import heroImg from "@/assets/hero-illustration.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-warm py-16 md:py-24">
    <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:flex-row md:gap-16">
      <div className="flex-1 text-center md:text-left">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          與孩子一起<br />
          <span className="text-gradient-primary">探索 AI 的力量</span>
        </h1>
        <p className="mb-8 max-w-lg text-lg text-muted-foreground">
          基於 ISE 親子科技教育工作坊內容，為家長打造的互動學習平台。了解人工智能、掌握提示詞技巧，安全引導孩子使用 AI 輔助學習。
        </p>
        <a
          href="#modules"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          開始學習
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      <div className="flex-1">
        <img
          src={heroImg}
          alt="家長與孩子一起學習 AI"
          width={1280}
          height={720}
          className="w-full max-w-lg rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
