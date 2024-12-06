import { SiAdobephotoshop } from "react-icons/si";

const SkillSetIcon = (props) => {
    const { skillSet } = props;

    return (
        <div className="flex flex-wrap items-center justify-between gap-5"> 
            {skillSet.map((icon) => (
                <div 
                    key={icon.id} 
                    className={`p-1 m-1 border-2 border-gray-300 rounded-lg flex items-center justify-center`} 
                    style={{
                        backgroundColor: icon.secondary
                    }}
                
                >
                    <span className={`text-[64px] text-[${icon.primary}]`}
                    style={{
                        color: icon.primary
                    }}>
                        {icon.skillIcon} 
                    </span>
                </div>
            ))}
            
        </div>
    );
}

export default SkillSetIcon;
