import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconText({ icon, text }){
    return (
        <p className="my-3 text-gray-500 font-semibold text-sm">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {text}
        </p>
    )
}
export default IconText;