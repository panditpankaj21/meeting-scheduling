import Input from "./Input";
import { useState } from "react";
import Select from "./Select";
import { workFor } from "../data/workFor";
import { moreAbout } from "../data/moreAbout";
import SelectMultiple from "./SelectMultiple";
import TextArea from "./TextArea";

function MeetingDetailForm({
    setUserData,
    handleNextButton,
}){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        workFor: '',
        moreAbout: [],
        meetingPreparation: '',
        workshopName: ''
    });    

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'moreAbout'){
            setFormData(prev => ({
                ...prev,
                [name]:[...prev[name], value],
            }));
        }
        else{
            setFormData(prev => ({
                ...prev,
                [name]:value,
            }));
        }
        
    };

    const handleScheduleEvent = (event)=>{
        event.preventDefault();
        if(formData.name===""){
            alert("Please enter your name");
            return;
        }
        if(formData.email===""){
            alert("Please enter your email");
            return;
        }
        
        setUserData(prev => {
            return {
                ...prev,
                ...formData,
            }
        })
        handleNextButton()
    }

    return(
        <div className="ml-5 mt-5">
            <h1 className="text-md font-semibold mb-1">Enter Details</h1>
            <form onSubmit={handleScheduleEvent}>
                <Input 
                    type="text" 
                    label="Name *" 
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input 
                    type="email"
                    label="Email *" 
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Select
                    name="workFor"
                    value={formData.workFor}
                    options={workFor}
                    onChange={handleChange}
                    label="I want Fibrey to work for: *"
                />
                <SelectMultiple
                    name="moreAbout"
                    value={formData.moreAbout}
                    onChange={handleChange}
                    options={moreAbout}
                    label="I want Fibrey to know more about: *"
                />
                <TextArea 
                    name="meetingPreparation"
                    value={formData.meetingPreparation}
                    onChange={handleChange}
                    label="Please, share anything that will help prepare for our meeting"
                />
                <Input 
                    type="text"
                    name="workshopName"
                    value={formData.workshopName}
                    onChange={handleChange}
                    label="Please, share with us the name of your Fibery workshop (if any)"
                />
                <button  
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-3 px-3 rounded-3xl mb-5"
                    type="submit"
                >
                    Schedule Event
                </button>
            </form>
        </div>
    )
}

export default MeetingDetailForm;