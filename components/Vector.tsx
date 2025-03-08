interface VectorProps{
    title: string;
};

const Vector = ({title}: VectorProps) => {
  return (
    <button className=" p-5 w-50 lg:w-[348px] lg:h-[88.68px]
    text-2xl bg-gray-500 rounded-r-full">     
          {title}
        </button>
    
  )
}

export default Vector