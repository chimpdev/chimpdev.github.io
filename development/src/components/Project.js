export default function (props) {
  return (
    <div className="w-full md:w-[50%] max-w-[600px] border-left-[#c2c2c2] border-l-[5px] flex flex-col justify-between items-baseline h-max bg-[#ededed] p-[20px] rounded-[5px] gap-2">
      <a href={props.to} className="font-bold text-xl hover:underline">{props.title}</a>
      <p className="text-gray-800">{props.description}</p>
      <img className="rounded-md mt-4" src={props.image}/>
    </div>
  )
}