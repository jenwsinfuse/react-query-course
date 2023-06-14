import { useLabelData } from "../helpers/useLabelData";

export default function LabelList({ selected, toggle }) {
  const labelsQuery = useLabelData();

  return (   
  <div className='labels'>
      <h3>Labels</h3> 
    {labelsQuery.isLoading ? (
        "Loading ..."
      ) : (
        <ul >
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
              onClick={()=> toggle(label.id)}
                className={`label ${selected.includes(label.id) ? "selected" : ""} ${
                  label.color
                }`}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
}
