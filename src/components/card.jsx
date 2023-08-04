import "./card.css";
// rafce

const Card = (props) => {
    const { title, description, img, link } = props;
    return (
        <div className="sub-div">
            <h2
                style={{
                    color: "blue",
                }}
            >
                {title}
            </h2>
            <img
                src={img}
                style={{
                    height: 100,
                    width: 100,
                }}
                alt="instagram logo"
            />
            <br />
            <a href={link}>Visit site</a>
            <p>{description}</p>
        </div>
    );
};
export default Card;
