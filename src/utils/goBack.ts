import { useNavigate } from "react-router-dom";
/**
 * Go to previous page
 */
export default function():void{
    const navigate = useNavigate();
    navigate(-1)
}