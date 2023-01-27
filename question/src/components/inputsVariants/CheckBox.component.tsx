const CheckBoxComponent = ({props}: any) => {
    const { nick, placeholder, arr, register, errors } = props;
    return (
        <div style={errors[nick] ? {color: 'red'} : {color: 'black'}}>
            {placeholder}
            {/*{errors[nick] && (<span style={{ color: 'red' }}>{errors[nick].message}</span>)}*/}
            {arr && arr.map(({ value, label }: any) => (
                <>
                    <label>
                        <input type={'checkbox'} value={value}
                               {...register(nick, { required: '*' })} /> {label}
                    </label>
                </>
            ))}
            <br/>
        </div>
    )
};

export { CheckBoxComponent };