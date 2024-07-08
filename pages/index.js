// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <header className="text-center bg-[#be123c] text-white h-20"/>

        <main className="bg-white p-8 shadow-lg">
          <div className="w-1/2 mx-auto">
            <div className="flex items-center justify-center">
              <div className="float-left">
                <h1 className="text-2xl font-bold"><span className="text-[#be123c] text-4xl">肝機能</span>に関する<br/>アンケートのお願い</h1>
                <div className="rounded-full bg-[#640201] h-14 w-40 flex items-center">
                  <p className="text-white text-xl mx-auto">全2問 | 30秒</p>
                </div>
              </div>
              <Image src="/kanzou.jpg" alt="Placeholder Image 1" className="ml-12" width={400} height={300}/>
            </div>
            
            <div className="rounded-lg border-2 border-[#be123c] m-8">
              <div className="px-12 py-8">
                <div className="float-left">
                  <h2 className="text-2xl font-bold"><span className="text-[#be123c]">「奈良宣言2024」</span>をご存じですか？</h2>
                  <h2 className="mt-12">日本肝臓学会では、「Stop CLD せんとくんの<br/>Over30（ALT＞30U/L）」の宣言を発出し、<br/>かかりつけ医への受診促進を目的として、<br/><span className="font-bold">慢性肝臓病（CLD）の早期発見</span>を図ります。</h2>
                </div>
                <div className="flex justify-center">
                    <Image src="/kanzou.jpg" alt="Placeholder Image 1" width={300} height={300} />
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-[#be123c] m-8">
              <div className="px-12 py-8">
                <div className="float-left">
                  <h2 className="text-2xl font-bold">何が原因で<span className="text-[#be123c]">ALT</span>は高くなる？</h2>
                  <h2 className="mt-12"><span className="font-bold">運動不足</span>や<span className="font-bold">睡眠不足</span>などによる<span className="font-bold">生活習慣</span>を基盤とした、<br/>いわゆる脂肪肝などが進行して肝硬変や肝臓がんになることも<br/>増えており、<span className="font-bold">日常生活から注意</span>が必要です。</h2>
                </div>
                <div className="flex justify-center">
                  <Image src="/kanzou.jpg" alt="Placeholder Image 2" width={300} height={300} />
                </div>
              </div>
            </div>

            <form className="border border-pink-800 p-6 rounded-lg mb-8 bg-[#be123c] font-bold">
              <div className="flex justify-center">
                <div className="mb-4 float-left bg-white p-8">
                  <Image src="/johansin.jpg" alt="Placeholder Image 2" width={300} height={300} />
                  <h3 className="mb-2">自分の<span className="text-[#be123c]">ALTの数値</span>をご存じですか？</h3>
                  <label className="block mb-2">
                    <input type="radio" name="question1" value="yes" className="mr-2" />
                    YES
                  </label>
                  <label className="block">
                    <input type="radio" name="question1" value="no" className="mr-2" />
                    NO
                  </label>
                </div>

                <div className="mb-4 bg-white float-left p-8 ml-4">
                  <Image src="/ningyo.jpg" alt="Placeholder Image 2" width={300} height={300} />
                  <h3 className="mb-2">動画をみてどのように感じましたか？</h3>
                  <label className="block mb-2">
                    <input type="radio" name="question2" value="yes" className="mr-2" />
                    自分のALTに興味を持った
                  </label>
                  <label className="block mb-2">
                    <input type="radio" name="question2" value="no" className="mr-2" />
                    内容をもっと知りたいと思った
                  </label>
                  <label className="block">
                    <input type="radio" name="question2" value="unsure" className="mr-2" />
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

            <div className="text-center rounded-lg border-2 border-[#be123c] py-8 font-bold">
              <h2 className="mb-4 text-4xl">ALTは<span className="text-[#be123c]">肝臓の機能を表す</span>検査値です。</h2>
              <div className="mx-8 my-4 p-4 rounded-lg border-2 shadow text-left flex justify-center">
                <div className="float-left">
                  <h2 className="mb-4">数値が高いと、何らかのトラブルにより<span className="text-[#be123c]">肝臓の機能が<br/>低下している可能性</span>があります</h2>
                  <h2>健康診断などでALTが<span className="text-[#be123c]">30を超えたら</span>、<br/>かかりつけ医を受診しましょう</h2>
                </div>
                <Image src="/u-n.jpg" alt="Placeholder Image 2" width={150} height={150} />
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

            <div className="my-8">
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
