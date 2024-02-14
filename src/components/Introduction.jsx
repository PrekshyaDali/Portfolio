import React from 'react'
import Button from './Button';

export default function Introduction() {
  return (
    <div className="space-y-8 max-w-lg mt-20">
      <h1 className="text-3xl font-bold">
        Hello, I am <span className="text-[#1AA89F]">Prekshya</span>
      </h1>
      <p className="text-left">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sed
        ducimus nihil. Iusto molestiae architecto maiores, voluptates quas
        perferendis optio quisquam cupiditate voluptatibus unde non asperiores,
        aliquam ab sint doloribus.
      </p>
      <Button name = "More details"></Button>
    </div>
  );
}
