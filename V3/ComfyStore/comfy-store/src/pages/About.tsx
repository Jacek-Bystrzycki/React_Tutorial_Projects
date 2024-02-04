import { ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold loading-none tracking-tight sm:text-6xl">We love</h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">comfy</div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatem amet minima, placeat animi expedita quos. Laboriosam nesciunt fugiat quos,
        quod quis dolores iusto, incidunt tempore illum soluta dolor quae nam, dolore cumque rem reiciendis distinctio adipisci ex! Possimus, optio?
      </p>
    </>
  );
};
export default About;
