import { useState } from "react";

const book = [
    {
        Code: '001', 
        Title: 'จิตวิทยาสายดาร์ก', 
        Cover: '-', 
        Description: 'Dr.Hiro เคยเป็นนักขายที่ล้มเหลว ขายอะไรก็ไม่มีใครซื้อแต่แล้ววันหนึ่งขณะกำลังดูข่าว เขาก็นึกขึ้นได้ว่า“ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่วแถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัวแล้วทำไมผมถึงขายไม่ออกล่ะ?”เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจังอ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาดแล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่นนั่นคือที่มาของ “จิตวิทยาสายดาร์ก”พบกับเทคนิคทางจิตวิทยาที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคนทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว', 
        Category: 21003, 
        Author: 'Dr.Hiro', 
        Publishing: '-', 
        Price: '250 บาท', 
        Bestsellers: true,
        Suggestions: true
    },
    {
        Code: '002', 
        Title: 'Why Has Nobody Told Me This Before? วิชาสำคัญที่คุณควรรู้ก่อนที่ชีวิตจะสอนคุณ', 
        Cover: '-', 
        Description: 'มองโลกผ่านมุมจิตวิทยาเพื่อตั้งรับและก้าวผ่านปัญหาในวันที่ชีวิตโยนบททดสอบอันหนักหนามาให้หนังสือเล่มนี้ได้รวบรวบชุดเครื่องมือที่ใช้กันโดยจิตแพทย์และนักจิตบำบัดแต่มันไม่ใช่ทักษะสำหรับผู้ป่วยเท่านั้น  ทว่าเป็นทักษะชีวิตที่จะช่วยนำทางพวกเราทุกคนให้ก้าวผ่านช่วงเวลาอันยากลำบาก เมื่อเราเข้าใจกลไกการทำงานของจิตใจและเรียนรู้วิธีที่เหมาะสมในการจัดการกับอารมณ์ความรู้สึก  เราไม่เพียงสร้างเบาะไว้รองรับจิตใจในวันที่พายุถาโถมเข้าใส่  แต่ยังสามารถเติบโตและรับมือกับโลกได้ดีขึ้นในทุก ๆ วัน', 
        Category: 21003, 
        Author: 'Dr.Julie Smith', 
        Publishing: '-', 
        Price: '325 บาท', 
        Bestsellers: true, 
        Suggestions: false
    }, 
    {
        Code: '003', 
        Title: 'โกคุราคุไก สุขาวดีสีเลือด เล่ม 3 (Mg)', 
        Cover: '-', 
        Description: 'คานาตะถูกตามจับในฐานะผู้ต้องสงสัยคดีฆาตกรรมกินคน...ขณะที่อัลมาวิ่งวุ่นไปทั่วโกคุราคุไกยามราตรี เพื่อช่วย ‘มากะ’ อย่างคานาตะในฐานะเพื่อน—แต่แล้วคานาตะทนต่อสัญชาตญาณไม่ไหวจนออกอาละวาด ระหว่างที่อัลมาพยายามโน้มน้าวอย่างเอาเป็นเอาตายคนที่ปรากฏกายต่อหน้าทั้งสองกลับมอบ ‘ความสิ้นหวัง’ ยิ่งกว่าให้...!?', 
        Category: 800, 
        Author: 'ยูโตะ ซาโนะ', 
        Publishing: '-', 
        Price: '175 บาท', 
        Bestsellers: false, 
        Suggestions: true
    },
    {
        Code: '004', 
        Title: 'บ้านวิกลคนประหลาด เล่ม 2', 
        Cover: '-', 
        Description: 'ผังบ้านหลังนี้มีอะไรแปลก ๆฉันเขียนหนังสือชื่อ “บ้านวิกลคนประหลาด” ว่าด้วยผังบ้านแปลก ๆ ซึ่งนำไปสู่การค้นพบเหตุการณ์น่าสะพรึง หลังจากมีคนจำนวนมากได้อ่าน ก็มีคนส่งข้อมูลเกี่ยวกับ “บ้าน” มาให้ฉันมากมายโถงทางเดินไร้ปลายทางบ้านที่หล่อหลอมความมืดบ้านกับดักหนูอะพาร์ตเมนต์ไร้ทางหนีห้องที่เคยโผล่มาแค่ครั้งเดียวในบรรดาข้อมูลและเอกสารเหล่านั้น มีบ้าน 11 หลังที่ดูเผิน ๆ ไร้ซึ่งความเกี่ยวข้องกันโดยสิ้นเชิง แต่เมื่อตั้งใจอ่านกลับพบความเชื่อมโยงอย่างหนึ่งบรรดาบ้านประหลาดที่สร้างขึ้นในภูมิภาคชูบุ ความจริงที่ถูกฝังในความมืดซึ่งผ่านกาลเวลามายาวนาคืออะไรกันแน่การกลับมาของ “บ้านวิกลคนประหลาด” นิยายสืบสวนสั่นประสาทชื่อดังที่เป็นไวรัลในอินเทอร์เน็ต การันตีด้วยยอดขายกว่า 1 ล้านเล่มและได้รับการนำไปสร้างเป็นภาพยนตร์ญี่ปุ่น', 
        Category: 800, 
        Author: 'อุเก็ตสึ', 
        Publishing: '-', 
        Price: '439 บาท', 
        Bestsellers: false, 
        Suggestions: false
    },
    {
        Code: '005', 
        Title: 'Manifest: 7 ขั้นตอนสู่ทุกสิ่งที่ปรารถนา', 
        Cover: '-', 
        Description: 'แนวทางปฏิบัติเพื่อการพัฒนาตนเองที่ได้รับความนิยมอย่างมหาศาล ซึ่งจะเปลี่ยนชีวิตคุณให้ดีขึ้น  ไม่ว่าคุณจะต้องการดึงดูดเนื้อคู่ หางานดี ๆ ซื้อบ้านในฝัน หรือเพียงแค่ค้นหาความสงบภายในและความมั่นใจมากขึ้น  หนังสือเล่มนี้จะสอนวิธีให้บรรลุเป้าหมายเหล่านั้นด้วย 7 ขั้นตอนเหล่านี้ หนึ่ง มีความชัดเจนในวิสัยทัศน์ของคุณ สอง ขจัดความกลัวและความสงสัย สาม ปรับพฤติกรรมของคุณ สี่ เอาชนะการทดสอบจากจักรวาล ห้า โอบกอดความรู้สึกขอบคุณโดยไม่มีข้อแม้ หก เปลี่ยนความอิจฉาให้เป็นแรงบันดาลใจ เจ็ด เชื่อมั่นในจักรวาล', 
        Category: 21003, 
        Author: 'Roxie Nafousi', 
        Publishing: '-', 
        Price: '265 บาท', 
        Bestsellers: true, 
        Suggestions: true
    },
];

