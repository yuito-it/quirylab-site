import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AtSign, Database, Globe2, Sparkles } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "QuiryLab - ホーム", description: "QuiryLabの公式サイトです" };

const services = [
  { icon: AtSign, title: "メールアドレス", description: "quirylab.com のメンバー専用メールアドレスを提供します。" },
  { icon: Database, title: "サーバー提供", description: "プロフィールサイトやデータ共有に使えるサーバー環境です。" },
  { icon: Globe2, title: "サブドメイン提供", description: "個人・プロジェクトの公開に使えるサブドメインを提供します。" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--muted)),transparent_52%)]" />
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-6 sm:py-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"><Sparkles className="size-3.5" /> Explore together</div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">好奇心を、<br className="sm:hidden" />次の探求へ。</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">QuiryLabは、自由に模索し、知識やアイデアを共有するコミュニティです。興味のあることから、一緒に始めませんか。</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://discord.gg/vJ6kf8SnYm" target="_blank" rel="noreferrer"><Button size="lg" className="w-full sm:w-auto">コミュニティに参加 <ArrowRight /></Button></a>
              <Button variant="outline" size="lg" asChild><Link href="/about">QuiryLabについて</Link></Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl"><p className="text-sm font-medium text-muted-foreground">MEMBER SERVICES</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">探求を支える、<br />シンプルな環境。</h2><p className="mt-4 leading-7 text-muted-foreground">メンバーがアイデアをかたちにするための、必要十分な仕組みを用意しています。</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => { const Icon = service.icon; return <Card key={service.title} className="gap-0 transition-colors hover:bg-muted/40"><CardHeader><div className="mb-5 flex size-10 items-center justify-center rounded-lg border bg-background"><Icon className="size-5" /></div><CardTitle>{service.title}</CardTitle></CardHeader><CardContent><CardDescription className="leading-6">{service.description}</CardDescription></CardContent></Card>; })}
          </div>
          <Button variant="link" className="mt-6 px-0" asChild><Link href="/service">すべてのサービスを見る <ArrowRight /></Link></Button>
        </section>

        <section className="border-y bg-muted/30"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20"><div className="rounded-xl border bg-background p-8 text-center sm:p-12"><p className="text-sm font-medium text-muted-foreground">NEWS</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">最新情報を準備中です</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">お知らせや新しい取り組みは、ここでお届けします。</p></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
