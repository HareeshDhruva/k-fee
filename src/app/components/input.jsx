
const input = ({label,type,id,...props}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600 font-semibold mb-2">{label}</label>
      <input 
      type={type} 
      name={id} 
      id={id}
      autoComplete="off"
      className="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      {...props}
      />
    </div>
  )
}

export default input
