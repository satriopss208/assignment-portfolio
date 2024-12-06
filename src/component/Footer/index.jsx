
const Footer = (props) => {
  
  const { icons } = props;

    return (
    <div>
        <div className="flex items-center justify-center gap-1 text-sm mt-20 border-t-2">
            <p>2024</p>
            {icons[5].icon} 
            <p>Satrio Prawiro Sumowerdoyo</p>
        </div>
    </div>
  )
}

export default Footer;