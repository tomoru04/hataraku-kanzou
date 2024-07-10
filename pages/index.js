// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <header className="text-center bg-[#be123c] text-white h-20"/>

        <main className="bg-white md:p-8 shadow-lg">
          <div className="md:w-1/2 mx-auto">
            <div className="md:flex items-center justify-center relative">
              <div className="z-10 absolute inset-0 flex items-center justify-center md:relative md:float-left">
                <div>
                  <p className="font-bold text-[20px]"><span className="text-[#be123c] text-[36px]">肝機能</span>に関する<br/>アンケートのお願い</p>
                  <div className="rounded-full bg-[#640201] h-14 w-40 flex items-center justify-center mt-2">
                    <p className="text-white text-[16px] mr-2 mt-1">全2問</p>
                    <p className="text-white text-[16px]">|</p>
                    <p className="text-white text-[20px] ml-2">30秒</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:relative md:ml-12">
                <Image src="/kanzou.jpg" alt="Placeholder Image 1" className="opacity-40 md:opacity-100 h-full" width={400} height={300}/>
              </div>
            </div>
            
            <div className="relative rounded-lg border-2 border-[#be123c] m-4 md:mx-20 md:my-8">
              <div className="px-12 py-6 flex justify-center">
                <div className="my-auto">
                  <p className="text-[20px] font-bold"><span className="text-[#be123c]">「奈良宣言2024」</span><br className="md:hidden"/>をご存じですか？</p>
                  <Image src="/kanzou.jpg" alt="Placeholder Image 1" className="mt-4 md:hidden" width={300} height={300} />
                  <p className="text-[11px] mt-12">日本肝臓学会では、「Stop CLD せんとくんの<br/>Over30（ALT＞30U/L）」の宣言を発出し、<br/>かかりつけ医への受診促進を目的として、<br/><span className="font-bold">慢性肝臓病（CLD）の早期発見</span>を図ります。</p>
                </div>
                <div className="ml-12 hidden md:block">
                    <Image src="/kanzou.jpg" alt="Placeholder Image 1" width={300} height={300} />
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-[#be123c] m-4 md:mx-20 md:my-8">
              <div className="px-12 py-6 flex justify-center">
                <div className="my-auto">
                  <h2 className="text-[20px] font-bold">何が原因で<br className="md:hidden"/><span className="text-[#be123c]">ALT</span>は高くなる？</h2>
                  <Image src="/kanzou.jpg" alt="Placeholder Image 2" className="mt-4 md:hidden" width={300} height={300} />
                  <p className="text-[11px] mt-12"><span className="font-bold">運動不足</span>や<span className="font-bold">睡眠不足</span>などによる<span className="font-bold">生活習慣</span>を基盤とした、<br/>いわゆる脂肪肝などが進行して肝硬変や肝臓がんになることも<br/>増えており、<span className="font-bold">日常生活から注意</span>が必要です。</p>
                </div>
                <div className="ml-12 hidden md:block">
                  <Image src="/kanzou.jpg" alt="Placeholder Image 2" width={300} height={300} />
                </div>
              </div>
            </div>

            <form className="border border-pink-800 p-16 md:rounded-lg mb-8 bg-[#be123c] font-bold" action="https://script.google.com/a/macros/g.chuo-u.ac.jp/s/AKfycbyf7PqoBRsbqs-ko34fgOoGvOy8sYK1Yd6rmI2wUAayRKayhnqv_TBl_CdLuPHYGZ8cUQ/exec" method="POST">
              <div className="md:flex justify-center text-center">
                <div className="mb-4 md:float-left bg-white p-8 md:rounded-lg relative">
                  <div className="bg-white rounded-full w-[18%] h-[13%] absolute top-[-7%] left-[43%]">
                    <p className="mt-3 text-xl text-[#be123cf]">Q1</p>
                  </div>
                  <Image src="/johansin.jpg" alt="Placeholder Image 2" className="mx-auto" width={300} height={300} />
                  <h3 className="my-4">自分の<span className="text-[#be123c]">ALTの数値</span>をご存じですか？</h3>
                  <label className="block mb-2 shadow-wide rounded-full p-4">
                    <input type="radio" name="question1" value="YES" className="mr-6" />
                    YES
                  </label>
                  <label className="block shadow-wide rounded-full p-4">
                    <input type="radio" name="question1" value="NO" className="mr-6" />
                    NO
                  </label>
                </div>

                <div className="mb-4 bg-white md:float-left p-8 md:ml-4 text-center md:rounded-lg relative">
                  <div className="bg-white rounded-full w-[18%] h-[13%] absolute top-[-7%] left-[43%]">
                    <p className="mt-3 text-xl text-[#be123cf]">Q2</p>
                  </div>
                  <Image src="/ningyo.jpg" alt="Placeholder Image 2" className="mx-auto" width={300} height={300} />
                  <h3 className="my-4">動画をみてどのように感じましたか？</h3>
                  <label className="block mb-2 shadow-wide rounded-full p-4">
                    <input type="radio" name="question2" value="自分のALTに興味を持った" className="mr-6" />
                    自分のALTに興味を持った
                  </label>
                  <label className="block mb-2 shadow-wide rounded-full p-4">
                    <input type="radio" name="question2" value="内容をもっと知りたいと思った" className="mr-6" />
                    内容をもっと知りたいと思った
                  </label>
                  <label className="block shadow-wide rounded-full p-4">
                    <input type="radio" name="question2" value="医療機関を受診しようと思った" className="mr-6" />
                    医療機関を受診しようと思った
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-pink-800 text-[#be123c] bg-white py-2 px-16 rounded-3xl hover:bg-pink-900 block clear-both">
                  送信する
                </button>
              </div>
            </form>

            <div className="text-center rounded-lg border-2 border-[#be123c] py-8 font-bold m-4 md:m-8">
              <h2 className="mb-4 text-4xl">ALTは<span className="text-[#be123c]">肝臓の機能を表す</span><br className="md:hidden"/>検査値です。</h2>
              <div className="mx-8 my-4 p-4 rounded-lg shadow-wide text-left flex justify-center">
                <div className="float-left my-auto">
                  <h2 className="mb-4">数値が高いと、何らかのトラブルにより<span className="text-[#be123c]">肝臓の機能が<br className="hidden md:inline"/>低下している可能性</span>があります</h2>
                  <h2 className="hidden md:inline">健康診断などでALTが<span className="text-[#be123c]">30を超えたら</span>、<br className="hidden md:inline"/>かかりつけ医を受診しましょう</h2>
                  <div className="flex md:hidden">
                    <h2>健康診断などでALTが<span className="text-[#be123c]">30を超えたら</span>、<br className="hidden md:inline"/>かかりつけ医を受診しましょう</h2>
                    <Image src="/u-n.jpg" alt="Placeholder Image 2" className="md:hidden"width={150} height={150} />
                  </div>
                </div>
                <Image src="/u-n.jpg" alt="Placeholder Image 2" className="hidden md:block"width={150} height={150} />
              </div>
              <h2 className="mx-8 text-left">日本において、人間ドックや健診を受けた人の1/3は肝機能の数値が異常だったという報告があります。<br/>そして高いALT値は肝疾患における有害な転帰や有病率の増加をもたらすという報告もあります。1) <br/>一方で肝臓は「沈黙の臓器」と言われ、障害があっても症状が現れにくく<br/>明らかな症状が出るころには既に重症化してしまう特徴があります。 </h2>
              <div className="flex flex-col mt-4 px-16">
                <button className="bg-[#be123c] text-white mb-2 py-2 px-4 rounded-3xl hover:bg-pink-900">
                  詳しく知りたい方はこちら
                </button>
                <button className="bg-[#be123c] text-white py-2 px-4 rounded-3xl hover:bg-pink-900">
                  大正製薬の公式HPはこちら
                </button>
              </div>
            </div>

            <div className="mt-8 mx-4 pb-8 text-xs">
              <h3>(1)Kenneth Cusi et al., American Association of Clinical Endocrinology </h3>
              <h3>Clinical Practice Guideline for the Diagnosis and Management of </h3>
              <h3>Nonalcoholic Fatty Liver Disease in Primary Care and Endocrinology </h3>
              <h3>Clinical Settings Co- Sponsored by the American Association for the Study</h3>
              <h3>of Liver Diseases (AASLD)</h3>
            </div>
          </div>
        </main>
        <footer className="text-center bg-[#be123c] text-white py-4">
          <div>
            <div>
              <p>[運営会社情報]</p>
            </div>
            <div>
              <p>大正製薬株式会社</p>
              <p>東京都豊島区高田3-24-1</p>
            </div>
          </div>
          <p>[免責事項はこちら]</p>
          <p>〇〇 All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}
