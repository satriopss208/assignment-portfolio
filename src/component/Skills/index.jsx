import SkillSetIcon from "../SkillSetIcon"

const Skills = (props) => {
    const { skillSet } = props;
    return (
        <section id="1" className="flex items-center justify-between h-[500px] my-20 py-35 gap-10">
            <div className="flex items-center justify-center w-[400px] h-[350px]">
                <SkillSetIcon skillSet={skillSet} />
            </div>
            <div className="flex flex-col justify-start w-[500px] h-[250px] gap-5">
                <h1 className="text-5xl font-semibold">My Skills</h1>
                <p className="text-md">Graduated with a Bachelor's degree at Bina Nusantara University as a software engineer. 
                    Currently learning front-end development at Dibimbing Bootcamp. 
                    Competitive and eager to take on new challenges while continually expanding my skills.</p>
            </div>

        </section>
    )
}

export default Skills