function IsBest ({best} : {best:boolean}) {
    if(best)
       return (
    <>
      หนังสือขายดีขายดี 
        </>
    );
    else
        return (
    <>
             
            </>
    );
}

function IsSugges ({sugges} : {sugges:boolean}) {
    if(sugges)
       return (
    <>
      หนังสือที่แนะนำ 
        </>
    );
    else
        return (
    <>
             
            </>
    );
}


function Item ({code,title,cover,desc,cate,author,pub,price,best,sugges } : { code:string,title: string,cover: string,desc: string,cate: number,author: string,pub:string,price: string,best:boolean,sugges:boolean }) {
  const [like, setLike] = useState(false)
  function handleClicklike () {
      if(like)
          setLike(false);
      else
          setLike(true);
  }
     return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-gray-600 flex items-center">
          <IsBest best={best} /> 
          <br />
          <IsSugges sugges={sugges} />
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Code : {code}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Title : {title}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Cover : {cover}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Descrition : {desc}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Category : {cate}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Author : {author}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Publishing : {pub}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          Price : {price}
        </p>
      </div>
    </div>
  </div>
    
     )
  }


  export default function Booklist() {
    const BItem = book.filter(subject => 
        subject.Bestsellers === true ||
        subject.Suggestions === false
    
    );
    
        const items = BItem.map(item =>
          <Item key={item.Code} code={item.Code} title={item.Title} cover={item.Cover} desc={item.Description} cate={item.Category} author={item.Author} pub={item.Publishing} price={item.Price} best={item.Bestsellers} sugges={item.Suggestions}/>
        );
        return (
        <div className="p-5 bg-green-200">
            <h1 className="text-xl font-bold">Best Books:</h1>
            <ul>{items}</ul>
            </div>
        );
    }