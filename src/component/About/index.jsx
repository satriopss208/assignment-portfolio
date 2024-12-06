import Image from "../../assets/potraitSPS.png"
import Button from "../Button"

const About = () => {

    const buttonResume = "resume";

    return (
        <section id="0" >
            <div className="flex items-center justify-between my-10 py-5 gap-10">
            <div className="flex flex-col gap-3 w-[500px] justify-end h-[350px]">
                <p className="text-3xl font-semibold">Hello, i'm Satrio,</p>
                <p className="text-5xl font-bold ">Software Engineer</p>
                <p className="text-5xl font-bold ">Front End Enthusiast</p>
                <p className="text-3xl font-semibold">based in Indonesia</p>
                <br />
                
                <Button name={buttonResume}/>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-[300px] h-[350px]">
                    <img src={Image} alt="foto" className="object-cover rounded-lg"/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About