import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { UserRoutes } from '../types';

const heroImgs: string[] = [hero1, hero2, hero3, hero4];

const Hero = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl capitalize">we are changing the way people shop</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur earum et non qui dolor commodi doloremque veritatis nobis a.
        </p>
        <div className="mt-10">
          <Link to={UserRoutes.products} className="btn btn-primary">
            Our products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {heroImgs.map((img, index) => {
          return (
            <div key={index} className="carousel-item">
              <img src={img} alt="Carousel Image" className="rounded-box h-full w-80 object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
