import { JSX, Show } from "solid-js";
import skillFilters from "./SkillFilters";


function SkillButton(props: { category: string; skill: string; link: string | URL | undefined; label: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {

  const filterButton = (filters: String[], skill: string) => {
    return filters.length !== 0 && (filters.includes(skill) || filters.map((s)=>s.includes(skill)).reduce((prev,curr)=>prev&&curr));
  }

  const [filters, setFilters] = skillFilters;

  return (
    <>
      <div
        class={"skillButton cursor-pointer min-w-fit flex flex-row space-x-1.5 items-center justify-center" +
          " py-1 mx-2 my-1 px-1.5 text-sm font-medium text-regal-blue-50 dark:text-regal-blue-50 border " +
          "rounded-lg "+(
            !filterButton(filters(),props.skill)?"border-transparent":
              props.category==="front-end"?"bg-green-800 dark:bg-green-800 border-transparent" :
                props.category==="back-end"?"bg-purple-800 dark:bg-purple-800 border-transparent":"")}
        data-skill={props.skill}
        onMouseOver={()=>{
          if(filters().length === 0) {
            setFilters([props.skill]);
          }
        }}
        onMouseOut={()=>{
          if(filters().length === 1) {
            setFilters([]);
          }
        }}
        onClick={()=>{
          if (props.link && props.link !== "") {
            open(props.link)
          }
        }}
      >
        <p class="skillIconLabel">{props.label}</p>
      </div>
    </>
  );
}

export default SkillButton;
