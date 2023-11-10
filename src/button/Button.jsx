export function Button ({bg = "white",varient = "default",text = "Add Your Button",disabled = false}){
  // let{base,size,disabled} = props;
  // console.log("props "+props);
  const base = "flex justify-center items-center w-full px-6 py-2 rounded-4xl text-center font-inter text-base font-bold font-inter text-base font-bold hover:bg-neutral-200";

  const bg_color = {
    white : "bg-neutral-50",
    blue : "bg-twitter-blue"
  };
  const size = {
    sm : "",
    md : "",
    lg : ""
  };
  const disabledButton = disabled ? "bg-neutral-500 cursor-not-allowed " : "";

  const varientStyle = {
    default : "",
    outline : "border border-blue-250 shadow-08160 backdrop-blur-xl text-twitter-blue",
  }

  let classes = `${base} ${bg_color[bg]} ${varientStyle[varient]} `;
  return (
    <button className={classes} disabled = {disabled}>
      {text}
    </button>
  );

}
export default Button