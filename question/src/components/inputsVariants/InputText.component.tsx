const InputTextComponent = ({props}: any) => {
    const { nick, label, placeholder, defaultText='', required='*', register, errors } = props;
    return (<>
        <label style={errors[nick] ? {color: 'red'} : {color: 'black'}}>{label}</label>
        <input type={'text'} placeholder={placeholder} defaultValue={defaultText}
               {...register(nick, {required})}/>
        {/*{errors[nick] && (<span style={{ color: 'red' }}>{errors[nick].message}</span>)}*/}
    </>)
};

export { InputTextComponent };