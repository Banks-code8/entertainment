type menuProps = {
    title: string;
    subtitle: string;
}

const MenuContent = ({title, subtitle}: menuProps) => {
  return (
    <section className="container py-20 px-6 md:mt-40 md:mb-10 mx-auto">
    <div className="flex flex-col w-full text-center">
        
        <p className="text-4xl md:text-[80px] lg:text-[80px]">
            {title}
        </p>
        
        <p className="mt-5 md:text-3xl lg:text-[28px]">
            {subtitle}
        </p>
    </div>
    </section>
  )
}

export default MenuContent