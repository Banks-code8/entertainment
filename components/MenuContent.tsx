type menuProps = {
    title: string;
    subtitle: string;
}

const MenuContent = ({title, subtitle}: menuProps) => {
  return (
    <section className="mt-70 mb-30">
    <div className="flex flex-col w-full text-center">
        
        <p className="text-[80px]">
            {title}
        </p>
        
        <p className="text-[28px]">
            {subtitle}
        </p>
    </div>
    </section>
  )
}

export default MenuContent