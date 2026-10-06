import Header from "@/components/header";
import Footer from "@/components/footer";
import { IoMdHourglass } from "react-icons/io";
import { IoMdMail, IoMdListBox } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quirylab - サービス",
  description: "QuiryLabの提供サービスです",
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="mt-20 p-8 w-full flex flex-col items-center text-center gap-8 bg-white">
        <h3 className="text-2xl font-semibold mb-2">一般公開向けサービス</h3>
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">現在作成中ですお待ちください</p>
          <div className="flex items-center gap-3 text-gray-400">
            <IoMdHourglass className="w-6 h-6 animate-spin" />
            <p className="text-lg">Coming Soon...</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">メンバー向け</h3>

          <div className="space-y-8">
            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <IoMdMail className="w-6 h-6" />
                <h4 className="text-xl font-bold">メールアドレス</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                quirylab.comのドメインのメールアドレスを希望するメンバー全員に提供します。メンバー専用のメールアドレスを提供します。連絡や情報共有に便利です。
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <FaDatabase className="w-6 h-6" />
                <h4 className="text-xl font-bold">サーバー提供</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                QuiryLabで使用しているサーバーの一部を提供します。プロフィールサイトを作ったり、研究データの保存や共有に利用できます。
              </p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <IoMdListBox className="w-6 h-6" />
                <h4 className="text-xl font-bold">サブドメイン提供</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                quirylab.comのサブドメインを提供します。わざわざ独自ドメインを取得する必要がなくなります。
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
