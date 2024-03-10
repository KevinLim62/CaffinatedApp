'use client';

import SingleMenu from '../component/SingleMenu';

const PopularMenu = [
  {
    id: 1,
    name: 'Dessert',
    description: 'Description 1',
    imageSrc: '/menu/dessert.png',
    gridLayout: 'md:col-span-1',
  },
  {
    id: 2,
    name: 'Latte',
    description: 'Description 2',
    imageSrc: '/menu/latte.png',
    gridLayout: 'md:col-span-1',
  },
  {
    id: 3,
    name: 'Bacon & Egg',
    description: 'Description 3',
    imageSrc: '/menu/bacon.png',
    gridLayout: 'md:col-span-1',
  },
  {
    id: 4,
    name: 'Burger',
    description: 'Description 4',
    imageSrc: '/menu/burger.png',
    gridLayout: 'md:col-span-2',
  },
  {
    id: 5,
    name: 'Pancake',
    description: 'Description 5',
    imageSrc: '/menu/pancake.png',
    gridLayout: 'md:col-span-1',
  },
];

const MenuBentoGrid = () => {
  return (
    <div className='m-3 py-5'>
      <div className='text-primary text-center pb-5'>
        <h1 className='text-3xl font-bold'>Taste the Difference</h1>
        <h1 className='text-xl font-medium'>Explore Our Menu</h1>
      </div>
      <div className='grid grid-flow-row-dense md:grid-cols-3 min-w-[80vw] gap-5'>
        {PopularMenu.map((menu) => (
          <SingleMenu key={menu.id} name={menu.name} description={menu.description} imageSrc={menu.imageSrc} className={`${menu.gridLayout} bg-primary text-foreground`} />
        ))}
      </div>
    </div>
  );
};

export default MenuBentoGrid;
