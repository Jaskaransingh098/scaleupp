import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Comforter_Brush } from 'next/font/google';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const comforterBrush = Comforter_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-comforter-brush',
});

const testimonials = [
  { videoId: 'R3d_l3ZdouI', thumbnail: 'https://i.ytimg.com/vi_webp/R3d_l3ZdouI/sddefault.webp' },
  { videoId: 'tGv06Puf_ck', thumbnail: 'https://i.ytimg.com/vi_webp/tGv06Puf_ck/sddefault.webp' },
  { videoId: 'Nm_G7PE-lHw', thumbnail: 'https://i.ytimg.com/vi_webp/Nm_G7PE-lHw/sddefault.webp' },
  { videoId: 'eieK84jglHk', thumbnail: 'https://i.ytimg.com/vi_webp/eieK84jglHk/sddefault.webp' },
  { videoId: '6JUD4yqbd-M', thumbnail: 'https://iytimg.com/vi_webp/6JUD4yqbd-M/sddefault.webp' },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative min-h-screen w-full overflow-hidden bg-transparent pt-32">
      <div className="container relative mx-auto flex flex-col items-center px-6">
        <div className="relative flex flex-col items-center gap-6 px-0 lg:px-20">
          <div className="absolute top-[-50px] left-[-100px] hidden -rotate-12 transform-gpu lg:block xl:left-[-50px] 2xl:left-0">
            <div className="relative h-[250px] w-[250px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/V61wXamtG9Yf1Y0DfydtSAolzI-15.png?"
                alt="Decorative arrow pointing to text"
                width={250}
                height={250}
                className="absolute left-[-40px] top-[40px] h-[100px] w-auto"
              />
              <p
                className={`${comforterBrush.variable} font-comforter-brush absolute text-3xl leading-tight text-text-secondary`}
                style={{ fontFamily: 'var(--font-comforter-brush)' }}
              >
                Have a look at some <br /> testimonials
              </p>
            </div>
          </div>

          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/s4mUTpI44XZSb9JAlBT9CSiZJk-14.svg?"
            alt="Decorative element"
            width={100}
            height={100}
            className="absolute -right-16 top-6 hidden lg:block"
          />

          <h2 className="text-center text-4xl font-semibold text-text-primary md:text-5xl lg:text-[60px] lg:leading-[72px]">
            Take A Look At What <br />
            <span className="bg-gradient-to-r from-primary to-light-blue bg-clip-text text-transparent">
              Our Clients
            </span>
            <br />
            Have To Say About Us!
          </h2>

          <div className="relative mt-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/zxhpSjjEdOWMTwPbozaMhDqhMFo-15.svg?"
              alt="Hurry up annotation"
              width={150}
              height={150}
              className="absolute -right-[130px] -top-[46px] hidden md:block"
            />
            <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-primary to-light-blue px-8 py-7 text-lg font-medium text-white shadow-[0_4px_16px_rgba(66,133,244,0.3)] duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(66,133,244,0.4)]">
              <Link href="#contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-20 w-full [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
        <div className="flex animate-marquee items-stretch gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.videoId}-${index}`} className="group relative aspect-video w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-border sm:w-[320px] md:w-[380px]">
              <a href={`https://www.youtube.com/watch?v=${testimonial.videoId}`} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                <Image
                  src={testimonial.thumbnail.replace('iytimg.com', 'i.ytimg.com')} // Correcting potential typo
                  alt="Testimonial video thumbnail"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;