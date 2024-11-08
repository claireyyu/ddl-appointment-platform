import personalReadingPic from "../../../../public/service-detail.png";
import Image from 'next/image'

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-16 mt-12 text-foreground">
      <Image src={personalReadingPic} alt="Service" className="col-span-1 md:w-2/3 md:h-auto justify-self-center py-4 md:py-16" />
      <div className="flex flex-col col-span-2 px-4 md:px-16 pb-4 md:pb-16">
        <div className="text-justify md:text-lg">
          <p>
            Are you seeking guidance on your career, relationships, or other life challenges? Receive a personalized reading delivered straight to your inbox within one business day. Our service offers quick and insightful answers to your pressing questions, using time-honored Chinese methods.
          </p>
          <br />
          <p>
            <s>Standard Price: USD 45</s>
            <br />Promo Price: USD 9.9
            <br /><br />
            Payment Method:
            <br /><br />
            PayPal
            <br />WeChat
            <br />AliPay
          </p>
          <br />
          <p>
            How It Works:
            <br /><br />
            1. Purchase:<br />Make your payment via PayPal, WeChat, or Alipay.
            <br />2. Email Us:<br />Send an email to xxx@gmail.com with your payment reference number or a screenshot of the transaction.
            <br />3. Prepare Your Question:<br />Meditate on your question for 3 minutes.
            <br />Provide three integer numbers (between 1-999) along with your question.
            <br />Optional: You can also include background information for a more thorough interpretation.
            <br />4. Restrictions:<br />We do not address questions related to medical health, death, or legal matters.
            <br />5. Receive Your Answer:<br />Your reading will be emailed to you within one business day. Please check your spam or junk folder if you don't see it in your inbox.
          </p>
          <br/>
          <p>
          Note: This is a written service conducted exclusively via email. Your privacy is our priority—all readings are conducted with complete confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
