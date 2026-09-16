"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "QuiryLabについて" },
  { href: "/service", label: "サービス" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="QuiryLab ホーム">
          <Image src="/icon.png" width={80} height={80} alt="" className="size-8 rounded-lg" priority />
          <span className="text-base font-semibold tracking-tight">QuiryLab</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="メインナビゲーション">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">{item.label}</Link>)}
        </nav>
        <a href="https://discord.gg/vJ6kf8SnYm" target="_blank" rel="noreferrer" className="hidden md:block"><Button size="sm">参加する</Button></a>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}>{isMenuOpen ? <X /> : <Menu />}</Button>
      </div>
      {isMenuOpen && <div className="border-t bg-background px-5 py-4 md:hidden"><nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="モバイルナビゲーション">
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent">{item.label}</Link>)}
        <a href="https://discord.gg/vJ6kf8SnYm" target="_blank" rel="noreferrer" className="mt-2"><Button className="w-full">Discordで参加する</Button></a>
      </nav></div>}
    </header>
  );
}
