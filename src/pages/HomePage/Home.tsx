import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import { WorkoutContext } from "../../context/WorkoutContext";
import { Workout } from "../../context/WorkoutContext";
import { AuthContext, User } from "../../context/AuthContext";
import Slider from "./HomePageComponents/Slider";
import CategoryList from "./HomePageComponents/CategoryList";
import Newsletter from "./HomePageComponents/Newsletter";

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {


  return (
    <div>
        <Slider /> 
        <CategoryList /> 
        <Newsletter />  
    </div>
  );
}
