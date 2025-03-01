interface VectorProps{
    title: string;
};

const Vector = ({title}: VectorProps) => {
  return (
    <button className="w-[348px] h-[88.68px] bg-gray-500 mt-5 rounded-r-full">     
          {title}
        </button>
    
  )
}

export default Vector