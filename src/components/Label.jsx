import { useLabelData } from "../helpers/useLabelData";
export function Label({label}) {
    const labelsQuery = useLabelData(); 
    if (labelsQuery.isLoading) return null;
    const labelObj = labelsQuery.data.find((ql) => ql.id === label);
    if (!labelObj) return null; 
    return <span className={`label ${labelObj.color}`}>{labelObj.name}</span>;
}
