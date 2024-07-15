// pages/index.js

import Image from 'next/image';
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <div>
      
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;800&display=swap" rel="stylesheet" />
      <div className="font-noto-sans text-black">
        <header className="text-center bg-[#be123c] h-20"/>

        <main className="bg-white md:p-8 shadow-lg">
          <div className="md:w-[800px] mx-auto">
            <div className="md:flex items-center justify-center relative">
              <div className="z-10 absolute inset-0 flex items-center justify-center md:relative md:float-left">
                <div>
                  <p className="font-bold text-[20px]"><span className="text-[#be123c] text-[36px]">肝機能</span>に関する<br/>アンケートのお願い</p>
                  <div className="rounded-full bg-[#640201] h-14 w-40 flex items-center justify-center mt-2 mx-auto">
                    <p className="text-white text-[16px] mr-2 mt-[0.5px]">全2問</p>
                    <p className="text-white text-[16px] mb-1">|</p>
                    <p className="text-white text-[20px] ml-2 mb-[1.2px]">30秒</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:relative md:ml-12">
                <Image src="/kanzou.png" alt="Placeholder Image 1" className="opacity-40 md:opacity-100 h-full" width={400} height={300}/>
              </div>
            </div>
            
            <div className="relative rounded-lg border-2 border-[#be123c] w-[340px] md:w-auto mx-auto my-4 md:mx-2 md:my-8">
              <div className="px-12 py-10 flex justify-center">
                <div className="my-auto">
                  <p className="text-[20px] font-bold"><span className="text-[#be123c] text-2xl">｢奈良宣言2023｣</span><br className="md:hidden"/>をご存じですか？</p>
                  <div className="mt-4 md:hidden">
                    <YouTubeEmbed videoid="2DX5DYOr2PI"/>
                  </div>
                  <p className="text-[11px] mt-6">日本肝臓学会では、「Stop CLD せんとくんの<br/>Over30（ALT＞30U/L）」の宣言を発出し、<br/>かかりつけ医への受診促進を目的として、<br/><span className="font-bold">慢性肝臓病（CLD）の早期発見</span>を図ります。</p>
                </div>
                <div className="ml-10 hidden md:block">
                    <YouTubeEmbed videoid="2DX5DYOr2PI" width={300}/>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-[#be123c] w-[340px] md:w-auto mx-auto my-4 md:mx-2 md:my-8">
              <div className="px-12 py-10 flex justify-center">
                <div className="my-auto">
                  <h2 className="text-[20px] font-bold">何が原因で<br className="md:hidden"/><span className="text-[#be123c] text-2xl">ALTは高くなる？</span></h2>
                  <div className="mt-4 md:hidden">
                    <YouTubeEmbed videoid="Vv-utS68Xhg"/>
                  </div>
                  <p className="text-[11px] mt-6"><span className="font-bold">運動不足</span>や<span className="font-bold">睡眠不足</span>などによる<span className="font-bold">生活習慣</span>を基盤とした、<br className="hidden md:block"/>いわゆる脂肪肝などが進行して肝硬変や肝臓がんになることも<br className="hidden md:block"/>増えており、<span className="font-bold">日常生活から注意</span>が必要です。</p>
                </div>
                <div className="ml-[76px] hidden md:block">
                  <YouTubeEmbed videoid="Vv-utS68Xhg" width={300}/>
                </div>
              </div>
            </div>

            <form className="border border-pink-800 p-4 md:p-16 md:pb-6 md:rounded-lg mb-8 bg-[#be123c] font-bold text-[14px]" action="https://script.google.com/macros/s/AKfycbxPxobsrOVvsBb1khzgUraX-c3Y0CQCXhNQILvZN62sJPugEUXU2BHOIr70nIVseJNTGg/exec" method="POST">
              <div className="md:flex justify-center text-center">
                <div className="mt-12 md:mt-0 mb-6 md:float-left bg-white p-8 rounded-lg relative w-[340px] md:w-auto mx-auto">
                  <div className="bg-white rounded-full w-[60px] h-[60px] absolute top-[-7%] left-[40%]">
                    <p className="mt-3 text-xl text-[#be123cf]">Q1</p>
                  </div>
                  <Image src="/johansin.png" alt="Placeholder Image 2" className="mx-auto" width={300} height={300} />
                  <h3 className="my-6">自分の<span className="text-[#be123c]">ALTの数値</span>をご存じですか？</h3>
                  <label className="block mb-4 shadow-wide rounded-full p-4 text-[#be123c] text-[20px]">
                    <input type="radio" name="question1" value="YES" className="mr-6 w-6 h-6 relative top-1.5" required/>
                    YES
                  </label>
                  <label className="block shadow-wide rounded-full p-4 text-[#1756B4] text-[20px]">
                    <input type="radio" name="question1" value="NO" className="mr-6 w-6 h-6 relative top-1.5 right-1" />
                    NO
                  </label>
                </div>

                <div className="mt-16 md:mt-0 mb-6 bg-white md:float-left p-8 md:ml-4 text-center rounded-lg relative w-[340px] md:w-auto mx-auto">
                  <div className="bg-white rounded-full w-[60px] h-[60px] absolute top-[-7%] left-[40%]">
                    <p className="mt-3 text-xl text-[#be123cf]">Q2</p>
                  </div>
                  <Image src="/ningyo.png" alt="Placeholder Image 2" className="mx-auto" width={300} height={300} />
                  <p className="my-4">動画をみてどのように感じましたか？</p>
                  <label className="block mb-4 shadow-wide rounded-full p-4 text-[#be123c] text-left">
                    <input type="checkbox" name="question2[]" value="自分のALTに興味を持った" className="ml-1 mr-2 w-5 h-5 relative top-1"/>
                    自分のALTに興味を持った
                  </label>
                  <label className="block mb-4 shadow-wide rounded-full p-4 text-[#be123c] text-left">
                    <input type="checkbox" name="question2[]" value="内容をもっと知りたいと思った" className="ml-1 mr-2 w-5 h-5 relative top-1" />
                    内容をもっと知りたいと思った
                  </label>
                  <label className="block shadow-wide rounded-full p-4 text-[#be123c] text-left">
                    <input type="checkbox" name="question2[]" value="医療機関を受診しようと思った" className="ml-1 mr-2 w-5 h-5 relative top-1" />
                    医療機関を受診しようと思った
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="hover:bg-slate-300 text-[#be123c] bg-white py-2 px-16 rounded-3xl block clear-both h-12 text-xl">
                  送信する
                </button>
              </div>
            </form>

            <div className="text-center rounded-lg border-2 border-[#be123c] py-8 font-bold m-4 md:m-8 w-[340px] md:w-auto mx-auto">
              <p className="mb-4 text-2xl md:text-4xl">ALTは<span className="text-[#be123c]">肝臓の機能を表す</span><br className="md:hidden"/>検査値です。</p>
              <div className="mx-5 md:mx-8 my-4 p-4 rounded-lg shadow-wide text-left flex justify-center">
                <div className="float-left my-auto">
                  <p className="mb-4 text-[13px] md:text-[16px]">数値が高いと、何らかのトラブルにより<span className="text-[#be123c]">肝臓の機能が<br className="hidden md:inline"/>低下している可能性</span>があります</p>
                  <p className="hidden md:inline text-[16px]">健康診断などでALTが<span className="text-[#be123c]">30を超えたら</span>、<br className="hidden md:inline"/>かかりつけ医を受診しましょう</p>
                  <div className="flex md:hidden">
                    <p className="text-[13px]">健康診断などでALTが<span className="text-[#be123c]">30を超えたら</span>、<br className="hidden md:inline"/>かかりつけ医を受診しましょう</p>
                    <Image src="/u-n.jpg" alt="Placeholder Image 2" className="md:hidden" width={40} height={40} />
                  </div>
                </div>
                <Image src="/u-n.jpg" alt="Placeholder Image 2" className="hidden md:block"width={150} height={150} />
              </div>
              <p className="mx-8 text-left text-[10px]">日本において、人間ドックや健診を受けた人の1/3は肝機能の数値が異常だったという報告があります。<br/>そして高いALT値は肝疾患における有害な転帰や有病率の増加をもたらすという報告もあります。1) <br/>一方で肝臓は「沈黙の臓器」と言われ、障害があっても症状が現れにくく<br/>明らかな症状が出るころには既に重症化してしまう特徴があります。 </p>
              <div className="flex flex-col mt-4 px-6 md:px-16">
                <a className="bg-[#be123c] text-white mb-2 py-2 px-4 rounded-3xl hover:bg-pink-900" href="https://www.jsh.or.jp/medical/">
                  詳しく知りたい方はこちら
                </a>
                <a className="bg-[#be123c] text-white py-2 px-4 rounded-3xl hover:bg-pink-900" href="https://medical.taisho.co.jp/">
                  大正製薬の公式HPはこちら
                </a>
              </div>
            </div>

            <div className="w-[310px] md:w-auto mx-auto mt-8 mx-4 pb-8 text-xs">
              <h3>(1)Kenneth Cusi et al., American Association of Clinical Endocrinology <br className="hidden md:block"/>Clinical Practice Guideline for the Diagnosis and Management of <br className="hidden md:block"/>Nonalcoholic Fatty Liver Disease in Primary Care and Endocrinology <br className="hidden md:block"/>Clinical Settings Co- Sponsored by the American Association for the Study <br className="hidden md:block"/>of Liver Diseases (AASLD)</h3>
            </div>
          </div>
        </main>
        <footer className="text-center bg-[#be123c] text-white py-4">
          <div className="w-[310px] mx-auto flex-wrap text-left">
            <div className="flex mb-2">
              <div className="pr-2 mr-2 border-r-2">
                <p>[運営会社情報]</p>
              </div>
              <div>
                <p>大正製薬株式会社</p>
                <p>東京都豊島区高田3-24-1</p>
              </div>
            </div>
            <div className="text-left flex-wrap">
              <p className="">[免責事項はこちら]</p>
              <p>大正製薬 All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
