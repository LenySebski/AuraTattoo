import Button from "@components/button/Button";
import Image from "next/image";
export default function GiftCard() {
  return (
    <section className='section section__gift-card'>
      <div className='section__content content-center'>
        <div className='section__column'>
          <Image
            src='/aura-logo.jpg'
            alt='Aura Logo'
            width={340}
            height={480}
          />
        </div>

        <div className='section__column'>
          <h2>Gift Card Certificate</h2>
          <p>
            Gift cards are printed on high-quality paper, offering a stylish and
            thoughtful gifting option for any occasion. Their premium material
            enhances presentation, making a lasting impression for birthdays,
            holidays, or special events. Each card comes carefully packed in an
            organic paper envelope tied with a ribbon of your choice (off white,
            sage green, muted pink). Pick them up at the studio after contacting
            your chosen artist in advance. Tattoos can be gifted at any desired
            price.
          </p>
          <Button link='/contact'>Purchase a Gift Card</Button>
        </div>
      </div>
    </section>
  );
}