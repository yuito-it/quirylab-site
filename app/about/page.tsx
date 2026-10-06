import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdHourglass } from "react-icons/io";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "QuiryLab - QuiryLabについて",
  description: "QuiryLabについてです",
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">QuiryLabとは?</h1>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
          自由に模索し、情報共有できるコミュニティです！あなたの参加をぜひお待ちしています！
        </p>
      </section>

      <section className="w-full px-6 py-16 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">サービス</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            一般向けやメンバー向けにサービスを提供しています。そのサービスを使用し、自由に好きな分野を模索することができます
          </p>
          <Link href={"/service"}>
            <Button className="group px-8 py-3 text-base font-semibold bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              詳しく見る
              <GrFormNextLink className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="w-full px-6 py-16 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">新規団体応援サービス</h2>
          <div className="flex items-center gap-3 text-gray-400">
            <IoMdHourglass className="w-6 h-6 animate-spin" />
            <p className="text-lg">Coming Soon...</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
