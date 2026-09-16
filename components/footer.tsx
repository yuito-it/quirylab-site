import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link className="flex items-center gap-2.5" href="/"><Image alt="" className="size-8 rounded-lg" width={80} height={80} src="/icon.png" /><span className="font-semibold tracking-tight">QuiryLab</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">自由に模索し、情報を共有するためのコミュニティです。</p>
          <div className="mt-5 flex gap-2">
            <a className="inline-flex size-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" href="https://x.com/quiryLab" aria-label="X" target="_blank" rel="noreferrer"><Twitter className="size-4" /></a>
            <a className="inline-flex size-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" href="https://discord.gg/vJ6kf8SnYm" aria-label="Discord" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /></a>
          </div>
        </div>
        <div className="space-y-3 text-sm"><p className="font-medium">Navigation</p><div className="flex flex-col gap-2 text-muted-foreground"><Link href="/" className="hover:text-foreground">ホーム</Link><Link href="/about" className="hover:text-foreground">QuiryLabについて</Link><Link href="/service" className="hover:text-foreground">サービス</Link></div></div>
        <div className="space-y-3 text-sm"><p className="font-medium">Legal</p><div className="flex flex-col gap-2 text-muted-foreground"><Link href="/terms-of-service" className="hover:text-foreground">利用規約</Link><Link href="/privacy-policy" className="hover:text-foreground">プライバシーポリシー</Link><a href="mailto:info@quirylab.com" className="hover:text-foreground">info@quirylab.com</a></div></div>
      </div>
      <div className="border-t"><p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-6">© {new Date().getFullYear()} QuiryLab. All rights reserved.</p></div>
    </footer>
  );
}
