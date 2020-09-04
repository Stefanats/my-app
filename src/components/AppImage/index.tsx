import React, { useState } from "react";

type Props = {
    src: string;
    alt: string;
    className?: string;
};

const AppImage: React.FC<Props> = ({ src, alt, className }) => {
    const [source, setSource] = useState(src);

    return (
        <img
            src={source}
            alt={alt}
            className={className}
            onError={() =>
                setSource(
                    "http://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
                )
            }
        />
    );
};

export default AppImage;
