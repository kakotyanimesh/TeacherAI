
interface InputTypes {
    placeholder : string,
    ref ?: React.Ref<HTMLInputElement>
    type : string
    
}


export default function InputBox({placeholder, ref, type} : InputTypes){
    return (
        <div>
            <input required={true} className="ui-px-2 ui-py-1 ui-rounded-md" type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
}