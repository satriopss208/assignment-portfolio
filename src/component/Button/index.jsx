import pdf from '../../assets/Satriops_Resume_versi_ATS.pdf'

const Button = (props) => {
    const {name} = props;
    
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = pdf; 
      link.download = "Resume.pdf"; 
      link.click(); 
    };

  return (
    <div className="flex items-center justify-center w-[120px] h-[40px] rounded-lg bg-white text-[#48ceff] text-center text-md font-bold hover:scale-105 delay-150 duration-300 cursor-pointer border border-gray-300"
         onClick={handleDownload}>{name}</div>
  )
}

export default Button