import {useEffect, useState} from "react";

type LogoSkillProps = {
    src: string,
    alt: string
}

export const LogoSkill = ({src, alt}: LogoSkillProps) => {

    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    const imageBlob = await response.blob();
                    setImgSrc(URL.createObjectURL(imageBlob))
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchImage();
    }, []);

    if (!imgSrc) {
        return (
            <div className="img-container">
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <div className="img-container">
            <img src={imgSrc} alt={alt} width={64} height={64}/>
        </div>
    );
};
