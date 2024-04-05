import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUpButton({
    icon, 
    text
}){
    return(
        <div className="border-black border-2 rounded-full py-2 px-6 cursor-pointer text-center hover:bg-black hover:text-white">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {text}
        </div>
    )
}
export default SignUpButton;