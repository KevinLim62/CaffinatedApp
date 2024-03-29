'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPlus, FaMinus } from 'react-icons/fa6';

type CartCounterProps = {
  counter: number;
  handleOnChange: (value: number) => void;
  iconSize?: number;
};

const CartCounter: React.FC<CartCounterProps> = ({ counter, handleOnChange, iconSize = 20 }) => {
  return (
    <div className='flex flex-row items-center space-x-2'>
      <Button className='bg-transparent hover:bg-transparent' onClick={() => handleOnChange(counter - 1)}>
        <FaMinus size={iconSize} className='text-primary hover:scale-125' />
      </Button>
      <div className='w-[60px]'>
        <Input type='text' className='bg-primary/10 rounded-md mx-auto text-center' value={counter} onChange={(e) => handleOnChange(Number(e.target.value))} />
      </div>
      <Button className='bg-transparent hover:bg-transparent' onClick={() => handleOnChange(counter + 1)}>
        <FaPlus size={iconSize} className='text-primary hover:scale-125' />
      </Button>
    </div>
  );
};

export default CartCounter;
