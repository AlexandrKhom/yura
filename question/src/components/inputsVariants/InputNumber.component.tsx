const InputNumberComponent = ({ props }: any) => {
    const { nick, label, placeholder, register, errors } = props;
    return (<>
        <label style={errors[nick] ? { color: 'red' } : { color: 'black' }}>{label}</label>
        <input type={'number'} placeholder={placeholder}
               {...register(nick, { required: '*' })}/>
        {/*{errors[nick] && (<span style={{ color: 'red' }}>{errors[nick].message}</span>)}*/}
    </>)
};

export { InputNumberComponent };