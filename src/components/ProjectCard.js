import { Col} from "react-bootstrap";
import { Link } from "react-router-dom";


export const ProjectCard = ({ title, description, githubLink, imgUrl }, index) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <Link to={githubLink} target="_blank" rel="noopener noreferrer"> {imgUrl ? (
                <img src={imgUrl} alt={`Project ${index + 1}`} />
                ) : (
                    <div className="default-image-placeholder"> </div>)}
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </Link>
            </div>
        </Col>
    );

};
